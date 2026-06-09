import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { EVENT_TYPES, eventTypeWhatsapp } from '@/lib/studio'
import { ScrollReveal } from '@/components/scroll-reveal'

const EVENT_IMAGES: Record<string, string> = {
  wedding: '/images/wedding-silhouette.jpg',
  birthday: '/Screenshot_2026-06-08_221539.png',
  anniversary: '/Screenshot_2026-06-08_163102.png',
  bento: '/images/biscoff-bento.jpg',
  'baby-shower': '/images/baby-shower.jpg',
  corporate: '/images/corporate.jpg',
}

const EVENT_ALTS: Record<string, string> = {
  wedding: 'Three-tier ivory wedding cake with cascading sugar florals and delicate lace piping by Aanand Treats',
  birthday: 'Fresh floral eggless birthday cake with pink script lettering, daisies, and pearl detailing by Aanand Treats',
  anniversary: 'Signature romantic eggless cake with a vibrant red rose, satin ribbon, and baby\'s breath by Aanand Treats',
  bento: 'Compact Biscoff Bento cake with caramelised cookie crumb shell and spiced drip detail by Aanand Treats',
  'baby-shower': 'Blush buttercream ruffle baby shower cake with hand-piped daisies and script banner by Aanand Treats',
  corporate: 'Matte charcoal corporate cake with edible logo and gold accent branding by Aanand Treats',
}

export function EventTypesSection() {
  return (
    <section
      id="event-types"
      aria-labelledby="event-types-heading"
      className="relative px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="absolute -right-40 top-1/2 size-56 rounded-full bg-amber-vivid/8 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="mb-10 text-center lg:mb-14">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-rose/80">CRAFTED FOR EVERY OCCASION</p>
        <h2 id="event-types-heading" className="font-serif text-4xl leading-tight text-espresso text-balance md:text-5xl">
          What Occasion Calls for a{' '}<span className="italic gradient-text-coral">Masterpiece?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-espresso/75">
          Every event is unique. Every cake is built around it — 100% eggless, entirely handcrafted, and completely your own.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 pointer-events-none select-none" aria-hidden="true">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-rose/30 rounded-full" />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-40">
            <path d="M9 2c.6 0 1-.4 1-1S9.6 0 9 0 8 .4 8 1s.4 1 1 1z" fill="#ff6b6b"/>
            <rect x="3" y="5" width="12" height="2" rx="1" fill="#f59e0b"/>
            <rect x="2" y="7" width="14" height="9" rx="2" fill="#ff6b6b" fillOpacity=".25"/>
            <rect x="2" y="7" width="14" height="9" rx="2" stroke="#ff6b6b" strokeWidth="1.2"/>
            <path d="M6 12h6" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-vivid/30 rounded-full" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENT_TYPES.map((event, i) => (
          <ScrollReveal key={event.id} delay={i * 60}>
            <article className="group relative flex flex-col overflow-hidden rounded-2xl glass-card border border-cream/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-rose/20">
              <div className="absolute -right-4 -top-4 size-16 rounded-full bg-sage/10 blur-xl pointer-events-none group-hover:bg-rose/10 transition-colors" aria-hidden="true" />
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-secondary">
                <Image
                  src={EVENT_IMAGES[event.id] || '/images/showstopper.jpg'}
                  alt={EVENT_ALTS[event.id] || `${event.title} custom eggless cake by Aanand Treats`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-rose/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-cream shadow-glow backdrop-blur-sm">{event.title.toUpperCase()}</span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-xs font-medium tracking-[0.15em] text-rose">{event.tagline.toUpperCase()}</p>
                <h3 className="font-serif text-xl text-espresso">{event.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-espresso/70 text-pretty">{event.copy}</p>
                <a
                  href={eventTypeWhatsapp(event.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline<think> min-h-[48px] w-fit items-center gap-2 rounded-full bg-rose/10 border border-rose/20 px-5 py-2.5 text-sm font-medium text-rose transition-all duration-300 hover:scale-[1.02] hover:bg-rose hover:text-cream hover:shadow-glow"
                  aria-label={`Inquire about a ${event.title} cake via WhatsApp`}
                >
                  <MessageCircle className="size-4" aria-hidden="true" /> Inquire on WhatsApp
                </a>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
