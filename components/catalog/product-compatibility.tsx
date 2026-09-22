import Link from 'next/link';
import type { Specification } from '../../types/catalog';
import styles from './product-compatibility.module.css';

type Props = { model: string; specifications: Specification[] };

export function ProductCompatibility({ model, specifications }: Props) {
  const entries = specifications.filter(item => item.group === 'Compatibilidade');
  return <section className={styles.section} aria-labelledby="compatibility-title">
    <div className={styles.heading}>
      <h2 id="compatibility-title">Compatibilidade e adaptação</h2>
      <div className={styles.introduction}>
        <h3 className={styles.lead}>Compatibilidade com diferentes ensiladeiras</h3>
        <p>A {model} é compatível com diversos modelos de ensiladeiras.</p>
      </div>
    </div>
    {entries.length > 0 && <dl className={styles.list}>
      {entries.map(entry => <div key={entry.id}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}
    </dl>}
    <div className={styles.closing}>
      <div><h3>Kit de adaptação incluso</h3>
        <p>Informe a marca e o modelo da sua ensiladeira. Nossa equipe verifica a compatibilidade e define a adaptação adequada. O kit acompanha a plataforma <strong>sem custo adicional</strong>.</p>
      </div>
      <Link className={styles.cta} href="/#contato">Confirmar compatibilidade</Link>
    </div>
    <p className={styles.note}>Não encontrou seu modelo na lista? Consulte nossa equipe. Outras ensiladeiras podem ser avaliadas para adaptação.</p>
  </section>;
}
