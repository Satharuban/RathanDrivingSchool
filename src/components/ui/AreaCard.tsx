import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Area } from '../../constants/areas';

interface AreaCardProps {
  area: Area;
  index?: number;
}

export function AreaCard({ area, index = 0 }: AreaCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
    >
      <span className="inline-flex rounded-lg bg-neutral-100 p-2.5 text-neutral-600">
        <MapPin className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-black">{area.name}</h3>
      <p className="mt-2 text-sm text-neutral-600">{area.description}</p>
    </motion.article>
  );
}
