import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../constants/faq';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={false}
            className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-black transition-colors hover:bg-neutral-50 sm:px-6"
              aria-expanded={isOpen}
            >
              {item.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="border-t border-neutral-100 px-5 py-4 text-neutral-600 sm:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
