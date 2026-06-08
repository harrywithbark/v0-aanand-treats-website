import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { EVENT_TYPES, eventTypeWhatsapp } from '@/lib/studio'
import { ScrollReveal } from '@/components/scroll-reveal'

export function EventTypesSection() {
  return (
    <section
      id="event-types"
      aria-labelledby="event-types-heading"
      className="px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="mb-10 text-center lg:mb-14">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-espresso/55">
          CRAFTED FOR EVERY OCCASION
        </p>
        <h2
          id="event-types-heading"
          className="font-serif text-4xl leading-tight text-espresso text-balance md:text-5xl"
        >
          What Occasion Calls for a{' '}
          <span className="italic text-rose">Masterpiece?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-espresso/65">
          Every event is unique. Every cake is built around it — 100% eggless,
          entirely handcrafted, and completely your own.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENT_TYPES.map((event, i) => (
          <ScrollReveal key={event.id} delay={i * 60}>
            <article
              className="group flex flex-col overflow-hidden rounded-2xl border border-espresso/10 bg-cream shadow-[0_8px_30px_-16px_rgba(43,36,33,0.25)] transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(43,36,33,0.35)] hover:-translate-y-0.5"
            >
              {/* Placeholder image */}
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-secondary">
                <Image
                  src={`/placeholder.svg?height=220&width=400&query=${encodeURIComponent(
                    event.title + ' eggless custom cake',
                  )}`}
                  alt={`Placeholder for ${event.title} custom eggless cake by Aanand Treats`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Occasion pill */}
                <span className="absolute left-3 top-3 rounded-full bg-espresso/80 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-cream backdrop-blur-sm">
                  {event.title.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <p className="text-xs font-medium tracking-[0.15em] text-rose">
                  {event.tagline.toUpperCase()}
                </p>
                <h3 className="font-serif text-xl text-espresso">{event.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-espresso/65 text-pretty">
                  {event.copy}
                </p>
                <a
                  href={eventTypeWhatsapp(event.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full border border-gold px-5 py-2.5 text-sm font-medium text-espresso transition-all duration-300 hover:scale-[1.02] hover:bg-gold/10"
                  aria-label={`Inquire about a ${event.title} cake via WhatsApp`}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Inquire on WhatsApp
                </a>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
