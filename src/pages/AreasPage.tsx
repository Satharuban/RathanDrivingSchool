import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AreaCard } from '../components/ui/AreaCard';
import { AREAS_COVERED } from '../constants/areas';
import { CTABanner } from '../components/ui/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

export function AreasPage() {
  usePageTitle('Areas Covered');
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white pt-16">
        <div className="container-narrow">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
            >
              Areas we cover
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
            >
              We teach across Liverpool and Merseyside. Local knowledge means we know the test routes and busy streets — so you learn where it matters.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 rounded-2xl overflow-hidden border border-neutral-200 shadow-md"
          >
            <img
              src="/areas-liverpool-coverage.png"
              alt="Liverpool and Merseyside coverage area"
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <SectionHeading
            title="Coverage map"
            subtitle="Liverpool, Wirral, Sefton, Knowsley and more. If your area isn't listed, get in touch with your postcode."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS_COVERED.map((area, i) => (
              <AreaCard key={area.id} area={area} index={i} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center text-neutral-600"
          >
            We also cover Wigan, Leigh, and other areas within a reasonable distance. Enquire with your postcode to confirm.
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
