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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-4 sm:items-center"
    >
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-espresso/70 backdrop-blur-xl scrim-animate"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 my-8 w-full max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl glass-panel shadow-deep modal-animate sm:my-auto">
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          aria-label="Close portfolio detail"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-espresso/80 text-white backdrop-blur-sm transition-all duration-300 hover:bg-rose hover:shadow-glow sm:right-4 sm:top-4 sm:size-10"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        {/* Image */}
        <div className="relative h-[220px] w-full bg-secondary sm:h-[280px] md:h-[340px]">
          <Image
            src={`/placeholder.svg?height=340&width=672&query=${encodeURIComponent(
              item.alt,
            )}`}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <span className="absolute left-3 bottom-3 rounded-full bg-rose/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] text-white shadow-glow backdrop-blur-sm sm:left-4 sm:bottom-4">
            {item.occasionLabel.toUpperCase()}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 md:p-9">
          <p className="mb-1 text-xs font-medium tracking-[0.18em] text-rose sm:mb-1.5">
            {item.occasionLabel.toUpperCase()}
          </p>
          <h2
            id="modal-title"
            className="font-serif text-xl text-espresso sm:text-2xl md:text-3xl"
          >
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-espresso/70 text-pretty sm:mt-4">
            {item.description}
          </p>
          <a
            href={portfolioWhatsapp(item.occasionLabel, item.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-amber-vivid px-6 py-3 text-sm font-semibold text-white shadow-amber transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-amber hover:brightness-110 sm:mt-6 sm:px-7"
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
