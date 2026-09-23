import Image from 'next/image';
import styles from './product-operation.module.css';

type Props = {
  title: string;
  introduction: string;
  steps: { title: string; description: string; image: string; alt: string }[];
};

export function ProductOperation({ title, introduction, steps }: Props) {
  return <section className={styles.section} aria-labelledby="product-operation-title">
    <h2 id="product-operation-title">{title}</h2>
    <p className={styles.introduction}>{introduction}</p>
    <ol className={styles.steps}>
      {steps.map((step, index) => <li key={step.image}>
        <div className={styles.image}>
          <Image src={step.image} alt={step.alt} width={1448} height={1086} sizes="(min-width: 768px) 33vw, 100vw" loading="lazy" />
        </div>
        <div className={styles.heading}>
          <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
        </div>
        <p className={styles.description}>{step.description}</p>
      </li>)}
    </ol>
  </section>;
}
