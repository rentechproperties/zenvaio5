"use client"

import { ScrollReveal } from '@/components/scroll-reveal'

const crmLogos = [
  { name: 'HubSpot', initials: 'HS' },
  { name: 'Salesforce', initials: 'SF' },
  { name: 'Zoho', initials: 'ZH' },
  { name: 'Pipedrive', initials: 'PD' },
  { name: 'Monday', initials: 'MD' },
  { name: 'Calendly', initials: 'CL' },
]

export function CRMIntegrationSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-8 text-balance text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-3xl">
              Integrates with your favorite tools
            </h2>

            {/* Logos */}
            <div className="flex flex-wrap justify-center gap-4">
              {crmLogos.map((crm) => (
                <div
                  key={crm.name}
                  className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 transition-all hover:border-[#1B6FFF]/50 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#1B6FFF]">
                    {crm.initials}
                  </div>
                  <span className="font-medium text-[#0F172A]">{crm.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
