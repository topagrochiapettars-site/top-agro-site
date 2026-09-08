export const whatsappContacts = {
  cassiano: { name: 'Cassiano', number: '5555992368795' },
  lucas: { name: 'Lucas', number: '5555999053887' },
} as const;

export function getWhatsAppLink(
  contact: (typeof whatsappContacts)[keyof typeof whatsappContacts],
  interest: string | null = null,
) {
  const message = interest
    ? `Olá, vim pelo site da Top Agro e gostaria de informações sobre ${interest}.`
    : 'Olá, vim pelo site da Top Agro e gostaria de falar com a equipe sobre máquinas e implementos agrícolas.';

  return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
}
