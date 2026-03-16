export const SITE_NAME = "Rathan's Driving School";
export const SITE_TAGLINE = 'Pass Faster with Professional Driving Lessons';

/** Hero section main headline (homepage) */
export const HERO_HEADLINE = "Professional Driving Lessons in Liverpool";

export const WHATSAPP_NUMBER = '447904960577';
export const WHATSAPP_MESSAGE = "Hi, I'm interested in driving lessons. Can you share availability?";

/** Display and tel: link — UK format */
export const PHONE_NUMBER = '+44 7904 960577';
export const PHONE_HREF = 'tel:+447904960577';

/** Rathan's Driving School Facebook page */
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61558641268583';

/** Rathan's Driving School YouTube channel */
export const YOUTUBE_URL = 'https://www.youtube.com/@psivarathan9186';

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
