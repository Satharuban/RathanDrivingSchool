import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 min-w-[56px] min-h-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
