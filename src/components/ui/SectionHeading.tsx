import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={centered ? 'mx-auto max-w-2xl text-center' : ''}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl font-bold tracking-tight text-black sm:text-4xl ${eyebrow ? 'mt-2' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg leading-relaxed text-neutral-600 sm:mt-4 ${centered ? 'mx-auto max-w-xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
