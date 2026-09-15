'use client';
/* oxlint-disable next/no-img-element -- Preserve the existing header logo and its loading behavior. */
import { useEffect, useRef, useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';

export function SiteHeader({ homePath = '' }: { homePath?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  return <>
    <div className="topline"><div className="wrap"><span><MapPin size={13} /> Chiapetta · Rio Grande do Sul</span><span>Atendimento direto para quem produz.</span></div></div>
    <header className="site-header"><div className="wrap header-inner">
      <a className="brand-home" href={`${homePath}#inicio`} aria-label="Top Agro — início"><img className="logo" src="/brand/logo-horizontal-transparent.png" alt="Top Agro" width="210" height="53" /></a>
      <nav id="primary-navigation" className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Navegação principal"><a href={`${homePath}#equipamentos`} onClick={() => setMenuOpen(false)}>Equipamentos</a><a href={`${homePath}#como-funciona`} onClick={() => setMenuOpen(false)}>Como funciona</a><a href={`${homePath}#sobre`} onClick={() => setMenuOpen(false)}>A Top Agro</a><a href={`${homePath}#localizacao`} onClick={() => setMenuOpen(false)}>Onde estamos</a></nav>
      <a className="button header-contact" href={`${homePath}#contato`} aria-label="Falar com a equipe" onClick={() => setMenuOpen(false)}><WhatsAppIcon size={18} /> Falar com a equipe</a>
      <button ref={menuButtonRef} className="mobile-menu" aria-controls="primary-navigation" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </div></header>
  </>;
}
