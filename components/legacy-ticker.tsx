"use client"

import { useEffect, useRef } from 'react'

const companies = [
  { name: "Stella Developers", color: "#1B6FFF", bg: "#EFF6FF", icon: "🏗️" },
  { name: "MH Builders Lab", color: "#7C3AED", bg: "#F5F3FF", icon: "🔧" },
  { name: "NeuroBridge", color: "#0891B2", bg: "#ECFEFF", icon: "🧠" },
  { name: "North", color: "#059669", bg: "#ECFDF5", icon: "🧭" },
  { name: "Elva", color: "#DC2626", bg: "#FEF2F2", icon: "⚡" },
  { name: "2WAI", color: "#D97706", bg: "#FFFBEB", icon: "🤖" },
  { name: "Osmow's Shawarma", color: "#EA580C", bg: "#FFF7ED", icon: "🥙" },
  { name: "BookRetreats", color: "#0284C7", bg: "#F0F9FF", icon: "🏕️" },
  { name: "Ski With Ease", color: "#7C3AED", bg: "#F5F3FF", icon: "⛷️" },
  { name: "Uphill Growth", color: "#059669", bg: "#ECFDF5", icon: "📈" },
  { name: "Totality Ventures", color: "#1B6FFF", bg: "#EFF6FF", icon: "💼" },
  { name: "Elvaco", color: "#0891B2", bg: "#ECFEFF", icon: "🔬" },
  { name: "Nexus AI Solutions", color: "#7C3AED", bg: "#F5F3FF", icon: "🕸️" },
  { name: "Velora Health", color: "#DC2626", bg: "#FEF2F2", icon: "🏥" },
  { name: "Skyline Robotics", color: "#0284C7", bg: "#F0F9FF", icon: "🤖" },
  { name: "PrimeLogix", color: "#D97706", bg: "#FFFBEB", icon: "📦" },
  { name: "Apex Financial AI", color: "#059669", bg: "#ECFDF5", icon: "💹" },
  { name: "Crest Education", color: "#1B6FFF", bg: "#EFF6FF", icon: "🎓" },
  { name: "BlueDot Real Estate", color: "#0891B2", bg: "#ECFEFF", icon: "🏠" },
  { name: "Verge Logistics", color: "#EA580C", bg: "#FFF7ED", icon: "🚚" },
  { name: "Lumina Retail", color: "#7C3AED", bg: "#F5F3FF", icon: "🛍️" },
  { name: "Fortis Manufacturing", color: "#DC2626", bg: "#FEF2F2", icon: "🏭" },
]

export function LegacyTicker() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let x = 0
    let animId: number
    const speed = 0.5

    const step = () => {
      x -= speed
      const half = track.scrollWidth / 2
      if (Math.abs(x) >= half) x = 0
      track.style.transform = `translateX(${x}px)`
      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)

    const pause = () => cancelAnimationFrame(animId)
    const resume = () => { animId = requestAnimationFrame(step) }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  const all = [...companies, ...companies]

  return (
    <div className="w-full border-t border-b border-[#E2E8F0] bg-white py-5 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-4">
        Trusted by innovative companies across North America
      </p>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex items-center gap-4" style={{ willChange: 'transform' }}>
          {all.map((company, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm hover:shadow-md hover:border-[#1B6FFF]/30 transition-all duration-200 cursor-default"
              style={{ minWidth: 'max-content' }}
            >
              {/* Icon logo */}
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg text-lg flex-shrink-0"
                style={{ background: company.bg }}
              >
                <span role="img" aria-label={company.name} style={{ fontSize: '18px', lineHeight: 1 }}>
                  {company.icon}
                </span>
              </div>
              {/* Name */}
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: '#0F172A' }}
              >
                {company.name}
              </span>
              {/* Colored dot accent */}
              <div
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: company.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
