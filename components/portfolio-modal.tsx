'use client'

import Image from 'next/image'
import { X, MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { PortfolioItem } from '@/lib/studio'
import { portfolioWhatsapp } from '@/lib/studio'

export function PortfolioModal({
  item,
  onClose,
}: {
  item: PortfolioItem
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus the close button when modal opens
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Trap focus and close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-espresso/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-cream shadow-2xl">
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          aria-label="Close portfolio detail"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-espresso/80 text-cream backdrop-blur-sm transition-colors hover:bg-espresso"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {/* Image */}
        <div className="relative h-[280px] w-full bg-secondary sm:h-[340px]">
          <Image
            src={`/placeholder.svg?height=340&width=672&query=${encodeURIComponent(
              item.alt,
            )}`}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <span className="absolute left-4 bottom-4 rounded-full bg-espresso/80 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-cream backdrop-blur-sm">
            {item.occasionLabel.toUpperCase()}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-9">
          <p className="mb-1.5 text-xs font-medium tracking-[0.18em] text-rose">
            {item.occasionLabel.toUpperCase()}
          </p>
          <h2
            id="modal-title"
            className="font-serif text-2xl text-espresso sm:text-3xl"
          >
            {item.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-espresso/70 text-pretty">
            {item.description}
          </p>
          <a
            href={portfolioWhatsapp(item.occasionLabel, item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-espresso transition-all duration-300 hover:scale-[1.02] hover:brightness-105"
            aria-label={`Inquire about the ${item.title} style via WhatsApp`}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Inquire About This Style
          </a>
        </div>
      </div>
    </div>
  )
}
