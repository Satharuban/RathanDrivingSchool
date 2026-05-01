import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL, TITLE_BRAND } from '../../constants/seo';
import { getRouteMeta } from '../../constants/routeMeta';
import {
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_LOCALITY,
  BUSINESS_ADDRESS_REGION,
  BUSINESS_GEO_LATITUDE,
  BUSINESS_GEO_LONGITUDE,
  BUSINESS_POSTCODE,
  BUSINESS_STREET_ADDRESS_LINE_1,
  BUSINESS_STREET_ADDRESS_LINE_2,
} from '../../constants/businessAddress';
import {
  FACEBOOK_URL,
  GOOGLE_REVIEW_COUNT,
  INSTAGRAM_URL,
  SITE_NAME,
  YOUTUBE_URL,
} from '../../constants/site';

const telE164 = '+447904960577';
const SCHEMA_EMAIL = 'satharuban97@gmail.com';

const OG_TITLE = "Driving Lessons Liverpool & Merseyside | Rathan's Driving School";
const OG_DESCRIPTION =
  "Book driving lessons in Liverpool & Merseyside with Rathan's Driving School — manual & automatic, DVSA-focused tuition. WhatsApp or call to check availability today.";
const TWITTER_DESCRIPTION =
  "Book driving lessons in Liverpool & Merseyside with Rathan's Driving School — manual & automatic, DVSA-focused tuition.";
const OG_IMAGE_ABSOLUTE = 'https://www.rathansdrivingschool.co.uk/rathan-car-hero.webp';

/** Static DrivingSchool JSON-LD (matches agreed block; address/review/prices from constants). */
function drivingSchoolJsonLd(): object {
  const streetLine = [BUSINESS_STREET_ADDRESS_LINE_1, BUSINESS_STREET_ADDRESS_LINE_2]
    .map((v) => v?.trim())
    .filter(Boolean)
    .join(', ');

  return {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: SITE_NAME,
    url: 'https://www.rathansdrivingschool.co.uk',
    telephone: telE164,
    email: SCHEMA_EMAIL,
    description:
      'Professional driving lessons across Liverpool and Merseyside. Manual and automatic tuition for beginners, intensive courses, and refresher lessons. DVSA-aligned instruction with flexible scheduling.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetLine || '2 Keithley Walk',
      addressLocality: BUSINESS_ADDRESS_LOCALITY,
      addressRegion: BUSINESS_ADDRESS_REGION,
      postalCode: BUSINESS_POSTCODE.trim() || 'L24 2UZ',
      addressCountry: BUSINESS_ADDRESS_COUNTRY,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_GEO_LATITUDE,
      longitude: BUSINESS_GEO_LONGITUDE,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '00:00',
        closes: '00:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: GOOGLE_REVIEW_COUNT,
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Driving Lesson Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Beginner Driving Lessons' },
          priceCurrency: 'GBP',
          price: '35',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Intensive Driving Course' },
          priceCurrency: 'GBP',
          price: '299',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Automatic Driving Lessons' },
          priceCurrency: 'GBP',
          price: '38',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Refresher Lessons' },
          priceCurrency: 'GBP',
          price: '35',
        },
      ],
    },
    sameAs: [FACEBOOK_URL, YOUTUBE_URL, INSTAGRAM_URL].filter(Boolean),
    priceRange: '££',
  };
}

export function SeoHead() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const canonicalPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const canonical = canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${canonicalPath}`;
  const ogUrl = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  if (isAdmin) {
    const adminTitle =
      pathname.includes('login') ? `Admin sign in | ${TITLE_BRAND}` : `Admin | ${TITLE_BRAND}`;
    return (
      <Helmet>
        <html lang="en-GB" />
        <title>{adminTitle}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
    );
  }

  const { pageTitle, description } = getRouteMeta(pathname);
  const title = `${pageTitle} | ${TITLE_BRAND}`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={OG_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={OG_IMAGE_ABSOLUTE} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={OG_TITLE} />
      <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE_ABSOLUTE} />

      <script type="application/ld+json">{JSON.stringify(drivingSchoolJsonLd())}</script>
    </Helmet>
  );
}
