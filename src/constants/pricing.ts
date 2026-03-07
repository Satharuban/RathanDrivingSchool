export interface PricingPackage {
  id: string;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'beginner',
    title: 'Beginner Lessons',
    description: 'Perfect for complete beginners. We cover the basics in a calm, structured way.',
    price: 'From £35',
    priceNote: 'per hour',
    features: [
      'DVSA-approved curriculum',
      'Dual-control vehicle',
      'Pick-up from home or work',
      'Progress tracking',
    ],
    ctaLabel: 'Book a Lesson',
  },
  {
    id: 'automatic',
    title: 'Automatic Lessons',
    description: 'Learn in an automatic car — ideal if you prefer to focus on the road.',
    price: 'From £38',
    priceNote: 'per hour',
    features: [
      'Modern automatic car',
      'Easier to learn',
      'Faster progress for some',
      'Same test standard',
    ],
    ctaLabel: 'Book Automatic',
    popular: true,
  },
  {
    id: 'manual',
    title: 'Manual Lessons',
    description: 'Full manual licence — drive any car. Our most popular option.',
    price: 'From £35',
    priceNote: 'per hour',
    features: [
      'Full UK licence',
      'Block bookings save more',
      'Test routes included',
      'High pass rate support',
    ],
    ctaLabel: 'Book Manual',
  },
  {
    id: 'intensive',
    title: 'Intensive Driving Course',
    description: 'Pass in weeks, not months. Ideal for those with a test date or limited time.',
    price: 'From £299',
    priceNote: 'course packages',
    features: [
      '2–5 day courses',
      'Test date can be included',
      'Focused preparation',
      'Best for quick learners',
    ],
    ctaLabel: 'View Intensive',
  },
  {
    id: 'refresher',
    title: 'Refresher Lessons',
    description: 'Back behind the wheel after a break? We\'ll get you confident again.',
    price: 'From £35',
    priceNote: 'per hour',
    features: [
      'No pressure, your pace',
      'Highway & city practice',
      'As many hours as you need',
      'Friendly instructors',
    ],
    ctaLabel: 'Book Refresher',
  },
];
