import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { VisualAtelier } from '@/components/visual-atelier'
import { IntakePanel } from '@/components/intake-panel'
import { SiteFooter } from '@/components/site-footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-cream">
      <SiteHeader />

      <main className="mx-auto max-w-[1440px]">
        <Hero />

        <ScrollReveal>
          <VisualAtelier />
        </ScrollReveal>

        <ScrollReveal>
          <IntakePanel />
        </ScrollReveal>
      </main>

      <ScrollReveal>
        <SiteFooter />
      </ScrollReveal>

      {/* Mobile sticky notification tray */}
      <a
        href="#intake"
        className="fixed inset-x-0 bottom-0 z-40 flex min-h-[48px] items-center justify-center gap-2 bg-espresso px-4 py-3 text-center text-sm font-medium text-cream shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)] md:hidden"
      >
        <span className="size-2 rounded-full bg-sage" aria-hidden="true" />
        100% Eggless Custom Cakes • Build Your Cake Below
      </a>
    </div>
  )
}
