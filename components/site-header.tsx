'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { STUDIO, whatsappLink } from '@/lib/studio'

const NAV = [
  { label: 'The Atelier', href: '#atelier' },
  { label: 'Our Story', href: '#story' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Custom Intake', href: '#intake' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 border-b border-espresso/10 bg-cream/70 px-5 py-3 backdrop-blur-[12px] md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: status token */}
        <span className="hidden shrink-0 text-[0.65rem] font-medium tracking-[0.18em] text-espresso/70 lg:block">
          100% EGGLESS • SURREY, BC
        </span>

        {/* Center: brand */}
        <a
          href="#top"
          className="font-serif text-xl tracking-wide text-espresso transition-transform duration-300 hover:scale-[1.02] sm:text-2xl lg:text-center lg:whitespace-nowrap"
        >
          Aanand Treats <span className="italic text-rose">by Sadhna</span>
        </a>

        {/* Right: desktop nav */}
        <nav className="hidden items-center justify-end gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-espresso/80 transition-all duration-300 hover:scale-[1.02] hover:text-espresso"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink('Hi Sadhna! I would love to ask about a custom eggless cake.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold px-5 py-2 text-sm font-medium text-espresso transition-all duration-300 hover:scale-[1.02] hover:bg-gold/10"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat via WhatsApp
          </a>
        </nav>

        {/* Mobile / tablet menu trigger */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex size-12 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5 lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Scrim */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed right-0 top-0 z-50 flex h-dvh w-[min(82vw,340px)] flex-col bg-cream px-7 py-6 shadow-2xl transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] font-medium tracking-[0.18em] text-espresso/60">
            100% EGGLESS • SURREY, BC
          </span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="flex size-12 items-center justify-center rounded-full text-espresso transition-colors hover:bg-espresso/5"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center border-b border-espresso/10 font-serif text-xl text-espresso transition-colors hover:text-rose"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink('Hi Sadhna! I would love to ask about a custom eggless cake.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-medium text-cream transition-all duration-300 hover:bg-espresso/90"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Chat via WhatsApp
        </a>
        <p className="mt-4 text-center text-xs text-espresso/50">{STUDIO.phoneDisplay}</p>
      </aside>
    </header>
  )
}
