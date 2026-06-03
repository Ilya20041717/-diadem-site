import ScrollProgress from '@/components/ScrollProgress'
import LeadPopup from '@/components/LeadPopup'
import FloatingContact from '@/components/FloatingContact'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Benefits from '@/components/Benefits'
import Compare from '@/components/Compare'
import Cases from '@/components/Cases'
import ParallaxBanner from '@/components/ParallaxBanner'
import Quiz from '@/components/Quiz'
import Process from '@/components/Process'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Guarantee from '@/components/Guarantee'
import Testimonials from '@/components/Testimonials'
import Insights from '@/components/Insights'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Marquee />
      <Services />
      <Industries />
      <Benefits />
      <Compare />
      <Cases />
      <ParallaxBanner />
      <Quiz />
      <Process />
      <About />
      <Pricing />
      <Guarantee />
      <Testimonials />
      <Insights />
      <FAQ />
      <CTA />
      <Footer />
      <LeadPopup />
      <FloatingContact />
    </main>
  )
}
