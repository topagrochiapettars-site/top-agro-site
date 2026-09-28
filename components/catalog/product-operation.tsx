import Image from 'next/image';
import styles from './product-operation.module.css';
import editorialStyles from './product-field-performance.module.css';

type Props = {
  eyebrow?: string;
  title: string;
  introduction: string;
  steps: { title: string; description: string; image: string; alt: string }[];
};

export function ProductOperation({ eyebrow, title, introduction, steps }: Props) {
  return <section className={styles.section} aria-labelledby="product-operation-title">
    {eyebrow && <p className={editorialStyles.eyebrow}>{eyebrow}</p>}
    <h2 id="product-operation-title">{title}</h2>
    <p className={styles.introduction}>{introduction}</p>
    <ol className={styles.steps}>
      {steps.map(step => <li key={step.image}>
        <div className={styles.image}>
          <Image src={step.image} alt={step.alt} width={1448} height={1086} sizes="(min-width: 768px) 33vw, 100vw" loading="lazy" />
        </div>
        <div className={styles.heading}>
          <h3>{step.title}</h3>
        </div>
        <p className={styles.description}>{step.description}</p>
      </li>)}
    </ol>
  </section>;
}
