export interface Area {
  id: string;
  name: string;
  description: string;
}

export const AREAS_COVERED: Area[] = [
  {
    id: 'manchester',
    name: 'Manchester',
    description: 'City centre and suburbs. We know the test routes and busy streets so you learn where it matters.',
  },
  {
    id: 'salford',
    name: 'Salford',
    description: 'Salford Quays, MediaCityUK, and residential areas. Local test centre expertise.',
  },
  {
    id: 'trafford',
    name: 'Trafford',
    description: 'Trafford Park, Stretford, Sale, Altrincham. Ideal for test preparation in the area.',
  },
  {
    id: 'stockport',
    name: 'Stockport',
    description: 'Stockport town and surrounding districts. We cover the test routes regularly.',
  },
  {
    id: 'tameside',
    name: 'Tameside',
    description: 'Ashton-under-Lyne, Hyde, Stalybridge and nearby. Flexible pick-up points.',
  },
  {
    id: 'oldham',
    name: 'Oldham',
    description: 'Oldham town centre and outskirts. Patient instruction for all levels.',
  },
  {
    id: 'bolton',
    name: 'Bolton',
    description: 'Bolton and surrounding areas. Manual and automatic lessons available.',
  },
  {
    id: 'bury',
    name: 'Bury',
    description: 'Bury, Prestwich, Radcliffe. We work around your schedule.',
  },
];
