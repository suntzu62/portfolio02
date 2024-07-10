import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Onde trabalhei",
  experiences: [
    {
      company: 'Workana',
      companyUrl: 'https://www.workana.com/',
      role: 'frontend developer',
      started: 'july 2023',
      upto: 'present',
      tasks: [
        'Componentes de UI implementados com React e Next.js, TypeScript e Tailwind CSS.',
        'Sistemas de design desenvolvidos e mantidos que separam a lógica de design.',
        'Compreender as necessidades do cliente e propor soluções eficazes, o que também envolve estratégia e planejamento.',
        'Liderar uma equipe multifuncional de desenvolvedores e designers na criação de um produto SaaS.',
      ],
    },
    {
      company: '99Freelance',
      companyUrl: 'https://www.99freelas.com.br/',
      role: 'frontend developer intern',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Foi feito um trabalho sobre alugueis de imóveis de luxo.',
      ],
    },
  ],
};
