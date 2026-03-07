import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PricingCard } from '../components/ui/PricingCard';
import { PRICING_PACKAGES } from '../constants/pricing';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

export function LessonsPage() {
  usePageTitle('Lessons & Pricing');
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white pt-16">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
          >
            Lessons & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Clear pricing with no hidden costs. Choose single lessons, block bookings, or an intensive course. All lessons include a professional instructor and dual-control car.
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            title="Choose your package"
            subtitle="Prices from £35 per hour. Block bookings and intensive courses offer the best value."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING_PACKAGES.map((pkg, i) => (
              <PricingCard key={pkg.id} package={pkg} index={i} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-neutral-500"
          >
            Not sure which option is right for you?{' '}
            <Link to="/contact" className="font-medium text-brand-red hover:text-brand-red-hover">
              Get in touch
            </Link>{' '}
            and we'll help you choose.
          </motion.p>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
