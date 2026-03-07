import { motion } from 'framer-motion';
import { Users, Award, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Learners taught' },
  { icon: Award, value: '98%', label: 'Pass rate support' },
  { icon: MapPin, value: '10+', label: 'Areas covered' },
];

export function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-black py-10 sm:py-12" aria-label="Stats">
      <div className="absolute inset-0 bg-stripes" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 via-transparent to-brand-green/10" aria-hidden />
      <div className="container-narrow relative flex flex-wrap items-center justify-center gap-12 sm:gap-16 lg:gap-24">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/20 text-brand-red">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
              <p className="text-sm font-medium text-neutral-400">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
