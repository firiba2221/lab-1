export interface PlatformUpdate {
  version: string;
  date: string;
  title: string;
  tag: 'major' | 'minor' | 'patch';
  changes: string[];
}

export interface PlatformData {
  name: string;
  version: string;
  developer: string;
  companyName: string;
  companyUrl: string;
  description: string;
  updates: PlatformUpdate[];
}

export const platformData: PlatformData = {
  name: 'CELESTE',
  version: 'v0.0.1',
  developer: 'Beetlecode Engineering Team',
  companyName: 'Beetlecode',
  companyUrl: 'https://beetlecode.com/',
  description: 'Next-generation travel & itinerary management platform built with Material UI, Next.js, and Turbopack.',
  updates: [
    {
      version: 'v0.0.1',
      date: '2026-08-11',
      title: 'Initial Platform Release & Core Architecture',
      tag: 'major',
      changes: [
        'Integrated Material UI v9 with Next.js 16 App Router theme engine',
        'Implemented Matte Dark mode color scheme & SSR flicker-free toggle',
        'Built expandable sidebar navigation supporting nested sub-pages and rail mode',
        'Added Draggable Floating Developer Panel with environment controls',
        'Designed shared CELESTE brand pie-chart logo component',
      ],
    },
  ],
};
