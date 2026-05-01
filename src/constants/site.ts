export const SITE_NAME = "Rathan's Driving School";
export const SITE_TAGLINE = 'Pass Faster with Professional Driving Lessons';

/** Hero section main headline (homepage) */
export const HERO_HEADLINE = "Professional Driving Lessons in Liverpool";

export const WHATSAPP_NUMBER = '447904960577';
export const WHATSAPP_MESSAGE = "Hi, I'm interested in driving lessons. Can you share availability?";

/** Public contact email shown on the site + used for fallbacks */
export const CONTACT_EMAIL = 'satharuban97@gmail.com';

/** Display and tel: link — UK format */
export const PHONE_NUMBER = '+44 7904 960577';
export const PHONE_HREF = 'tel:+447904960577';

/** Rathan's Driving School Facebook page */
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61558641268583';

/** Rathan's Driving School YouTube channel */
export const YOUTUBE_URL = 'https://www.youtube.com/@psivarathan9186';

/** Rathan's Driving School Instagram */
export const INSTAGRAM_URL = 'https://www.instagram.com/rathans_driving_school';

/**
 * Google Business Profile / Reviews.
 * If you have a direct GBP link, paste it here. Fallback is a Google search query.
 */
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://www.google.com/search?q=Rathan%27s+Driving+School+Liverpool";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Rathan%27s+Driving+School+Liverpool+reviews";

/**
 * Review stats for schema.org AggregateRating.
 * Update these to match your live Google Business Profile.
 */
export const GOOGLE_RATING_VALUE = '5';
export const GOOGLE_REVIEW_COUNT = '5';

export const INSTRUCTOR_NAME = 'Rathan';
/** Instructor's full name (shown in bio + schema). */
export const INSTRUCTOR_FULL_NAME = 'Rathan';
/** DVSA ADI badge number (optional but recommended GEO trust signal). */
export const INSTRUCTOR_DVSA_ADI_BADGE_NUMBER = '';
/** Years of experience teaching learners (optional but recommended). */
export const INSTRUCTOR_YEARS_EXPERIENCE = '';
/** 2–3 sentence instructor bio (shown on homepage). */
export const INSTRUCTOR_BIO =
  "Rathan offers calm, professional driving lessons across Liverpool and Merseyside, focused on real-world confidence and DVSA-aligned skills. Whether you're a beginner, need an intensive course, or want refresher lessons, you'll get clear coaching and flexible scheduling.";

export const INSTRUCTOR_CREDENTIALS = [
  'DVSA-aligned coaching',
  'Patient, calm teaching style',
  'Local Liverpool & Merseyside test-route practice',
  'Years of experience helping learners pass with confidence',
] as const;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Lessons', path: '/lessons' },
  { label: 'Intensive Courses', path: '/intensive' },
  { label: 'Areas Covered', path: '/areas' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
] as const;

export const LESSON_TYPES = [
  'Beginner lessons',
  'Manual lessons',
  'Automatic lessons',
  'Intensive course',
  'Refresher lessons',
  'Other',
] as const;
