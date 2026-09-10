import type { ProductContent, ProductFamily } from '../../types/catalog';

function mergeById<T extends { id: string }>(base: T[], overrides: T[]): T[] {
  const merged = new Map(base.map(item => [item.id, item]));
  for (const item of overrides) merged.set(item.id, item);
  return [...merged.values()];
}

export function resolveProduct(family: ProductFamily, variantId?: string) {
  const variant = variantId === undefined
    ? (family.variants.length === 1 ? family.variants[0] : undefined)
    : family.variants.find(item => item.id === variantId);
  if (variantId !== undefined && !variant) return undefined;
  const override = variant?.content;
  const content: ProductContent = {
    ...family.content, ...override,
    specifications: mergeById(family.content.specifications, override?.specifications ?? []),
    media: mergeById(family.content.media, override?.media ?? []),
  };
  return structuredClone({ familyId: family.id, name: family.name, variantId: variant?.id, variantName: variant?.name, model: variant?.model, content });
}
