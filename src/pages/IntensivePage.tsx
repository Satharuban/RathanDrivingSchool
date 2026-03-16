import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Zap } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const benefits = [
  '2–5 day courses to suit your schedule',
  'Option to include your practical test date',
  'Focused preparation on test routes',
  'Ideal if you have limited time or a deadline',
  'Same high standard as our weekly lessons',
];

export function IntensivePage() {
  usePageTitle('Intensive Courses');
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white pt-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-brand-red"
          >
            <Zap className="h-8 w-8" />
            <span className="font-semibold uppercase tracking-wider">Intensive courses</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
          >
            Pass in weeks, not months
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Our intensive driving courses pack multiple hours into a short period — perfect if you have a test date coming up, need to pass quickly, or learn better in focused blocks.
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-black">What's included</h2>
              <ul className="mt-6 space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-green" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-neutral-600">
                Contact us with your availability and we'll put together a quote for a course that suits you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4 rounded-2xl border border-neutral-200 p-6">
                <span className="rounded-xl bg-brand-red-light p-3 text-brand-red">
                  <Calendar className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-black">Flexible dates</h3>
                  <p className="mt-1 text-sm text-neutral-600">We work around your schedule. Book 2–5 consecutive days or spread over a couple of weeks.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-neutral-200 p-6">
                <span className="rounded-xl bg-brand-red-light p-3 text-brand-red">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-black">Full-day focus</h3>
                  <p className="mt-1 text-sm text-neutral-600">Multiple hours per day with the same instructor. Build momentum and retain more in less time.</p>
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
