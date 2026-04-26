"use client"

import { useState } from 'react'
import { Calculator, TrendingUp, PhoneMissed, Users, DollarSign, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'

const fmt = (v: number) =>
  v.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })

export function ROISection() {
  const [totalCalls, setTotalCalls] = useState(1000)
  const [missedRate, setMissedRate] = useState(15)
  const [conversionRate, setConversionRate] = useState(20)
  const [avgValue, setAvgValue] = useState(500)

  const missedCalls = Math.round(totalCalls * (missedRate / 100))
  const lostConversions = Math.round(missedCalls * (conversionRate / 100))
  const monthlyLost = lostConversions * avgValue
  const annualImpact = monthlyLost * 12

  return (
    <section id="roi-calculator" className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1B6FFF]/20 bg-[#EFF6FF] px-4 py-2">
              <Calculator className="h-4 w-4 text-[#1B6FFF]" />
              <span className="text-sm font-semibold text-[#1B6FFF] uppercase tracking-wider">ROI Calculator</span>
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              See How Much Revenue You're{' '}
              <span className="text-[#1B6FFF]">Leaving on the Table</span>
            </h2>
            <p className="max-w-2xl text-lg text-[#475569]">
              Enter your numbers below to see the impact of an AI agent that answers 100% of your calls.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* LEFT — Inputs */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                Your Current Numbers
              </h3>

              <div className="space-y-6">
                {/* Total Monthly Calls */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-semibold text-[#0F172A]">Total Monthly Calls</label>
                    <span className="text-sm font-bold text-[#1B6FFF]">{totalCalls.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100" max="10000" step="100"
                    value={totalCalls}
                    onChange={(e) => setTotalCalls(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none bg-[#E2E8F0] accent-[#1B6FFF] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs text-[#94A3B8]">
                    <span>100</span><span>10,000</span>
                  </div>
                </div>

                {/* Missed Call Rate */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-semibold text-[#0F172A]">Missed Call Rate</label>
                    <span className="text-sm font-bold text-[#1B6FFF]">{missedRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1" max="60" step="1"
                    value={missedRate}
                    onChange={(e) => setMissedRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none bg-[#E2E8F0] accent-[#1B6FFF] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs text-[#94A3B8]">
                    <span>1%</span><span>60%</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-semibold text-[#0F172A]">Conversion Rate</label>
                    <span className="text-sm font-bold text-[#1B6FFF]">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1" max="60" step="1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none bg-[#E2E8F0] accent-[#1B6FFF] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs text-[#94A3B8]">
                    <span>1%</span><span>60%</span>
                  </div>
                </div>

                {/* Avg Customer Value */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-semibold text-[#0F172A]">Avg. Customer Value</label>
                    <span className="text-sm font-bold text-[#1B6FFF]">{fmt(avgValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="50" max="10000" step="50"
                    value={avgValue}
                    onChange={(e) => setAvgValue(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none bg-[#E2E8F0] accent-[#1B6FFF] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs text-[#94A3B8]">
                    <span>$50</span><span>$10,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Results */}
            <div className="flex flex-col gap-4">

              {/* Stat cards row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                    <PhoneMissed className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Missed / Month</p>
                  <p className="text-3xl font-bold text-[#0F172A]">{missedCalls.toLocaleString()}</p>
                  <p className="mt-1 text-xs text-[#94A3B8]">calls going unanswered</p>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                    <Users className="h-5 w-5 text-amber-500" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Lost Conversions</p>
                  <p className="text-3xl font-bold text-[#0F172A]">{lostConversions.toLocaleString()}</p>
                  <p className="mt-1 text-xs text-[#94A3B8]">customers lost per month</p>
                </div>
              </div>

              {/* Monthly lost */}
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-400">Revenue Losing / Month</p>
                    <p className="mt-1 text-4xl font-bold text-red-500">{fmt(monthlyLost)}</p>
                  </div>
                  <DollarSign className="h-12 w-12 text-red-200" />
                </div>
              </div>

              {/* Annual impact — hero card */}
              <div className="rounded-2xl border border-[#1B6FFF]/20 bg-gradient-to-br from-[#1B6FFF] to-[#0D4FCC] p-8 text-white shadow-[0_0_40px_rgba(27,111,255,0.2)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                      Additional Revenue with AI Agent
                    </p>
                    <p className="mt-2 text-5xl font-black">+{fmt(monthlyLost)}</p>
                    <p className="mt-1 text-xl font-semibold text-blue-200">{fmt(annualImpact)} / year</p>
                  </div>
                  <TrendingUp className="h-12 w-12 text-blue-300 flex-shrink-0" />
                </div>

                <div className="mt-6 border-t border-white/20 pt-6">
                  <Link
                    href="#industry-selector"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#1B6FFF] shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
                  >
                    Book a Free Strategy Call <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
