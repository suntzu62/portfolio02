import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Projetos em que trabalhei",
  projects: [
    {
      id: getId(),
      name: 'E-commerce',
      description: 'E-commerce moderno com tecnologias atualizadas desde adição de carrinho .',
      tasks:
        "Como freelancer, entendi os requisitos do cliente e executei um plano para desenvolver e projetar uma plataforma de e-commerce, incluindo UI frontend, configuração backend com banco de dados, APIs e integração com plataformas de pagamento.",
      url: 'https://ecomm-tan-nu.vercel.app/',
      img: '/ecc.jpeg',
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
      name: 'Blog News',
      description:
        'Modelo Next.js limpo e moderno para revistas, notícias e blogs.',
      tasks:
        '',
      url: 'https://blog-tau-green.vercel.app/',
      img: '/download.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },
    {
      id: getId(),
      name: 'Hotel',
      description: 'Projeto de hotel&spa com paleta de cores combinando e com efeitos modernos.',
      tasks:
        '',
      url: 'https://front-hotel.vercel.app/',
      img: '/hotel.jpeg',
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
    {
      id: getId(),
      name: 'Portfolio',
      description: '.',
      tasks:
        'Feito com tecnologias modernas com grande interatividade ao momento que rolando o mouse para baixo as informações vão aparecendo.',
      url: 'https://master-portfolio-neon.vercel.app/home',
      img: '/port.jpeg',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
