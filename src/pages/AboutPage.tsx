import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Users, Car, Target, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import { SITE_NAME } from '../constants/site';

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { icon: MapPin, text: 'Liverpool & Merseyside' },
  { icon: Users, text: 'Learner-first approach' },
  { icon: Award, text: 'DVSA-aligned training' },
] as const;

const values = [
  {
    icon: Users,
    title: 'Learner-first approach',
    description:
      "We adapt to your pace and learning style. No two students are the same, and neither are our lessons.",
  },
  {
    icon: Car,
    title: 'Modern, safe vehicles',
    description: 'Dual-control cars, regularly maintained and clean. Manual and automatic options available.',
  },
  {
    icon: Award,
    title: 'DVSA-aligned training',
    description:
      "Our lessons follow the official syllabus so you're properly prepared for the theory and practical test.",
  },
  {
    icon: Target,
    title: 'Test-ready focus',
    description:
      'We practise local test routes and work on your weak spots so you go into your test with confidence.',
  },
];

export function AboutPage() {
  usePageTitle('About Us');
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
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true } as const,
      };

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50 via-white to-white"
        aria-labelledby="about-page-heading"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-72 w-[min(100%,28rem)] translate-x-1/3 rounded-full bg-brand-red/[0.045] blur-3xl"
          aria-hidden
        />

        <div className="container-narrow relative z-[1] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-14 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-14 lg:gap-y-0 lg:py-20 xl:gap-x-16 xl:py-24">
            {/* Image — mobile first */}
            <motion.div {...up(0.04)} className="order-1 lg:order-2">
              <div className="mx-auto max-w-lg lg:mx-0 lg:max-w-none">
                <div className="relative rounded-[1.25rem] bg-gradient-to-br from-neutral-200/70 via-white to-neutral-100 p-[1px] sm:rounded-3xl sm:p-[2px]">
                  <div className="overflow-hidden rounded-[1.15rem] bg-neutral-100 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05] sm:rounded-[1.4rem]">
                    <img
                      src="/rathan-car-lessons.png"
                      alt={`${SITE_NAME} — modern learner car in Liverpool`}
                      className="aspect-[16/10] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/3]"
                      width={1200}
                      height={900}
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-xs font-medium text-neutral-400 lg:text-left">
                  Local school · Serving Merseyside
                </p>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="order-2 mt-10 min-w-0 lg:order-1 lg:mt-0">
              <motion.div {...up(0)} className="flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                  About us
                </p>
              </motion.div>

              <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
                {SITE_NAME}
              </motion.p>

              <motion.h1
                {...up(0.06)}
                id="about-page-heading"
                className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem] xl:text-5xl"
              >
                Safe, confident drivers — that&apos;s the goal
              </motion.h1>

              <motion.p
                {...up(0.1)}
                className="prose-width mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
              >
                We&apos;re a local driving school based in Liverpool, serving Merseyside. Whether you&apos;re a complete
                beginner or need a refresher, we&apos;re here to help you learn at a pace that suits you — with clear
                instruction and a calm, supportive environment.
              </motion.p>

              <motion.ul
                {...up(0.12)}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                aria-label="What defines us"
              >
                {highlights.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white/80 px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    {text}
                  </li>
                ))}
              </motion.ul>

              <motion.p {...up(0.14)} className="mt-8 text-sm text-neutral-500">
                Ready to start?{' '}
                <Link
                  to="/lessons"
                  className="font-semibold text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
                >
                  View lessons
                </Link>
                {' · '}
                <Link
                  to="/contact"
                  className="font-semibold text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
                >
                  Contact us
                </Link>
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading title="Our values" subtitle="What you can expect from every lesson." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                {...inView}
                transition={reduceMotion ? undefined : { delay: i * 0.08, duration: 0.45, ease }}
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
              Get in touch to book your first lesson or ask any questions. We cover Liverpool, Wirral, Sefton, Knowsley
              and surrounding areas.
            </p>
          </div>
        </div>
      </section>
      <CTABanner
        title="Start your driving journey"
        subtitle="Book a lesson or chat with us on WhatsApp. We'll find a time that works for you."
      />
    </>
  );
}
