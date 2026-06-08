import { Phone, Mail, Clock, Sparkles, MapPin } from 'lucide-react'
import { STUDIO } from '@/lib/studio'

export function SiteFooter() {
  return (
    <footer className="bg-deep-dark text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-3 lg:gap-12 lg:py-20">
        {/* Column 1: privacy card */}
        <div className="rounded-2xl border border-white/10 glass-subtle p-6">
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="size-4 text-amber-vivid" aria-hidden="true" />
            <h2 className="font-serif text-xl text-cream">
              Private Atelier Collection
            </h2>
          </div>
          <p className="mb-4 text-sm font-medium tracking-wide text-rose">
            <span className="gradient-text-coral">Whalley Area</span> • Surrey, BC
          </p>
          <p className="text-sm leading-relaxed text-cream/70">
            Aanand Treats operates as a private, residential custom studio. To
            respect the artisan&apos;s workspace and ensure absolute privacy, our
            exact street address and structured pickup instructions are strictly
            provided only after order finalization and deposit confirmation.
          </p>
        </div>

        {/* Column 2: timelines & lead */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Clock className="size-4 text-amber-vivid" aria-hidden="true" />
              <h2 className="font-serif text-xl text-cream">Studio Hours</h2>
            </div>
            <p className="text-sm leading-relaxed text-cream/70">
              Monday – Saturday: 10:00 AM – 6:00 PM
              <br />
              Sunday: Studio Closed
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-vivid/30 bg-amber-vivid/10 px-4 py-2 text-sm font-medium text-amber-vivid shadow-glow-amber">
            <Sparkles className="size-4" aria-hidden="true" />
            Current Lead Time: Custom bookings require 2–3 weeks advance notice
          </div>
        </div>

        {/* Column 3: direct actions */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-xl text-cream">Direct Studio Line</h2>
          <a
            href={`tel:+${STUDIO.phoneRaw}`}
            className="inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-cream/90 transition-all hover:border-amber-vivid/50 hover:text-amber-vivid hover:shadow-glow-amber"
          >
            <Phone className="size-4" aria-hidden="true" />
            Dial Studio Line: {STUDIO.phoneDisplay}
          </a>
          <a
            href={`mailto:${STUDIO.email}`}
            className="inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-cream/90 transition-all hover:border-amber-vivid/50 hover:text-amber-vivid hover:shadow-glow-amber"
          >
            <Mail className="size-4" aria-hidden="true" />
            {STUDIO.email}
          </a>
          <p className="mt-2 text-sm leading-relaxed text-cream/60">
            Consultations available in English and Punjabi.
            <br />© 2026 Aanand Treats by Sadhna.
          </p>
        </div>
      </div>
    </footer>
  )
}
