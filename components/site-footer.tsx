import { Phone, Mail, Clock, Sparkles, MapPin } from 'lucide-react'
import { STUDIO } from '@/lib/studio'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-espresso via-warm-dark to-deep-dark text-cream">
      {/* Tinted glassmorphism background layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-rose/10 via-amber-vivid/5 to-sage/5 pointer-events-none" aria-hidden="true" />
      
      {/* Decorative accent elements */}
      <div className="absolute -right-20 -top-20 size-40 rounded-full bg-rose/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-amber-vivid/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-1/3 bottom-0 size-32 rounded-full bg-emerald-vivid/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-3 lg:gap-12 lg:py-20">
        {/* Column 1: location card */}
        <div className="rounded-2xl border border-white/15 backdrop-blur-lg bg-white/10 p-6 hover:border-rose/40 transition-colors duration-300">
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="size-4 text-amber-vivid" aria-hidden="true" />
            <h2 className="font-serif text-xl text-cream">
              Private Atelier Collection
            </h2>
          </div>
          <p className="mb-4 text-sm font-medium tracking-wide text-rose">
            <span className="gradient-text-coral">Whalley Area</span> • Surrey, BC
          </p>
          <p className="text-sm leading-relaxed text-cream/75">
            Aanand Treats operates as a private, residential custom studio. To
            respect the artisan&apos;s workspace and ensure absolute privacy, our
            exact street address and structured pickup instructions are strictly
            provided only after order finalization and deposit confirmation.
          </p>
          {/* Decorative accent 4 */}
          <div className="absolute w-20 h-20 bg-amber-vivid/10 rounded-full blur-2xl -z-10" aria-hidden="true" />
        </div>

        {/* Column 2: timelines & lead */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Clock className="size-4 text-amber-vivid" aria-hidden="true" />
              <h2 className="font-serif text-xl text-cream">Studio Hours</h2>
            </div>
            <p className="text-sm leading-relaxed text-cream/75">
              Monday – Saturday: 10:00 AM – 6:00 PM
              <br />
              Sunday: Studio Closed
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-vivid/40 backdrop-blur-lg bg-amber-vivid/15 px-4 py-2 text-sm font-medium text-amber-vivid shadow-glow-amber">
            <Sparkles className="size-4" aria-hidden="true" />
            Current Lead Time: 2–3 weeks
          </div>
        </div>

        {/* Column 3: direct actions */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-xl text-cream">Direct Studio Line</h2>
          <a
            href={`tel:+${STUDIO.phoneRaw}`}
            className="inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/15 backdrop-blur-lg bg-white/10 hover:bg-rose/20 px-4 py-3 text-sm font-medium text-cream/90 hover:text-amber-vivid transition-all hover:shadow-glow-amber"
          >
            <Phone className="size-4" aria-hidden="true" />
            Dial: {STUDIO.phoneDisplay}
          </a>
          <a
            href={`mailto:${STUDIO.email}`}
            className="inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/15 backdrop-blur-lg bg-white/10 hover:bg-rose/20 px-4 py-3 text-sm font-medium text-cream/90 hover:text-amber-vivid transition-all hover:shadow-glow-amber"
          >
            <Mail className="size-4" aria-hidden="true" />
            {STUDIO.email}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-cream/60">
            Consultations in English & Punjabi.
            <br />© 2026 Aanand Treats by Sadhna.
          </p>
        </div>
      </div>
    </footer>
  )
}
