/**
 * NAP + map — update placeholders before launch for Local SEO.
 * Search [REPLACE] in this file.
 */

/** [REPLACE] First line of registered office or public meeting address */
export const BUSINESS_STREET_ADDRESS_LINE_1 = '[REPLACE: Street number and name]';

/** [REPLACE] Second line if needed, or empty string */
export const BUSINESS_STREET_ADDRESS_LINE_2 = '';

export const BUSINESS_ADDRESS_LOCALITY = 'Liverpool';
export const BUSINESS_ADDRESS_REGION = 'Merseyside';

/** [REPLACE] UK postcode for registered / correspondence address */
export const BUSINESS_POSTCODE = '[REPLACE: Postcode]';

export const BUSINESS_ADDRESS_COUNTRY = 'GB';

/** Map pin: [REPLACE] Set to your business coordinates for accurate Local SEO */
export const BUSINESS_GEO_LATITUDE = 53.4084;
export const BUSINESS_GEO_LONGITUDE = -2.9916;

/**
 * Google Maps embed (no API key) — centred on geo above.
 * [REPLACE] In Google Maps: Share → Embed a map → paste the iframe `src` here for your exact pin.
 */
export const GOOGLE_MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${BUSINESS_GEO_LATITUDE},${BUSINESS_GEO_LONGITUDE}&hl=en&z=14&output=embed`;

/** [REPLACE] Typical hours — adjust to match how you operate */
export const BUSINESS_OPENING_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
  opens: '08:00',
  closes: '20:00',
};

export function formatNapAddressLines(): string[] {
  const lines = [BUSINESS_STREET_ADDRESS_LINE_1];
  if (BUSINESS_STREET_ADDRESS_LINE_2.trim()) lines.push(BUSINESS_STREET_ADDRESS_LINE_2.trim());
  lines.push(`${BUSINESS_ADDRESS_LOCALITY}, ${BUSINESS_ADDRESS_REGION}`);
  lines.push(BUSINESS_POSTCODE);
  lines.push('United Kingdom');
  return lines;
}
