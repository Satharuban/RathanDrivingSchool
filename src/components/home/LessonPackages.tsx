import { SectionHeading } from '../ui/SectionHeading';
import { PricingCard } from '../ui/PricingCard';
import { PRICING_PACKAGES } from '../../constants/pricing';

export function LessonPackages() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Pricing"
          title="Lesson packages"
          subtitle="Choose the option that fits you. All packages include a professional instructor and dual-control car."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRICING_PACKAGES.map((pkg, i) => (
            <PricingCard key={pkg.id} package={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
