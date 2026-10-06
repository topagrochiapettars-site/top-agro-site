'use client';
/* oxlint-disable next/no-img-element -- Optimized local product photography. */
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './featured-equipment.module.css';

const equipment = [
  { brand: 'Trevisan', model: 'TMS350', type: 'Tratador e misturador de sementes', image: '/products/trevisan-tms350-destaque.webp' },
  { brand: 'Eickhoff', model: 'ESG-403', type: 'Semeadeira-adubadeira', image: '/products/eickhoff-esg403-destaque.webp' },
];

export function FeaturedEquipment({ onContact }: { onContact: (item: string) => void }) {
  const [active, setActive] = useState(0);
  const product = equipment[active];
  return <div className={styles.feature}>
    <article id="featured-equipment" className={`${styles.card} ${active === 1 ? styles.reversed : ''}`} aria-label="Equipamentos em destaque">
      <div className={styles.photo}>
        {equipment.map((item, index) => <img key={item.model} src={item.image} alt={`${item.type} ${item.brand} ${item.model}`} width="1122" height="1402" loading="lazy" hidden={active !== index} />)}
      </div>
      <div className={styles.copy} aria-live="polite" aria-atomic="true">
        <span className="eyebrow">EQUIPAMENTOS EM DESTAQUE!</span>
        <h2>{product.brand}<br />{product.model}</h2>
        <p>{product.type}. Consulte disponibilidade, preço, frete e condições diretamente com a equipe comercial.</p>
        <button type="button" className="text-action" onClick={() => onContact(`${product.type} ${product.brand} ${product.model}`)}>Consultar este equipamento <ArrowRight size={18} /></button>
      </div>
    </article>
    <fieldset className={styles.selectors} aria-label="Selecionar equipamento em destaque">
      {equipment.map((item, index) => <button type="button" key={item.model} aria-label={`Mostrar ${item.brand} ${item.model}`} aria-pressed={active === index} aria-controls="featured-equipment" onClick={() => setActive(index)}><span /></button>)}
    </fieldset>
  </div>;
}
