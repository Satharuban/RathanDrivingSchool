export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  passed: boolean;
  text: string;
  lessonType?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Manchester',
    rating: 5,
    passed: true,
    text: 'Passed first time! My instructor was incredibly patient and made me feel at ease. The lessons were structured perfectly and I always knew what to expect. Couldn\'t recommend Rathan Driving School enough.',
    lessonType: 'Manual',
  },
  {
    id: '2',
    name: 'James K.',
    location: 'Salford',
    rating: 5,
    passed: true,
    text: 'Flexible scheduling was a huge plus with my shift work. Professional, calm, and great at explaining manoeuvres. I went for the intensive course and passed within 6 weeks. Brilliant value.',
    lessonType: 'Intensive',
  },
  {
    id: '3',
    name: 'Emma L.',
    location: 'Trafford',
    rating: 5,
    passed: true,
    text: 'I was nervous about learning to drive but my instructor put me at ease from day one. Clear feedback, no pressure, and the car was always spotless. Passed with only 2 minors!',
    lessonType: 'Automatic',
  },
  {
    id: '4',
    name: 'Omar H.',
    location: 'Stockport',
    rating: 5,
    passed: true,
    text: 'After failing with another school, I switched to Rathan and it made all the difference. They really focus on test readiness and local test routes. Passed second time with confidence.',
    lessonType: 'Manual',
  },
  {
    id: '5',
    name: 'Chloe P.',
    location: 'Manchester',
    rating: 5,
    passed: true,
    text: 'Refresher lessons after 10 years off the road. Felt safe and supported throughout. Now back behind the wheel and commuting daily. Thank you!',
    lessonType: 'Refresher',
  },
];
