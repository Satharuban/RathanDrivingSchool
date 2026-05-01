import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { ResponsivePicture } from '../ui/ResponsivePicture';
import { NAV_LINKS, SITE_NAME, PHONE_HREF } from '../../constants/site';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? 'border-neutral-200/80 bg-white/98 shadow-nav backdrop-blur-lg' : 'border-neutral-200/50 bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="container-narrow section-padding flex items-center justify-between gap-3 py-4" aria-label="Main">
        <Link to="/" className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2">
          <ResponsivePicture
            webpSrc="/logo.webp"
            fallbackSrc="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={640}
            height={640}
            priority
            className="h-11 w-auto mix-blend-darken sm:h-12"
          />
          <span className="font-display text-base font-extrabold tracking-tight text-neutral-950 sm:text-lg">
            {SITE_NAME}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 ${
                    isActive ? 'text-brand-red' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full bg-brand-red" aria-hidden />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact" className="btn-primary text-sm">
            Book Now
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0 md:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-neutral-200 bg-white text-brand-red shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            aria-label={`Call ${SITE_NAME}`}
          >
            <Phone className="h-5 w-5" aria-hidden />
          </a>
          <Link to="/contact" className="btn-primary min-h-[44px] px-4 py-2 text-sm">
            Book
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg p-2.5 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-neutral-200 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-4" role="list">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setOpen(false)}
                    aria-current={location.pathname === path ? 'page' : undefined}
                    className={`block rounded-lg px-4 py-3.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-inset ${
                      location.pathname === path ? 'bg-brand-red-light text-brand-red' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary block w-full text-center">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
