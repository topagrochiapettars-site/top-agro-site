import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetail } from '../../../components/catalog/product-detail';
import { getPublicProductPage } from '../../../lib/catalog/product-page';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getPublicProductPage((await params).slug);
  if (!data) notFound();
  return { title: `${data.product.name} | Top Agro`, description: data.product.content.summary };
}

export default async function ProductPage({ params }: Props) {
  const data = getPublicProductPage((await params).slug);
  if (!data) notFound();
  return <ProductDetail {...data} />;
}
