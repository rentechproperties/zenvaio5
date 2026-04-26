"use client"

import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const productLinks = [
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#industry-selector', label: 'Try Zen' },
]

const industryLinks = [
  { href: '#industry-selector', label: 'Mortgage Lending' },
  { href: '#industry-selector', label: 'Real Estate' },
  { href: '#industry-selector', label: 'Healthcare' },
  { href: '#industry-selector', label: 'Home Services' },
]

const companyLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#', label: 'Blog' },
  { href: '#industry-selector', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
]

const legalLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050D1A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B6FFF]">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Zenvaio</span>
            </Link>

            {/* Description */}
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/60">
              AI automation partner for SMEs. We build and run the AI systems that
              make your business faster, more responsive, and more profitable.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:filsan@zenvaio.com"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
              >
                <Mail className="h-4 w-4" />
                filsan@zenvaio.com
              </a>
              <a
                href="tel:+14165551234"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
              >
                <Phone className="h-4 w-4" />
                +1 (416) 555-1234
              </a>
              <p className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4" />
                Toronto, Ontario, Canada
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="mb-6 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#1B6FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; 2026 Zenvaio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
