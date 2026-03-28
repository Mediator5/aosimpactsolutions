
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import { NegativeItemsSection, WhoWeHelpSection, FAQSection } from './components/SupportSections'
import CTASection from './components/CTASection'


export default function HomePage() {
  return (
    <>
      
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <HowItWorks />
        <PricingSection />
        <NegativeItemsSection />
        <WhoWeHelpSection />
        <FAQSection />
        <CTASection />
      </main>
      
    </>
  )
}