'use client';
/* oxlint-disable next/no-img-element -- Reuse the approved brand logo in this local design preview. */
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, ChevronRight, Sprout, Wheat, Factory, Truck, Trees, Tractor } from 'lucide-react';
import { SiteHeader } from '../../../components/site-header';
import { WhatsAppIcon } from '../../../components/whatsapp-icon';
import styles from './preview.module.css';
import { getWhatsAppLink, whatsappContacts } from '../../../lib/whatsapp';

const categories = [
  { name: 'Silagem e forragem', icon: Wheat, text: 'Da colheita ao ensaque da silagem.', products: ['Plataformas de área total', 'Ensacadeiras de silagem'] },
  { name: 'Produção de ração', icon: Factory, text: 'Equipamentos para preparar ração na propriedade.', products: ['Fábricas de ração', 'Trituradores', 'Misturadores de ração'] },
  { name: 'Sementes e monitoramento', icon: Sprout, text: 'Preparação de sementes e acompanhamento do plantio.', products: ['Tratadores de sementes', 'Classificadores de sementes', 'Monitores de sementes'] },
  { name: 'Manejo da lavoura', icon: Tractor, text: 'Aplicação de insumos e manutenção de áreas.', products: ['Distribuidores de ureia', 'Comandos de pulverização', 'Roçadeiras'] },
  { name: 'Transporte e movimentação', icon: Truck, text: 'Equipamentos para movimentar materiais na propriedade.', products: ['Roscas transportadoras', 'Carretas basculantes'] },
  { name: 'Florestal e lenha', icon: Trees, text: 'Manejo de madeira e preparo de lenha.', products: ['Rachadores de lenha', 'Garras florestais'] },
];
const categoryImages = [
  ['silagem', 'Plataforma de área total DATEC PACA 1000'],
  ['racao', 'Minifábrica de ração Metal Agro'],
  ['sementes', 'Classificador CIMISA MICRO CS-3B'],
  ['solo', 'Distribuidor São José TURBEN 1.400'],
  ['transporte', 'Carreta basculante DATEC'],
  ['florestal', 'Garra DATEC GF1000'],
];

export default function CatalogPreview() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const normalized = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const visible = categories.filter(item => normalized([item.name, ...item.products].join(' ')).includes(normalized(query)));
  return <div className={styles.page}>
    <a className="skip-link" href="#catalogo">Pular para o catálogo</a>
    <SiteHeader homePath="/" />
    <main>
      <section className={styles.hero}>
        <div className="wrap">
          <nav className={styles.breadcrumb} aria-label="Caminho da página"><Link href="/">Início</Link><ChevronRight size={14} /><span>Equipamentos</span></nav>
          <div className={styles.heroContent}><div><span className={styles.label}>Catálogo Top Agro</span><h1>Máquinas e implementos<br />para a sua operação.</h1></div><p>Encontre o equipamento pelo tipo de trabalho. Explore as categorias e tire suas dúvidas com a nossa equipe.</p></div>
          <div className={styles.search}><Search size={21} /><label className={styles.srOnly} htmlFor="catalog-search">Buscar equipamentos</label><input id="catalog-search" type="search" placeholder="Qual equipamento você procura?" value={query} onChange={event => setQuery(event.target.value)} /><span>Busque por equipamento ou categoria</span></div>
        </div>
      </section>
      <section className={`wrap ${styles.catalog}`} id="catalogo">
        <div className={styles.heading}><div><h2>Explore por categoria</h2><p>Escolha a linha de equipamentos para o seu trabalho.</p></div><span>{visible.length} categorias</span></div>
        <div className={styles.grid}>{visible.map(item => <article className={styles.card} key={item.name}>
          <div className={styles.categoryPhoto}><img src={`/categories/${categoryImages[categories.indexOf(item)][0]}.webp`} alt={categoryImages[categories.indexOf(item)][1]} width="1024" height="683" loading={categories.indexOf(item) < 3 ? 'eager' : 'lazy'} /></div>
          <div className={styles.cardBody}><h3>{item.name}</h3><p>{item.text}</p><ul>{item.products.map(product => <li key={product}>{product}</li>)}</ul><button onClick={() => setSelected(selected === item.name ? null : item.name)} aria-expanded={selected === item.name}>Consultar equipamentos <ArrowRight size={18} /></button>{selected === item.name && <div className={styles.note}><p>Fale com a equipe sobre {item.name.toLowerCase()}:</p>{Object.values(whatsappContacts).map(contact => <a className={styles.sellerLink} key={contact.number} href={getWhatsAppLink(contact, item.name)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Falar com {contact.name}</a>)}</div>}</div>
        </article>)}</div>
        {!visible.length && <div className={styles.empty}><h3>Nenhuma categoria encontrada.</h3><p>Tente buscar por roçadeira, sementes ou ração.</p><button onClick={() => setQuery('')}>Mostrar todas as categorias</button></div>}
      </section>
      <section className={`wrap ${styles.help}`}><div className={styles.helpCopy}><span className={styles.label}>Escolha com orientação</span><h2>Não sabe qual equipamento escolher?</h2><p>Conte o que precisa fazer na sua propriedade. A equipe Top Agro ajuda você a encontrar as opções para o seu trabalho.</p></div><Link className={styles.helpButton} href="/#contato"><WhatsAppIcon size={21} />Falar com um especialista<ArrowRight size={18} /></Link></section>
    </main>
    <footer className={styles.footer}><div className="wrap"><img src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="175" height="44" /><p>Máquinas e implementos agrícolas<br />Chiapetta · Rio Grande do Sul</p><Link href="/">Voltar para o início <ArrowRight size={16} /></Link></div></footer>
  </div>;
}
