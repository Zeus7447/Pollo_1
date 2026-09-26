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
};

export type CatalogProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  featured: boolean;
  brand: 'Pollo Fresa';
};

const directusUrl = import.meta.env.DIRECTUS_URL?.replace(/\/$/, '');
const directusToken = import.meta.env.DIRECTUS_TOKEN;
const businessId = import.meta.env.DIRECTUS_BUSINESS_ID ?? '8';

const getItems = async <T>(collection: string, params: URLSearchParams) => {
  if (!directusUrl || !directusToken) return [] as T[];

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
    fields: 'id,name',
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
      category: product.category ? categoryNames.get(product.category) ?? 'Pollo Fresa' : 'Pollo Fresa',
      featured: product.featured,
      brand: 'Pollo Fresa',
    }));

    return { products, promotions: products.filter((product) => product.featured) };
  } catch (error) {
    console.warn('[Directus] No se pudo cargar el catálogo.', error);
    return { products: [] as CatalogProduct[], promotions: [] as CatalogProduct[] };
  }
};
