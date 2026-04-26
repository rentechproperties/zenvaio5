"use client"

import { useState, useEffect } from 'react'
import { X, Calculator } from 'lucide-react'

interface ROICalculatorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ROICalculatorModal({ isOpen, onClose }: ROICalculatorModalProps) {
  const [totalCalls, setTotalCalls] = useState(1000)
  const [missedRate, setMissedRate] = useState(15)
  const [conversionRate, setConversionRate] = useState(20)
  const [avgCustomerValue, setAvgCustomerValue] = useState(500)

  // Calculated values
  const missedCalls = Math.round(totalCalls * (missedRate / 100))
  const lostConversions = Math.round(missedCalls * (conversionRate / 100))
  const monthlyRevenueLost = lostConversions * avgCustomerValue
  const additionalRevenue = monthlyRevenueLost
  const annualImpact = monthlyRevenueLost * 12

  // Format currency
  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 })
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[560px] mx-4 modal-content">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative p-6 pb-4 border-b border-[#E2E8F0]">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#F1F5F9] transition-colors"
            >
              <X className="h-5 w-5 text-[#64748B]" />
            </button>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                <Calculator className="h-5 w-5 text-[#1B6FFF]" />
              </div>
              <h2 className="text-xl font-bold text-[#0F172A]">
                See How Much Revenue You&apos;re Leaving on the Table
              </h2>
            </div>
            <p className="text-sm text-[#64748B]">
              Enter your numbers below to see the impact of an AI agent that answers 100% of your calls.
            </p>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Input Section */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-4 uppercase tracking-wide">
                Your Current Numbers
              </h3>
              
              <div className="space-y-4">
                {/* Total Monthly Calls */}
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-1">
                    Total Monthly Calls
                  </label>
                  <input
                    type="number"
                    value={totalCalls}
                    onChange={(e) => setTotalCalls(Number(e.target.value) || 0)}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Missed Call Rate */}
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-1">
                    Missed Call Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={missedRate}
                      onChange={(e) => setMissedRate(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 pr-8 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]">%</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-1">
                    Conversion Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 pr-8 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]">%</span>
                  </div>
                </div>

                {/* Avg Customer Value */}
                <div>
                  <label className="block text-sm font-medium text-[#475569] mb-1">
                    Avg. Customer Value ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]">$</span>
                    <input
                      type="number"
                      value={avgCustomerValue}
                      onChange={(e) => setAvgCustomerValue(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 pl-8 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] focus:border-[#1B6FFF] focus:ring-2 focus:ring-[#1B6FFF]/20 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-[#EFF6FF] rounded-xl p-5 mb-6">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-4 uppercase tracking-wide">
                With an AI Voice Agent
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#475569]">Calls Currently Missed / Month</span>
                  <span className="font-semibold text-[#0F172A]">{missedCalls.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#475569]">Lost Conversions / Month</span>
                  <span className="font-semibold text-[#0F172A]">{lostConversions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#475569]">Revenue You&apos;re Losing / Month</span>
                  <span className="font-semibold text-red-500">{formatCurrency(monthlyRevenueLost)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#475569]">Additional Revenue with AI Agent</span>
                  <span className="font-semibold text-emerald-600">+{formatCurrency(additionalRevenue)}</span>
                </div>
                
                {/* Annual Impact - Large Display */}
                <div className="pt-3 mt-3 border-t border-[#1B6FFF]/20">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#0F172A]">Annual Impact</span>
                    <span className="text-2xl font-bold text-[#1B6FFF]">{formatCurrency(annualImpact)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#industry-selector"
              onClick={onClose}
              className="btn-apple flex w-full items-center justify-center gap-2 bg-[#1B6FFF] hover:bg-[#1557CC] px-6 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(27,111,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(27,111,255,0.4)]"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
