"use client"

import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ROICalculatorModal } from '@/components/roi-calculator-modal'

export function LostRevenueSection() {
  const [isROIModalOpen, setIsROIModalOpen] = useState(false)

  return (
    <section className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50 px-4 py-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-500">
                Revenue Alert
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-8 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              How Much Revenue are you Missing?
            </h2>

            {/* Calculator Button */}
            <button
              onClick={() => setIsROIModalOpen(true)}
              className="btn-apple mb-12 bg-[#1B6FFF] px-8 py-4 text-base font-medium text-white hover:bg-[#1557CC] shadow-[0_0_20px_rgba(27,111,255,0.3)] hover:shadow-[0_0_30px_rgba(27,111,255,0.4)]"
            >
              Show Me My Lost Revenue (Free Calculator)
            </button>

            {/* Highlight Box */}
            <div className="mb-12 rounded-2xl border-2 border-[#1B6FFF] bg-[#EFF6FF] px-8 py-6">
              <p className="text-xl font-semibold text-[#1B6FFF] sm:text-2xl">
                Most Businesses Lose 67% of Potential Sales
              </p>
            </div>

            {/* Research Text */}
            <p className="mb-12 max-w-2xl text-pretty text-lg text-[#475569]">
              Businesses are 100x more likely to connect with leads when they respond
              within 5 minutes, and 21x more likely to qualify them.
            </p>

            {/* Stats Cards */}
            <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 card-hover">
                <p className="mb-2 text-4xl font-bold text-red-500 sm:text-5xl">62%</p>
                <p className="text-[#475569]">of calls to SMEs go unanswered</p>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 card-hover">
                <p className="mb-2 text-4xl font-bold text-red-500 sm:text-5xl">47h</p>
                <p className="text-[#475569]">average lead response time</p>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 card-hover">
                <p className="mb-2 text-4xl font-bold text-red-500 sm:text-5xl">67%</p>
                <p className="text-[#475569]">of potential sales lost to delays</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ROI Calculator Modal */}
      <ROICalculatorModal isOpen={isROIModalOpen} onClose={() => setIsROIModalOpen(false)} />
    </section>
  )
}
