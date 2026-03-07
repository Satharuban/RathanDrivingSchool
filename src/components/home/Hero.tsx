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
    <section className="relative overflow-hidden bg-neutral-50 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" aria-hidden />

      <div className="container-narrow section-padding relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-wider text-brand-red"
            >
              Greater Manchester
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
            >
              Pass Faster with Professional Driving Lessons
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl"
            >
              Patient instructors, flexible scheduling, and a focus on getting you test-ready. Manual and automatic lessons across Manchester, Salford, Trafford & beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary text-base">
                <Calendar className="h-5 w-5" />
                Book a Lesson
              </Link>
              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="btn-secondary flex items-center gap-2 text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 pt-8"
              role="list"
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-neutral-600" role="listitem">
                  <Icon className="h-4 w-4 text-brand-red" aria-hidden />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

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
                  alt="Professional driving lesson in Greater Manchester"
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

          {/* Mobile: simplified card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative lg:hidden"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                <img
                  src="/hero-driving-lesson.png"
                  alt="Professional driving lesson in Greater Manchester"
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
