import type { ProductFamily } from '../../../types/catalog';

export const primusP2Gasolina: ProductFamily = {
  id: 'primus-p2-gasolina', slug: 'primus-p2-gasolina',
  name: 'Ensacadeira de Silagem Primus P2 Gasolina',
  categoryId: 'silagem-e-forragem', brandId: 'primus',
  status: 'published', priority: 'P1', featured: false,
  variants: [{ id: 'p2-gasolina', name: '2 eixos · Motor a gasolina', model: 'P2 Gasolina' }],
  content: {
    summary: 'Compacta e ensaca silagem com dois eixos e motor próprio a gasolina. Permite regular a compactação e o peso dos sacos, com parada automática ao final do enchimento.',
    benefits: [{ title: 'Compactação e peso reguláveis' }, { title: 'Parada automática' }, { title: 'Motor a gasolina de 4 tempos' }],
    highlightSpecIds: ['producao', 'motor', 'peso-saco', 'eixos'],
    specifications: [
      { id: 'producao', label: 'Produção', value: 'Até 6 t/h' },
      { id: 'motor', label: 'Potência do motor', value: '6,5 HP' },
      { id: 'peso-saco', label: 'Peso por saco', value: 'Até 35 kg' },
      { id: 'eixos', label: 'Sistema', value: '2 eixos de aço maciço' },
      { id: 'combustivel', label: 'Acionamento', value: 'Gasolina · 4 tempos' },
      { id: 'consumo', label: 'Consumo informado', value: 'Aproximadamente 450 ml/h de trabalho' },
      { id: 'tanque', label: 'Tanque de combustível', value: '3,5 litros' },
      { id: 'peso', label: 'Peso do equipamento', value: '120 kg' },
      { id: 'embreagem', label: 'Embreagem', value: 'Lubrificada a óleo ou centrífuga a seco, conforme configuração' },
      { id: 'rodas', label: 'Rodas', value: 'Borracha maciça' },
      { id: 'estrutura', label: 'Estrutura', value: 'Aço carbono SAE 1020 · chapa de 2 mm' },
    ],
    primaryImageId: 'vista-geral',
    media: [
      { id: 'vista-geral', type: 'image', src: '/products/primus-p2-gasolina-vista-geral-square.webp', description: 'Ensacadeira Primus P2 a gasolina com bandeja de apoio, em fundo claro', origin: 'manufacturer', nature: 'treated', width: 1200, height: 1200 },
      { id: 'vista-lateral', type: 'image', src: '/products/primus-p2-gasolina-vista-lateral-corrigida.webp', description: 'Vista lateral da Primus P2 Gasolina alinhada sobre fundo claro', origin: 'manufacturer', nature: 'treated', width: 1200, height: 1200 },
      { id: 'motor', type: 'image', src: '/products/primus-p2-gasolina-motor-tratado.webp', description: 'Detalhe do motor a gasolina de 6,5 HP da ensacadeira Primus', origin: 'manufacturer', nature: 'treated', width: 1200, height: 1200 },
      { id: 'dois-eixos', type: 'image', src: '/products/primus-p2-gasolina-eixos-clean.webp', description: 'Dois eixos helicoidais no interior da ensacadeira Primus P2', origin: 'manufacturer', nature: 'treated', width: 1200, height: 1200 },
      { id: 'operacao', type: 'video', src: '/products/primus-p2-gasolina-operacao.mp4', poster: '/products/primus-p2-gasolina-operacao-poster.webp', description: 'Primus P2 Gasolina em operação real no ensacamento de silagem', origin: 'manufacturer', nature: 'treated', usage: 'working', width: 848, height: 478 },
    ],
    steps: [
      { title: 'Posicionamento do saco', description: 'O saco é colocado no bico de saída e apoiado na bandeja móvel.' },
      { title: 'Enchimento e compactação', description: 'O material alimentado na moega é conduzido pelos eixos para o saco. A regulagem permite ajustar a compactação e o peso.' },
      { title: 'Parada e retirada', description: 'A parada automática interrompe o enchimento ao final do ciclo. O saco é retirado para fechamento e armazenamento.' },
    ],
  },
};
