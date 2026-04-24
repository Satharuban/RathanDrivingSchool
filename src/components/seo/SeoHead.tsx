import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL, TITLE_BRAND, absoluteUrl, DEFAULT_OG_IMAGE_PATH } from '../../constants/seo';
import { getRouteMeta } from '../../constants/routeMeta';
import {
  BUSINESS_ADDRESS_COUNTRY,
  BUSINESS_ADDRESS_LOCALITY,
  BUSINESS_ADDRESS_REGION,
  BUSINESS_GEO_LATITUDE,
  BUSINESS_GEO_LONGITUDE,
  BUSINESS_OPENING_HOURS,
  BUSINESS_POSTCODE,
  BUSINESS_STREET_ADDRESS_LINE_1,
} from '../../constants/businessAddress';
import { FACEBOOK_URL, INSTAGRAM_URL, SITE_NAME, YOUTUBE_URL } from '../../constants/site';

const telE164 = '+447904960577';

function drivingSchoolJsonLd(): object {
  const { days, opens, closes } = BUSINESS_OPENING_HOURS;
  return {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: telE164,
    email: 'info@rathandrivingschool.co.uk',
    sameAs: [FACEBOOK_URL, YOUTUBE_URL, INSTAGRAM_URL],
    address: {
      '@type': 'PostalAddress',
      streetAddress: [BUSINESS_STREET_ADDRESS_LINE_1].filter(Boolean).join(', '),
      addressLocality: BUSINESS_ADDRESS_LOCALITY,
      addressRegion: BUSINESS_ADDRESS_REGION,
      postalCode: BUSINESS_POSTCODE,
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
        dayOfWeek: days,
        opens,
        closes,
      },
    ],
    priceRange: '££',
    areaServed: [
      { '@type': 'City', name: 'Liverpool' },
      { '@type': 'AdministrativeArea', name: 'Merseyside' },
    ],
  };
}

export function SeoHead() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  const canonicalPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const canonical = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

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
  const ogImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={`${SITE_NAME} | Liverpool`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${SITE_NAME} | Liverpool`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(drivingSchoolJsonLd())}</script>
    </Helmet>
  );
}
