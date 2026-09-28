import editorialStyles from './product-field-performance.module.css';
import styles from './product-technical-specifications.module.css';

type Props = {
  title: string;
  items: { label: string; value: string }[];
  secondaryItems?: { label: string; value: string }[];
  note: string;
};

export function ProductTechnicalSpecifications({ title, items, secondaryItems, note }: Props) {
  return <section className={styles.section} aria-labelledby="technical-specifications-title">
    <p className={editorialStyles.eyebrow}>ESPECIFICAÇÕES TÉCNICAS</p>
    <h2 id="technical-specifications-title">{title}</h2>
    <dl className={styles.grid}>
      {items.map(item => <div key={item.label}>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </div>)}
    </dl>
    {secondaryItems?.length ? <dl className={styles.secondary}>
      {secondaryItems.map(item => <div key={item.label}>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </div>)}
    </dl> : null}
    <p className={styles.note}>{note}</p>
  </section>;
}
