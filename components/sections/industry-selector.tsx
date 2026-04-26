"use client"

import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

const industries = [
  'Mortgage Lending',
  'Real Estate',
  'Digital Marketing',
  'Home Services',
  'Pet Services',
  'Event Services',
]

export function IndustrySelectorSection() {
  const [selectedIndustry, setSelectedIndustry] = useState('Real Estate')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })
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
    <section id="industry-selector" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Experience Zen in Action
            </h2>

            {/* Subtitle */}
            <p className="mb-12 max-w-2xl text-pretty text-lg text-[#475569]">
              Experience how Zen can engage new prospects and book appointments for
              one of the sample businesses below.
            </p>

            {/* Industry Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`btn-apple px-5 py-2.5 text-sm font-medium transition-all ${
                    selectedIndustry === industry
                      ? 'bg-[#1B6FFF] text-white shadow-[0_0_15px_rgba(27,111,255,0.3)]'
                      : 'border border-[#E2E8F0] bg-white text-[#475569] hover:border-[#1B6FFF]/50 hover:text-[#0F172A]'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left shadow-lg sm:p-8"
            >
              <div className="mb-4">
                <p className="mb-6 text-center text-sm text-[#64748B]">
                  Selected industry:{' '}
                  <span className="font-medium text-[#1B6FFF]">{selectedIndustry}</span>
                </p>
              </div>

              <div className="mb-4">
                <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-[#0F172A]">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-[#0F172A]">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-[#0F172A]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#0F172A]">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-apple w-full bg-[#1B6FFF] px-6 py-4 text-base font-medium text-white hover:bg-[#1557CC] disabled:opacity-70 shadow-[0_0_20px_rgba(27,111,255,0.3)]"
              >
                {isSubmitting ? 'Submitting...' : 'Get a Call from Zen'}
              </button>

              <p className="mt-4 text-center text-xs text-[#94A3B8]">
                By submitting this form, you agree to receive a call from our AI
                Assistant.
              </p>
            </form>
          </div>
        </div>
      </ScrollReveal>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border-l-4 border-[#1B6FFF] bg-white px-6 py-4 text-[#0F172A] shadow-lg toast-animate">
          <p className="text-sm font-medium">
            Thank you! Zen will call you within 30 seconds.
          </p>
        </div>
      )}
    </section>
  )
}
