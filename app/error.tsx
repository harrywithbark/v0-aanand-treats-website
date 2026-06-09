'use client'

import { useEffect } from 'react'
import { MessageCircle, Hop as Home, RefreshCw } from 'lucide-react'
import { whatsappLink } from '@/lib/studio'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-5">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-rose/10">
          <RefreshCw className="size-8 text-rose" aria-hidden="true" />
        </div>
        <h1 className="font-serif text-3xl text-espresso">Something went wrong</h1>
        <p className="mt-3 text-sm leading-relaxed text-espresso/70">
          We encountered an unexpected issue. Try refreshing the page, or reach out to Sadhna directly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={reset} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-medium text-cream shadow-glow transition-all hover:brightness-110">
            <RefreshCw className="size-4" aria-hidden="true" /> Try Again
          </button>
          <a href="/" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full glass border border-cream/40 px-6 py-3 text-sm font-medium text-espresso transition-all hover:shadow-lg">
            <Home className="size-4" aria-hidden="true" /> Back to Home
          </a>
          <a href={whatsappLink('Hi Sadhna! I had trouble on the website. Can you help?')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-emerald-vivid/15 border border-sage/30 px-6 py-3 text-sm font-medium text-sage transition-all hover:bg-sage hover:text-cream">
            <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp Sadhna
          </a>
        </div>
      </div>
    </div>
  )
}
