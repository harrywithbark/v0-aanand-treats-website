import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="story"
      className="grid items-center gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-40"
    >
      {/* Left: editorial statement */}
      <div className="reveal-none flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-espresso/15 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-espresso/70">
          <span className="size-1.5 rounded-full bg-sage" aria-hidden="true" />
          BOUTIQUE CAKE STUDIO • EST. SURREY, BC
        </span>

        <h1
          className="font-serif font-medium leading-[1.05] text-espresso text-balance"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Bespoke Celebration Cakes. Handcrafted,{' '}
          <span className="italic text-sage">100% Eggless</span>, and Perfectly
          Balanced.
        </h1>

        <p className="max-w-xl text-pretty leading-relaxed text-espresso/75">
          What began as a 22-year-old founder&apos;s journey from India to Canada
          is today a private atelier devoted to one belief: that a custom
          masterpiece should be elegant, deeply personal, and{' '}
          <span className="font-medium text-espresso">not too sweet — just right.</span>{' '}
          Every tier, every flower, and every flavour is composed by hand for your
          celebration.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="#intake"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-espresso px-7 py-3 text-sm font-medium text-cream transition-all duration-300 hover:scale-[1.02] hover:bg-espresso/90"
          >
            Build Your Cake
          </a>
          <a
            href="#atelier"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-espresso/20 px-7 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:scale-[1.02] hover:border-espresso/40"
          >
            View the Atelier
          </a>
        </div>
      </div>

      {/* Right: editorial frame */}
      <div className="relative">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-espresso/10 shadow-[0_30px_60px_-25px_rgba(43,36,33,0.45)]">
          <Image
            src="/placeholder.svg?height=900&width=675"
            alt="Signature multi-tier eggless celebration cake finished with delicate hand-piped buttercream florals and gold-leaf accents by Aanand Treats"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </div>
        <span className="absolute -bottom-4 left-6 rounded-full bg-gold px-5 py-2 text-xs font-semibold tracking-wide text-espresso shadow-lg">
          Signature Creation
        </span>
      </div>
    </section>
  )
}
