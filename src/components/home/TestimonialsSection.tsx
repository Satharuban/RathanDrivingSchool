import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../constants/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Reviews"
          title="What our students say"
          subtitle="Real reviews from learners who passed with us across Greater Manchester."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
