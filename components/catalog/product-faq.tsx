import editorialStyles from './product-field-performance.module.css';
import styles from './product-faq.module.css';

type Props = {
  title: string;
  items: { question: string; answer: string }[];
};

export function ProductFaq({ title, items }: Props) {
  return <section className={styles.section} aria-labelledby="product-faq-title">
    <div className={styles.content}>
      <p className={editorialStyles.eyebrow}>DÚVIDAS FREQUENTES</p>
      <h2 id="product-faq-title">{title}</h2>
      <div className={styles.questions}>
        {items.map(item => <details key={item.question} name="product-faq">
          <summary>{item.question}<span className={styles.indicator} aria-hidden="true" /></summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>)}
      </div>
    </div>
  </section>;
}
