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
      const [products, categories] = await Promise.all([
        getItems<DirectusProduct>('products', productQuery),
        getItems<DirectusCategory>('categories', categoryQuery),
      ]);
      return { brand, products, categories };
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
    return { products, promotions: products.filter((product) => product.featured), categories: catalogCategories };
  } catch (error) {
    console.warn('[Directus] No se pudo cargar el catálogo.', error);
    return { products: [] as CatalogProduct[], promotions: [] as CatalogProduct[], categories: [] as CatalogCategory[] };
  }
};
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
