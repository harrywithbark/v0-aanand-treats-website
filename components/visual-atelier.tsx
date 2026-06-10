import Image from 'next/image'
import { Camera } from 'lucide-react'
import { STUDIO } from '@/lib/studio'

type Cake = { alt: string; label: string }

const ROW_ONE: Cake[] = [
  {
    alt: 'Minimalist pastel pink Bento cake with delicate hand-lettered script and a single buttercream rosette by Aanand Treats',
    label: 'Pastel Bento',
  },
  {
    alt: 'Trending Biscoff Bento cake with caramelised cookie crumb layering and a glossy spiced drip by Aanand Treats',
    label: 'Biscoff Bento',
  },
  {
    alt: 'Row of softly piped buttercream cupcakes in cream and rose tones with sugared petal accents by Aanand Treats',
    label: 'Signature Cupcakes',
  },
  {
    alt: 'Luxury eggless chocolate gift hamper arranged with satin ribbon and gold foil detailing by Aanand Treats',
    label: 'Chocolate Hamper',
  },
  {
    alt: 'Modern sage green celebration cake finished with hand-applied gold leaf and a smooth sculpted edge by Aanand Treats',
    label: 'Modern Minimal',
  },
]

const ROW_TWO: Cake[] = [
  {
    alt: 'Intricate three-tier white wedding cake silhouette dressed with cascading sugar florals by Aanand Treats',
    label: 'Wedding Silhouette',
  },
  {
    alt: 'Floral buttercream graduation cake with elegant script work and a cap detail by Aanand Treats',
    label: 'Graduation',
  },
  {
    alt: 'Textured pastel baby shower cake with vibrant piped florals and soft ruffle detailing by Aanand Treats',
    label: 'Baby Shower',
  },
  {
    alt: 'Elegant two-tier anniversary cake with gilded gold accents and a fine pearl border by Aanand Treats',
    label: 'Anniversary',
  },
  {
    alt: 'Tall buttercream celebration cake adorned with fresh seasonal flowers and a smooth ivory finish by Aanand Treats',
    label: 'Showstopper',
  },
]

function MarqueeRow({
  items,
  direction,
}: {
  items: Cake[]
  direction: 'ltr' | 'rtl'
}) {
  return (
    <div className="marquee-row group overflow-hidden py-2" tabIndex={0}>
      <div
        className={`marquee-track gap-3 sm:gap-4 md:gap-5 ${
          direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'
        }`}
      >
        {[false, true].map((isClone) =>
          items.map((cake, i) => (
            <figure
              key={`${direction}-${isClone ? 'clone' : 'orig'}-${i}`}
              aria-hidden={isClone || undefined}
              className="group/card relative w-[160px] shrink-0 sm:w-[200px] md:w-[220px] lg:w-[300px]"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-white/20 shadow-card transition-all duration-300 group-hover/card:scale-[1.03] group-hover/card:shadow-card-hover sm:aspect-[4/3]">
                <Image
                  src={`/placeholder.svg?height=340&width=300&query=${encodeURIComponent(
                    cake.label + ' eggless cake',
                  )}`}
                  alt={isClone ? '' : cake.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 300px"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-espresso shadow-card backdrop-blur-sm">
                  {cake.label}
                </figcaption>
              </div>
            </figure>
          )),
        )}
      </div>
    </div>
  )
}

export function VisualAtelier() {
  return (
    <section id="atelier" className="relative py-16 lg:py-24">
      {/* Decorative accent 5 */}
      <div className="absolute -left-32 top-1/3 size-48 rounded-full bg-rose/10 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <header className="mb-8 px-5 text-center md:mb-10 md:px-8">
        <p className="mb-2.5 text-[0.65rem] font-medium tracking-[0.2em] text-rose/80 sm:mb-3 sm:text-xs">
          THE PORTFOLIO
        </p>
        <h2 className="font-serif text-3xl text-espresso sm:text-4xl md:text-5xl text-balance">
          The Visual <span className="gradient-text-coral">Atelier</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-espresso/75 sm:mt-4">
          A continuous showcase of recent commissions — from intimate Bento bakes
          to multi-tier showstoppers.
        </p>
        {/* Embellishment 3: small diamond row separator */}
        <div className="flex items-center justify-center gap-2 mt-2 pointer-events-none select-none" aria-hidden="true">
          <span className="inline-block size-1 rotate-45 rounded-sm bg-rose/40" />
          <span className="inline-block size-1.5 rotate-45 rounded-sm bg-amber-vivid/50" />
          <span className="inline-block size-1 rotate-45 rounded-sm bg-emerald-vivid/40" />
          <span className="inline-block size-1.5 rotate-45 rounded-sm bg-rose/40" />
          <span className="inline-block size-1 rotate-45 rounded-sm bg-amber-vivid/50" />
        </div>

      </header>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={ROW_ONE} direction="ltr" />
        <MarqueeRow items={ROW_TWO} direction="rtl" />
      </div>

      <div className="mt-10 flex justify-center px-5 md:mt-12">
        <a
          href={STUDIO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full glass border border-white/40 px-5 py-3 text-sm font-medium text-espresso shadow-card transition-all duration-300 hover:scale-[1.03] hover:shadow-card-hover hover:-translate-y-0.5 hover:border-rose/30 sm:gap-3 sm:px-6"
        >
          <Camera className="size-4 text-rose sm:size-5" aria-hidden="true" />
          <span className="hidden sm:inline">Follow {STUDIO.instagramHandle} for Daily Studio Captures</span>
          <span className="sm:hidden">Follow on Instagram</span>
        </a>
      </div>
    </section>
  )
}
