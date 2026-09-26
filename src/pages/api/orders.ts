import type { APIRoute } from 'astro';
import { DIRECTUS_BUSINESS_ID, DIRECTUS_FRESA_WINGS_BUSINESS_ID, DIRECTUS_TOKEN, DIRECTUS_URL } from 'astro:env/server';

type CartItem = { id?: unknown; quantity?: unknown };
type OrderRequest = {
  items?: CartItem[];
  customer?: { name?: unknown; phone?: unknown; notes?: unknown };
  fulfillment?: { type?: unknown; address?: unknown; pickupLocation?: unknown };
};

type DirectusResponse<T> = { data: T };
type Product = { id: number; name: string; price: number | string; business: number };
type Location = { id: number; name: string; address: string | null; ordering_enabled: boolean };

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

  const quantities = new Map<number, number>();
  for (const item of body.items) {
    const id = Number(item.id);
    const quantity = Number(item.quantity);
    if (!Number.isInteger(id) || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) return response({ error: 'Hay una cantidad de producto no válida.' }, 400);
    quantities.set(id, Math.min((quantities.get(id) ?? 0) + quantity, 20));
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

    const itemsByBusiness = new Map<number, Array<{ product: Product; quantity: number; unitPrice: number; subtotal: number }>>();
    for (const id of ids) {
      const product = products.get(id)!;
      const brand = brands.get(product.business);
      if (!brand) return response({ error: 'Uno o más productos no pertenecen a una marca disponible.' }, 409);
      const quantity = quantities.get(id)!;
      const unitPrice = Number(product.price);
      const item = { product, quantity, unitPrice, subtotal: Number((unitPrice * quantity).toFixed(2)) };
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
          notes: null,
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
