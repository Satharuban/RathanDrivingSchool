import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Calendar, Phone, Shield, Car, Clock } from 'lucide-react';
import { ResponsivePicture } from '../ui/ResponsivePicture';
import { openWhatsApp } from '../../utils/whatsapp';
import { HERO_HEADLINE, PHONE_HREF, PHONE_NUMBER, SITE_NAME } from '../../constants/site';

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  { icon: Shield, label: 'DVSA-aligned' },
  { icon: Car, label: 'Dual-control cars' },
  { icon: Clock, label: 'Flexible times' },
] as const;

function Title({ text }: { text: string }) {
  const m = text.match(/^(.+?)\s+in\s+(Liverpool)(.*)$/i);
  if (m) {
    return (
      <>
        <span className="block max-w-[20ch] text-balance sm:max-w-none">{m[1].trim()}</span>
        <span className="mt-2 block text-balance sm:mt-3">
          <span className="text-neutral-400">in </span>
          <span className="text-brand-red">{m[2]}</span>
          {m[3]}
        </span>
      </>
    );
  }
  return <span className="text-balance">{text}</span>;
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: d, ease },
        };

  return (
    <section
      className="relative overflow-hidden border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 via-white to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container-narrow relative z-[1] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-16 sm:py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16 lg:gap-y-0 lg:py-24 xl:gap-x-20 xl:py-28">
          {/* Image — first on small screens */}
          <motion.div {...up(0.04)} className="order-1 lg:order-2">
            <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-2xl bg-white shadow-soft-lg ring-1 ring-neutral-200/70 sm:rounded-3xl">
                <ResponsivePicture
                  webpSrc="/rathan-car-hero.webp"
                  fallbackSrc="/rathan-car-hero.png"
                  alt={`${SITE_NAME} — learner vehicle with roof sign and L plates`}
                  width={768}
                  height={1024}
                  priority
                  className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/3]"
                />
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="order-2 mt-10 min-w-0 lg:order-1 lg:mt-0">
            <motion.div {...up(0)} className="flex items-center gap-3">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                Liverpool &amp; Merseyside
              </p>
            </motion.div>

            <motion.p
              {...up(0.02)}
              className="mt-3 font-display text-sm font-semibold text-neutral-800 sm:text-base"
            >
              {SITE_NAME}
            </motion.p>

            <motion.h1
              {...up(0.06)}
              id="hero-heading"
              className="mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.032em] text-neutral-950 sm:text-4xl sm:leading-[1.06] lg:text-[2.375rem] lg:leading-[1.05] xl:text-5xl xl:leading-[1.02]"
            >
              <Title text={HERO_HEADLINE} />
            </motion.h1>

            <motion.p
              {...up(0.1)}
              className="prose-width mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
            >
              Learn with calm, qualified instructors on real roads. We focus on safe habits, local test routes, and
              building confidence — manual or automatic.
            </motion.p>

            <motion.ul
              {...up(0.12)}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              aria-label="Key benefits"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-sm"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>

            <motion.div {...up(0.14)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              {...up(0.18)}
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              {PHONE_NUMBER}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
