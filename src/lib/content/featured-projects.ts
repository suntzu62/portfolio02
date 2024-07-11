import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Projetos em que trabalhei",
  projects: [
    {
      id: getId(),
      name: 'GetLifeGuard',
      description: 'E-commerce moderno com tecnologias atualizadas desde adição de carrinho .',
      tasks:
        "Como freelancer, entendi os requisitos do cliente e executei um plano para desenvolver e projetar uma plataforma de e-commerce, incluindo UI frontend, configuração backend com banco de dados, APIs e integração com plataformas de pagamento.",
      url: 'https://ecomm-tan-nu.vercel.app/',
      img: 'https://i.postimg.cc/zXFz7VvF/Screenshot-2024-05-19-at-12-50-34-PM.png',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: getId(),
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://velvi.vercel.app/',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },
    {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
      url: 'https://www.integraleads.xyz/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    },
    {
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
