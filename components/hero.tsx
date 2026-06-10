import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="story"
      className="relative grid items-center gap-6 px-5 pb-12 pt-28 sm:gap-8 sm:pb-16 md:px-8 md:gap-10 md:pb-16 md:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-40"
    >
      {/* Embellishment 1: scattered dot cluster — top-right of hero, behind image */}
      <div className="pointer-events-none absolute right-0 top-28 hidden select-none opacity-25 lg:block" aria-hidden="true">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <circle
              key={i}
              cx={15 + (i % 3) * 30}
              cy={15 + Math.floor(i / 3) * 30}
              r="3"
              fill={i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#f59e0b' : '#10b981'}
            />
          ))}
        </svg>
      </div>

      {/* Left: editorial statement */}
      <div className="reveal-none flex flex-col gap-4 sm:gap-5 md:gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose/20 bg-rose/5 px-3 py-1 text-[0.6rem] font-medium tracking-[0.16em] text-rose/90 sm:px-4 sm:py-1.5 sm:text-[0.7rem]">
          <span className="size-1.5 rounded-full bg-sage animate-pulse" aria-hidden="true" />
          BOUTIQUE CAKE STUDIO • EST. SURREY, BC
        </span>

        <h1
          className="font-serif font-medium leading-[1.1] text-espresso text-balance sm:leading-[1.05]"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          <span className="gradient-text-coral">Custom Cakes</span>. Handcrafted,{' '}
          <span className="italic text-rose">100% Eggless</span>, Perfectly Balanced.
        </h1>

        <p className="max-w-xl text-pretty leading-relaxed text-espresso/75 text-sm sm:text-base">
          From India to Canada, Sadhna&apos;s private atelier crafts bespoke masterpieces—elegant, deeply personal, and never too sweet. Every detail, by hand, for your celebration.
        </p>

        {/* Embellishment 2: thin wave rule above CTAs */}
        <div className="pointer-events-none select-none hidden sm:block" aria-hidden="true">
          <svg width="120" height="10" viewBox="0 0 120 10" fill="none" className="opacity-30">
            <path d="M0 5 Q15 0 30 5 Q45 10 60 5 Q75 0 90 5 Q105 10 120 5" stroke="url(#waveGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="120" y2="0">
                <stop offset="0%" stopColor="#ff6b6b"/>
                <stop offset="50%" stopColor="#f59e0b"/>
                <stop offset="100%" stopColor="#10b981"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#intake"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-lg hover:brightness-110 sm:px-7"
          >
            Build Your Cake
          </a>
          <a
            href="#atelier"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full glass border border-white/40 px-6 py-3 text-sm font-medium text-espresso shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover hover:-translate-y-0.5 sm:px-7"
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
      <div className="relative order-first lg:order-last">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] border border-rose/30 shadow-hero bg-gradient-to-br from-rose/5 to-cream sm:rounded-[2rem]">
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
        <span className="absolute -bottom-3 left-5 rounded-full bg-gradient-to-r from-rose to-amber-vivid px-4 py-1.5 text-[0.65rem] font-semibold tracking-wide text-white shadow-badge sm:-bottom-4 sm:left-6 sm:px-5 sm:py-2 sm:text-xs">
          Signature Creation
        </span>
        {/* Decorative accent 3 */}
        <div className="absolute -bottom-5 right-6 size-2 rounded-full bg-emerald-vivid/50 sm:-bottom-6 sm:right-8" aria-hidden="true" />
      </div>
    </section>
  )
}
