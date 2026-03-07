import { Hero } from '../components/home/Hero';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { LessonPackages } from '../components/home/LessonPackages';
import { HowItWorks } from '../components/home/HowItWorks';
import { AreasCoveredSection } from '../components/home/AreasCoveredSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

export function HomePage() {
  usePageTitle(undefined);
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <LessonPackages />
      <HowItWorks />
      <AreasCoveredSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
