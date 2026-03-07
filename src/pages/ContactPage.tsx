import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Facebook, Youtube } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { openWhatsApp } from '../utils/whatsapp';
import { FACEBOOK_URL, YOUTUBE_URL, PHONE_NUMBER, PHONE_HREF } from '../constants/site';
import { usePageTitle } from '../hooks/usePageTitle';

export function ContactPage() {
  usePageTitle('Contact & Book');
  return (
    <>
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white pt-16">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-extrabold tracking-tight text-black sm:text-5xl"
          >
            Contact & book a lesson
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Fill in the form below or get in touch by phone, WhatsApp, Facebook, or YouTube. We'll get back to you quickly with availability and prices.
          </motion.p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-xl font-semibold text-black">Other ways to reach us</h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
                  >
                    <span className="rounded-lg bg-neutral-100 p-2 text-neutral-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rathandrivingschool.co.uk"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
                  >
                    <span className="rounded-lg bg-neutral-100 p-2 text-neutral-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">info@rathandrivingschool.co.uk</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openWhatsApp()}
                    className="flex w-full items-center gap-3 rounded-xl border border-neutral-200 p-4 text-left transition-colors hover:bg-neutral-50"
                  >
                    <span className="rounded-lg bg-[#25D366]/10 p-2 text-[#25D366]">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">Chat on WhatsApp</span>
                  </button>
                </li>
                <li>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
                  >
                    <span className="rounded-lg bg-[#1877F2]/10 p-2 text-[#1877F2]">
                      <Facebook className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">Follow us on Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href={YOUTUBE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
                  >
                    <span className="rounded-lg bg-[#FF0000]/10 p-2 text-[#FF0000]">
                      <Youtube className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">Watch us on YouTube</span>
                  </a>
                </li>
              </ul>
            </motion.div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
