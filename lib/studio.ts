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

export function eventTypeWhatsapp(eventTitle: string) {
  return whatsappLink(
    `Hi Sadhna! I'm interested in a ${eventTitle} cake. Can we discuss details?`,
  )
}

export function portfolioWhatsapp(occasionLabel: string, title: string) {
  return whatsappLink(
    `Hi Sadhna! I love this ${occasionLabel} cake style: "${title}". Can we create something similar?`,
  )
}

// ─── Event Types (main page section + gallery filter categories) ────────────

export type EventType = {
  id: string
  title: string
  tagline: string
  copy: string
}

export const EVENT_TYPES: EventType[] = [
  {
    id: 'wedding',
    title: 'Weddings',
    tagline: 'Once-in-a-lifetime artistry',
    copy: 'A wedding deserves a centrepiece as extraordinary as the moment. Handcrafted tiers, sculpted florals, and a flavour profile built around your story.',
  },
  {
    id: 'birthday',
    title: 'Birthdays',
    tagline: 'Make every milestone count',
    copy: 'From intimate first birthdays to landmark decades, every celebration is an opportunity for something beautifully bespoke and entirely eggless.',
  },
  {
    id: 'anniversary',
    title: 'Anniversaries',
    tagline: 'Honour your journey',
    copy: 'Layers as rich and meaningful as the years shared. Elegant finishes, gold accents, and a design that tells your story without a single word.',
  },
  {
    id: 'bento',
    title: 'Bento Cakes',
    tagline: 'Compact, expressive, on-trend',
    copy: 'The refined art of small-format cake. Bento creations that are as thoughtful in flavour as they are in aesthetic — perfect for intimate gifting.',
  },
  {
    id: 'baby-shower',
    title: 'Baby Showers',
    tagline: 'Sweet, soft beginnings',
    copy: 'Welcome the newest arrival with a softly sculpted, 100% eggless creation. Pastel palettes, whimsical details, and flavours the whole family will love.',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    tagline: 'Branded impressions that last',
    copy: 'Elevate your next brand event, product launch, or team milestone with a statement cake crafted to reflect your identity and impress every guest.',
  },
]

// ─── Portfolio Items (gallery page) ─────────────────────────────────────────

export type OccasionId =
  | 'wedding'
  | 'birthday'
  | 'anniversary'
  | 'bento'
  | 'baby-shower'
  | 'corporate'

