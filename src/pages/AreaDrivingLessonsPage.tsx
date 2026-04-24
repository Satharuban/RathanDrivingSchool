import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Calendar, MessageCircle } from 'lucide-react';
import { CTABanner } from '../components/ui/CTABanner';
import { SITE_NAME, PHONE_HREF, PHONE_NUMBER } from '../constants/site';
import { openWhatsApp } from '../utils/whatsapp';

const ease = [0.22, 1, 0.36, 1] as const;

export type AreaLessonSlug = 'wavertree' | 'aigburth' | 'allerton';

const COPY: Record<
  AreaLessonSlug,
  {
    heading: string;
    intro: string;
    local: string;
    routes: string;
  }
> = {
  wavertree: {
    heading: 'Driving lessons in Wavertree, Liverpool',
    intro:
      "Wavertree's mix of residential streets, main roads, and approaches toward the city centre makes it a practical place to build real-world skills. We pick you up locally when schedules allow and structure lessons so confidence grows week on week.",
    local:
      'Learners in L15 often practise bay parking near local parades, moving off safely on busier connectors, and reading junctions around Smithdown Road and nearby routes — always at a pace that suits you.',
    routes:
      'We also connect Wavertree practice with wider Liverpool and Merseyside routes you may see on test day, so you are not only “good on your own streets” but adaptable across the region.',
  },
  aigburth: {
    heading: 'Driving lessons in Aigburth & South Liverpool',
    intro:
      'Aigburth and the riverside roads along South Liverpool introduce varied traffic: parked cars, cyclists, and changing speed limits. Our instructors explain decisions clearly so you learn habits that stay with you after the test.',
    local:
      'Typical Aigburth sessions blend quieter roads for clutch and steering control with progressive exposure to busier links toward the city and neighbouring suburbs — ideal if you live or study in L17 or nearby.',
    routes:
      'Because we teach across Merseyside, Aigburth learners benefit from instructors who know how South Liverpool links to test centres and wider road types, not just one repeating circuit.',
  },
  allerton: {
    heading: 'Driving lessons in Allerton & Mossley Hill',
    intro:
      'Allerton combines suburban loops, schools traffic, and access toward major corridors — a strong training ground for observation and planning. We keep lessons calm and methodical, especially for nervous first-time drivers.',
    local:
      'If you are based around L18, we can focus early lessons on smooth pedal use, junction routines, and meeting situations you actually see near home, then widen out as your confidence grows.',
    routes:
      'When you are ready, we introduce routes that reflect how you will drive after passing — including busier sections and merges — while keeping explanations simple and repeatable.',
  },
};

type Props = { areaId: AreaLessonSlug };

export function AreaDrivingLessonsPage({ areaId }: Props) {
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: d, ease },
        };

  const c = COPY[areaId];

  return (
    <>
      <section
        className="border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 via-white to-white"
        aria-labelledby="area-lessons-heading"
      >
        <div className="container-narrow px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <motion.div {...up(0)} className="flex items-center gap-3">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                Local lessons
              </p>
            </motion.div>
            <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
              {SITE_NAME}
            </motion.p>
            <motion.h1
              {...up(0.06)}
              id="area-lessons-heading"
              className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem]"
            >
              {c.heading}
            </motion.h1>
            <motion.p
              {...up(0.1)}
              className="prose-width mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
            >
              {c.intro}
            </motion.p>
            <motion.p {...up(0.12)} className="prose-width mt-4 text-base leading-[1.65] text-neutral-600 sm:text-lg">
              {c.local}
            </motion.p>
            <motion.p {...up(0.14)} className="prose-width mt-4 text-base leading-[1.65] text-neutral-600 sm:text-lg">
              {c.routes}
            </motion.p>

            <motion.ul
              {...up(0.16)}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              aria-label="How to book"
            >
              <li className="flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white/80 px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                Confirm coverage for your postcode
              </li>
            </motion.ul>

            <motion.div {...up(0.18)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/contact" className="btn-primary min-h-[48px] justify-center px-8 sm:min-w-[11.5rem]">
                <Calendar className="h-5 w-5 shrink-0" aria-hidden />
                Book a lesson
              </Link>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="btn-secondary min-h-[48px] justify-center px-8 sm:min-w-[11.5rem]"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-[#128C7E]" aria-hidden />
                WhatsApp
              </button>
            </motion.div>
            <motion.a
              {...up(0.2)}
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {PHONE_NUMBER}
            </motion.a>

            <motion.p {...up(0.22)} className="mt-8 text-sm text-neutral-500">
              <Link to="/lessons" className="font-semibold text-brand-red underline-offset-2 hover:underline">
                View lesson packages
              </Link>
              {' · '}
              <Link to="/areas" className="font-semibold text-brand-red underline-offset-2 hover:underline">
                All areas we cover
              </Link>
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow prose-width mx-auto">
          <h2 className="font-display text-2xl font-bold text-black">Why book with us</h2>
          <p className="mt-4 text-neutral-600">
            Dual-control cars, DVSA-aligned teaching, and flexible times across Liverpool and Merseyside. Whether you
            are starting from scratch or polishing manoeuvres before a test, we adapt each lesson to you.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to start in your area?"
        subtitle="Tell us your postcode and availability — we will confirm an instructor and get your first drive booked."
      />
    </>
  );
}
