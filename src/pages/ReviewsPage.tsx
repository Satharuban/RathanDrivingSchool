import { motion } from 'framer-motion';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { TESTIMONIALS } from '../constants/testimonials';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

export function ReviewsPage() {
  usePageTitle('Reviews');
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white pt-16">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
          >
            What our students say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Real reviews from learners across Greater Manchester who passed with us. Manual, automatic, intensive and refresher — we're proud of every one.
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner
        title="Join our happy learners"
        subtitle="Book your first lesson and see why students recommend us."
      />
    </>
  );
}
