import type { APIRoute } from 'astro';
import { DIRECTUS_BUSINESS_ID, DIRECTUS_FRESA_WINGS_BUSINESS_ID, DIRECTUS_TOKEN, DIRECTUS_URL } from 'astro:env/server';

type CartItem = { id?: unknown; quantity?: unknown; selectedOptions?: unknown };
type SelectedOptionInput = { groupId: number; optionId: number };
type ParsedCartItem = { id: number; quantity: number; selectedOptions: SelectedOptionInput[] };
type OrderRequest = {
  items?: CartItem[];
  customer?: { name?: unknown; phone?: unknown; notes?: unknown };
  fulfillment?: { type?: unknown; address?: unknown; pickupLocation?: unknown };
};

type DirectusResponse<T> = { data: T };
type Product = { id: number; name: string; price: number | string; business: number };
type Location = { id: number; name: string; address: string | null; ordering_enabled: boolean };
type ProductOptionGroup = { id: number; product: number; business: number; name: string; required: boolean; min_select: number | null; max_select: number | null };
type ProductOption = { id: number; option_group: number; business: number; name: string; price_delta: number | string };
type OrderItemOption = { group_id: number; group_name: string; option_id: number; option_name: string; price_delta: number };

const directusUrl = DIRECTUS_URL?.replace(/\/$/, '');
const directusToken = DIRECTUS_TOKEN;
const polloBusinessId = Number(DIRECTUS_BUSINESS_ID || '8');
const wingsBusinessId = Number(DIRECTUS_FRESA_WINGS_BUSINESS_ID || '10');

const brands = new Map([
  [polloBusinessId, { name: 'Pollo Fresa', start: 9, end: 18 }],
  [wingsBusinessId, { name: 'Fresa Wings', start: 15, end: 22 }],
]);

const response = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
});

const directusFetch = async <T>(path: string, init?: RequestInit) => {
  const result = await fetch(`${directusUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${directusToken}`,
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });
  if (!result.ok) throw new Error(`Directus respondió ${result.status} en ${path}`);
  return (await result.json()) as DirectusResponse<T>;
};

const cleanText = (value: unknown, limit: number) => typeof value === 'string' ? value.trim().slice(0, limit) : '';
const mexicoHour = () => Number(new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Mexico_City', hour: '2-digit', hourCycle: 'h23',
}).format(new Date()));

