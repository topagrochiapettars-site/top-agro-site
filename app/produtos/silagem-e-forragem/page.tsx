import type { Metadata } from 'next';
import { CategoryPage } from '../../../components/catalog/category-page';
import { catalog } from '../../../lib/catalog';

const category = catalog.listCategories().find(item => item.id === 'silagem-e-forragem')!;
const description = 'Equipamentos para silagem e forragem. Conheça os modelos e confirme com a Top Agro a aplicação na sua propriedade.';

export const metadata: Metadata = {
  title: `${category.name} | Top Agro`,
  description,
  alternates: { canonical: `/produtos/${category.slug}` },
  openGraph: {
    title: `${category.name} | Top Agro`,
    description,
    url: `/produtos/${category.slug}`,
    images: [{ url: '/products/datec-paca-1000-capa.webp', width: 1254, height: 1254, alt: 'Plataforma de Área Total DATEC PACA 1000' }],
  },
};

export default function SilageCategoryPage() {
  return <CategoryPage name={category.name} description={description} categoryId={category.id} />;
}
