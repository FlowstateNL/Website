import HeroSection from '@/components/hero';
import ServicesSection from '@/components/services';
import ProcessSection from '@/components/process';
import StatsSection from '@/components/stats';
import CTASection from '@/components/cta-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
