'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function Hero() {
  return (
    <section
      id="story"
      className="relative grid items-center gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-40"
    >
      {/* Embellishment 1: scattered dot cluster — top-right, behind image */}
      <div
        className="pointer-events-none absolute right-0 top-28 hidden select-none opacity-20 lg:block animate-in fade-in duration-1000 delay-500"
        aria-hidden="true"
      >
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <circle
              key={i}
              cx={15 + (i % 3) * 30}
              cy={15 + Math.floor(i / 3) * 30}
              r="3"
              fill={i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#f59e0b' : '#10b981'}
            />
          ))}
        </svg>
      </div>

      {/* Left: editorial statement */}
      <div className="flex flex-col gap-6">
        <ScrollReveal delay={0}>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose/25 bg-rose/8 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-rose/90 transition-colors duration-300 hover:border-rose/40 hover:bg-rose/12">
            <span className="size-1.5 rounded-full bg-sage animate-pulse" aria-hidden="true" />
            BOUTIQUE CAKE STUDIO &bull; EST. SURREY, BC
          </span>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h1
            className="font-serif font-semibold leading-[1.04] text-espresso text-balance"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4.1rem)' }}
          >
            <span className="gradient-text-coral">Custom Cakes</span>.
            <br className="hidden sm:block" />
            Handcrafted,{' '}
            <span className="italic text-rose">100% Eggless</span>,
            <br className="hidden sm:block" />
            Perfectly Balanced.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <p className="max-w-[46ch] text-pretty text-base leading-relaxed text-espresso/70">
            From India to Canada, Sadhna&apos;s private atelier crafts bespoke
            masterpieces—elegant, deeply personal, and never too sweet. Every
            detail, by hand, for your celebration.
          </p>
        </ScrollReveal>

        {/* Embellishment 2: thin wave rule above CTAs */}
        <ScrollReveal delay={300}>
          <div className="pointer-events-none select-none" aria-hidden="true">
            <svg
              width="120"
              height="10"
              viewBox="0 0 120 10"
              fill="none"
              className="float-gentle opacity-35"
            >
              <path
                d="M0 5 Q15 0 30 5 Q45 10 60 5 Q75 0 90 5 Q105 10 120 5"
                stroke="url(#waveGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="waveGrad" x1="0" y1="0" x2="120" y2="0">
                  <stop offset="0%" stopColor="#ff6b6b" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={360}>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#intake"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-lg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-[0.97]"
            >
              Build Your Cake
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#atelier"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-espresso/15 bg-transparent px-7 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:border-rose/40 hover:bg-rose/5 hover:text-rose hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-[0.97]"
            >
              View the Atelier
            </a>
          </div>
        </ScrollReveal>

        {/* Decorative accents */}
        <div className="absolute -left-8 top-1/4 size-2 rounded-full bg-rose/30" aria-hidden="true" />
        <div className="absolute -left-4 bottom-1/3 size-1.5 rounded-full bg-amber-vivid/40" aria-hidden="true" />
      </div>

      {/* Right: editorial frame */}
      <ScrollReveal delay={180} className="relative">
        <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-rose/30 shadow-hero bg-gradient-to-br from-rose/8 to-cream transition-all duration-500 hover:border-rose/50 hover:shadow-[0_40px_80px_-30px_rgba(26,26,46,0.45),0_0_30px_rgba(255,107,107,0.12)]">
          <Image
            src="/placeholder.svg?height=900&width=675"
            alt="Signature multi-tier eggless celebration cake finished with delicate hand-piped buttercream florals and gold-leaf accents by Aanand Treats"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
          {/* Decorative corner accent */}
          <div
            className="absolute -right-3 -top-3 size-12 rounded-full bg-amber-vivid/20 blur-xl"
            aria-hidden="true"
          />
        </div>
        <span className="absolute -bottom-4 left-6 rounded-full bg-gradient-to-r from-rose to-amber-vivid px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-badge shine-badge">
          Signature Creation
        </span>
        {/* Decorative accent */}
        <div
          className="absolute -bottom-6 right-8 size-2 rounded-full bg-emerald-vivid/50"
          aria-hidden="true"
        />
      </ScrollReveal>
    </section>
  )
}
