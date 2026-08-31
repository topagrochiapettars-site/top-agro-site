import type { Metadata } from 'next';
import './globals.css';
export function generateMetadata(): Metadata {
  const origin = process.env.SITE_URL || 'http://localhost:3000';
  const image = new URL('/og.png', origin).toString();
  return { metadataBase: new URL(origin), title: 'Top Agro | Máquinas e implementos em Chiapetta', description: 'Explore as marcas de máquinas e implementos da Top Agro e converse com nossa equipe em Chiapetta, RS.', icons: { icon: '/brand/logo-horizontal.jpeg' }, robots: { index: false, follow: false }, openGraph: { title: 'Top Agro | A força vem com a gente', description: 'Máquinas, implementos e atendimento próximo. Conheça a Top Agro, em Chiapetta, RS.', images: [{ url: image, width: 1731, height: 909, alt: 'Top Agro — Máquinas e implementos — Chiapetta, RS' }], locale: 'pt_BR', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Top Agro | Máquinas e implementos', description: 'Equipamentos para o campo. Negociação direta com a equipe Top Agro.', images: [image] } };
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
