import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import type { Testimonial } from '../../constants/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { name, location, rating, passed, text, lessonType } = testimonial;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-neutral-600">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="font-semibold text-black">{name}</span>
        {location && <span className="text-neutral-400">·</span>}
        {location && <span className="text-sm text-neutral-500">{location}</span>}
        {passed && (
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
            <Award className="h-3.5 w-3.5" />
            Passed
          </span>
        )}
        {lessonType && (
          <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">{lessonType}</span>
        )}
      </div>
    </motion.div>
  );
}
