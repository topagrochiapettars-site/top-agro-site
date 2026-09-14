import type { Catalog } from '../../types/catalog';
import { categories } from '../../data/catalog/categories';
import { brands } from '../../data/catalog/brands';
import { datecAreaTotal } from '../../data/catalog/products/datec-area-total';
import { metalAgroMiniFabrica } from '../../data/catalog/products/metal-agro-mini-fabrica';
import { cimisaMicroCs3b } from '../../data/catalog/products/cimisa-micro-cs-3b';
import { trevisanLinhaTms } from '../../data/catalog/products/trevisan-linha-tms';
import { validateCatalog } from './validate';
import { resolveProduct } from './resolve-product';

// No editorial notes, costs or source records belong in this public data model.
export function createCatalogQueries(input: Catalog) {
  const publicKeys = ['categories', 'brands', 'families', 'id', 'slug', 'name', 'categoryId', 'brandId', 'status', 'priority', 'featured', 'content', 'variants', 'model', 'comparisonSpecIds', 'related', 'familyId', 'variantId', 'type', 'summary', 'benefits', 'title', 'description', 'specifications', 'label', 'value', 'group', 'highlightSpecIds', 'media', 'src', 'origin', 'nature', 'usage', 'width', 'height', 'poster', 'primaryImageId', 'applications', 'steps', 'mediaId', 'impactMediaId', 'faq', 'question', 'answer', 'documents', 'testimonials', 'city', 'state', 'text'];
  const catalog: Catalog = JSON.parse(JSON.stringify(input, publicKeys));
  const errors = validateCatalog(catalog);
  if (errors.length) throw new Error(errors.join('\n'));
  const publishedIds = new Set(catalog.families.filter(item => item.status === 'published').map(item => item.id));
  const publicFamilies = catalog.families.filter(item => publishedIds.has(item.id)).map(item => ({
    ...item,
    related: item.related?.filter(relation => publishedIds.has(relation.familyId)),
  }));
  const getFamily = (id: string) => publicFamilies.find(item => item.id === id);
  return {
    listProducts: (filter: { categoryId?: string; featured?: boolean } = {}) => structuredClone(publicFamilies.filter(item => (!filter.categoryId || item.categoryId === filter.categoryId) && (filter.featured === undefined || item.featured === filter.featured))),
    getProduct: (id: string) => structuredClone(getFamily(id)),
    resolveProduct: (id: string, variantId?: string) => {
      const family = getFamily(id);
      return family ? structuredClone(resolveProduct(family, variantId)) : undefined;
    },
    listRoutes: () => publicFamilies.map(item => ({ category: categoriesFor(item.categoryId), slug: item.slug })),
    getByRoute: (category: string, slug: string) => structuredClone(publicFamilies.find(item => item.slug === slug && categoriesFor(item.categoryId) === category)),
    listCategories: () => structuredClone(catalog.categories.filter(item => publicFamilies.some(family => family.categoryId === item.id))),
    listBrands: () => structuredClone(catalog.brands.filter(item => publicFamilies.some(family => family.brandId === item.id))),
    getRelated: (id: string) => structuredClone((getFamily(id)?.related ?? []).filter(item => getFamily(item.familyId))),
  };
  function categoriesFor(id: string) { return catalog.categories.find(item => item.id === id)!.slug; }
}

export const catalog = createCatalogQueries({ categories, brands, families: [datecAreaTotal, metalAgroMiniFabrica, cimisaMicroCs3b, trevisanLinhaTms] });
