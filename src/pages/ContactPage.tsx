import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Facebook, Youtube, Instagram } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { ResponsivePicture } from '../components/ui/ResponsivePicture';
import { openWhatsApp } from '../utils/whatsapp';
import { FACEBOOK_URL, YOUTUBE_URL, INSTAGRAM_URL, PHONE_NUMBER, PHONE_HREF, SITE_NAME } from '../constants/site';
import {
  GOOGLE_MAPS_EMBED_SRC,
  formatNapAddressLines,
} from '../constants/businessAddress';

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactPage() {
  const reduceMotion = useReducedMotion();
  const up = (d = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay: d, ease },
        };

  return (
    <>
      <section
        className="border-b border-neutral-200/90 bg-gradient-to-b from-neutral-50/90 via-white to-white"
        aria-labelledby="contact-heading"
      >
        <div className="container-narrow px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div {...up(0)} className="flex items-center justify-center gap-3">
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-red ring-4 ring-brand-red/15" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-[0.8125rem] sm:tracking-[0.16em]">
                Get in touch
              </p>
            </motion.div>
            <motion.p {...up(0.02)} className="mt-3 text-sm font-semibold text-neutral-700">
              {SITE_NAME}
            </motion.p>
            <motion.h1
              {...up(0.06)}
              id="contact-heading"
              className="mt-3 font-display text-[2.125rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-4xl sm:leading-[1.05] lg:text-[2.5rem]"
            >
              Contact &amp; book a lesson
            </motion.h1>
            <motion.p
              {...up(0.1)}
              className="prose-width mx-auto mt-6 text-base leading-[1.65] text-neutral-600 sm:text-lg"
            >
              Fill in the form below or reach us by phone, WhatsApp, or social media. We&apos;ll get back to you quickly
              with availability.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              {...up(0.12)}
              className="space-y-6 lg:col-span-2"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-soft-lg ring-1 ring-neutral-200/70 sm:rounded-3xl">
                <ResponsivePicture
                  webpSrc="/rathan-car-hero.webp"
                  fallbackSrc="/rathan-car-hero.png"
                  alt={`${SITE_NAME} — training car with roof sign; call or message to book a lesson`}
                  className="aspect-[4/3] w-full object-cover object-center"
                  width={768}
                  height={1024}
                />
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-black">Location &amp; contact details</h2>
                <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-neutral-700">
                  <p className="font-semibold text-black">{SITE_NAME}</p>
                  {formatNapAddressLines().map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p className="pt-2">
                    <span className="sr-only">Phone: </span>
                    <a
                      href={PHONE_HREF}
                      className="font-semibold text-brand-red underline-offset-2 hover:underline focus:outline-none focus-visible:underline"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </p>
                  <p>
                    <span className="sr-only">Email: </span>
                    <a
                      href="mailto:info@rathandrivingschool.co.uk"
                      className="font-medium text-brand-red underline-offset-2 hover:underline focus:outline-none focus-visible:underline"
                    >
                      info@rathandrivingschool.co.uk
                    </a>
                  </p>
                </address>
                <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-100 shadow-sm ring-1 ring-black/[0.04]">
                  <iframe
                    title="Map — Rathan's Driving School service area and location reference"
                    src={GOOGLE_MAPS_EMBED_SRC}
                    className="aspect-video w-full min-h-[220px] border-0 sm:min-h-[280px]"
                    width={600}
                    height={450}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <h2 className="font-display text-xl font-semibold text-black">Other ways to reach us</h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 rounded-xl border border-neutral-200/90 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
                  >
                    <span className="rounded-lg bg-brand-red/10 p-2 text-brand-red">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">{PHONE_NUMBER}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rathandrivingschool.co.uk"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200/90 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
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
                    className="flex w-full items-center gap-3 rounded-xl border border-neutral-200/90 p-4 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
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
                    className="flex items-center gap-3 rounded-xl border border-neutral-200/90 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
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
                    className="flex items-center gap-3 rounded-xl border border-neutral-200/90 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
                  >
                    <span className="rounded-lg bg-[#FF0000]/10 p-2 text-[#FF0000]">
                      <Youtube className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">Watch us on YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-neutral-200/90 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50/80"
                  >
                    <span className="rounded-lg bg-[#E4405F]/10 p-2 text-[#E4405F]">
                      <Instagram className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-black">Follow us on Instagram</span>
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
