'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { VisualAtelier } from '@/components/visual-atelier'
import { EventTypesSection } from '@/components/event-types-section'
import { IntakePanel } from '@/components/intake-panel'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BackToTop } from '@/components/back-to-top'

export default function Page() {
  const [bannerDismissed, setBannerDismissed] = useState(false)

  useEffect(() => {
    try {
      setBannerDismissed(localStorage.getItem('aanand-banner-dismissed') === '1')
    } catch {}
  }, [])

  const dismiss = () => {
    setBannerDismissed(true)
    try { localStorage.setItem('aanand-banner-dismissed', '1') } catch {}
  }

  return (
    <div id="top" className="min-h-screen bg-cream">
      <SiteHeader />

      <main id="main-content" className="mx-auto max-w-[1440px]">
        <Hero />

        <ScrollReveal>
          <VisualAtelier />
        </ScrollReveal>

        <ScrollReveal>
          <EventTypesSection />
        </ScrollReveal>

        <ScrollReveal>
          <IntakePanel />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <SiteFooter />
      </ScrollReveal>

      <BackToTop />

      {!bannerDismissed && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 bg-espresso px-4 py-3 text-center shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)] md:hidden">
          <a href="#intake" className="flex flex-1 items-center justify-center gap-2 text-sm font-medium text-cream">
            <span className="size-2 rounded-full bg-sage" aria-hidden="true" />
            100% Eggless Custom Cakes • Build Your Cake Below
          </a>
          <button onClick={dismiss} aria-label="Dismiss banner" className="flex size-8 items-center justify-center rounded-full text-cream/60 hover:text-cream hover:bg-white/20 transition-colors">
            <X className="size-4" />
          </button>
        </div>
      )}
    </div>
  )
}
