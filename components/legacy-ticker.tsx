"use client"

// Exact companies as specified - in order
const companies = [
  "Stella Developers",
  "MH Builders Lab",
  "NeuroBridge",
  "North",
  "Elva",
  "2WAI",
  "Osmow's Shawarma",
  "BookRetreats",
  "Ski With Ease",
  "Uphill Growth",
  "Totality Ventures",
  "Elvaco",
  "Nexus AI Solutions",
  "Velora Health",
  "Skyline Robotics",
  "PrimeLogix",
  "Apex Financial AI",
  "Crest Education",
  "BlueDot Real Estate",
  "Verge Logistics",
  "Lumina Retail",
  "Fortis Manufacturing",
]

// Generate initials for company badge
function getInitials(name: string): string {
  const words = name.split(' ')
  if (words.length === 1) {
    return name.slice(0, 2).toUpperCase()
  }
  return words.slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

export function LegacyTicker() {
  // Duplicate for seamless loop
  const allCompanies = [...companies, ...companies]

  return (
    <div className="w-full bg-white border-t border-b border-[#E2E8F0] py-6">
      {/* Auto-Scrolling Marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex items-center">
          {allCompanies.map((name, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              {/* Company Entry */}
              <div className="flex items-center gap-3 px-4">
                {/* Logo Badge - Square pill with initials */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F5F9] text-xs font-bold text-[#0F172A]">
                  {getInitials(name)}
                </div>
                {/* Company Name */}
                <span className="text-sm font-medium text-[#0F172A] whitespace-nowrap">
                  {name}
                </span>
              </div>
              {/* Separator Dot */}
              <span className="text-[#CBD5E1] mx-2">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
