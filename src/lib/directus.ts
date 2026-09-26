import { DIRECTUS_BUSINESS_ID, DIRECTUS_FRESA_WINGS_BUSINESS_ID, DIRECTUS_TOKEN, DIRECTUS_URL } from 'astro:env/server';

type DirectusResponse<T> = { data: T[] };

type DirectusProduct = {
  id: number;
  name: string;
  description: string | null;
  price: string | number;
  image: string | null;
  available: boolean;
  featured: boolean;
  sort_order: number | null;
  category: number | null;
  business: number;
};

type DirectusCategory = {
  id: number;
  name: string;
  sort_order: number | null;
};

type DirectusStorefrontSettings = {
  id: number;
  show_promotions: boolean;
};

type DirectusStorefrontPromotion = {
  id: number;
  directus_files_id: string | null;
  badge: string | null;
  title: string | null;
  subtitle: string | null;
  price: string | null;
  secondary_text: string | null;
  cta_label: string | null;
  destination_url: string | null;
  terms_text: string | null;
  product_ids: number[] | null;
};

export type CatalogCategory = {
  id: number;
  name: string;
  brand: 'Pollo Fresa' | 'Fresa Wings';
};

export type CatalogProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  categoryId: number | null;
  category: string;
  featured: boolean;
  brand: 'Pollo Fresa' | 'Fresa Wings';
};

export type CatalogPromotion = {
  id: number;
  brand: 'Pollo Fresa' | 'Fresa Wings';
  image?: string;
  badge: string;
  title: string;
  subtitle: string;
  price?: string;
  secondaryText?: string;
  ctaLabel: string;
  destination: string;
  terms?: string;
  productIds: number[];
};

// `astro:env/server` reads secrets when the SSR server receives the request.
// Thus Coolify runtime variables do not get baked into the generated HTML.
const directusUrl = DIRECTUS_URL?.replace(/\/$/, '');
const directusToken = DIRECTUS_TOKEN;
const polloBusinessId = DIRECTUS_BUSINESS_ID || '8';
const wingsBusinessId = DIRECTUS_FRESA_WINGS_BUSINESS_ID || '10';

const catalogs = [
  { id: polloBusinessId, brand: 'Pollo Fresa' as const },
  { id: wingsBusinessId, brand: 'Fresa Wings' as const },
];

if (!directusUrl) throw new Error('Falta DIRECTUS_URL.');
if (!directusToken) throw new Error('Falta DIRECTUS_TOKEN.');

const getItems = async <T>(collection: string, params: URLSearchParams) => {
  const response = await fetch(`${directusUrl}/items/${collection}?${params}`, {
    headers: { Authorization: `Bearer ${directusToken}` },
  });

  if (!response.ok) throw new Error(`Directus respondió ${response.status} para ${collection}`);
  return ((await response.json()) as DirectusResponse<T>).data;
};

const getStorefrontPromotions = async (businessId: string, brand: CatalogPromotion['brand']): Promise<CatalogPromotion[]> => {
  try {
    const settingsQuery = new URLSearchParams({
      fields: 'id,show_promotions',
      'filter[business][_eq]': businessId,
      limit: '1',
    });
    const settings = await getItems<DirectusStorefrontSettings>('business_storefront_setting', settingsQuery);
    const setting = settings[0];
    if (!setting?.show_promotions) return [];

    const promotionQuery = new URLSearchParams({
      fields: 'id,directus_files_id,badge,title,subtitle,price,secondary_text,cta_label,destination_url,terms_text,product_ids',
      'filter[business_storefront_setting_id][_eq]': String(setting.id),
      sort: 'id',
      limit: '6',
    });
    const promotions = await getItems<DirectusStorefrontPromotion>('business_storefront_setting_files', promotionQuery);
    return promotions
      .filter((promotion) => Boolean(promotion.directus_files_id))
      .map((promotion) => ({
        id: promotion.id,
        brand,
        image: promotion.directus_files_id ? `${directusUrl}/assets/${promotion.directus_files_id}?width=1400&quality=85` : undefined,
        badge: promotion.badge?.trim() || 'PROMO ESPECIAL',
        title: promotion.title?.trim() || brand,
        subtitle: promotion.subtitle?.trim() || 'Descubre una opción especial de nuestro menú.',
        price: promotion.price?.trim() || undefined,
        secondaryText: promotion.secondary_text?.trim() || undefined,
        ctaLabel: promotion.cta_label?.trim() || 'Ver promoción',
        destination: promotion.destination_url?.trim() || '#destacados',
        terms: promotion.terms_text?.trim() || undefined,
        productIds: Array.isArray(promotion.product_ids) ? promotion.product_ids.map(Number).filter(Number.isFinite) : [],
      }));
  } catch (error) {
    console.warn(`[Directus] No se pudieron cargar las promociones de ${brand}.`, error);
    return [];
  }
};

export const getCatalog = async () => {
  try {
    const catalogResults = await Promise.all(catalogs.map(async ({ id, brand }) => {
      const productQuery = new URLSearchParams({
        fields: 'id,name,description,price,image,available,featured,sort_order,category,business',
        sort: 'sort_order,name',
        'filter[active][_eq]': 'true',
        'filter[available][_eq]': 'true',
        'filter[business][_eq]': id,
      });
      const categoryQuery = new URLSearchParams({
        fields: 'id,name,sort_order',
        sort: 'sort_order,name',
        'filter[active][_eq]': 'true',
        'filter[business][_eq]': id,
      });
      const [products, categories, promotions] = await Promise.all([
        getItems<DirectusProduct>('products', productQuery),
        getItems<DirectusCategory>('categories', categoryQuery),
        getStorefrontPromotions(id, brand),
      ]);
      return { brand, products, categories, promotions };
    }));

    const products: CatalogProduct[] = catalogResults.flatMap(({ brand, products: rawProducts, categories }) => {
      const categoryNames = new Map(categories.map((category) => [category.id, category.name]));
      return rawProducts.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description?.trim() || `Un favorito de ${brand}.`,
        price: `$${Number(product.price).toFixed(2)}`,
        image: product.image ? `${directusUrl}/assets/${product.image}?width=900&quality=82` : undefined,
        categoryId: product.category,
        category: product.category ? categoryNames.get(product.category) ?? brand : brand,
        featured: product.featured,
        brand,
      }));
    });
    const catalogCategories: CatalogCategory[] = catalogResults.flatMap(({ brand, categories }) => categories.map(({ id, name }) => ({ id, name, brand })));
    const promotions = catalogResults.flatMap((catalog) => catalog.promotions);
    return { products, promotions, categories: catalogCategories };
  } catch (error) {
    console.warn('[Directus] No se pudo cargar el catálogo.', error);
    return { products: [] as CatalogProduct[], promotions: [] as CatalogPromotion[], categories: [] as CatalogCategory[] };
  }
};
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
