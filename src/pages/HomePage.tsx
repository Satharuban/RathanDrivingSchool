import { Hero } from '../components/home/Hero';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { InstructorBio } from '../components/home/InstructorBio';
import { LessonPackages } from '../components/home/LessonPackages';
import { HowItWorks } from '../components/home/HowItWorks';
import { AreasCoveredSection } from '../components/home/AreasCoveredSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTABanner } from '../components/ui/CTABanner';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <InstructorBio />
      <LessonPackages />
      <HowItWorks />
      <AreasCoveredSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
