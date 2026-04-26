"use client"

import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark background for final CTA block */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D1A] to-[#0A1F3D]" />
      <div className="absolute inset-0 animated-grid pointer-events-none" />
      
      <ScrollReveal>
        <div className="relative z-10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Title */}
              <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to transform your lead response?
              </h2>

              {/* Subtitle */}
              <p className="mb-8 max-w-xl text-pretty text-lg text-white/70">
                Join 52+ companies already using Zen to capture leads and book
                appointments 24/7.
              </p>

              {/* CTA Button */}
              <a
                href="#industry-selector"
                className="btn-apple inline-flex items-center gap-2 bg-[#1B6FFF] px-8 py-4 text-base font-medium text-white hover:bg-[#1557CC] shadow-[0_0_30px_rgba(27,111,255,0.5)] hover:shadow-[0_0_40px_rgba(27,111,255,0.6)] transition-all"
              >
                Book a Discovery Call
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
