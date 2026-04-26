"use client"

import { Target, Lightbulb, Zap, TrendingUp, Youtube, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const coreValues = [
  {
    title: 'Results Over Promises',
    description: 'We measure success by the revenue and time our clients get back.',
    icon: Target,
  },
  {
    title: 'Simplicity for the Client',
    description: 'Our clients are business owners, not tech experts. We handle the complexity.',
    icon: Lightbulb,
  },
  {
    title: 'Speed That Matters',
    description: 'In business, the first to respond wins. We build systems that respond in seconds.',
    icon: Zap,
  },
  {
    title: 'Continuous Improvement',
    description: "AI moves fast. We stay ahead so our clients don't have to.",
    icon: TrendingUp,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              About Zenvaio
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              Building AI systems that make your business faster, more responsive,
              and more profitable.
            </p>

            {/* Mission & Vision */}
            <div className="mb-16 grid w-full max-w-4xl gap-8 md:grid-cols-2">
              {/* Mission */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover">
                <h3 className="mb-4 text-xl font-semibold text-[#0F172A]">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  At Zenvaio, we develop cutting-edge voice AI solutions that
                  transform how businesses handle their most critical moment - the
                  first touchpoint with potential customers. We specialize in
                  creating conversational AI that captures leads at their peak
                  interest and engages them instantly, ensuring no opportunity slips
                  through the cracks. Rather than replacing your team, our solutions
                  enhance your sales process by handling the repetitive tasks of
                  immediate follow-up and lead qualification.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover">
                <h3 className="mb-4 text-xl font-semibold text-[#0F172A]">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  To become the go-to AI automation partner for SMEs across North
                  America - known for delivering measurable, real-world results
                  through smart automation that feels human. We envision a world
                  where every business, regardless of size, has access to
                  enterprise-grade AI systems that capture leads, book appointments,
                  and re-engage clients automatically.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <h3 className="mb-8 text-2xl font-semibold text-[#0F172A]">
              Core Values
            </h3>
            <div className="mb-16 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6 text-left card-hover"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <value.icon className="h-5 w-5 text-[#1B6FFF]" />
                  </div>
                  <h4 className="mb-2 font-semibold text-[#0F172A]">{value.title}</h4>
                  <p className="text-sm text-[#475569]">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Founder Card */}
            <div className="mb-16 w-full max-w-2xl rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-lg">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1B6FFF] to-[#60A5FA] text-2xl font-bold text-white">
                  F
                </div>

                {/* Name & Title */}
                <h4 className="text-xl font-semibold text-[#0F172A]">Fahima</h4>
                <p className="mb-4 text-[#64748B]">Founder &amp; CEO</p>

                {/* Bio */}
                <p className="mb-4 text-sm leading-relaxed text-[#475569]">
                  Fahima founded Zenvaio with a mission to help small and medium
                  businesses compete with enterprise-level lead response. Her vision:
                  AI that works for you 24/7, so you never miss an opportunity again.
                </p>

                {/* Quote */}
                <p className="text-sm italic text-[#1B6FFF]">
                  &ldquo;We build and run the AI systems that make your business faster,
                  more responsive, and more profitable - so you can focus on what you
                  do best.&rdquo;
                </p>
              </div>
            </div>

            {/* Community Resources */}
            <h3 className="mb-8 text-2xl font-semibold text-[#0F172A]">
              Community Resources
            </h3>
            <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
              <a
                href="#"
                className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <Youtube className="h-6 w-6 text-red-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#0F172A]">YouTube Channel</h4>
                  <p className="text-sm text-[#64748B]">
                    Tutorials on AI voice agents and lead generation.
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Users className="h-6 w-6 text-[#1B6FFF]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#0F172A]">Skool Community</h4>
                  <p className="text-sm text-[#64748B]">
                    Connect with other business owners.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
