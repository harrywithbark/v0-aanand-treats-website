import { Phone, Mail, Clock, Sparkles, MapPin } from 'lucide-react'
import { STUDIO } from '@/lib/studio'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-espresso via-warm-dark to-deep-dark text-cream">
      {/* Tinted glassmorphism background layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose/10 via-amber-vivid/5 to-sage/5 backdrop-blur-2xl"
        aria-hidden="true"
      />

      {/* Decorative accent blobs */}
      <div className="absolute -right-20 -top-20 size-40 rounded-full bg-rose/15 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-20 -bottom-20 size-40 rounded-full bg-amber-vivid/15 blur-3xl" aria-hidden="true" />
      <div className="absolute right-1/3 bottom-0 size-32 rounded-full bg-emerald-vivid/8 blur-3xl" aria-hidden="true" />

      {/* Top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-6 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2 md:gap-10 md:px-8 lg:grid-cols-3 lg:gap-14 lg:py-20">

        {/* Divider row with dots */}
        <div
          className="col-span-full mb-2 flex items-center gap-3 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
          <span className="size-1.5 rounded-full bg-rose/50" />
          <span className="size-1 rounded-full bg-amber-vivid/50" />
          <span className="size-1.5 rounded-full bg-emerald-vivid/40" />
          <span className="size-1 rounded-full bg-amber-vivid/50" />
          <span className="size-1.5 rounded-full bg-rose/50" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-vivid/30 to-transparent" />
        </div>

        {/* Column 1: location card */}
        <div className="col-span-full rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-lg transition-all duration-300 hover:border-rose/40 hover:bg-white/12 hover:shadow-[0_8px_32px_rgba(255,107,107,0.08)] md:col-span-1 md:p-7">
          <div className="mb-3 flex items-center gap-2.5">
            <MapPin className="size-5 shrink-0 text-amber-vivid" aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-cream">
              Private Atelier Collection
            </h2>
          </div>
          <p className="mb-4 text-sm font-medium tracking-wide text-rose">
            <span className="gradient-text-coral">Whalley Area</span> &bull; Surrey, BC
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
            <div className="mb-3 flex items-center gap-2.5">
              <Clock className="size-5 shrink-0 text-amber-vivid" aria-hidden="true" />
              <h2 className="font-serif text-xl font-semibold text-cream">Studio Hours</h2>
            </div>
            <p className="text-sm leading-relaxed text-cream/70">
              Monday &ndash; Saturday: 10:00 AM &ndash; 6:00 PM
              <br />
              Sunday: Studio Closed
            </p>
          </div>
          <div className="inline-flex w-full items-center gap-2 rounded-full border border-amber-vivid/45 bg-amber-vivid/15 px-4 py-2.5 text-sm font-semibold tracking-tight text-amber-vivid shadow-glow-amber backdrop-blur-lg glow-pulse-soft sm:w-fit sm:px-5">
            <Sparkles className="size-4 shrink-0" aria-hidden="true" />
            Current Lead Time: 2&ndash;3 weeks
          </div>
        </div>

        {/* Column 3: direct actions */}
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-xl font-semibold text-cream">Direct Studio Line</h2>
          <a
            href={`tel:+${STUDIO.phoneRaw}`}
            className="group inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm font-medium text-cream/90 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/50 hover:bg-rose/20 hover:text-amber-vivid hover:shadow-glow-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-vivid"
          >
            <Phone
              className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            Dial: {STUDIO.phoneDisplay}
          </a>
          <a
            href={`mailto:${STUDIO.email}`}
            className="group inline-flex min-h-[48px] items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm font-medium text-cream/90 backdrop-blur-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/50 hover:bg-rose/20 hover:text-amber-vivid hover:shadow-glow-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-vivid overflow-hidden"
          >
            <Mail
              className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
            <span className="truncate">{STUDIO.email}</span>
          </a>
          <p className="mt-1 text-sm leading-relaxed text-cream/55">
            Consultations in English &amp; Punjabi.
            <br />
            &copy; 2026 Aanand Treats by Sadhna.
          </p>

          {/* Floral monogram mark */}
          <div className="mt-2 pointer-events-none select-none opacity-20" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="#ff6b6b" />
              <path
                d="M20 6v4M20 30v4M6 20h4M30 20h4"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.4 10.4l2.8 2.8M26.8 26.8l2.8 2.8M10.4 29.6l2.8-2.8M26.8 13.2l2.8-2.8"
                stroke="#10b981"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-vivid/25 to-transparent"
        aria-hidden="true"
      />
    </footer>
  )
}
