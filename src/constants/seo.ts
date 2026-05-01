/** Production site origin — no trailing slash */
export const SITE_URL = 'https://www.rathansdrivingschool.co.uk';

/** Suffix for <title> on public pages (matches brief) */
export const TITLE_BRAND = "Rathan's Driving School";

/** Default Open Graph / Twitter image (WebP generated in prebuild; PNG fallback exists) */
export const DEFAULT_OG_IMAGE_PATH = '/rathan-car-hero.webp';

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