export type PortfolioItem = {
  id: string
  occasion: OccasionId
  occasionLabel: string
  title: string
  description: string
  alt: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    occasion: 'wedding',
    occasionLabel: 'Wedding',
    title: 'Three-Tier Ivory Cascade',
    description:
      'A dramatic three-tier silhouette draped in cascading sugar florals and a hand-piped lace border — designed as the centrepiece for an intimate garden ceremony.',
    alt: 'Three-tier ivory wedding cake with cascading sugar florals and delicate lace piping by Aanand Treats',
  },
  {
    id: 'p2',
    occasion: 'birthday',
    occasionLabel: 'Birthday',
    title: 'Pastel Ombré Dream',
    description:
      'Soft lavender-to-cream ombré buttercream with a single statement bloom and hand-lettered gold script celebrating a memorable 30th birthday.',
    alt: 'Pastel ombré birthday cake with gold hand-lettered script and a statement floral bloom by Aanand Treats',
  },
  {
    id: 'p3',
    occasion: 'bento',
    occasionLabel: 'Bento Cake',
    title: 'Biscoff Crumb Bento',
    description:
      'A compact Bento with a caramelised Biscoff cookie crumb shell, spiced drip detail, and a miniature hand-crafted fondant motif — rich in flavour, refined in finish.',
    alt: 'Biscoff bento cake with caramelised cookie crumb shell and spiced drip detail by Aanand Treats',
  },
  {
    id: 'p4',
    occasion: 'anniversary',
    occasionLabel: 'Anniversary',
    title: 'Gold Leaf Elegance',
    description:
      'A two-tier ivory cake adorned with hand-applied gold leaf panels, pearl-border piping, and a bespoke monogram topper for a milestone silver anniversary.',
    alt: 'Two-tier ivory anniversary cake with hand-applied gold leaf panels and pearl border piping by Aanand Treats',
  },
  {
    id: 'p5',
    occasion: 'baby-shower',
    occasionLabel: 'Baby Shower',
    title: 'Blush Ruffle Garden',
    description:
      'Textured blush buttercream ruffles, hand-piped daisies, and a soft script banner — made for a sun-filled afternoon baby shower celebration.',
    alt: 'Blush buttercream ruffle baby shower cake with hand-piped daisies and script banner by Aanand Treats',
  },
  {
    id: 'p6',
    occasion: 'corporate',
    occasionLabel: 'Corporate',
    title: 'Branded Matte Luxury',
    description:
      'A smooth matte charcoal-and-gold corporate statement cake with an edible logo, brand colour palette, and a bold architectural silhouette.',
    alt: 'Matte charcoal corporate cake with edible logo and gold accent branding by Aanand Treats',
  },
  {
    id: 'p7',
    occasion: 'wedding',
    occasionLabel: 'Wedding',
    title: 'Sage & Terracotta Foliage',
    description:
      'An asymmetric two-tier wedding cake finished with hand-pressed sage leaves, terracotta dried florals, and a natural linen ribbon wrap.',
    alt: 'Asymmetric two-tier wedding cake with sage foliage, terracotta dried florals, and linen ribbon by Aanand Treats',
  },
  {
    id: 'p8',
    occasion: 'birthday',
    occasionLabel: 'Birthday',
    title: 'Midnight Galaxy Showstopper',
    description:
      'A dramatic navy-and-gold galaxy-textured cake with edible stardust, hand-sculpted planets, and a glitter shimmer finish for a milestone 50th birthday.',
    alt: 'Midnight galaxy birthday cake with edible stardust, sculpted planets, and shimmer finish by Aanand Treats',
  },
  {
    id: 'p9',
    occasion: 'bento',
    occasionLabel: 'Bento Cake',
    title: 'Matcha & Rose Bento',
    description:
      'A delicate matcha-infused sponge wrapped in cream cheese frosting, adorned with edible rose petals and a single expressive brushstroke detail.',
    alt: 'Matcha bento cake with cream cheese frosting, edible rose petals, and brushstroke detail by Aanand Treats',
  },
  {
    id: 'p10',
    occasion: 'anniversary',
    occasionLabel: 'Anniversary',
    title: 'Dusty Rose & Forever Script',
    description:
      'Soft dusty rose panel cake with a hand-drawn floral border in ivory royal icing and an italic "Forever" script topper for a 25th anniversary.',
    alt: 'Dusty rose anniversary panel cake with ivory floral border and Forever script topper by Aanand Treats',
  },
  {
    id: 'p11',
    occasion: 'baby-shower',
    occasionLabel: 'Baby Shower',
    title: 'Mint Cloud Tiered',
    description:
      'A dreamy mint-and-white cloud-textured tiered cake with hand-sculpted fondant animals and a matching smash cake for the little one.',
    alt: 'Mint cloud tiered baby shower cake with hand-sculpted fondant animals and matching smash cake by Aanand Treats',
  },
  {
    id: 'p12',
    occasion: 'birthday',
    occasionLabel: 'Birthday',
    title: 'Floral Graduation Tribute',
    description:
      'A single-tier graduation cake with hand-sculpted buttercream florals, a mortarboard accent, and an elegant script name dedication.',
    alt: 'Floral graduation birthday cake with buttercream florals, mortarboard, and script dedication by Aanand Treats',
  },
]

export const GALLERY_FILTERS: { id: OccasionId | 'all'; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'birthday', label: 'Birthdays' },
  { id: 'anniversary', label: 'Anniversaries' },
  { id: 'bento', label: 'Bento Cakes' },
  { id: 'baby-shower', label: 'Baby Showers' },
  { id: 'corporate', label: 'Corporate' },
]
