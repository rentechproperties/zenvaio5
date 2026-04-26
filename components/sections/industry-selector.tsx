"use client"

import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

const industries = [
  {
    name: 'Mortgage Lending',
    subtitle: 'AI voice agents for mortgage brokers and lenders',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="6" y="20" width="36" height="22" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M2 22L24 6l22 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="18" y="30" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 30v12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="36" cy="14" r="7" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
        <path d="M33 14h6M36 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    subtitle: 'Instant lead response for realtors and agencies',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M8 42V22L24 8l16 14v20H8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="19" y="30" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="11" y="24" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="30" y="24" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    name: 'Digital Marketing',
    subtitle: 'Automated client intake for marketing firms',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 24c0-8 4-13 10-13s10 5 10 13-4 13-10 13-10-5-10-13z" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 24h32M24 8c-4 4-6 9-6 16s2 12 6 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="36" cy="12" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <path d="M34 12l1.5 1.5L38 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Home Services',
    subtitle: '24/7 call answering for plumbers, electricians, HVAC',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M10 42V24L24 12l14 12v18H10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 34c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26v-4M30 28l3-3M18 28l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'Pet Services',
    subtitle: 'Booking automation for groomers, walkers, vets',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <ellipse cx="24" cy="28" rx="12" ry="10" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="34" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="26" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="26" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 30c0 2 1.8 3.5 4 3.5s4-1.5 4-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="21" cy="27" r="1.2" fill="currentColor"/>
        <circle cx="27" cy="27" r="1.2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'Event Services',
    subtitle: 'Lead qualification for planners and venues',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="6" y="12" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M6 20h36" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 28l-2 4h4l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="30" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="34" cy="30" r="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    subtitle: 'HIPAA-compliant patient intake and scheduling',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M20 18h8M24 14v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 30h20M14 36h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="36" cy="36" r="6" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
        <path d="M34 36h4M36 34v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Legal Services',
    subtitle: 'Client qualification for law firms',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M24 6v36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 42h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 10l-12 8 12-2 12 2-12-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M10 18l-4 10h8L10 18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M38 18l-4 10h8L38 18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M6 28h8M34 28h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Automotive',
    subtitle: 'Dealership lead response and service scheduling',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M6 30h36v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 30l5-12h22l5 12" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="14" cy="36" r="4" fill="white" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="34" cy="36" r="4" fill="white" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 24h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="38" cy="18" r="5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2"/>
        <path d="M36 18l1.5 1.5L40 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'E-commerce',
    subtitle: 'Customer support and order follow-up',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M6 8h4l5 22h18l4-14H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="36" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="33" cy="36" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M22 20h8M26 16v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export function IndustrySelectorSection() {
  const [selected, setSelected] = useState(industries[1])
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '' })
  const [showToast, setShowToast] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setShowToast(true)
      setFormData({ firstName: '', lastName: '', phone: '', email: '' })
      setTimeout(() => setShowToast(false), 3000)
    }, 1000)
  }

  return (
    <section id="industry-selector" className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1B6FFF]/20 bg-[#EFF6FF] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#1B6FFF]"></span>
              <span className="text-sm font-medium text-[#1B6FFF]">Built for Every Industry</span>
            </div>
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Experience Zen in Action
            </h2>
            <p className="max-w-2xl text-pretty text-lg text-[#475569]">
              Select your industry below and see how Zen engages leads and books appointments automatically.
            </p>
          </div>

          <div className="flex flex-col items-start gap-12 lg:flex-row">

            {/* Industry Grid */}
            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {industries.map((industry) => {
                  const isActive = selected.name === industry.name
                  return (
                    <button
                      key={industry.name}
                      onClick={() => setSelected(industry)}
                      className={`group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center transition-all duration-200 ${
                        isActive
                          ? 'border-[#1B6FFF] bg-[#1B6FFF] text-white shadow-[0_0_24px_rgba(27,111,255,0.25)]'
                          : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#1B6FFF]/40 hover:shadow-md'
                      }`}
                    >
                      <div className={`transition-colors ${isActive ? 'text-white' : 'text-[#1B6FFF]'}`}>
                        {industry.icon}
                      </div>
                      <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>
                        {industry.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Selected industry description */}
              <div className="mt-6 rounded-xl border border-[#1B6FFF]/20 bg-[#EFF6FF] px-5 py-4">
                <p className="text-sm font-medium text-[#1B6FFF]">
                  {selected.name} — <span className="font-normal text-[#3B82F6]">{selected.subtitle}</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/5">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-lg sm:p-8"
              >
                <p className="mb-6 text-sm text-[#64748B]">
                  Selected:{' '}
                  <span className="font-semibold text-[#1B6FFF]">{selected.name}</span>
                </p>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:outline-none focus:ring-2 focus:ring-[#1B6FFF]/20 transition-all"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:outline-none focus:ring-2 focus:ring-[#1B6FFF]/20 transition-all"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:outline-none focus:ring-2 focus:ring-[#1B6FFF]/20 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-1 block text-sm font-medium text-[#0F172A]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:outline-none focus:ring-2 focus:ring-[#1B6FFF]/20 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#1B6FFF] px-6 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(27,111,255,0.3)] transition-all hover:bg-[#1557CC] disabled:opacity-70"
                >
                  {isSubmitting ? 'Connecting...' : `Get a Call from Zen — ${selected.name}`}
                </button>

                <p className="mt-4 text-center text-xs text-[#94A3B8]">
                  By submitting, you agree to receive a call from our AI Assistant.
                </p>
              </form>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border-l-4 border-[#1B6FFF] bg-white px-6 py-4 text-[#0F172A] shadow-lg">
          <p className="text-sm font-medium">Thank you! Zen will call you within 30 seconds.</p>
        </div>
      )}
    </section>
  )
}
