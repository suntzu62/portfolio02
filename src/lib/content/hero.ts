import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Olá, meu nome é',
  title: 'gabriel andrade.',
  tagline: 'Crio interfaces visualmente agradáveis ​​para a web.',
  description:
    "Sou um desenvolvedor web Front-End apaixonado com experiência prática na construção de aplicações web usando React.js e Next.js com TypeScript, TailwindCSS e Prisma, com design UI/UX.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'Veja o meu resumo',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
