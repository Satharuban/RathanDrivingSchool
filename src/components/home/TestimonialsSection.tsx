import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../constants/testimonials';
import { GOOGLE_REVIEWS_URL } from '../../constants/site';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Reviews"
          title="What our students say"
          subtitle="Real reviews from learners who passed with us across Liverpool and Merseyside."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-h-[44px] px-6 py-3 text-sm"
          >
            See all our reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
