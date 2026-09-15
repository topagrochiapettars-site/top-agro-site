'use client';
/* oxlint-disable next/no-img-element -- Preserve approved Home images during header extraction. */
import { useState } from 'react';
import { getWhatsAppLink, whatsappContacts } from '../lib/whatsapp';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { SiteHeader } from '../components/site-header';
import { WhatsAppIcon } from '../components/whatsapp-icon';

const brands = ['Panter', 'Trevisan', 'São José', 'MetalAgro', 'KLR Implementos', 'Kawashima', 'Industrial DATEC', 'Incomagri', 'Cimisa'];
const categories = [
  ['01', 'Preparação do solo', 'Grades e implementos para preparar a área com eficiência.'],
  ['02', 'Plantio e sementes', 'Soluções para tratamento, manejo e implantação da lavoura.'],
  ['03', 'Movimentação de grãos', 'Equipamentos para apoiar o fluxo da operação agrícola.'],
  ['04', 'Máquinas e apoio', 'Opções para diferentes rotinas e necessidades da propriedade.'],
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectAndContact = (item: string) => { setSelected(item); document.getElementById('contato')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  return <>
    <a href="#equipamentos" className="skip-link">Pular para os equipamentos</a>
    <SiteHeader />

    <main id="inicio">
      <section className="hero"><img className="hero-photo" src="/products/hero-grade-sunlight.jpg" alt="Trator com grade agrícola trabalhando em uma lavoura sob céu azul e luz entre as nuvens" width="1672" height="941" fetchPriority="high" /><div className="hero-overlay" />
        <div className="wrap hero-inner"><div className="hero-copy"><span className="eyebrow light">MÁQUINAS · IMPLEMENTOS · CAMPO</span><h1>Equipamento certo para quem faz o campo acontecer.</h1><p>A Top Agro aproxima você das máquinas e implementos que a sua operação precisa, com negociação direta de preço, frete e financiamento.</p><div className="hero-actions"><a href="#contato" className="button button-gold"><WhatsAppIcon size={19} /> Falar com um especialista</a><a href="#equipamentos" className="button button-outline">Explorar equipamentos <ArrowRight size={18} /></a></div><div className="hero-signature"><span />A força vem com a gente.</div></div></div>
        <svg className="route-line hero-route" viewBox="0 0 900 95" preserveAspectRatio="none" aria-hidden="true"><path d="M0 74 C180 74 230 18 415 32 S690 88 900 20" /><circle cx="415" cy="32" r="5" /></svg>
      </section>
      <section className="section wrap" id="equipamentos">
        <div className="section-heading"><div><span className="eyebrow">SOLUÇÕES PARA O CAMPO</span><h2>Comece pela sua necessidade.</h2></div><p>Encontre a linha de equipamento e converse com a equipe para confirmar modelos, disponibilidade e condições.</p></div>
        <div className="category-grid">{categories.map(([index, title, description]) => <button key={title} onClick={() => selectAndContact(title)} className="category-item"><span>{index}</span><h3>{title}</h3><p>{description}</p><div>Consultar opções <ArrowUpRight size={18} /></div></button>)}</div>
        <article className="featured-product"><div className="product-photo"><img src="/products/trevisan-equipamento.webp" alt="Tratador e misturador de sementes Trevisan TMS350" width="540" height="720" loading="lazy" /></div><div className="product-copy"><span className="eyebrow">EQUIPAMENTO EM DESTAQUE</span><h2>Trevisan<br />TMS350</h2><p>Tratador e misturador de sementes. Consulte disponibilidade, preço, frete e condições diretamente com a equipe comercial.</p><button className="text-action" onClick={() => selectAndContact('Trevisan TMS350')}>Consultar este equipamento <ArrowRight size={18} /></button><small>Imagem do acervo disponibilizado pela Top Agro.</small></div></article>
        <div className="brands-block"><div><span className="eyebrow">MARCAS</span><h2>Uma seleção que cresce com a sua demanda.</h2></div><div className="brand-list">{brands.map((brand, index) => <button key={brand} onClick={() => selectAndContact(brand)}><span>{String(index + 1).padStart(2, '0')}</span>{brand}<ArrowUpRight size={16} /></button>)}</div></div>
      </section>

      <section className="process-section" id="como-funciona"><div className="wrap"><div className="section-heading inverse"><div><span className="eyebrow">ATENDIMENTO PRÓXIMO</span><h2>Da necessidade à entrega.</h2></div><p>Uma conversa objetiva para entender a operação e construir as condições da compra.</p></div><div className="process-grid"><div><span>01</span><h3>Entendemos o trabalho</h3><p>Você conta o que precisa fazer, a área e a realidade da sua propriedade.</p></div><div><span>02</span><h3>Buscamos a solução</h3><p>A equipe orienta sobre equipamento, disponibilidade, preço e financiamento.</p></div><div><span>03</span><h3>Combinamos a entrega</h3><p>Frete e próximos passos são alinhados diretamente com você.</p></div></div><svg className="route-line process-route" viewBox="0 0 1100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 C260 8 420 94 650 44 S920 18 1100 62" /></svg></div></section>

      <section className="about-section" id="sobre"><div className="wrap about-grid"><div className="about-image"><img src="/products/hero-grade-sunlight.jpg" alt="Equipamento agrícola em operação no campo" loading="lazy" /></div><div className="about-copy"><span className="eyebrow">A TOP AGRO</span><h2>Conhecimento comercial com os pés no campo.</h2><p>Máquinas e implementos fazem parte do que vendemos. Entender a sua necessidade faz parte de como atendemos.</p><p>Em Chiapetta, a Top Agro conecta o produtor a marcas e soluções para diferentes etapas do trabalho agrícola, com negociação direta e conversa clara.</p><a href="#contato" className="text-action">Conversar com a equipe <ArrowRight size={18} /></a></div></div></section>

      <section className="contact-section" id="contato"><div className="wrap contact-grid"><div><span className="eyebrow light">ATENDIMENTO TOP AGRO</span><h2>Vamos encontrar o próximo equipamento da sua propriedade.</h2><p>{selected ? `Interesse selecionado: ${selected}. Escolha um contato para continuar pelo WhatsApp.` : 'Conte para a equipe o que você procura. Preço, frete e financiamento são negociados diretamente com um vendedor.'}</p>{selected && <button className="clear-selection" onClick={() => setSelected(null)}>Limpar seleção ×</button>}</div><div className="contact-options">{Object.values(whatsappContacts).map(seller => <a className="seller" key={seller.number} href={getWhatsAppLink(seller, selected)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={25} /><span><strong>{seller.name}</strong><small>Atendimento Top Agro</small></span><ArrowUpRight size={20} /></a>)}</div></div></section>
    </main>
    <footer className="site-footer" id="localizacao"><div className="wrap"><img src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="165" height="42" /><p>Máquinas e implementos agrícolas<br />Chiapetta · Rio Grande do Sul</p><a href="#inicio">Voltar ao início ↑</a></div></footer>
  </>;
}
