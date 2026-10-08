/* oxlint-disable next/no-img-element -- Use the existing optimized catalog photos. */
/* oxlint-disable next/no-html-link-for-pages -- Native navigation works reliably in the deployed Vinext runtime. */
import { ArrowRight } from 'lucide-react';
import { catalog } from '../../lib/catalog';
import { getWhatsAppLink, whatsappContacts } from '../../lib/whatsapp';
import { SiteHeader } from '../site-header';
import { WhatsAppIcon } from '../whatsapp-icon';
import styles from './category-page.module.css';

type Props = {
  name: string;
  description: string;
  categoryId: string;
};

export function CategoryPage({ name, description, categoryId }: Props) {
  const products = catalog.listProducts({ categoryId }).flatMap(family => {
    const product = catalog.resolveProduct(family.id);
    return product ? [{ family, product }] : [];
  });
  const brands = catalog.listBrands();

  return <div className={styles.page}>
    <a className="skip-link" href="#modelos">Pular para os modelos</a>
    <SiteHeader homePath="/" />
    <main>
      <section className={styles.hero}>
        <div className="wrap">
          <nav className={styles.breadcrumb} aria-label="Caminho da página">
            <ol><li><a href="/">Início</a></li><li><a href="/equipamentos">Equipamentos</a></li><li aria-current="page">{name}</li></ol>
          </nav>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </section>
      <section className={`wrap ${styles.catalog}`} id="modelos" aria-labelledby="models-title">
        <div className={styles.heading}><h2 id="models-title">Conheça os modelos</h2><p>Veja fotos, aplicações e informações técnicas de cada equipamento.</p></div>
        <div className={styles.products}>{products.map(({ family, product }) => {
          const { content } = product;
          const image = content.media.find(item => item.id === content.primaryImageId && item.type === 'image');
          const href = `/produtos/${family.slug}`;
          const specIds = family.id === 'datec-area-total'
            ? ['largura-nominal', 'potencia-trator', 'producao']
            : (content.highlightSpecIds ?? []).slice(0, 3);
          const specs = specIds.flatMap(id => {
            const spec = content.specifications.find(item => item.id === id);
            return spec ? [spec] : [];
          });
          return <article className={styles.product} key={family.id}>
            {image && <a className={styles.photo} href={href} aria-label={`Ver ${product.name}`} tabIndex={-1}><img src={image.src} alt={image.description} width={image.width} height={image.height} /></a>}
            <div className={styles.body}>
              <p className={styles.brand}>{brands.find(brand => brand.id === family.brandId)?.name}</p>
              <h3><a href={href}>{product.name}</a></h3>
              {product.variantName && <p className={styles.model}>{product.variantName}</p>}
              {specs.length > 0 && <dl className={styles.specs}>{specs.map(spec => <div key={spec.id}>
                <dt>{spec.id === 'potencia-trator' ? 'Potência do trator' : spec.label}</dt>
                <dd>{spec.id === 'producao' ? spec.value.split(',')[0] : spec.id === 'potencia-trator' ? spec.value.replace(' a ', '–') : spec.value}</dd>
              </div>)}</dl>}
              <a className={styles.primary} href={href}>Ver detalhes <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
          </article>;
        })}</div>
      </section>
      <section className={`wrap ${styles.help}`} aria-labelledby="category-help">
        <h2 id="category-help">Precisa de ajuda para escolher?</h2>
        <p>Conte como você produz silagem, o volume de trabalho e quais equipamentos já utiliza. Nossa equipe ajuda você a escolher o modelo adequado à sua operação.</p>
        <div className={styles.contacts}>{Object.values(whatsappContacts).map(contact => <a key={contact.number} href={getWhatsAppLink(contact, name)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} />Falar com {contact.name}</a>)}</div>
      </section>
    </main>
    <footer className={styles.footer}><div className="wrap"><img src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="175" height="44" /><a href="/equipamentos">Todas as categorias <ArrowRight size={18} aria-hidden="true" /></a></div></footer>
  </div>;
}
