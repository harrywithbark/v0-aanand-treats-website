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
    <section id="intake" className="px-5 py-16 md:px-8 lg:py-24">
      <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-rose/30 via-amber-vivid/15 to-cream p-8 shadow-deep md:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: messaging lane */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-rose/80">
              CUSTOM CAKE BUILDER
            </p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl text-balance">
              Let&apos;s Design Your <span className="gradient-text-coral">Masterpiece</span>.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-espresso/75">
              Have an immediate question? Chat directly with Sadhna on WhatsApp.
            </p>
            <a
              href={whatsappLink('Hi Sadhna! I have a quick question about a custom eggless cake.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-lg hover:brightness-110"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat directly with Sadhna
            </a>
          </div>

          {/* Right: quick-spec grid */}
          <div className="rounded-2xl border border-white/30 glass-strong p-6 md:p-8">
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
                  className="min-h-[48px] rounded-xl border border-white/30 bg-white/50 px-4 text-sm text-espresso outline-none transition-all focus:border-rose focus:ring-2 focus:ring-rose/30 shadow-inner-soft"
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
              <div className="flex items-center gap-3 rounded-xl border border-emerald-vivid/30 bg-emerald-vivid/10 px-4 py-3">
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
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-amber-vivid px-7 py-3 text-sm font-semibold text-white shadow-amber transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-amber hover:brightness-110"
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
