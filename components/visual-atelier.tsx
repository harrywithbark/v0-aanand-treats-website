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
  // Duplicate the set so the loop is seamless; mark the clone aria-hidden.
  return (
    <div className="marquee-row group overflow-hidden py-2" tabIndex={0}>
      <div
        className={`marquee-track gap-5 ${
          direction === 'ltr' ? 'marquee-ltr' : 'marquee-rtl'
        }`}
      >
        {[false, true].map((isClone) =>
          items.map((cake, i) => (
            <figure
              key={`${direction}-${isClone ? 'clone' : 'orig'}-${i}`}
              aria-hidden={isClone || undefined}
              className="group/card relative w-[220px] shrink-0 lg:w-[300px]"
            >
              <div className="relative h-[280px] w-[220px] overflow-hidden rounded-2xl border border-espresso/10 shadow-[0_14px_30px_-18px_rgba(43,36,33,0.5)] transition-transform duration-300 group-hover/card:scale-[1.02] lg:h-[340px] lg:w-[300px]">
                <Image
                  src={`/placeholder.svg?height=340&width=300&query=${encodeURIComponent(
                    cake.label + ' eggless cake',
                  )}`}
                  alt={isClone ? '' : cake.alt}
                  fill
                  loading="eager"
                  sizes="300px"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-espresso backdrop-blur-sm">
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
    <section id="atelier" className="py-16 lg:py-24">
      <header className="mb-10 px-5 text-center md:px-8">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-espresso/50">
          THE PORTFOLIO
        </p>
        <h2 className="font-serif text-4xl text-espresso md:text-5xl text-balance">
          The Visual Atelier
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-espresso/65">
          A continuous showcase of recent commissions — from intimate Bento bakes
          to multi-tier showstoppers.
        </p>
      </header>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={ROW_ONE} direction="ltr" />
        <MarqueeRow items={ROW_TWO} direction="rtl" />
      </div>

      <div className="mt-12 flex justify-center px-5">
        <a
          href={STUDIO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center gap-3 rounded-full border border-espresso/15 bg-card px-6 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:scale-[1.02] hover:border-rose hover:text-rose"
        >
          <Camera className="size-5" aria-hidden="true" />
          Follow {STUDIO.instagramHandle} for Daily Studio Captures
        </a>
      </div>
    </section>
  )
}
