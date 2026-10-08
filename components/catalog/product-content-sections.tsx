import type { ProductPageData } from '../../lib/catalog/product-page';
import { getWhatsAppLink, whatsappContacts } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../whatsapp-icon';
import styles from './product-content-sections.module.css';

export function ProductContentSections({ product }: { product: ProductPageData['product'] }) {
  const { content } = product;
  return <>
    {!!content.steps?.length && <section className={styles.section} aria-labelledby="operation-title">
      <p className="eyebrow">DO MATERIAL AO SACO</p>
      <h2 id="operation-title">Como funciona o ensacamento</h2>
      <ol className={styles.steps}>{content.steps.map((step, index) => <li key={step.title}>
        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        <h3>{step.title}</h3><p>{step.description}</p>
      </li>)}</ol>
    </section>}
    <section className={styles.section} aria-labelledby="technical-title">
      <p className="eyebrow">CONHEÇA O EQUIPAMENTO</p>
      <h2 id="technical-title">Informações técnicas</h2>
      <dl className={styles.technical}>{content.specifications.map(spec => <div key={spec.id}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
      <p className={styles.note}>Capacidade máxima e consumo informados pela fabricante. O rendimento efetivo depende do material, da alimentação e das regulagens de trabalho.</p>
    </section>
    <section className={`${styles.section} ${styles.contact}`} id="produto-contato" aria-labelledby="contact-title">
      <p className="eyebrow">FALE COM A TOP AGRO</p>
      <h2 id="contact-title">Converse sobre a P2 Gasolina</h2>
      <p>Informe o volume que pretende ensacar e sua cidade. Um colaborador ajuda a confirmar a configuração de embreagem, disponibilidade e frete para sua região.</p>
      <div className={styles.contacts}>{Object.values(whatsappContacts).map(contact => <a key={contact.number} href={getWhatsAppLink(contact, product.name)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} />Falar com {contact.name}</a>)}</div>
    </section>
  </>;
}