export const POST: APIRoute = async ({ request }) => {
  if (!directusUrl || !directusToken || !Number.isInteger(polloBusinessId) || !Number.isInteger(wingsBusinessId) || polloBusinessId === wingsBusinessId) {
    return response({ error: 'La configuración de pedidos no está disponible.' }, 503);
  }

  let body: OrderRequest;
  try { body = await request.json() as OrderRequest; }
  catch { return response({ error: 'La solicitud no es válida.' }, 400); }

  const name = cleanText(body.customer?.name, 120);
  const phone = cleanText(body.customer?.phone, 30);
  const notes = cleanText(body.customer?.notes, 1000);
  const fulfillmentType = body.fulfillment?.type === 'delivery' ? 'delivery' : 'pickup';
  const address = cleanText(body.fulfillment?.address, 500);
  if (!name) return response({ error: 'Escribe el nombre de quien recibirá el pedido.' }, 400);
  if (!/^[0-9+()\s-]{7,30}$/.test(phone)) return response({ error: 'Escribe un teléfono de contacto válido.' }, 400);
  if (fulfillmentType === 'delivery' && !address) return response({ error: 'Escribe la dirección para el pedido a domicilio.' }, 400);
  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 25) return response({ error: 'Revisa los productos del pedido.' }, 400);

  const cartItems: ParsedCartItem[] = [];
  const quantities = new Map<number, number>();
  for (const item of body.items) {
    const id = Number(item.id);
    const quantity = Number(item.quantity);
    if (!Number.isInteger(id) || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) return response({ error: 'Hay una cantidad de producto no válida.' }, 400);
    if (!Array.isArray(item.selectedOptions) && item.selectedOptions !== undefined) return response({ error: 'Las opciones del producto no son válidas.' }, 400);
    if ((item.selectedOptions?.length ?? 0) > 30) return response({ error: 'Hay demasiadas opciones en un producto.' }, 400);
    const selectedOptions: SelectedOptionInput[] = [];
    const selectedOptionKeys = new Set<string>();
    for (const selection of item.selectedOptions ?? []) {
      if (!selection || typeof selection !== 'object') return response({ error: 'Una opción de producto no es válida.' }, 400);
      const groupId = Number((selection as { groupId?: unknown }).groupId);
      const optionId = Number((selection as { optionId?: unknown }).optionId);
      const key = `${groupId}:${optionId}`;
      if (!Number.isInteger(groupId) || !Number.isInteger(optionId) || selectedOptionKeys.has(key)) return response({ error: 'Una opción de producto no es válida.' }, 400);
      selectedOptionKeys.add(key);
      selectedOptions.push({ groupId, optionId });
    }
    const totalQuantity = (quantities.get(id) ?? 0) + quantity;
    if (totalQuantity > 20) return response({ error: 'No puedes pedir más de 20 unidades del mismo producto.' }, 400);
    quantities.set(id, totalQuantity);
    cartItems.push({ id, quantity, selectedOptions });
  }

  try {
    const ids = [...quantities.keys()];
    const productQuery = new URLSearchParams({
      fields: 'id,name,price,business',
      'filter[id][_in]': ids.join(','),
      'filter[business][_in]': `${polloBusinessId},${wingsBusinessId}`,
      'filter[active][_eq]': 'true',
      'filter[available][_eq]': 'true',
      limit: String(ids.length),
    });
    const productsResponse = await directusFetch<Product[]>(`/items/products?${productQuery}`);
    const products = new Map(productsResponse.data.map((product) => [product.id, product]));
    if (products.size !== ids.length) return response({ error: 'Uno o más productos ya no están disponibles.' }, 409);

    const groupQuery = new URLSearchParams({
      fields: 'id,product,business,name,required,min_select,max_select',
      'filter[product][_in]': ids.join(','),
      'filter[business][_in]': `${polloBusinessId},${wingsBusinessId}`,
      'filter[active][_eq]': 'true',
      limit: '-1',
    });
    const groupsResponse = await directusFetch<ProductOptionGroup[]>(`/items/product_option_groups?${groupQuery}`);
    const groups = groupsResponse.data;
    const optionsByGroup = new Map<number, ProductOption[]>();
    if (groups.length) {
      const optionQuery = new URLSearchParams({
        fields: 'id,option_group,business,name,price_delta',
        'filter[option_group][_in]': groups.map((group) => group.id).join(','),
        'filter[business][_in]': `${polloBusinessId},${wingsBusinessId}`,
        'filter[active][_eq]': 'true',
        limit: '-1',
      });
      const optionsResponse = await directusFetch<ProductOption[]>(`/items/product_options?${optionQuery}`);
      for (const option of optionsResponse.data) optionsByGroup.set(option.option_group, [...(optionsByGroup.get(option.option_group) ?? []), option]);
    }
    const groupsByProduct = new Map<number, ProductOptionGroup[]>();
    const productsWithIncompleteOptions = new Set<number>();
    for (const group of groups) {
      const product = products.get(group.product);
      if (!product || product.business !== group.business) continue;
      if (!optionsByGroup.get(group.id)?.some((option) => option.business === group.business) && group.required) {
        productsWithIncompleteOptions.add(product.id);
        continue;
      }
      groupsByProduct.set(group.product, [...(groupsByProduct.get(group.product) ?? []), group]);
    }

    const itemsByBusiness = new Map<number, Array<{ product: Product; quantity: number; unitPrice: number; subtotal: number; selectedOptions: OrderItemOption[] }>>();
    for (const cartItem of cartItems) {
      const product = products.get(cartItem.id)!;
      const brand = brands.get(product.business);
      if (!brand) return response({ error: 'Uno o más productos no pertenecen a una marca disponible.' }, 409);
      if (productsWithIncompleteOptions.has(product.id)) return response({ error: `${product.name} no tiene opciones disponibles en este momento.` }, 409);
      const productGroups = groupsByProduct.get(product.id) ?? [];
      const groupById = new Map(productGroups.map((group) => [group.id, group]));
      const selectedByGroup = new Map<number, ProductOption[]>();
      const selectedOptions: OrderItemOption[] = [];
      for (const selection of cartItem.selectedOptions) {
        const group = groupById.get(selection.groupId);
        const option = group && (optionsByGroup.get(group.id) ?? []).find((candidate) => candidate.id === selection.optionId && candidate.business === group.business);
        if (!group || !option) return response({ error: `Una opción seleccionada para ${product.name} ya no está disponible.` }, 409);
        const priceDelta = Number(option.price_delta);
        if (!Number.isFinite(priceDelta)) return response({ error: `Una opción seleccionada para ${product.name} no tiene precio válido.` }, 409);
        selectedByGroup.set(group.id, [...(selectedByGroup.get(group.id) ?? []), option]);
        selectedOptions.push({ group_id: group.id, group_name: group.name, option_id: option.id, option_name: option.name, price_delta: priceDelta });
      }
      for (const group of productGroups) {
        const selectedCount = (selectedByGroup.get(group.id) ?? []).length;
        const minSelect = Math.max(group.required ? 1 : 0, Number(group.min_select) || 0);
        const configuredMax = Number(group.max_select);
        const maxSelect = Number.isFinite(configuredMax) && configuredMax > 0 ? Math.max(minSelect, configuredMax) : null;
        if (selectedCount < minSelect || (maxSelect !== null && selectedCount > maxSelect)) return response({ error: `Revisa las opciones de ${product.name}: ${group.name}.` }, 400);
      }
      const basePrice = Number(product.price);
      if (!Number.isFinite(basePrice)) return response({ error: `El precio de ${product.name} no está disponible.` }, 409);
      const unitPrice = Number((basePrice + selectedOptions.reduce((sum, option) => sum + option.price_delta, 0)).toFixed(2));
      const item = { product, quantity: cartItem.quantity, unitPrice, subtotal: Number((unitPrice * cartItem.quantity).toFixed(2)), selectedOptions };
      itemsByBusiness.set(product.business, [...(itemsByBusiness.get(product.business) ?? []), item]);
    }

    const hour = mexicoHour();
    for (const business of itemsByBusiness.keys()) {
      const brand = brands.get(business)!;
      if (hour < brand.start || hour >= brand.end) return response({ error: `${brand.name} recibe pedidos de ${brand.start > 12 ? brand.start - 12 : brand.start} ${brand.start >= 12 ? 'PM' : 'AM'} a ${brand.end > 12 ? brand.end - 12 : brand.end} ${brand.end >= 12 ? 'PM' : 'AM'}.` }, 403);
    }

    const orders = await Promise.all([...itemsByBusiness.entries()].map(async ([business, items]) => {
      const locationQuery = new URLSearchParams({
        fields: 'id,name,address,ordering_enabled',
        'filter[business][_eq]': String(business),
        'filter[active][_eq]': 'true',
        limit: '1',
      });
      const locationsResponse = await directusFetch<Location[]>(`/items/locations?${locationQuery}`);
      const location = locationsResponse.data[0];
      const brand = brands.get(business)!;
      if (!location?.ordering_enabled) throw new Error(`Los pedidos de ${brand.name} están temporalmente deshabilitados.`);

      const total = Number(items.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2));
      const orderNotes = [
        `Marca: ${brand.name}`,
        `Modalidad: ${fulfillmentType === 'delivery' ? 'A domicilio' : 'Recoger en sucursal'}`,
        fulfillmentType === 'delivery' ? `Dirección: ${address}` : `Sucursal: ${location.name}${location.address ? ` · ${location.address}` : ''}`,
        'Pago: Efectivo',
        notes ? `Notas: ${notes}` : '',
      ].filter(Boolean).join('\n');
      const orderResponse = await directusFetch<{ id: number }>('/items/orders', {
        method: 'POST',
        body: JSON.stringify({
          business,
          location: location.id,
          customer_name: name,
          phone,
          notes: orderNotes,
          total,
          status: 'pendiente',
          checkout_key: crypto.randomUUID(),
        }),
      });
      const orderId = orderResponse.data.id;
      await directusFetch('/items/order_items', {
        method: 'POST',
        body: JSON.stringify(items.map((item) => ({
          order: orderId,
          product: item.product.id,
          product_name: item.product.name,
          unit_price: item.unitPrice,
          quantity: item.quantity,
          notes: item.selectedOptions.length ? JSON.stringify({ selected_options: item.selectedOptions }) : null,
          subtotal: item.subtotal,
        }))),
      });
      return { id: orderId, business, brand: brand.name, total };
    }));

    return response({ success: true, orders, total: Number(orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)) });
  } catch (error) {
    console.error('[Orders] No se pudo crear el pedido.', error);
    return response({ error: 'No pudimos registrar tu pedido. Intenta de nuevo.' }, 502);
  }
};
