import { Navbar } from '@/components/navbar'
import { FloatingButtons } from '@/components/floating-buttons'
import { HeroSection } from '@/components/sections/hero'
import { VoiceDemoSection } from '@/components/sections/voice-demo'
import { LostRevenueSection } from '@/components/sections/lost-revenue'
import { ROISection } from '@/components/sections/roi-section'
import { IndustrySelectorSection } from '@/components/sections/industry-selector'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { FeaturesGridSection } from '@/components/sections/features-grid'
import { CRMIntegrationSection } from '@/components/sections/crm-integration'
import { PricingSection } from '@/components/sections/pricing'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VoiceDemoSection />
      <LostRevenueSection />
      <ROISection />
      <IndustrySelectorSection />
      <HowItWorksSection />
      <FeaturesGridSection />
      <CRMIntegrationSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
