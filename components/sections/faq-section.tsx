"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const faqs = [
  {
    question: 'How do you customize the solution?',
    answer:
      'We work closely with you to understand your business, target audience, and qualification criteria. Our team creates custom scripts, sets up your specific integrations, and configures Zen to match your brand voice. The entire setup is tailored to your unique sales process.',
  },
  {
    question: "What's the typical implementation timeline?",
    answer:
      'Most clients are fully live within 7-14 business days. This includes script creation, integration setup, testing, and go-live support.',
  },
  {
    question: 'Do you support multiple languages?',
    answer:
      'Yes. Zen can be configured for multiple languages depending on your market. Contact us to discuss your specific language requirements.',
  },
  {
    question: 'What if my business has unique integration needs?',
    answer:
      'We handle custom integrations on a case-by-case basis. Our team has experience connecting Zen to a wide range of CRMs, scheduling tools, and communication platforms.',
  },
  {
    question: 'Can Zen transfer calls to a real person?',
    answer:
      'Yes. Call transfer is available as an add-on feature, allowing Zen to hand off high-value prospects to your team in real time.',
  },
  {
    question: 'How does billing work?',
    answer:
      'First month is due upon signing. Recurring billing starts one month after your agent goes live. All plans include a per-minute usage charge of $0.65/min.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Frequently asked questions
            </h2>

            {/* Subtitle */}
            <p className="mb-16 max-w-xl text-pretty text-lg text-[#475569]">
              Everything you need to know about Zen and how it can help your
              business.
            </p>

            {/* FAQ Items */}
            <div className="w-full max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="font-semibold text-[#0F172A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-[#64748B] transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-[#E2E8F0] px-6 py-5 animate-fadeIn">
                      <p className="text-left text-sm leading-relaxed text-[#475569]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
