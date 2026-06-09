'use client'

import { useState } from 'react'
import { MessageCircle, Send, Check } from 'lucide-react'
import { whatsappLink } from '@/lib/studio'

const OCCASIONS = ['Wedding', 'Birthday', 'Anniversary', 'Bento']

export function IntakePanel() {
  const [occasion, setOccasion] = useState('Wedding')
  const [notes, setNotes] = useState('')

  function sendBlueprint() {
    const message = [
      'Hello Sadhna! Here is my custom cake blueprint:',
      '',
      `• Occasion: ${occasion}`,
      `• Desired Flavor / Design Notes: ${notes.trim() || '(to discuss)'}`,
      '• 100% Eggless Studio Guarantee: Yes ✓',
      '',
      'Looking forward to designing my masterpiece with you!',
    ].join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="intake" className="relative px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:py-24">
      {/* Decorative accent 8 */}
      <div className="absolute -left-32 bottom-1/4 size-52 rounded-full bg-emerald-vivid/8 blur-3xl pointer-events-none" aria-hidden="true" />
      {/* Decorative accent 9 */}
      <div className="absolute -right-20 top-1/3 size-40 rounded-full bg-rose/10 blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="relative overflow-hidden rounded-2xl border border-rose/25 bg-gradient-to-br from-rose/25 via-amber-vivid/15 to-emerald-vivid/10 p-5 shadow-deep backdrop-blur-sm sm:rounded-[2rem] sm:p-8 md:p-12">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,107,107,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}} aria-hidden="true" />
        
        <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left: messaging lane */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-rose/80">
              CUSTOM CAKE BUILDER
            </p>
            <h2 className="font-serif text-3xl leading-tight text-espresso sm:text-4xl md:text-5xl text-balance">
              Let&apos;s Design Your <span className="gradient-text-coral">Masterpiece</span>.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-espresso/75">
              Have an immediate question? Chat directly with Sadhna on WhatsApp.
            </p>
            <a
              href={whatsappLink('Hi Sadhna! I have a quick question about a custom eggless cake.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-lg hover:brightness-110 sm:mt-7 sm:w-fit sm:min-h-[48px]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat directly with Sadhna
            </a>
            {/* Decorative accent 10 */}
            <div className="absolute -bottom-8 -left-12 size-3 rounded-full bg-amber-vivid/60" aria-hidden="true" />
          </div>

          {/* Right: quick-spec grid */}
          <div className="relative rounded-2xl border border-rose/30 backdrop-blur-lg bg-white/20 p-5 shadow-lg sm:p-6 md:p-8">
            {/* Embellishment 5: watermark cake silhouette in form card corner */}
            <div className="pointer-events-none absolute bottom-4 right-4 select-none opacity-[0.07]" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M32 6c2 0 3.5-1.5 3.5-3.5S34 -1 32 -1s-3.5 1.5-3.5 3.5S30 6 32 6z" fill="#ff6b6b"/>
                <rect x="10" y="12" width="44" height="8" rx="4" fill="#f59e0b"/>
                <rect x="6" y="20" width="52" height="36" rx="8" fill="#ff6b6b"/>
                <path d="M18 38h28M18 46h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="occasion"
                  className="text-sm font-medium text-espresso"
                >
                  Occasion Type
                </label>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="min-h-[48px] rounded-xl border border-white/40 bg-white/50 px-4 text-sm text-espresso outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 shadow-inner-soft"
                >
                  {OCCASIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-espresso"
                >
                  Desired Flavor / Design Notes
                </label>
                <input
                  id="notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Biscoff, two tiers, sage & gold theme"
                  className="min-h-[48px] rounded-xl border border-espresso/20 bg-card px-4 text-sm text-espresso outline-none transition-colors placeholder:text-espresso/40 focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>

              {/* Locked, pre-checked guarantee */}
              <div className="flex items-center gap-3 rounded-xl border border-emerald-vivid/40 bg-emerald-vivid/15 px-4 py-3">
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-md bg-emerald-vivid text-white"
                  aria-hidden="true"
                >
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium text-espresso">
                  100% Eggless Studio Guarantee
                </span>
                <input
                  type="checkbox"
                  checked
                  readOnly
                  disabled
                  aria-label="100% Eggless Studio Guarantee — always included"
                  className="sr-only"
                />
              </div>

              <button
                type="button"
                onClick={sendBlueprint}
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-vivid to-rose px-7 py-3 text-sm font-semibold text-white shadow-amber transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-amber hover:brightness-110 sm:min-h-[48px]"
              >
                <Send className="size-4" aria-hidden="true" />
                Send Blueprint to WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
