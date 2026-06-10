'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-20 right-4 z-30 flex size-11 items-center justify-center rounded-full glass border border-cream/30 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:bottom-6 sm:right-6 sm:z-40 sm:size-12 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="size-5 text-espresso" aria-hidden="true" />
    </button>
  )
}
