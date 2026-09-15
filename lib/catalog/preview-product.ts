import type { ProductPageData } from './product-page';

// Server route only. Check the environment before importing any draft records.
export async function getPreviewProductPage(slug: string): Promise<ProductPageData | undefined> {
  if (process.env.NODE_ENV === 'production') return undefined;
  const [{ datecAreaTotal }, { metalAgroMiniFabrica }, { cimisaMicroCs3b }, { trevisanLinhaTms }, { categories }, { brands }, { resolveProduct }] = await Promise.all([
    import('../../data/catalog/products/datec-area-total'),
    import('../../data/catalog/products/metal-agro-mini-fabrica'),
    import('../../data/catalog/products/cimisa-micro-cs-3b'),
    import('../../data/catalog/products/trevisan-linha-tms'),
    import('../../data/catalog/categories'),
    import('../../data/catalog/brands'),
    import('./resolve-product'),
  ]);
  const family = [datecAreaTotal, metalAgroMiniFabrica, cimisaMicroCs3b, trevisanLinhaTms].find(item => item.slug === slug);
  if (!family) return undefined;
  const product = resolveProduct(family);
  const category = categories.find(item => item.id === family.categoryId);
  const brand = brands.find(item => item.id === family.brandId);
  return product && category && brand ? { product, category, brand } : undefined;
}
