import type { ProductFamily } from '../../../types/catalog';

export const metalAgroMiniFabrica: ProductFamily = {
  id: 'metal-agro-mini-fabrica', slug: 'metal-agro-mini-fabrica-racao',
  name: 'Mini Fábrica de Ração Metal Agro', categoryId: 'fabricas-racao', brandId: 'metal-agro',
  status: 'draft', priority: 'P1', featured: false,
  content: { specifications: [], media: [], highlightSpecIds: ['producao'] },
  variants: [
    { id: '500-kg', name: '500 kg', content: { specifications: [{ id: 'producao', label: 'Produção aproximada', value: '500 kg/h' }] } },
    { id: '1000-kg', name: '1.000 kg', content: { specifications: [{ id: 'producao', label: 'Produção aproximada', value: '1.000 kg/h' }] } },
  ],
  comparisonSpecIds: ['producao'],
};
