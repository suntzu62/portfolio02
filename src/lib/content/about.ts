import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'sobre',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:',
    items: [
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'AI/ML',
      'Prisma',
      'CSS Animations',
    ],
  },
  img: '/g.png',
};
