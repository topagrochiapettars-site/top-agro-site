import { ImageOff } from 'lucide-react';
import Link from 'next/link';
import type { ProductPageData } from '../../lib/catalog/product-page';
import styles from './product-detail.module.css';

export function ProductDetail({ product, category, brand }: ProductPageData) {
  const { content } = product;
  const specs = (content.highlightSpecIds ?? []).flatMap(id => {
    const spec = content.specifications.find(item => item.id === id);
    return spec ? [spec] : [];
  }).slice(0, 4);

  return (
    <main className={styles.page}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <ol>
            <li><Link href="/">Início</Link></li>
            <li>{category.name}</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>
        <div className={styles.layout}>
          <div className={styles.media}>
            <ImageOff size={40} strokeWidth={1} aria-hidden="true" />
            <span>Imagens em preparação</span>
          </div>
          <section className={styles.info} aria-labelledby="product-title">
            <p className={styles.brand}>{brand.name}</p>
            <h1 id="product-title">{product.name}</h1>
            {product.variantName && <p className={styles.model}>{product.variantName}</p>}
            {content.summary && <p className={styles.summary}>{content.summary}</p>}
            {specs.length > 0 && <dl className={styles.specs}>{specs.map(spec => (
              <div key={spec.id}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
            ))}</dl>}
            <button type="button" disabled className={styles.cta}>Solicitar cotação <span>(em breve)</span></button>
            {!!content.benefits?.length && <ul className={styles.benefits} aria-label="Principais benefícios">
              {content.benefits.slice(0, 3).map(benefit => <li key={benefit.title}>{benefit.title}</li>)}
            </ul>}
          </section>
        </div>
      </div>
    </main>
  );
}
