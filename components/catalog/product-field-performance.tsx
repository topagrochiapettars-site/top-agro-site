import type { Benefit } from '../../types/catalog';
import { Leaf, Sprout, Wheat } from 'lucide-react';
import styles from './product-field-performance.module.css';

type Props = {
  eyebrow: string;
  title: string;
  introduction: string;
  benefits: Benefit[];
  applicationsTitle: string;
  applicationsIntroduction: string;
  applications: string[];
};

function CultureIcon({ culture }: { culture: string }) {
  if (culture === 'milho' || culture === 'sorgo') {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 14V7a4 4 0 0 1 8 0v7M12 3v12M8 7h8M8 10h8M8 13h8M12 21C6 19 4 15 4 10c5 2 8 6 8 11Zm0 0c6-2 8-6 8-11-5 2-8 6-8 11Z" />
    </svg>;
  }
  const Icon = ['aveia', 'azevém', 'trigo'].includes(culture) ? Wheat : culture === 'braquiárias' ? Leaf : Sprout;
  return <Icon size={20} strokeWidth={1.25} aria-hidden="true" />;
}

export function ProductFieldPerformance(props: Props) {
  return <section className={styles.section} aria-labelledby="field-performance-title">
    <p className={styles.eyebrow}>{props.eyebrow}</p>
    <h2 id="field-performance-title">{props.title}</h2>
    <p className={styles.introduction}>{props.introduction}</p>
    <ul className={styles.benefits}>
      {props.benefits.map(benefit => <li key={benefit.title}>{benefit.title}</li>)}
    </ul>
    <div className={styles.applications}>
      <div>
        <h3>{props.applicationsTitle}</h3>
        <p>{props.applicationsIntroduction}</p>
      </div>
      <ul className={styles.cultures} aria-label="Culturas compatíveis">
        {props.applications.map(culture => <li key={culture}><CultureIcon culture={culture} /><span>{culture}</span></li>)}
      </ul>
    </div>
  </section>;
}
