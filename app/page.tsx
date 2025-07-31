import Hero from '@/components/sections/Hero';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import ServiceAreas from '@/components/sections/ServiceAreas';
import LeadForm from '@/components/sections/LeadForm';
import Footer from '@/components/sections/Footer';
import StickyHeader from '@/components/common/StickyHeader';
import FloatingCTA from '@/components/common/FloatingCTA';

export default function Home() {
  return (
    <main className="relative">
      <StickyHeader />
      <Hero />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}