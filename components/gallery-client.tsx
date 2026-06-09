'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { PORTFOLIO_ITEMS, GALLERY_FILTERS, type PortfolioItem, type OccasionId } from '@/lib/studio'
import { PortfolioModal } from '@/components/portfolio-modal'
import { ScrollReveal } from '@/components/scroll-reveal'

export function GalleryClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const urlFilter = searchParams.get('occasion') as OccasionId | 'all' | null
  const [activeFilter, setActiveFilter] = useState<OccasionId | 'all'>(urlFilter || 'all')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    if (urlFilter && GALLERY_FILTERS.some(f => f.id === urlFilter)) {
      setActiveFilter(urlFilter)
    }
  }, [urlFilter])

  const handleFilterChange = useCallback((filter: OccasionId | 'all') => {
    setActiveFilter(filter)
    const params = new URLSearchParams(searchParams.toString())
    if (filter === 'all') {
      params.delete('occasion')
    } else {
      params.set('occasion', filter)
    }
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [searchParams, router])

  const filtered = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.occasion === activeFilter)

  const handleClose = useCallback(() => setSelected(null), [])

  return (
    <>
      <nav aria-label="Filter portfolio by occasion" className="flex flex-wrap justify-center gap-2 py-8">
        {GALLERY_FILTERS.map((f) => {
          const isActive = activeFilter === f.id
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleFilterChange(f.id)}
              className={`min-h-[44px] rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose/60 ${
                isActive
                  ? 'border-rose bg-rose text-cream shadow-glow'
                  : 'border-cream/20 glass text-espresso/70 hover:border-rose/60 hover:text-rose hover:shadow-glow'
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </nav>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-live="polite" aria-label="Portfolio items">
        {filtered.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 50}>
            <article
              role="listitem"
              className="group cursor-pointer overflow-hidden rounded-2xl glass-card border border-cream/20 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose/20"
              onClick={() => setSelected(item)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(item) } }}
              tabIndex={0}
              aria-label={`View details for ${item.title} — ${item.occasionLabel}`}
            >
              <div className="relative h-[280px] w-full overflow-hidden bg-secondary">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 p-5">
                  <span className="text-sm font-medium text-cream">View Details</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-rose/20 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.12em] text-espresso/80">{item.occasionLabel.toUpperCase()}</span>
                </div>
                <h3 className="font-serif text-lg text-espresso leading-snug">{item.title}</h3>
                <p className="text-xs leading-relaxed text-espresso/55 text-pretty line-clamp-2">{item.description}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-espresso/50" role="status">No portfolio items for this category yet.</p>
      )}

      {selected && <PortfolioModal item={selected} onClose={handleClose} />}
    </>
  )
}
