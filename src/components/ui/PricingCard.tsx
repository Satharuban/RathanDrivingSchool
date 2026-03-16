import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { PricingPackage } from '../../constants/pricing';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface PricingCardProps {
  package: PricingPackage;
  index?: number;
}

export function PricingCard({ package: pkg, index = 0 }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 ${
        pkg.popular ? 'ring-2 ring-brand-red/30' : ''
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-red px-3 py-0.5 text-xs font-semibold text-white">
          Popular
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-black">{pkg.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{pkg.description}</p>
      <ul className="mt-6 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
            <Check className="h-5 w-5 shrink-0 text-brand-green" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        {pkg.id === 'intensive' ? (
          <Link
            to="/intensive"
            className={`block w-full min-h-[44px] rounded-xl py-3.5 text-center font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-red ${
              pkg.popular
                ? 'btn-primary'
                : 'border-2 border-black text-black hover:bg-black hover:text-white active:scale-[0.98]'
            }`}
          >
            {pkg.ctaLabel}
          </Link>
        ) : (
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full min-h-[44px] rounded-xl py-3.5 text-center font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-red ${
              pkg.popular
                ? 'btn-primary'
                : 'border-2 border-black text-black hover:bg-black hover:text-white active:scale-[0.98]'
            }`}
          >
            {pkg.ctaLabel}
          </a>
        )}
      </div>
    </motion.article>
  );
}
