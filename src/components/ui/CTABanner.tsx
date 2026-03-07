import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready to start learning?",
  subtitle = "Book your first lesson or chat with us on WhatsApp. We're here to help you pass.",
}: CTABannerProps) {
  return (
    <section className="section-padding bg-black">
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-neutral-400"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-primary">
            <Calendar className="h-5 w-5" aria-hidden />
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="min-h-[44px] rounded-xl border-2 border-white/30 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <MessageCircle className="inline h-5 w-5" />
            <span className="ml-2">WhatsApp</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
