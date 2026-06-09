import Image from 'next/image'
import { Camera } from 'lucide-react'
import { STUDIO } from '@/lib/studio'

type Cake = { src: string; alt: string; label: string }

const ROW_ONE: Cake[] = [
  {
    src: '/Screenshot_2026-06-08_221528.png',
    alt: 'Luxury white eggless birthday cake adorned with gold Ferrero Rocher chocolates, gold spheres, hand-piped white florals, and edible gold leaf by Aanand Treats',
    label: 'Gold Indulgence',
  },
  {
    src: '/images/biscoff-bento.jpg',
    alt: 'Trending Biscoff Bento cake with caramelised cookie crumb layering and a glossy spiced drip by Aanand Treats',
    label: 'Biscoff Bento',
  },
  {
    src: '/images/signature-cupcakes.jpg',
    alt: 'Row of softly piped buttercream cupcakes in cream and rose tones with sugared petal accents by Aanand Treats',
    label: 'Signature Cupcakes',
  },
  {
    src: '/images/chocolate-hamper.jpg',
    alt: 'Luxury eggless chocolate gift hamper arranged with satin ribbon and gold foil detailing by Aanand Treats',
    label: 'Chocolate Hamper',
  },
  {
    src: '/images/modern-minimal.jpg',
    alt: 'Modern sage green celebration cake finished with hand-applied gold leaf and a smooth sculpted edge by Aanand Treats',
    label: 'Modern Minimal',
  },
]

const ROW_TWO: Cake[] = [
  {
    src: '/images/wedding-silhouette.jpg',
    alt: 'Intricate three-tier white wedding cake silhouette dressed with cascading sugar florals by Aanand Treats',
    label: 'Wedding Silhouette',
  },
  {
    src: '/images/graduation.jpg',
    alt: 'Floral buttercream graduation cake with elegant script work and a cap detail by Aanand Treats',
    label: 'Graduation',
  },
  {
    src: '/images/baby-shower.jpg',
    alt: 'Textured pastel baby shower cake with vibrant piped florals and soft ruffle detailing by Aanand Treats',
    label: 'Baby Shower',
  },
  {
    src: '/images/anniversary.jpg',
    alt: 'Elegant two-tier anniversary cake with gilded gold accents and a fine pearl border by Aanand Treats',
    label: 'Anniversary',
  },
  {
    src: '/images/showstopper.jpg',
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
              <div className="relative h-[280px] w-[220px] overflow-hidden rounded-2xl border border-cream/20 shadow-md transition-all duration-300 group-hover/card:scale-[1.03] group-hover/card:shadow-lg lg:h-[340px] lg:w-[300px]">
                <Image
                  src={cake.src}
                  alt={isClone ? '' : cake.alt}
                  fill
                  loading="eager"
                  sizes="300px"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-espresso shadow-md backdrop-blur-sm">
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
      <div className="absolute -left-32 top-1/3 size-48 rounded-full bg-rose/10 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <header className="mb-10 px-5 text-center md:px-8">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-rose/80">THE PORTFOLIO</p>
        <h2 className="font-serif text-4xl text-espresso md:text-5xl text-balance">
          The Visual <span className="gradient-text-coral">Atelier</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-espresso/75">
          A continuous showcase of recent commissions — from intimate Bento bakes to multi-tier showstoppers.
        </p>
        <div className="flex items-center justify-center gap-2 mt-2 pointer-events-none select-none" aria-hidden="true">
          <span className="inline-block size-1 rotate-45 rounded-sm bg-rose/40" />
          <span className="inline-block size-1.5 rotate-45 rounded-sm bg-amber-vivid/50" />
          <span className="inline-block size-1 rotate-45 rounded-sm bg-sage/40" />
          <span className="inline-block size-1.5 rotate-45 rounded-sm bg-rose/40" />
          <span className="inline-block size-1 rotate-45 rounded-sm bg-amber-vivid/50" />
        </div>
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
          className="inline<think> min-h-[48px] items-center gap-3 rounded-full glass border border-cream/40 px-6 py-3 text-sm font-medium text-espresso shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:-translate-y-0.5 hover:border-rose/30"
        >
          <Camera className="size-5 text-rose" aria-hidden="true" />
          Follow {STUDIO.instagramHandle} for Daily Studio Captures
        </a>
      </div>
    </section>
  )
}
