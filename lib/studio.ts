export const STUDIO = {
  name: 'Aanand Treats by Sadhna',
  phoneDisplay: '+1 (672) 200-6999',
  phoneRaw: '16722006999',
  email: 'studio@aanandtreats.ca',
  instagram: 'https://www.instagram.com/aanand_treats_by_sadhna',
  instagramHandle: '@aanand_treats_by_sadhna',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${STUDIO.phoneRaw}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
