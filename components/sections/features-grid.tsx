"use client"

import { Zap, Brain, Calendar, RefreshCw, Plug, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const features = [
  {
    title: 'Instant Response',
    description: 'Zen calls your leads within 30 seconds of submission.',
    icon: Zap,
  },
  {
    title: 'Smart Qualification',
    description: 'AI-powered conversations that ask the right questions.',
    icon: Brain,
  },
  {
    title: 'Automated Booking',
    description: 'Qualified leads booked directly into your calendar.',
    icon: Calendar,
  },
  {
    title: 'Persistent Follow-ups',
    description: 'Automated sequences ensure no lead falls through.',
    icon: RefreshCw,
  },
  {
    title: 'CRM Integration',
    description: 'Connect with HubSpot, Salesforce, Zoho, and more.',
    icon: Plug,
  },
  {
    title: '24/7 Coverage',
    description: 'Zen works around the clock, including weekends.',
    icon: Clock,
  },
]

export function FeaturesGridSection() {
  return (
    <section id="features" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Everything you need to convert more leads
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              Zen combines instant response, intelligent qualification, and seamless
              automation.
            </p>

            {/* Features Grid */}
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover"
                >
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <feature.icon className="h-6 w-6 text-[#1B6FFF]" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
