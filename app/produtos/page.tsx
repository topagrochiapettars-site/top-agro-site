import type { Metadata } from 'next';
import CatalogPreview from '../preview/catalogo/page';

export const metadata: Metadata = {
  title: 'Máquinas e implementos agrícolas | Top Agro',
  description: 'Explore equipamentos para silagem, ração, sementes e plantio, manejo da lavoura, transporte e trabalho florestal. Fale com a equipe Top Agro.',
};

export default function ProductsPage() {
  return <CatalogPreview />;
}
