import { motion, useReducedMotion } from 'framer-motion';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { TESTIMONIALS } from '../constants/testimonials';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import { SITE_NAME } from '../constants/site';

const ease = [0.22, 1, 0.36, 1] as const;

export function ReviewsPage() {
  usePageTitle('Reviews');
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: d, ease },
        };

  return (
    <>
      <section
        className="border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 via-white to-white"
        aria-labelledby="reviews-heading"
      >
        <div className="container-narrow px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...up(0)} className="flex items-center justify-center gap-3">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                Testimonials
              </p>
            </motion.div>
            <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
              {SITE_NAME}
            </motion.p>
            <motion.h1
              {...up(0.06)}
              id="reviews-heading"
              className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem]"
            >
              What our students say
            </motion.h1>
            <motion.p
              {...up(0.1)}
              className="prose-width mx-auto mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
            >
              Real reviews from learners across Liverpool and Merseyside who passed with us. Manual, automatic,
              intensive and refresher — we&apos;re proud of every one.
            </motion.p>
          </div>
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
