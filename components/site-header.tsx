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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 border-b border-rose/20 bg-gradient-to-r from-rose/10 via-amber-vivid/5 to-cream px-4 py-2.5 backdrop-blur-xl sm:gap-6 sm:px-5 sm:py-3 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Left: status token */}
        <span className="hidden shrink-0 text-[0.65rem] font-medium tracking-[0.18em] text-espresso/80 lg:block">
          <span className="inline-block size-1.5 rounded-full bg-sage mr-1.5" aria-hidden="true" />
          100% EGGLESS • SURREY, BC
        </span>

        {/* Center: brand */}
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-espresso transition-transform duration-300 hover:scale-[1.02] sm:text-xl lg:text-center lg:whitespace-nowrap lg:text-2xl"
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
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-rose px-5 py-2 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-lg hover:brightness-110"
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
          className="flex size-11 items-center justify-center rounded-full text-espresso transition-all duration-300 hover:bg-rose/10 hover:text-rose lg:hidden"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Scrim */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-espresso/40 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Slide-in drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed right-0 top-0 z-50 flex h-dvh w-[min(85vw,340px)] flex-col glass-panel px-6 py-5 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-7 sm:py-6 lg:hidden"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] font-medium tracking-[0.18em] text-espresso/60 sm:text-[0.65rem]">
            100% EGGLESS • SURREY, BC
          </span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="flex size-11 items-center justify-center rounded-full text-espresso transition-all duration-300 hover:bg-rose/10 hover:text-rose"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1 sm:mt-10 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[48px] items-center border-b border-espresso/10 font-serif text-lg text-espresso transition-colors hover:text-rose sm:text-xl"
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
          className="mt-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-rose px-5 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:shadow-glow-lg hover:brightness-110"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Chat via WhatsApp
        </a>
        <p className="mt-4 text-center text-xs text-espresso/50">{STUDIO.phoneDisplay}</p>
      </aside>
    </header>
  )
}
