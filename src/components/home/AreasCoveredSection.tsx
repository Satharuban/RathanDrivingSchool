import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { AreaCard } from '../ui/AreaCard';
import { AREAS_COVERED } from '../../constants/areas';

export function AreasCoveredSection() {
  const displayAreas = AREAS_COVERED.slice(0, 4);
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Coverage"
          title="Areas we cover"
          subtitle="We teach across Liverpool and Merseyside. Local knowledge means better test preparation."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayAreas.map((area, i) => (
            <AreaCard key={area.id} area={area} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link to="/areas" className="btn-secondary">
            View all areas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
