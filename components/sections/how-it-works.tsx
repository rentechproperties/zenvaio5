"use client"

import { FileText, Phone, MessageSquare, Calendar } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const steps = [
  {
    number: '01',
    title: 'Lead Submits',
    description:
      'A prospect fills out your form, clicks an ad, or enters your funnel. Zen is instantly notified.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Zen Calls',
    description:
      'Within 30 seconds, Zen calls your lead with a natural, human-like voice conversation.',
    icon: Phone,
  },
  {
    number: '03',
    title: 'Qualifies Lead',
    description:
      'Zen asks your custom qualifying questions, handles objections, and gauges interest level.',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'Books Appointment',
    description:
      'Qualified leads are instantly booked into your calendar. You only talk to ready-to-buy prospects.',
    icon: Calendar,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              How Zen Works
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              From lead submission to booked appointment in minutes, not days.
            </p>

            {/* Steps */}
            <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover"
                >
                  {/* Step Number */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <step.icon className="h-6 w-6 text-[#1B6FFF]" />
                  </div>

                  {/* Step Label */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#475569]">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 translate-x-full bg-[#E2E8F0] lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
