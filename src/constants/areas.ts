export interface Area {
  id: string;
  name: string;
  description: string;
}

export const AREAS_COVERED: Area[] = [
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'City centre and suburbs. We know the test routes and busy streets so you learn where it matters.',
  },
  {
    id: 'wirral',
    name: 'Wirral',
    description: 'Birkenhead, Wallasey, Heswall and across the peninsula. Local test centre expertise.',
  },
  {
    id: 'sefton',
    name: 'Sefton',
    description: 'Southport, Crosby, Formby and surrounding areas. Ideal for test preparation.',
  },
  {
    id: 'knowsley',
    name: 'Knowsley',
    description: 'Kirkby, Huyton, Prescot and nearby. Flexible pick-up points.',
  },
  {
    id: 'st-helens',
    name: 'St Helens',
    description: 'St Helens town and outskirts. Patient instruction for all levels.',
  },
  {
    id: 'halton',
    name: 'Halton',
    description: 'Widnes and Runcorn. Manual and automatic lessons available.',
  },
  {
    id: 'west-lancs',
    name: 'West Lancashire',
    description: 'Skelmersdale, Ormskirk and surrounding areas. We work around your schedule.',
  },
];
