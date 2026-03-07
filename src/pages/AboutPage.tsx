import { motion } from 'framer-motion';
import { Award, Users, Car, Target } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const values = [
  {
    icon: Users,
    title: 'Learner-first approach',
    description: 'We adapt to your pace and learning style. No two students are the same, and neither are our lessons.',
  },
  {
    icon: Car,
    title: 'Modern, safe vehicles',
    description: 'Dual-control cars, regularly maintained and clean. Manual and automatic options available.',
  },
  {
    icon: Award,
    title: 'DVSA-aligned training',
    description: 'Our lessons follow the official syllabus so you\'re properly prepared for the theory and practical test.',
  },
  {
    icon: Target,
    title: 'Test-ready focus',
    description: 'We practise local test routes and work on your weak spots so you go into your test with confidence.',
  },
];

export function AboutPage() {
  usePageTitle('About Us');
  return (
    <>
      <section className="relative section-padding overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20">
        <div className="absolute inset-0 bg-mesh opacity-50" aria-hidden />
        <div className="container-narrow relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">About us</p>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              About Rathan Driving School
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              We're a local driving school based in Liverpool, serving Merseyside with one goal: to get you driving safely and confidently. Whether you're a complete beginner or need a refresher, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            title="Our values"
            subtitle="What you can expect from every lesson."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2.5xl border border-neutral-200/80 bg-white p-8 shadow-card card-hover"
              >
                <span className="inline-flex rounded-xl bg-brand-red-light p-3 text-brand-red">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-black">{item.title}</h3>
                <p className="mt-2 text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-black">
              Manual & automatic · Beginners to test-ready · Flexible times
            </h2>
            <p className="mt-4 text-neutral-600">
              Get in touch to book your first lesson or ask any questions. We cover Liverpool, Wirral, Sefton, Knowsley and surrounding areas.
            </p>
          </div>
        </div>
      </section>
      <CTABanner title="Start your driving journey" subtitle="Book a lesson or chat with us on WhatsApp. We'll find a time that works for you." />
    </>
  );
}
