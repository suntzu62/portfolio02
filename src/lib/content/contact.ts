import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'entrar em contato',
  subtitle: "qual é o próximo",
  paragraphs: [
    'Atualmente estou procurando um emprego remoto ou novas oportunidades.',
    'Quer você tenha um projeto para discutir ou apenas queira dizer oi, minha caixa de entrada está aberta para todos!',
  ],
  link: `mailto:${author.email}`,
};
