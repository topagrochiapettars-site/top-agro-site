import type { Media, ProductContent } from '../../types/catalog';
import styles from './product-testimonial.module.css';

type Props = {
  testimonial: NonNullable<ProductContent['testimonials']>[number];
  media?: Media;
  introduction?: string;
};

export function ProductTestimonial({ testimonial, media, introduction }: Props) {
  if (!testimonial.text || media?.type !== 'video') return null;
  return <section className={styles.section} aria-labelledby={`testimonial-${testimonial.id}`}>
    <h2 id={`testimonial-${testimonial.id}`}>Quem usa aprova</h2>
    {introduction && <p className={styles.introduction}>{introduction}</p>}
    <div className={styles.layout}>
      <div className={styles.frame}>
        {/* Match the gallery's native player inside a stable frame. */}
        {/* No caption track was supplied; do not fabricate captions. */}
        {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
        <video key={media.id} className={styles.video} src={media.src} poster={media.poster} controls playsInline preload="metadata" aria-label={media.description} />
      </div>
      <figure className={styles.quote}>
        <p className={styles.label}>Depoimento real de cliente</p>
        <blockquote>{testimonial.text.split('\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}</blockquote>
        <figcaption><strong>{testimonial.name}</strong><span>Cliente Top Agro</span></figcaption>
      </figure>
    </div>
  </section>;
}
