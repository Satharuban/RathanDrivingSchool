export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'automatic',
    question: 'Do you offer automatic lessons?',
    answer: 'Yes. We offer both manual and automatic lessons. Automatic lessons are popular with learners who want to focus on road craft without worrying about gears. Prices start from £38 per hour for automatic.',
  },
  {
    id: 'cost',
    question: 'How much do lessons cost?',
    answer: 'Our standard manual and beginner lessons start from £35 per hour. Automatic lessons are from £38 per hour. Block bookings of 10 or 20 hours offer a discount. Intensive course packages start from £299. Get in touch for a tailored quote.',
  },
  {
    id: 'areas',
    question: 'Which areas do you cover?',
    answer: 'We cover Greater Manchester and surrounding areas including Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Bolton, Bury, Rochdale, and Wigan. If you\'re unsure, send us your postcode and we\'ll confirm.',
  },
  {
    id: 'intensive',
    question: 'Can I book intensive lessons?',
    answer: 'Yes. We run 2–5 day intensive courses for learners who want to pass quickly. You can bring your own test date or we can help you book one. Ideal if you have limited time or need to pass by a certain date.',
  },
  {
    id: 'weekend',
    question: 'Do you offer weekend lessons?',
    answer: 'Yes. We offer flexible scheduling including weekday evenings and weekends. Many of our learners book weekend lessons to fit around work or study. Contact us to check availability for your preferred times.',
  },
];
