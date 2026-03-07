export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: 'contact',
    step: 1,
    title: 'Contact us',
    description: 'Get in touch by phone, WhatsApp, or the enquiry form. We\'ll answer your questions and find a time that suits you.',
  },
  {
    id: 'plan',
    step: 2,
    title: 'Choose your lesson plan',
    description: 'Pick manual or automatic, single lessons or a block. We can also arrange an intensive course if you need to pass quickly.',
  },
  {
    id: 'learn',
    step: 3,
    title: 'Start learning',
    description: 'Your instructor will collect you from home, work, or college. Lessons are structured but relaxed — we go at your pace.',
  },
  {
    id: 'test',
    step: 4,
    title: 'Prepare for your test',
    description: 'When you\'re ready, we\'ll book your test and practise the routes. Our aim is to get you test-ready and confident.',
  },
];
