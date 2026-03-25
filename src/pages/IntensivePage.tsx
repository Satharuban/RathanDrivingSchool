import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Zap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import { SITE_NAME } from '../constants/site';

const ease = [0.22, 1, 0.36, 1] as const;

const benefits = [
  '2–5 day courses to suit your schedule',
  'Option to include your practical test date',
  'Focused preparation on test routes',
  'Ideal if you have limited time or a deadline',
  'Same high standard as our weekly lessons',
];

export function IntensivePage() {
  usePageTitle('Intensive Courses');
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: d, ease },
        };

  const inView = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true } as const,
      };

  const inViewRight = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true } as const,
      };

  return (
    <>
      <section
        className="border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 via-white to-white"
        aria-labelledby="intensive-heading"
      >
        <div className="container-narrow px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <motion.div {...up(0)} className="flex items-center gap-3">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
              <Zap className="h-4 w-4 text-brand-red" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                Intensive courses
              </p>
            </motion.div>
            <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
              {SITE_NAME}
            </motion.p>
            <motion.h1
              {...up(0.06)}
              id="intensive-heading"
              className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem]"
            >
              Pass in weeks, not months
            </motion.h1>
            <motion.p
              {...up(0.1)}
              className="prose-width mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
            >
              Our intensive driving courses pack multiple hours into a short period — perfect if you have a test date
              coming up, need to pass quickly, or learn better in focused blocks.
            </motion.p>
            <motion.p {...up(0.12)} className="mt-6 text-sm text-neutral-500">
              Prefer weekly lessons?{' '}
              <Link
                to="/lessons"
                className="font-semibold text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
              >
                View standard packages
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              {...inView}
              transition={reduceMotion ? undefined : { duration: 0.5, ease }}
              className="rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-8 shadow-sm sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-black">What&apos;s included</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-green" aria-hidden />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-neutral-600">
                Contact us with your availability and we&apos;ll put together a quote for a course that suits you.
              </p>
            </motion.div>
            <motion.div
              {...inViewRight}
              transition={reduceMotion ? undefined : { duration: 0.5, ease }}
              className="space-y-6"
            >
              <div className="flex gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm">
                <span className="rounded-xl bg-brand-red-light p-3 text-brand-red">
                  <Calendar className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-black">Flexible dates</h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    We work around your schedule. Book 2–5 consecutive days or spread over a couple of weeks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm">
                <span className="rounded-xl bg-brand-red-light p-3 text-brand-red">
                  <Clock className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-black">Full-day focus</h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Multiple hours per day with the same instructor. Build momentum and retain more in less time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <SectionHeading
            title="Is an intensive course right for me?"
            subtitle="Intensives work well if you've had some lessons before, have a test date, or learn quickly in short bursts. Complete beginners often prefer weekly lessons to build confidence gradually."
          />
        </div>
      </section>
      <CTABanner
        title="Book your intensive course"
        subtitle="Tell us your dates and we'll send a tailored quote. Manual and automatic available."
      />
    </>
  );
}
