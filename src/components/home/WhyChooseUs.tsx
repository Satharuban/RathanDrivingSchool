import { motion } from 'framer-motion';
import {
  Heart,
  CalendarClock,
  PoundSterling,
  Award,
  MapPin,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const items = [
  {
    id: 'patient',
    icon: Heart,
    title: 'Patient instructors',
    description: 'We know learning to drive can feel stressful. Our instructors are calm, supportive, and never rush you.',
  },
  {
    id: 'flexible',
    icon: CalendarClock,
    title: 'Flexible scheduling',
    description: 'Weekday, evening, or weekend lessons. We work around your job, studies, or family commitments.',
  },
  {
    id: 'prices',
    icon: PoundSterling,
    title: 'Clear options',
    description: 'Single lessons, block bookings, and intensive courses. No hidden fees — we’ll find an option that suits you.',
  },
  {
    id: 'pass',
    icon: Award,
    title: 'High pass support',
    description: 'Structured lessons aligned to the DVSA syllabus. We practise test routes and get you test-ready.',
  },
  {
    id: 'local',
    icon: MapPin,
    title: 'Local area expertise',
    description: 'We know Liverpool, Wirral, Sefton, Knowsley and surrounding areas — including test routes.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="What we offer"
          title="Why choose us"
          subtitle="We're a local driving school that puts you first. Here's what sets us apart."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex rounded-lg bg-brand-red-light p-2.5 text-brand-red">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
