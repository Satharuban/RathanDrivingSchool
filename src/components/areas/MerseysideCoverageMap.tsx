import { ExternalLink } from 'lucide-react';
import { getMerseysideOsmEmbedUrl, getMerseysideOsmMapUrl } from '../../constants/merseysideMap';

type MerseysideCoverageMapProps = {
  className?: string;
};

/**
 * Real geographic map (OpenStreetMap) — pan and zoom inside the frame, or open full map.
 * Bbox is defined in `constants/merseysideMap.ts`. Not a legal service boundary — confirm with postcode.
 */
export function MerseysideCoverageMap({ className = '' }: MerseysideCoverageMapProps) {
  const embedSrc = getMerseysideOsmEmbedUrl();
  const mapHref = getMerseysideOsmMapUrl();

  return (
    <figure className={className}>
      <div className="relative overflow-hidden rounded-[1.15rem] bg-neutral-100 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05] sm:rounded-[1.4rem]">
        <div className="aspect-[16/10] w-full min-h-[220px] sm:min-h-[280px] lg:aspect-[4/3] lg:min-h-[320px]">
          <iframe
            title="Map of Liverpool, Merseyside and surrounding area"
            src={embedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      <figcaption className="mt-4 flex flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4">
        <span>
          Map data ©{' '}
          <a
            href="https://www.openstreetmap.org/copyright"
            className="font-medium text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenStreetMap contributors
          </a>
          {' '}
          (ODbL). Shows real geography — not a guaranteed coverage boundary.
        </span>
        <a
          href={mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-brand-red underline-offset-2 hover:text-brand-red-hover hover:underline focus:outline-none focus-visible:underline"
        >
          Open full map
          <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
        </a>
      </figcaption>
    </figure>
  );
}
