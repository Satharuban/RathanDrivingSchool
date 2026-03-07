import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { HOW_IT_WORKS } from '../../constants/howItWorks';

export function HowItWorks() {
  return (
    <section className="section-padding bg-neutral-50 bg-pattern-dots">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Simple process"
          title="How it works"
          subtitle="From first contact to test day — we keep it simple and stress-free."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red font-display text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
