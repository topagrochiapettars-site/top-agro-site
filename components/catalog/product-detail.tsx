import { Check } from 'lucide-react';
import { SiteHeader } from '../site-header';
import Link from 'next/link';
import { ProductGallery } from './product-gallery';
import { ProductTestimonial } from './product-testimonial';
import { ProductFieldPerformance } from './product-field-performance';
import { ProductCompatibility } from './product-compatibility';
import { getPacaCompatibility } from '../../data/catalog/paca-compatibility';
import { getPacaFieldPerformance } from '../../data/catalog/paca-field-performance';
import type { ProductPageData } from '../../lib/catalog/product-page';
import styles from './product-detail.module.css';

export function ProductDetail({ product, category, brand }: ProductPageData) {
  const { content } = product;
  const testimonialMediaIds = new Set(content.testimonials?.map(item => item.mediaId));
  const galleryMedia = content.media.filter(item => !testimonialMediaIds.has(item.id));
  const isPaca = product.familyId === 'datec-area-total' && product.variantId === 'paca-1000';
  // Approved hero copy only; the full technical catalog stays unchanged.
  const title = isPaca ? 'Plataforma de Área Total' : product.name;
  const summary = isPaca ? 'Amplia a faixa de recolhimento da ensiladeira e mantém uma alimentação mais contínua, inclusive em culturas de grande volume.' : content.summary;
  const benefits = isPaca ? ['Maior faixa de recolhimento', 'Alimentação mais contínua', 'Menor tendência a embuchamentos em materiais de grande volume'] : content.benefits?.slice(0, 3).map(item => item.title);
  const specs = isPaca ? [
    { id: 'producao', value: 'Até 30 t/h', label: 'Capacidade de trabalho' },
    { id: 'largura-nominal', value: '1,00 m', label: 'Largura da plataforma' },
    { id: 'potencia-trator', value: '65–120 cv', label: 'Potência indicada' },
    { id: 'tambores', value: '2 tambores', label: 'Sistema de recolhimento' },
  ] : (content.highlightSpecIds ?? []).flatMap(id => {
    const spec = content.specifications.find(item => item.id === id);
    return spec ? [spec] : [];
  }).slice(0, 4);

  return (
    <><SiteHeader homePath="/" /><main className={styles.page}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Início</Link></li>
            <li><span className={styles.desktopCategory}>{isPaca ? 'Plataformas de Área Total' : category.name}</span><span className={styles.mobileCategory}>{isPaca ? 'Área Total' : category.name}</span></li>
            <li aria-current="page">{product.model ?? product.name}</li>
          </ol>
        </nav>
        <div className={styles.layout}>
          <ProductGallery key={`${product.familyId}-${product.variantId}`} media={galleryMedia} primaryImageId={content.primaryImageId} />
          <section className={styles.info} aria-labelledby="product-title">
            <p className={styles.brand}>{brand.name}</p>
            <h1 id="product-title">{title}</h1>
            {product.variantName && <p className={styles.model}>{product.variantName}</p>}
            {summary && <p className={styles.summary}>{summary}</p>}
            {specs.length > 0 && <dl className={styles.specs}>{specs.map(spec => (
              <div key={spec.id}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
            ))}</dl>}
            <button type="button" disabled className={styles.cta}>Falar com um vendedor</button>
            {isPaca && <p className={styles.ctaHint}>Informe a marca e o modelo da sua ensiladeira.</p>}
            {!!benefits?.length && <ul className={styles.benefits} aria-label="Principais benefícios">
              {benefits.map(benefit => <li key={benefit}><Check size={16} aria-hidden="true" /><span>{benefit}</span></li>)}
            </ul>}
          </section>
        </div>
        {content.testimonials?.map(testimonial => <ProductTestimonial key={testimonial.id} testimonial={testimonial} media={content.media.find(item => item.id === testimonial.mediaId)} introduction={isPaca ? 'Veja a PACA 1000 em operação real e o retorno de quem já utiliza o equipamento no campo.' : undefined} />)}
        {isPaca && <ProductFieldPerformance {...getPacaFieldPerformance(content)} />}
        {isPaca && <ProductCompatibility model={product.model ?? product.name} specifications={getPacaCompatibility(content.specifications)} />}
      </div>
    </main></>
  );
}
