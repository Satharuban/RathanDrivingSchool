import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';
import { NAV_LINKS, SITE_NAME, FACEBOOK_URL, YOUTUBE_URL, PHONE_NUMBER, PHONE_HREF } from '../../constants/site';
import { AREAS_COVERED } from '../../constants/areas';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-black text-neutral-300">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-xl font-bold text-white">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm">
              Professional driving lessons across Liverpool and Merseyside. Manual & automatic, beginners to test-ready.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green transition-colors hover:text-brand-green-hover focus:outline-none focus-visible:underline"
              >
                Chat on WhatsApp
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white focus:outline-none focus-visible:underline"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden />
                Facebook
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white focus:outline-none focus-visible:underline"
                aria-label="Watch us on YouTube"
              >
                <Youtube className="h-5 w-5" aria-hidden />
                YouTube
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm transition-colors hover:text-white focus:outline-none focus-visible:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 transition-colors hover:text-white focus:outline-none focus-visible:underline">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href="mailto:info@rathandrivingschool.co.uk" className="flex items-center gap-2 transition-colors hover:text-white focus:outline-none focus-visible:underline">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  info@rathandrivingschool.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Liverpool, UK</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white">Areas covered</h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {AREAS_COVERED.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link to="/areas" className="transition-colors hover:text-white focus:outline-none focus-visible:underline">{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-neutral-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-white focus:outline-none focus-visible:underline"
              aria-label="Rathan's Driving School on Facebook"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Facebook
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-white focus:outline-none focus-visible:underline"
              aria-label="Rathan's Driving School on YouTube"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
