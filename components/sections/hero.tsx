"use client"

import { Zap, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { LegacyTicker } from '@/components/legacy-ticker'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Navy-to-Midnight Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D1A] to-[#0A1F3D]" />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 animated-grid pointer-events-none" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#1B6FFF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 pt-24 pb-8">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1B6FFF]/30 bg-[#1B6FFF]/10 px-4 py-2">
                <Zap className="h-4 w-4 text-[#1B6FFF]" />
                <span className="text-sm font-semibold text-[#1B6FFF] uppercase tracking-wider">
                  AI-Powered Voice Agent
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                While other creators talk theory,<br />
                <span className="bg-gradient-to-r from-[#1B6FFF] to-[#60A5FA] bg-clip-text text-transparent">
                  we&apos;re building real systems
                </span>
              </h1>

              {/* Glowing Blue Line */}
              <div className="glow-line w-48 mb-8" />

              {/* Subheadline */}
              <p className="mb-4 max-w-3xl text-balance text-xl font-medium text-white/90 sm:text-2xl">
                Custom AI voice agents, chat agents, and workflow automations that save you 20+ hours a week
              </p>

              {/* Description */}
              <p className="mb-10 max-w-2xl text-pretty text-lg text-white/60">
                Stop working in your business. Start working on it.
              </p>

              {/* Button with glow */}
              <div className="mb-6">
                <Link
                  href="#industry-selector"
                  className="btn-apple inline-flex items-center justify-center gap-2 bg-[#1B6FFF] hover:bg-[#1557CC] px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(27,111,255,0.5)] transition-all hover:shadow-[0_0_40px_rgba(27,111,255,0.6)] hover:scale-105"
                >
                  Book a Discovery Call <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stars + Trust Text */}
              <div className="flex flex-col items-center gap-2 mb-12">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-white/50 text-sm font-medium uppercase tracking-wide">
                  Trusted by 52+ Companies Worldwide
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Company Ticker - Now at the bottom of hero with white background */}
      <LegacyTicker />
    </section>
  )
}
