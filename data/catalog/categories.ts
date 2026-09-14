import type { TaxonomyEntry } from '../../types/catalog';

// Initial taxonomy for the pilots; does not change Home labels or create routes.
export const categories: TaxonomyEntry[] = [
  { id: 'plataformas-area-total', slug: 'plataformas-area-total', name: 'Plataformas de área total' },
  { id: 'fabricas-racao', slug: 'fabricas-racao', name: 'Fábricas de ração' },
  { id: 'graos-sementes-plantio', slug: 'graos-sementes-plantio', name: 'Grãos, sementes e plantio' },
];
