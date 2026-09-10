import type { Catalog, ProductContent } from '../../types/catalog';
import { resolveProduct } from './resolve-product';

export function validateCatalog(catalog: Catalog): string[] {
  const errors: string[] = [];
  const check = (ok: unknown, message: string) => { if (!ok) errors.push(message); };
  const unique = (values: string[], path: string) => check(new Set(values).size === values.length && values.every(Boolean), `${path}: IDs/values empty or duplicated`);
  for (const [name, items] of Object.entries({ categories: catalog.categories, brands: catalog.brands, families: catalog.families })) {
    unique(items.map(item => item.id), `${name}.id`);
    unique(items.map(item => item.slug), `${name}.slug`);
    for (const item of items) check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug) && item.name.trim(), `${name}.${item.id}: invalid slug/name`);
  }
  function contentChecks(content: ProductContent, path: string, published: boolean) {
    unique(content.specifications.map(item => item.id), `${path}.specifications`);
    unique(content.media.map(item => item.id), `${path}.media`);
    unique(content.highlightSpecIds ?? [], `${path}.highlights`);
    unique((content.documents ?? []).map(item => item.id), `${path}.documents`);
    unique((content.testimonials ?? []).map(item => item.id), `${path}.testimonials`);
    for (const spec of content.specifications) check(spec.label.trim() && spec.value.trim(), `${path}: empty specification`);
    for (const media of content.media) check(media.src.trim() && media.description.trim() && /^(\/[^/]|https:\/\/)/.test(media.src), `${path}: invalid media`);
    for (const id of content.highlightSpecIds ?? []) check(content.specifications.some(item => item.id === id), `${path}: unknown highlight ${id}`);
    for (const id of [content.primaryImageId, content.impactMediaId, ...(content.steps ?? []).map(item => item.mediaId), ...(content.testimonials ?? []).map(item => item.mediaId)].filter(Boolean)) check(content.media.some(item => item.id === id), `${path}: unknown media ${id}`);
    for (const doc of content.documents ?? []) check(doc.title.trim() && /^(\/[^/]|https:\/\/)/.test(doc.src), `${path}: invalid document`);
    for (const faq of content.faq ?? []) check(faq.question.trim() && faq.answer.trim(), `${path}: empty FAQ`);
    for (const proof of content.testimonials ?? []) check(proof.text?.trim() || proof.mediaId, `${path}: empty testimonial`);
    if (published) {
      check(content.summary?.trim(), `${path}: summary required`);
      check(content.benefits?.length && content.benefits.every(item => item.title.trim()), `${path}: benefits required`);
      check(content.specifications.length, `${path}: specifications required`);
      check((content.highlightSpecIds?.length ?? 0) >= 3 && (content.highlightSpecIds?.length ?? 0) <= 4, `${path}: 3–4 highlights required`);
      check(content.media.some(item => item.id === content.primaryImageId && item.type === 'image'), `${path}: primary image required`);
    }
  }
  for (const family of catalog.families) {
    const path = family.id;
    check(['draft', 'published'].includes(family.status), `${path}: invalid status`);
    check(['P1', 'P2'].includes(family.priority) && typeof family.featured === 'boolean', `${path}: invalid priority/featured`);
    check(catalog.categories.some(item => item.id === family.categoryId), `${path}: unknown category`);
    check(catalog.brands.some(item => item.id === family.brandId), `${path}: unknown brand`);
    check(family.variants.length, `${path}: at least one variant required`);
    unique(family.variants.map(item => item.id), `${path}.variants`);
    unique(family.comparisonSpecIds ?? [], `${path}.comparison`);
    unique((family.related ?? []).map(item => JSON.stringify([item.familyId, item.variantId ?? null])), `${path}.related`);
    unique(family.content.specifications.map(item => item.id), `${path}.baseSpecs`);
    unique(family.content.media.map(item => item.id), `${path}.baseMedia`);
    for (const variant of family.variants) {
      check(variant.name.trim(), `${path}: variant name required`);
      unique((variant.content?.specifications ?? []).map(item => item.id), `${path}.${variant.id}.specs`);
      unique((variant.content?.media ?? []).map(item => item.id), `${path}.${variant.id}.media`);
      const resolved = resolveProduct(family, variant.id)!;
      contentChecks(resolved.content, `${path}.${variant.id}`, family.status === 'published');
      for (const id of family.comparisonSpecIds ?? []) check(resolved.content.specifications.some(item => item.id === id), `${path}.${variant.id}: missing comparison ${id}`);
    }
    for (const related of family.related ?? []) {
      const target = catalog.families.find(item => item.id === related.familyId);
      check(target && target.id !== family.id, `${path}: invalid related family`);
      if (related.variantId) check(target?.variants.some(item => item.id === related.variantId), `${path}: invalid related variant`);
    }
  }
  return errors;
}
