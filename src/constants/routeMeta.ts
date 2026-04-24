/**
 * Unique meta descriptions (target ~150–160 chars) and short page names for <title>.
 */

export type RouteSeo = {
  /** Short page name — becomes: "{pageTitle} | {TITLE_BRAND}" */
  pageTitle: string;
  description: string;
};

export const ROUTE_META: Record<string, RouteSeo> = {
  '/': {
    pageTitle: 'Home',
    description:
      "Book driving lessons in Liverpool & Merseyside with Rathan's Driving School — manual & automatic, DVSA-focused tuition. WhatsApp or call to check availability today.",
  },
  '/about': {
    pageTitle: 'About Us',
    description:
      "Learn about Rathan's Driving School in Liverpool: calm instructors, dual-control cars, and lessons tailored to beginners and test-ready learners across Merseyside.",
  },
  '/lessons': {
    pageTitle: 'Lessons & Pricing',
    description:
      "Driving lesson packages in Liverpool — singles, blocks, and intensive options. Clear pricing, flexible times, manual or automatic. Contact us to book your first hour.",
  },
  '/intensive': {
    pageTitle: 'Intensive Courses',
    description:
      "Intensive driving courses in Liverpool for learners who need to pass on a deadline. Focused hours, local test-route practice, and support from qualified instructors.",
  },
  '/areas': {
    pageTitle: 'Areas Covered',
    description:
      "Driving lessons across Liverpool, Wirral, Sefton, Knowsley and nearby. See areas we cover and send your postcode — we'll confirm instructor availability for you.",
  },
  '/reviews': {
    pageTitle: 'Reviews',
    description:
      "Student reviews for Rathan's Driving School Liverpool — real feedback on lessons, instructors, and passing tests. Book your lesson and join our happy learners.",
  },
  '/contact': {
    pageTitle: 'Contact & Book',
    description:
      "Contact Rathan's Driving School to book driving lessons in Liverpool — phone, WhatsApp, or our enquiry form. Fast replies and lesson slots across Merseyside.",
  },
  '/driving-lessons-wavertree': {
    pageTitle: 'Driving Lessons Wavertree',
    description:
      "Driving lessons in Wavertree, Liverpool — local routes, test preparation, and patient instruction. Rathan's Driving School covers L15 and nearby; book a lesson today.",
  },
  '/driving-lessons-aigburth': {
    pageTitle: 'Driving Lessons Aigburth',
    description:
      "Learn to drive in Aigburth and South Liverpool with Rathan's Driving School — dual-control cars, flexible lessons, and instructors who know local roads and tests.",
  },
  '/driving-lessons-allerton': {
    pageTitle: 'Driving Lessons Allerton',
    description:
      "Driving lessons in Allerton, Liverpool — from first start to test-ready. Manual or automatic with Rathan's Driving School; message us for availability in L18 and nearby.",
  },
};

export function getRouteMeta(pathname: string): RouteSeo {
  return ROUTE_META[pathname] ?? ROUTE_META['/']!;
}
