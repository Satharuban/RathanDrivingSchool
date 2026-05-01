/**
 * NAP (Name, Address, Phone) for footer + schema.
 *
 * If you operate as a mobile/service-area business and don't want to publish a street address,
 * keep the street/postcode empty and we'll display "Liverpool, Merseyside, United Kingdom".
 */

/** First line of registered office or public meeting address (optional) */
export const BUSINESS_STREET_ADDRESS_LINE_1 = '2 Keithley Walk';

/** Second line if needed, or empty string */
export const BUSINESS_STREET_ADDRESS_LINE_2 = '';

export const BUSINESS_ADDRESS_LOCALITY = 'Liverpool';
export const BUSINESS_ADDRESS_REGION = 'Merseyside';

/** UK postcode for registered / correspondence address (optional) */
export const BUSINESS_POSTCODE = 'L24 2UZ';

export const BUSINESS_ADDRESS_COUNTRY = 'GB';

/** Map pin: [REPLACE] Set to your business coordinates for accurate Local SEO */
export const BUSINESS_GEO_LATITUDE = 53.4084;
export const BUSINESS_GEO_LONGITUDE = -2.9916;

/**
 * Optional: full Google Maps embed URL from Share → Embed a map (starts with https://www.google.com/maps/embed?pb=...).
 * If empty, a generic embed centred on BUSINESS_GEO_* is used.
 */
export const GOOGLE_MAPS_EMBED_PB = '';

const FALLBACK_MAP_EMBED = `https://maps.google.com/maps?q=${BUSINESS_GEO_LATITUDE},${BUSINESS_GEO_LONGITUDE}&hl=en&z=14&output=embed`;

/** iframe `src` for the contact page map */
export const GOOGLE_MAPS_EMBED_SRC = GOOGLE_MAPS_EMBED_PB.trim() || FALLBACK_MAP_EMBED;

/** Typical hours — align with schema openingHoursSpecification */
export const BUSINESS_OPENING_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
  opens: '08:00',
  closes: '19:00',
};

export function formatNapAddressLines(): string[] {
  const lines: string[] = [];
  if (BUSINESS_STREET_ADDRESS_LINE_1.trim()) lines.push(BUSINESS_STREET_ADDRESS_LINE_1.trim());
  if (BUSINESS_STREET_ADDRESS_LINE_2.trim()) lines.push(BUSINESS_STREET_ADDRESS_LINE_2.trim());
  lines.push(`${BUSINESS_ADDRESS_LOCALITY}, ${BUSINESS_ADDRESS_REGION}`);
  if (BUSINESS_POSTCODE.trim()) lines.push(BUSINESS_POSTCODE.trim());
  lines.push('United Kingdom');
  return lines.filter(Boolean);
}
