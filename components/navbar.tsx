"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Zap, ChevronDown, Calculator } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

const industries = [
  { name: 'Mortgage Lending', slug: 'mortgage-lending', desc: 'AI voice agents for mortgage brokers and lenders' },
  { name: 'Real Estate', slug: 'real-estate', desc: 'Instant lead response for realtors and agencies' },
  { name: 'Digital Marketing', slug: 'digital-marketing', desc: 'Automated client intake for marketing firms' },
  { name: 'Home Services', slug: 'home-services', desc: '24/7 call answering for plumbers, electricians, HVAC' },
  { name: 'Pet Services', slug: 'pet-services', desc: 'Booking automation for groomers, walkers, vets' },
  { name: 'Event Services', slug: 'event-services', desc: 'Lead qualification for planners and venues' },
  { name: 'Healthcare', slug: 'healthcare', desc: 'HIPAA-compliant patient intake and scheduling' },
  { name: 'Legal Services', slug: 'legal-services', desc: 'Client qualification for law firms' },
  { name: 'Automotive', slug: 'automotive', desc: 'Dealership lead response and service scheduling' },
  { name: 'E-commerce', slug: 'ecommerce', desc: 'Customer support and order follow-up' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B6FFF]">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className={`text-xl font-semibold ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
              Zenvaio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-[#475569] hover:text-[#0F172A]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-[#475569] hover:text-[#0F172A]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-50 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {industries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href="#industry-selector"
                        className="block p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        <div className="font-medium text-[#0F172A] text-sm">{ind.name}</div>
                        <div className="text-xs text-[#64748B] mt-1">{ind.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* ROI Calculator — scrolls to inline section */}
            <Link
              href="#roi-calculator"
              className={`btn-apple inline-flex items-center gap-2 border-2 px-4 py-2 text-sm font-medium transition-all ${
                isScrolled
                  ? 'border-[#1B6FFF] text-[#1B6FFF] hover:bg-[#1B6FFF]/5'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              <Calculator className="h-4 w-4" />
              ROI Calculator
            </Link>

            {/* CTA */}
            <Link
              href="#industry-selector"
              className="btn-apple inline-flex items-center gap-2 bg-[#1B6FFF] hover:bg-[#1557CC] px-5 py-2.5 text-sm font-medium text-white transition-all shadow-[0_0_15px_rgba(27,111,255,0.3)] hover:shadow-[0_0_20px_rgba(27,111,255,0.4)]"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-lg p-2 lg:hidden ${
              isScrolled ? 'text-[#0F172A] hover:bg-[#F1F5F9]' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="animate-fadeIn border-t border-[#E2E8F0] bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Industries */}
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-[#0F172A] mb-2">Industries</p>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href="#industry-selector"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-[#64748B] hover:text-[#1B6FFF]"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile ROI Calculator — scroll link */}
            <Link
              href="#roi-calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-apple mt-2 flex w-full items-center justify-center gap-2 border-2 border-[#1B6FFF] px-5 py-3 text-base font-medium text-[#1B6FFF]"
            >
              <Calculator className="h-4 w-4" />
              ROI Calculator
            </Link>

            <Link
              href="#industry-selector"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-apple mt-2 block bg-[#1B6FFF] hover:bg-[#1557CC] px-5 py-3 text-center text-base font-medium text-white"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
