import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { FAQAccordion } from '../ui/FAQAccordion';
import { FAQ_ITEMS } from '../../constants/faq';

export function FAQSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Quick answers to common questions. Need more? Get in touch."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <FAQAccordion items={FAQ_ITEMS} />
        </motion.div>
      </div>
    </section>
  );
}
