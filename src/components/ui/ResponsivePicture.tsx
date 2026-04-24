type ResponsivePictureProps = {
  webpSrc: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** When true, do not lazy-load (above the fold / LCP) */
  priority?: boolean;
};

/**
 * WebP with PNG fallback. Browser picks WebP when `public/*.webp` exists (generated in prebuild).
 */
export function ResponsivePicture({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  className,
  priority = false,
}: ResponsivePictureProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  );
}
