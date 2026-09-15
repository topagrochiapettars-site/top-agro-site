import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '../../../../components/catalog/product-detail';
import { getPreviewProductPage } from '../../../../lib/catalog/preview-product';

export const metadata: Metadata = {
  title: 'Preview de produto | Top Agro',
  robots: { index: false, follow: false },
};

export default async function PreviewProductPage({ params }: { params: Promise<{ slug: string }> }) {
  if (process.env.NODE_ENV === 'production') notFound();
  const data = await getPreviewProductPage((await params).slug);
  if (!data) notFound();
  return <ProductDetail {...data} />;
}
