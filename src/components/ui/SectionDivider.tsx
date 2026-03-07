/** Wavy divider - use fill to match the section below */
export function SectionDivider({ fill = 'white' }: { fill?: 'white' | 'neutral' }) {
  const fillClass = fill === 'neutral' ? 'fill-neutral-50' : 'fill-white';
  return (
    <div className="relative h-14 w-full overflow-hidden sm:h-20" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 45C700 60 800 90 900 105C1000 120 1100 120 1150 120H1200V0H0V120Z"
          className={fillClass}
        />
      </svg>
    </div>
  );
}

/** Diagonal slash - section below shows with angled top */
export function SectionDividerSlant({ fill = 'white' }: { fill?: 'white' | 'neutral' }) {
  const fillClass = fill === 'neutral' ? 'fill-neutral-50' : 'fill-white';
  return (
    <div className="relative h-16 w-full overflow-hidden sm:h-24" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 100L1200 0H1200V100H0Z" className={fillClass} />
      </svg>
    </div>
  );
}
