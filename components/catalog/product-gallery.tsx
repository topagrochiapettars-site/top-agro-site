'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import type { Media } from '../../types/catalog';
import styles from './product-gallery.module.css';

export function ProductGallery({ media, primaryImageId }: { media: Media[]; primaryImageId?: string }) {
  // Videos can be added to the media renderer later without changing the catalog.
  const images = media.filter(item => item.type === 'image');
  const primary = images.find(item => item.id === primaryImageId);
  const items = primary ? [primary, ...images.filter(item => item.id !== primary.id)] : images;
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const index = Math.max(0, items.findIndex(item => item.id === selectedId));
  const selected = items[index];
  const move = (step: number) => setSelectedId(items[(index + step + items.length) % items.length].id);

  if (!selected) return <div className={`${styles.frame} ${styles.placeholder}`}><ImageOff size={40} strokeWidth={1} aria-hidden="true" /><span>Imagens em preparação</span></div>;

  return <section className={styles.gallery} aria-label="Galeria do produto" aria-roledescription="carrossel">
    <div className={styles.frame}
      onPointerDown={event => { if (!event.isPrimary || event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); touch.current = { x: event.clientX, y: event.clientY }; }}
      onPointerCancel={() => { touch.current = null; }}
      onPointerUp={event => {
        const start = touch.current;
        touch.current = null;
        if (!start || items.length < 2) return;
        const point = event;
        const dx = point.clientX - start.x;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(point.clientY - start.y)) move(dx < 0 ? 1 : -1);
      }}>
      <Image key={selected.id} src={selected.src} alt={selected.description} fill unoptimized priority={index === 0} draggable={false} style={{ objectFit: 'contain' }} />
    </div>
    {items.length > 1 && <>
      <div className={styles.controls}>
        <button type="button" aria-label="Imagem anterior" onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button>
        <span aria-live="polite" aria-atomic="true">{index + 1} / {items.length}</span>
        <button type="button" aria-label="Próxima imagem" onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button>
      </div>
      <div className={styles.thumbnails} aria-label="Selecionar imagem">
        {items.map((item, position) => <button key={item.id} type="button" aria-label={`Mostrar imagem ${position + 1}: ${item.description}`} aria-pressed={item.id === selected.id} onClick={() => setSelectedId(item.id)}>
          <Image src={item.src} alt="" width={64} height={64} unoptimized style={{ objectFit: 'contain' }} />
        </button>)}
      </div>
    </>}
  </section>;
}
