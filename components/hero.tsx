import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="story"
      className="relative grid items-center gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-40"
    >
      {/* Left: editorial statement */}
      <div className="reveal-none flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose/20 bg-rose/5 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-rose/90">
          <span className="size-1.5 rounded-full bg-sage animate-pulse" aria-hidden="true" />
          BOUTIQUE CAKE STUDIO • EST. SURREY, BC
        </span>

        <h1
          className="font-serif font-medium leading-[1.05] text-espresso text-balance"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <span className="gradient-text-coral">Custom Cakes</span>. Handcrafted,{' '}
          <span className="italic text-rose">100% Eggless</span>, Perfectly Balanced.
        </h1>

        <p className="max-w-xl text-pretty leading-relaxed text-espresso/75">
          From India to Canada, Sadhna&apos;s private atelier crafts bespoke masterpieces—elegant, deeply personal, and never too sweet. Every detail, by hand, for your celebration.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="#intake"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-rose px-7 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-lg hover:brightness-110"
          >
            Build Your Cake
          </a>
          <a
            href="#atelier"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full glass border border-white/40 px-7 py-3 text-sm font-medium text-espresso shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover hover:-translate-y-0.5"
          >
            View the Atelier
          </a>
        </div>

        {/* Decorative accent 1 */}
        <div className="absolute -left-8 top-1/4 size-2 rounded-full bg-rose/30" aria-hidden="true" />
        {/* Decorative accent 2 */}
        <div className="absolute -left-4 bottom-1/3 size-1.5 rounded-full bg-amber-vivid/40" aria-hidden="true" />
      </div>

      {/* Right: editorial frame */}
      <div className="relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-rose/30 shadow-hero bg-gradient-to-br from-rose/5 to-cream">
          <Image
            src="/placeholder.svg?height=900&width=675"
            alt="Signature multi-tier eggless celebration cake finished with delicate hand-piped buttercream florals and gold-leaf accents by Aanand Treats"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
          {/* Decorative corner accent */}
          <div className="absolute -right-3 -top-3 size-12 rounded-full bg-amber-vivid/20 blur-xl" aria-hidden="true" />
        </div>
        <span className="absolute -bottom-4 left-6 rounded-full bg-gradient-to-r from-rose to-amber-vivid px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-badge">
          Signature Creation
        </span>
        {/* Decorative accent 3 */}
        <div className="absolute -bottom-6 right-8 size-2 rounded-full bg-emerald-vivid/50" aria-hidden="true" />
      </div>
    </section>
  )
}
