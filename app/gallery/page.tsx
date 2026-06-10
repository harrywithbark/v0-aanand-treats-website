import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { GalleryClient } from '@/components/gallery-client'

export const metadata: Metadata = {
  title: 'Portfolio Gallery | Aanand Treats by Sadhna',
  description:
    'Browse the portfolio of 100% eggless custom cakes by Aanand Treats — weddings, birthdays, anniversaries, Bento cakes, baby showers, and corporate events.',
  openGraph: {
    title: 'Portfolio Gallery | Aanand Treats by Sadhna',
    description:
      'Explore bespoke eggless cake designs for every occasion — handcrafted in Surrey, BC.',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-cream">
      <SiteHeader />

      <main className="mx-auto max-w-[1440px] pt-[60px] sm:pt-[68px] md:pt-[72px]">
        {/* Sub-hero */}
        <section
          aria-labelledby="gallery-heading"
          className="border-b border-white/10 px-5 py-10 text-center sm:py-12 md:px-8 md:py-14 lg:py-20"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center sm:mb-8">
            <ol className="flex items-center gap-2 text-xs text-espresso/50">
              <li>
                <Link href="/" className="transition-colors hover:text-espresso">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-espresso/80 font-medium">
                Gallery
              </li>
            </ol>
          </nav>

          <p className="mb-2 text-[0.65rem] font-medium tracking-[0.2em] text-rose/80 sm:mb-3 sm:text-xs">
            THE ATELIER PORTFOLIO
          </p>
          <h1
            id="gallery-heading"
            className="font-serif text-3xl leading-tight text-espresso text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Crafted with Intention,{' '}
            <span className="italic gradient-text-coral">Remembered Forever.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-espresso/75 text-sm sm:mt-5 sm:text-base">
            A curated collection of bespoke, 100% eggless cakes — each one
            built around a story, an occasion, and an individual vision.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full glass border border-white/20 px-5 py-2 text-sm font-medium text-espresso/70 transition-all duration-200 hover:border-rose/60 hover:text-rose hover:shadow-glow sm:mt-8"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Home
          </Link>
        </section>

        {/* Filter + Grid */}
        <section
          aria-labelledby="portfolio-grid-heading"
          className="px-5 pb-16 sm:pb-20 md:px-8 lg:pb-28"
        >
          <h2 id="portfolio-grid-heading" className="sr-only">
            Portfolio collection
          </h2>
          <GalleryClient />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
