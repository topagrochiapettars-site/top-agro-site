import { catalog } from './index';

// Public lookup deliberately has no preview flag or raw-data fallback.
export function getPublicProductPage(slug: string) {
  const family = catalog.listProducts().find(item => item.slug === slug);
  if (!family) return undefined;
  const product = catalog.resolveProduct(family.id);
  const category = catalog.listCategories().find(item => item.id === family.categoryId);
  const brand = catalog.listBrands().find(item => item.id === family.brandId);
  return product && category && brand ? { product, category, brand } : undefined;
}

export type ProductPageData = NonNullable<ReturnType<typeof getPublicProductPage>>;
