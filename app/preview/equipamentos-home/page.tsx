/* oxlint-disable next/no-html-link-for-pages -- Local visual proposal using native navigation. */
import { ArrowRight } from 'lucide-react';
import { SiteHeader } from '../../../components/site-header';
import styles from './preview.module.css';

const categories = ['Silagem e forragem', 'Produção de ração', 'Sementes e monitoramento', 'Manejo da lavoura', 'Transporte e movimentação', 'Florestal e lenha'];

function CategoryIcon({ index }: { index: number }) {
  const drawings = [
    <g key="forragem"><path d="M5 21h14M9 21V11c0-4-2-6-4-7 0 5 1 8 4 9M15 21V9c0-3 2-5 4-6 0 5-1 8-4 9M12 21V3" /><path d="m9 6 3 3 3-3" /></g>,
    <g key="racao"><path d="M5 3h14v4l-4 6v5H9v-5L5 7ZM5 7h14M9 18h6M7 21v-8M17 21v-8M8 21h8" /><path d="M10 4.5h4" /></g>,
    <g key="sementes"><path d="M7 15c-3-2-3-7 0-10 3 3 3 8 0 10ZM7 9v12M14 7h7M14 11h7M13 17h2l2-3 2 6 2-3h1" /></g>,
    <g key="manejo"><path d="M12 21v-8M12 17c-5 0-7-3-7-6 5 0 7 2 7 6ZM12 15c5 0 7-3 7-6-5 0-7 2-7 6ZM4 21h16M5 3h9l3 3" /><path d="m16 7-1 2m4-2 1 2M11 5h2" /></g>,
    <g key="transporte"><path d="M4 5h16v8H4ZM4 9h16M2 15h20M4 13v2M20 13v2M2 15v3M7 15v2M17 15v2" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /></g>,
    <g key="florestal"><path d="M8 17h11c3 0 3-6 0-6H8M8 17c-4 0-4-6 0-6s4 6 0 6ZM8 14h.01M4 21h16M16 3l4 2-3 4-3-2ZM15 7l-6 9" /></g>,
  ];
  return <svg className={styles.categoryIcon} viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[index]}</svg>;
}

export default function EquipmentHomePreview() {
  return <div className={styles.page}>
    <SiteHeader homePath="/" />
    <main>
      <section className={`wrap ${styles.section}`} aria-labelledby="equipment-heading">
        <div className={styles.intro}>
          <div><h1 id="equipment-heading">Equipamentos para<br />o seu trabalho.</h1><p>Conheça nossas linhas de máquinas e implementos e encontre as opções para a sua operação.</p></div>
          <a className={styles.button} href="/equipamentos">Ver todos os equipamentos <ArrowRight size={20} /></a>
        </div>
        <ul className={styles.categories}>{categories.map((category, index) => <li key={category}><CategoryIcon index={index} />{category}</li>)}</ul>
      </section>
    </main>
  </div>;
}
