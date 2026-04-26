"use client"

import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const plans = [
  {
    name: 'Quick Start',
    price: '$399',
    period: '/mo',
    extra: '+ $0.65/min',
    commitment: 'Month-to-month',
    features: ['Outbound calls', 'Lead qualification', 'Email support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$999',
    period: '/mo',
    extra: '+ $0.65/min',
    commitment: '12-Month Commitment - Save $6,000/year',
    features: ['SMS + Email follow-up', 'CRM Integration', 'Analytics Dashboard'],
    popular: true,
  },
  {
    name: 'Pro Saver',
    price: '$499',
    period: '/mo',
    extra: '+ $0.65/min',
    commitment: '$3,800 Setup',
    features: ['All Pro features', 'Lower monthly cost', 'Dedicated support'],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              Choose the plan that fits your business. No hidden fees.
            </p>

            {/* Pricing Cards */}
            <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 text-left card-hover ${
                    plan.popular
                      ? 'border-[#1B6FFF] bg-white shadow-[0_0_30px_rgba(27,111,255,0.15)]'
                      : 'border-[#E2E8F0] bg-white'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1B6FFF] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="mb-4 text-xl font-semibold text-[#0F172A]">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[#0F172A]">
                      {plan.price}
                    </span>
                    <span className="text-[#64748B]">{plan.period}</span>
                  </div>

                  {/* Extra */}
                  <p className="mb-2 text-sm text-[#94A3B8]">{plan.extra}</p>

                  {/* Commitment */}
                  <p className="mb-6 text-sm font-medium text-[#1B6FFF]">
                    {plan.commitment}
                  </p>

                  {/* Features */}
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#475569]">
                        <Check className="h-4 w-4 flex-shrink-0 text-[#1B6FFF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`btn-apple w-full px-6 py-3 text-base font-medium ${
                      plan.popular
                        ? 'bg-[#1B6FFF] text-white hover:bg-[#1557CC] shadow-[0_0_15px_rgba(27,111,255,0.3)]'
                        : 'border border-[#E2E8F0] bg-white text-[#475569] hover:border-[#1B6FFF]/50 hover:text-[#0F172A]'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
