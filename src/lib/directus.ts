import { DIRECTUS_BUSINESS_ID, DIRECTUS_TOKEN, DIRECTUS_URL } from 'astro:env/server';

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
};

type DirectusCategory = {
  id: number;
  name: string;
  sort_order: number | null;
};

export type CatalogCategory = {
  id: number;
  name: string;
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
  brand: 'Pollo Fresa';
};

// `astro:env/server` reads secrets when the SSR server receives the request.
// Thus Coolify runtime variables do not get baked into the generated HTML.
const directusUrl = DIRECTUS_URL?.replace(/\/$/, '');
const directusToken = DIRECTUS_TOKEN;
const businessId = DIRECTUS_BUSINESS_ID;

if (!directusUrl) throw new Error('Falta DIRECTUS_URL.');
if (!directusToken) throw new Error('Falta DIRECTUS_TOKEN.');
if (!businessId) throw new Error('Falta DIRECTUS_BUSINESS_ID.');

const getItems = async <T>(collection: string, params: URLSearchParams) => {
  const response = await fetch(`${directusUrl}/items/${collection}?${params}`, {
    headers: { Authorization: `Bearer ${directusToken}` },
  });

  if (!response.ok) throw new Error(`Directus respondió ${response.status} para ${collection}`);
  return ((await response.json()) as DirectusResponse<T>).data;
};

export const getCatalog = async () => {
  const productQuery = new URLSearchParams({
    fields: 'id,name,description,price,image,available,featured,sort_order,category',
    sort: 'sort_order,name',
    'filter[active][_eq]': 'true',
    'filter[available][_eq]': 'true',
    'filter[business][_eq]': businessId,
  });
  const categoryQuery = new URLSearchParams({
    fields: 'id,name,sort_order',
    sort: 'sort_order,name',
    'filter[active][_eq]': 'true',
    'filter[business][_eq]': businessId,
  });

  try {
    const [rawProducts, categories] = await Promise.all([
      getItems<DirectusProduct>('products', productQuery),
      getItems<DirectusCategory>('categories', categoryQuery),
    ]);
    const categoryNames = new Map(categories.map((category) => [category.id, category.name]));
    const products: CatalogProduct[] = rawProducts.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description?.trim() || 'Un favorito de Pollo Fresa.',
      price: `$${Number(product.price).toFixed(2)}`,
      image: product.image ? `${directusUrl}/assets/${product.image}?width=900&quality=82` : undefined,
      categoryId: product.category,
      category: product.category ? categoryNames.get(product.category) ?? 'Pollo Fresa' : 'Pollo Fresa',
      featured: product.featured,
      brand: 'Pollo Fresa',
    }));

    const catalogCategories: CatalogCategory[] = categories.map(({ id, name }) => ({ id, name }));
    return { products, promotions: products.filter((product) => product.featured), categories: catalogCategories };
  } catch (error) {
    console.warn('[Directus] No se pudo cargar el catálogo.', error);
    return { products: [] as CatalogProduct[], promotions: [] as CatalogProduct[], categories: [] as CatalogCategory[] };
  }
};
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
