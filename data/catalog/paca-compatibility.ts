import type { Specification } from '../../types/catalog';

// Approved display wording; keep the complete technical catalog unchanged.
export function getPacaCompatibility(specifications: Specification[]) {
  return specifications.filter(item => item.id.startsWith('compatibilidade-')).map(item => ({
    ...item,
    value: item.id === 'compatibilidade-kuhn' ? 'Compatibilidade conforme modelo'
      : item.value.split('; ').map((model, index) => item.id === 'compatibilidade-nogueira' && index > 0
        ? model.replace(/^Pecus 9004 /, '').replace(/^Pecus /, '') : model).join(' · '),
  }));
}
