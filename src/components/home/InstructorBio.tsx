import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ResponsivePicture } from '../ui/ResponsivePicture';
import {
  INSTRUCTOR_BIO,
  INSTRUCTOR_CREDENTIALS,
  INSTRUCTOR_DVSA_ADI_BADGE_NUMBER,
  INSTRUCTOR_FULL_NAME,
  INSTRUCTOR_YEARS_EXPERIENCE,
  SITE_NAME,
} from '../../constants/site';

const ease = [0.22, 1, 0.36, 1] as const;

export function InstructorBio() {
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' } as const,
          transition: { duration: 0.45, delay: d, ease },
        };

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div {...up(0)} className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Meet your instructor</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-neutral-950 sm:text-3xl">
              {INSTRUCTOR_FULL_NAME}
            </h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-600">
              <p>{INSTRUCTOR_BIO}</p>
              <dl className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
                {INSTRUCTOR_DVSA_ADI_BADGE_NUMBER.trim() ? (
                  <div className="rounded-xl bg-white/60 px-4 py-3 ring-1 ring-neutral-200/70">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">DVSA ADI badge</dt>
                    <dd className="mt-1 font-medium text-neutral-900">{INSTRUCTOR_DVSA_ADI_BADGE_NUMBER}</dd>
                  </div>
                ) : null}
                {INSTRUCTOR_YEARS_EXPERIENCE.trim() ? (
                  <div className="rounded-xl bg-white/60 px-4 py-3 ring-1 ring-neutral-200/70">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">Experience</dt>
                    <dd className="mt-1 font-medium text-neutral-900">{INSTRUCTOR_YEARS_EXPERIENCE}</dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <ul className="mt-7 space-y-3">
              {INSTRUCTOR_CREDENTIALS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary min-h-[44px] justify-center px-7">
                Book a lesson
              </Link>
              <Link to="/reviews" className="btn-secondary min-h-[44px] justify-center px-7">
                See reviews
              </Link>
            </div>
          </motion.div>

          <motion.div {...up(0.06)} className="order-1 lg:order-2">
            <div className="mx-auto max-w-lg lg:mx-0">
              <div className="overflow-hidden rounded-2xl bg-white shadow-soft-lg ring-1 ring-neutral-200/70 sm:rounded-3xl">
                <ResponsivePicture
                  webpSrc="/rathan-car-lessons.webp"
                  fallbackSrc="/rathan-car-lessons.png"
                  alt={`${SITE_NAME} instructor — driving lessons in Liverpool & Merseyside`}
                  width={768}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              <p className="mt-4 text-center text-xs font-medium text-neutral-500 lg:text-left">
                Dual-control car · Friendly, professional tuition
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

