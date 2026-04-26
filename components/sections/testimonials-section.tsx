"use client"

import { ScrollReveal } from '@/components/scroll-reveal'

const testimonials = [
  {
    initials: 'MT',
    name: 'Michael Thompson',
    role: 'Real Estate Broker',
    location: 'Chicago, IL',
    quote:
      'Zen transformed our lead response time. We went from 47 hours to under 30 seconds. Our conversion rate doubled in the first month!',
    color: 'bg-[#1B6FFF]',
  },
  {
    initials: 'DSJ',
    name: 'Dr. Sarah Johnson',
    role: 'Medical Practice Owner',
    location: 'Atlanta, GA',
    quote:
      "Healthcare runs 24/7 and so does Zen. Our after-hours patient bookings increased by 300%. I can finally sleep without missing calls.",
    color: 'bg-emerald-500',
  },
  {
    initials: 'DK',
    name: 'David Kim',
    role: 'Mortgage Lender',
    location: 'Los Angeles, CA',
    quote:
      "In lending, speed is everything. Zen calls our leads back instantly. We've closed $15M more in loans since implementing Zen.",
    color: 'bg-violet-500',
  },
  {
    initials: 'PP',
    name: 'Priya Patel',
    role: 'Digital Marketing Agency',
    location: 'New York, NY',
    quote:
      'My agency handles 50+ clients. Zen qualifies every lead before it reaches me. I only talk to serious buyers now. Game changer.',
    color: 'bg-orange-500',
  },
  {
    initials: 'AH',
    name: 'Ahmed Hassan',
    role: 'Auto Dealership Owner',
    location: 'Detroit, MI',
    quote:
      "Car buyers call multiple dealerships. Zen calls them back in under 30 seconds. We're now FIRST every time. Sales up 40%.",
    color: 'bg-red-500',
  },
  {
    initials: 'CM',
    name: 'Carlos Mendez',
    role: 'Home Services Owner',
    location: 'Miami, FL',
    quote:
      "Plumbing emergencies can't wait. Zen answers every call at 2 AM. We've grown from 3 to 12 trucks in 8 months.",
    color: 'bg-teal-500',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Loved by businesses everywhere
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              See how Zen is helping companies convert more leads and grow revenue.
            </p>

            {/* Testimonials Grid */}
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-sm font-semibold text-white`}
                    >
                      {testimonial.initials}
                    </div>

                    {/* Name & Role */}
                    <div>
                      <h4 className="font-semibold text-[#0F172A]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#64748B]">
                        {testimonial.role} - {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-[#475569]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
