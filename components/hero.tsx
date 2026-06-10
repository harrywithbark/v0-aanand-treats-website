'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

function useTilt<T extends HTMLElement>(intensity = 5) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.02,1.02,1.02)`
    }
    const handleLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => { el.removeEventListener('mousemove', handleMove); el.removeEventListener('mouseleave', handleLeave) }
  }, [intensity])
  return ref
}

export function Hero() {
  const tiltRef = useTilt<HTMLDivElement>(3)
  return (
    <section
      id="story"
      role="banner"
      className="relative mx-auto max-w-screen-lg grid items-center gap-8 px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-32 lg:px-0 lg:grid-cols-2 lg:gap-14 lg:pt-40"
    >
      <div className="pointer-events-none absolute right-0 top-28 hidden select-none opacity-25 lg:block" aria-hidden="true">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <circle key={i} cx={15+(i%3)*30} cy={15+Math.floor(i/3)*30} r="3" fill={i%3===0?'#ff6b6b':i%3===1?'#f59e0b':'#10b981'} />
          ))}
        </svg>
      </div>

      <div className="reveal-none flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose/20 bg-rose/5 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.16em] text-rose/90">
          <span className="size-1.5 rounded-full bg-sage animate-pulse" aria-hidden="true" />
          BOUTIQUE CAKE STUDIO • EST. SURREY, BC
        </span>

        <h1 className="font-serif font-medium leading-[1.05] text-espresso text-balance" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>
          <span className="gradient-text-coral">Custom Cakes</span>. Handcrafted,{' '}
          <span className="italic text-rose">100% Eggless</span>, Perfectly Balanced.
        </h1>

        <p className="max-w-xl text-pretty leading-relaxed text-espresso/75">
          From India to Canada, Sadhna&apos;s private atelier crafts bespoke masterpieces—elegant, deeply personal, and never too sweet. Every detail, by hand, for your celebration.
        </p>

        <div className="pointer-events-none select-none" aria-hidden="true">
          <svg width="120" height="10" viewBox="0 0 120 10" fill="none" className="opacity-30">
            <path d="M0 5 Q15 0 30 5 Q45 10 60 5 Q75 0 90 5 Q105 10 120 5" stroke="url(#waveGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <defs><linearGradient id="waveGrad" x1="0" y1="0" x2="120" y2="0"><stop offset="0%" stopColor="#ff6b6b"/><stop offset="50%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#10b981"/></linearGradient></defs>
          </svg>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a href="#intake" className="inline<think> min-h-[48px] items-center justify-center rounded-full bg-rose px-7 py-3 text-sm font-medium text-cream shadow-glow transition-all duration-300 hover:scale-[1.03] hover:brightness-110">Build Your Cake</a>
          <a href="#atelier" className="inline<think> min-h-[48px] items-center justify-center rounded-full glass border border-cream/40 px-7 py-3 text-sm font-medium text-espresso shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:-translate-y-0.5">View the Atelier</a>
        </div>

        <div className="hidden sm:block absolute -left-8 top-1/4 size-2 rounded-full bg-rose/30" aria-hidden="true" />
        <div className="hidden sm:block absolute -left-4 bottom-1/3 size-1.5 rounded-full bg-amber-vivid/40" aria-hidden="true" />
      </div>

      <div className="relative">
        <div ref={tiltRef} className="relative aspect-square w-full overflow-hidden rounded-3xl border border-rose/30 shadow-hero transition-transform duration-200 ease-out" style={{transformStyle:'preserve-3d'}}>
          <Image
            src="/Screenshot_2026-06-08_163102.png"
            alt="Signature romantic eggless cake with a vibrant red rose, satin ribbon, and baby's breath by Aanand Treats by Sadhna"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
          <div className="absolute -right-3 -top-3 size-12 rounded-full bg-amber-vivid/20 blur-xl" aria-hidden="true" />
        </div>
        <span className="absolute -bottom-4 left-6 rounded-full bg-gradient-to-r from-rose to-amber-vivid px-5 py-2 text-xs font-semibold tracking-wide text-cream shadow-glow">Signature Creation</span>
        <div className="absolute -bottom-6 right-8 size-2 rounded-full bg-sage/50" aria-hidden="true" />
      </div>
    </section>
  )
}
