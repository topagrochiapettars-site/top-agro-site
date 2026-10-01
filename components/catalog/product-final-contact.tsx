import Link from 'next/link';
import styles from './product-final-contact.module.css';

export function ProductFinalContact() {
  return <section className={styles.section} aria-labelledby="product-contact-title">
    <p className="eyebrow">FALE COM A TOP AGRO</p>
    <h2 id="product-contact-title">Quer confirmar se o kit área total serve na sua ensiladeira?</h2>
    <p className={styles.description}>Informe a marca e o modelo da sua ensiladeira. Nossa equipe verifica a compatibilidade e orienta a configuração adequada para o seu equipamento.</p>
    <Link className={`button ${styles.cta}`} href="/#contato">Falar com a equipe</Link>
    <p className={styles.hint}>Tenha em mãos a marca e o modelo da sua ensiladeira.</p>
  </section>;
}
