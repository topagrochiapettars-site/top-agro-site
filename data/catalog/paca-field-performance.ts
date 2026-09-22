import type { ProductContent } from '../../types/catalog';

// Editorial selection from the resolved catalog; technical data remains unchanged.
export function getPacaFieldPerformance(content: ProductContent) {
  const benefitTitles = new Set([
    'Maior faixa de recolhimento por passada',
    'Alimentação mais contínua da ensiladeira',
    'Menor tendência a embuchamentos em materiais de grande volume',
    'Menos passadas e maior agilidade na operação',
  ]);
  const cultures = [
    ['Milho', 'milho'], ['Sorgo', 'sorgo'], ['Capiaçu', 'capiaçu'],
    ['Cana-de-açúcar', 'cana'], ['Aveia', 'aveia'], ['Azevém', 'azevém'],
    ['Trigo', 'trigo'], ['Braquiárias', 'braquiárias'],
    ['Outros capins e culturas compatíveis com a ensiladeira', 'outros capins compatíveis'],
  ];
  return {
    eyebrow: 'DESEMPENHO NO CAMPO',
    title: 'Mais capacidade para colher culturas de grande volume',
    introduction: 'A PACA 1000 amplia a faixa de recolhimento da ensiladeira e ajuda a manter uma alimentação mais contínua, especialmente em materiais de maior volume.',
    benefits: (content.benefits ?? []).filter(item => benefitTitles.has(item.title)),
    applicationsTitle: 'Feita para diferentes culturas e formas de plantio',
    applicationsIntroduction: 'Pode trabalhar com culturas semeadas, plantadas em linhas ou consorciadas, conforme a configuração e as condições de operação.',
    applications: cultures.filter(([source]) => content.applications?.includes(source)).map(([, label]) => label),
  };
}
