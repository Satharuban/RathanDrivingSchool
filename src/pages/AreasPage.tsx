import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AreaCard } from '../components/ui/AreaCard';
import { AREAS_COVERED } from '../constants/areas';
import { CTABanner } from '../components/ui/CTABanner';
import { SITE_NAME } from '../constants/site';
import { MerseysideCoverageMap } from '../components/areas/MerseysideCoverageMap';

const ease = [0.22, 1, 0.36, 1] as const;

const highlightAreas = AREAS_COVERED.slice(0, 4);

export function AreasPage() {
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
        className="relative overflow-hidden border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50 via-white to-white"
        aria-labelledby="areas-page-heading"
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-72 w-[min(100%,28rem)] translate-x-1/3 rounded-full bg-brand-red/[0.045] blur-3xl"
          aria-hidden
        />

        <div className="container-narrow relative z-[1] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-14 sm:py-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-14 lg:gap-y-0 lg:py-20 xl:gap-x-16 xl:py-24">
            {/* Map — mobile first (real OSM geography, pan/zoom in frame) */}
            <motion.div {...up(0.04)} className="order-1 lg:order-2">
              <div className="mx-auto max-w-lg lg:mx-0 lg:max-w-none">
                <MerseysideCoverageMap />
              </div>
            </motion.div>

            <div className="order-2 mt-10 min-w-0 lg:order-1 lg:mt-0">
              <motion.div {...up(0)} className="flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                  Coverage
                </p>
              </motion.div>

              <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
                {SITE_NAME}
              </motion.p>

              <motion.h1
                {...up(0.06)}
                id="areas-page-heading"
                className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem] xl:text-5xl"
              >
                Areas we cover
              </motion.h1>

              <motion.p
                {...up(0.1)}
                className="prose-width mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
              >
                We teach across Liverpool and Merseyside. The map shows the region we work in — local knowledge means we
                know test routes and busy streets so you learn where it matters. Always confirm with your postcode.
              </motion.p>

              <motion.ul
                {...up(0.12)}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                aria-label="Areas we serve"
              >
                {highlightAreas.map((area) => (
                  <li
                    key={area.id}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-200/90 bg-white/80 px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    {area.name}
                  </li>
                ))}
              </motion.ul>

              <motion.p {...up(0.14)} className="mt-8 text-sm text-neutral-500">
                Not on the list?{' '}
                <Link
                  to="/contact"
                  className="font-semibold text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
                >
                  Send your postcode
                </Link>
                {' — '}
                we&apos;ll confirm.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            title="By area"
            subtitle="Liverpool, Wirral, Sefton, Knowsley and more. If your area isn't listed, get in touch with your postcode."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS_COVERED.map((area, i) => (
              <AreaCard key={area.id} area={area} index={i} />
            ))}
          </div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-neutral-600"
          >
            We also cover Wigan, Leigh, and other areas within a reasonable distance. Enquire with your postcode to
            confirm.
          </motion.p>
        </div>
      </section>
      <CTABanner
        title="Not sure if we cover your area?"
        subtitle="Send us your postcode and we'll confirm. We're always happy to help."
      />
    </>
  );
}
