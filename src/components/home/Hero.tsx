import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Shield, Clock, Car } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const trustBadges = [
  { icon: Shield, text: 'DVSA-ready lessons' },
  { icon: Car, text: 'Manual & Automatic' },
  { icon: Clock, text: 'Flexible lesson times' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" aria-hidden />

      <div className="container-narrow section-padding relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Mobile: image first, full bleed */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative -mx-4 sm:mx-0 lg:hidden"
          >
            <div className="aspect-[16/10] overflow-hidden sm:rounded-2xl">
              <img
                src="/hero-driving-lesson.png"
                alt="Professional driving lesson in Liverpool"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 px-4 sm:px-0">
              <span className="text-sm font-semibold text-black">From £35/hr</span>
              <span className="text-neutral-400">·</span>
              <span className="text-sm text-neutral-600">Block discounts</span>
            </div>
          </motion.div>

          {/* Copy: same for mobile + desktop, order adjusted via grid */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-wider text-brand-red sm:text-sm"
            >
              Liverpool & Merseyside
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-black sm:mt-6 sm:text-4xl sm:leading-[1.1] lg:text-5xl xl:text-[3.5rem]"
            >
              Pass Faster with Professional Driving Lessons
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg lg:text-xl"
            >
              Patient instructors, flexible scheduling, and a focus on getting you test-ready. Manual and automatic lessons across Liverpool, Wirral, Sefton, Knowsley & beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 text-base sm:inline-flex">
                <Calendar className="h-5 w-5 shrink-0" />
                Book a Lesson
              </Link>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="btn-secondary flex items-center justify-center gap-2 text-base sm:inline-flex"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                Chat on WhatsApp
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-6 sm:justify-start sm:pt-8 lg:gap-x-6"
              role="list"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-neutral-600" role="listitem">
                  <Icon className="h-4 w-4 shrink-0 text-brand-red" aria-hidden />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop: image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src="/hero-driving-lesson.png"
                  alt="Professional driving lesson in Liverpool"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-neutral-50 p-4">
                  <p className="font-semibold text-black">From £35/hr</p>
                  <p className="text-xs text-neutral-500">Manual & beginner</p>
                </div>
                <div className="rounded-lg bg-brand-green-light/40 p-4">
                  <p className="font-semibold text-black">Block discounts</p>
                  <p className="text-xs text-neutral-600">10 & 20 hour packs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
