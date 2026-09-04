'use client';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Menu, X } from 'lucide-react';

const brands = ['Panter', 'Trevisan', 'São José', 'MetalAgro', 'KLR Implementos', 'Kawashima', 'Industrial DATEC', 'Incomagri', 'Cimisa'];
const sellers = [{ name: 'Atendimento comercial 1', number: '5555999053887', display: '(55) 99905-3887' }, { name: 'Atendimento comercial 2', number: '5555992368795', display: '(55) 99236-8795' }];
const categories = [
  ['01', 'Preparação do solo', 'Grades e implementos para preparar a área com eficiência.'],
  ['02', 'Plantio e sementes', 'Soluções para tratamento, manejo e implantação da lavoura.'],
  ['03', 'Movimentação de grãos', 'Equipamentos para apoiar o fluxo da operação agrícola.'],
  ['04', 'Máquinas e apoio', 'Opções para diferentes rotinas e necessidades da propriedade.'],
];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12.04 2a9.84 9.84 0 0 0-8.48 14.83L2 22l5.3-1.5A9.97 9.97 0 1 0 12.04 2Zm0 17.97a8.04 8.04 0 0 1-4.1-1.12l-.3-.18-3.15.89.91-3.06-.2-.32a7.86 7.86 0 1 1 6.84 3.79Zm4.42-5.9c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19a7.3 7.3 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const message = `Olá! Vim pelo site da Top Agro e gostaria de informações ${selected ? `sobre ${selected}` : 'sobre máquinas e implementos'}.`;
  const selectAndContact = (item: string) => { setSelected(item); document.getElementById('contato')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  return <>
    <a href="#equipamentos" className="skip-link">Pular para os equipamentos</a>
    <div className="topline"><div className="wrap"><span><MapPin size={13} /> Chiapetta · Rio Grande do Sul</span><span>Atendimento direto para quem produz.</span></div></div>
    <header className="site-header"><div className="wrap header-inner">
      <a className="brand-home" href="#inicio" aria-label="Top Agro — início"><img className="logo" src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="210" height="53" /></a>
      <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Navegação principal"><a href="#equipamentos" onClick={() => setMenuOpen(false)}>Equipamentos</a><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#sobre" onClick={() => setMenuOpen(false)}>A Top Agro</a><a href="#localizacao" onClick={() => setMenuOpen(false)}>Onde estamos</a></nav>
      <a className="button header-contact" href="https://wa.me/5555999053887?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Top%20Agro%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Falar com a equipe</a>
      <button className="mobile-menu" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>

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

      <section className="contact-section" id="contato"><div className="wrap contact-grid"><div><span className="eyebrow light">ATENDIMENTO TOP AGRO</span><h2>Vamos encontrar o próximo equipamento da sua propriedade.</h2><p>{selected ? `Interesse selecionado: ${selected}. Escolha um contato para continuar pelo WhatsApp.` : 'Conte para a equipe o que você procura. Preço, frete e financiamento são negociados diretamente com um vendedor.'}</p>{selected && <button className="clear-selection" onClick={() => setSelected(null)}>Limpar seleção ×</button>}</div><div className="contact-options">{sellers.map(seller => <a className="seller" key={seller.number} href={`https://wa.me/${seller.number}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={25} /><span><strong>{seller.name}</strong><small>{seller.display}</small></span><ArrowUpRight size={20} /></a>)}</div></div></section>
    </main>
    <footer className="site-footer" id="localizacao"><div className="wrap"><img src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="165" height="42" /><p>Máquinas e implementos agrícolas<br />Chiapetta · Rio Grande do Sul</p><a href="#inicio">Voltar ao início ↑</a></div></footer>
  </>;
}
