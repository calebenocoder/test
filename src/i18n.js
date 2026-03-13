import logoGolden from './assets/2x/LUMIERELOGO@2x.png';
import logoWhite from './assets/2x/LUMIERELOGOBRANCA@2x.png';
import titleSvg from './assets/TITLE.svg';
import iconSvg from './assets/ICON.svg';

export const i18n = {
  nav: {
    links: [
      { name: 'Início', href: '#hero' },
      { name: 'Serviços', href: '#services' },
      { name: 'Tecnologia', href: '#technology' },
      { name: 'Sobre', href: '#about' },
      { name: 'Contato', href: '#contact' },
    ],
    bookNow: 'Agendar Agora',
  },
  hero: {
    subtitle: 'Excelência Odontológica Avançada',
    tagline: 'Onde a Luz Encontra a Precisão',
    description: 'Pioneirismo em odontologia a laser Er:YAG para uma experiência indolor, precisa e transformadora.',
    ctaDiscover: 'Descubra Nossa Tecnologia',
    ctaSchedule: 'Agende uma Visita',
    scroll: 'Rolar',
  },
  testimonials: {
    badge: 'Depoimentos',
    title: 'De Quem Cuidamos',
    items: [
      {
        text: 'A experiência na Lumière foi transformadora. O Dr. Felipe é extremamente técnico, enquanto a Victoria e o Deivison nos fazem sentir em casa com um carinho e dedicação raros de encontrar.'
      },
      {
        text: 'Nunca imaginei que um tratamento dentário pudesse ser tão humano. Toda a equipe, liderada pelo Dr. Felipe, demonstra uma paciência e um cuidado genuíno com cada detalhe.'
      },
      {
        text: 'O atendimento da Victoria e do Deivison é impecável, sempre antecipando nossas necessidades. O Dr. Felipe e sua tecnologia de laser tornaram meu sorriso perfeito sem dor.'
      },
      {
        text: 'Profissionalismo e humanidade definem a Lumière. É visível o amor que o Deivison e a Victoria têm pelo que fazem, complementando perfeitamente a maestria do Dr. Felipe.'
      },
    ]
  },
  services: {
    badge: 'Nossa Expertise',
    title: 'Serviços',
    items: [
      {
        number: '01',
        title: 'Laser Er:YAG',
        subtitle: 'Tecnologia LiteTouch',
        description: 'Tecnologia revolucionária de laser de érbio que permite procedimentos virtualmente indolores com precisão inigualável. O padrão ouro na odontologia minimamente invasiva.',
        features: ['Tratamento Sem Dor', 'Sem Necessidade de Anestesia', 'Recuperação Mais Rápida', 'Precisão Máxima'],
      },
      {
        number: '02',
        title: 'Implantes Dentários',
        subtitle: 'Restauração Permanente',
        description: 'Soluções de implantes de última geração usando colocação guiada por laser para precisão e integração superiores. Resultados de aparência natural que duram a vida toda.',
        features: ['Colocação Guiada por Laser', 'Integração de Titânio', 'Estética Natural', 'Durabilidade Vitalícia'],
      },
      {
        number: '03',
        title: 'Alinhadores Invisíveis',
        subtitle: 'Perfeição Invisível',
        description: 'Alinhadores transparentes sob medida para tratamento ortodôntico discreto. Planejados digitalmente para resultados bonitos e previsíveis.',
        features: ['Virtualmente Invisíveis', 'Design 3D Personalizado', 'Ajuste Confortável', 'Resultados Previsíveis'],
      },
    ],
  },
  technology: {
    badge: 'A Ciência da Luz',
    title: 'Laser Er:YAG LiteTouch™',
    description: 'O sistema de laser dentário mais avançado do mundo. Um avanço na odontologia de precisão que redefine o conforto do paciente e os resultados clínicos.',
    visualLabels: {
      handpiece: 'PEÇA DE MÃO',
      beam: 'FEIXE 2.940nm',
      target: 'ALVO',
    },
    stats: [
      { value: '2.940', unit: 'nm', label: 'Comprimento de Onda' },
      { value: '99,7', unit: '%', label: 'Taxa de Precisão' },
      { value: '0', unit: '', label: 'Nível de Dor' },
      { value: '50', unit: '%', label: 'Cura mais rápida' },
    ],
    benefits: [
      {
        title: 'Virtualmente Indolor',
        text: 'O laser Er:YAG opera no comprimento de onda ideal para interação tecidual, permitindo procedimentos virtualmente indolores — muitas vezes sem anestesia.',
      },
      {
        title: 'Minimamente Invasivo',
        text: 'A entrega precisa de energia significa que apenas o tecido alvo é afetado. O tecido saudável circundante permanece completamente intocado e ileso.',
      },
      {
        title: 'Recuperação Acelerada',
        text: 'O tratamento a laser promove a regeneração celular mais rápida e reduz o desconforto pós-operatório, cortando o tempo de cicatrização pela metade.',
      },
      {
        title: 'Versatilidade Inigualável',
        text: 'Da cirurgia de tecidos moles à preparação de tecidos duros, procedimentos de implante ao tratamento periodontal — um instrumento, infinitas possibilidades.',
      },
    ],
  },
  about: {
    badge: 'Quem Somos',
    title: 'A Arte da Odontologia Moderna',
    quote: '"Na Lumière, acreditamos que a odontologia deve ser uma experiência de conforto e sofisticação — não de ansiedade."',
    description1: 'Fundada no princípio de que a tecnologia avançada e o cuidado refinado devem trabalhar em harmonia, a Lumière representa o futuro da excelência odontológica. Nossa clínica combina a precisão da tecnologia de laser Er:YAG com o calor do atendimento personalizado ao paciente.',
    description2: 'Cada detalhe — desde nossos sistemas de laser LiteTouch™ de última geração até o ambiente cuidadosamente curado de nossa clínica — foi projetado para transformar sua percepção do cuidado dental.',
    whyTitle: 'Por que escolher a Lumière',
    whyItems: [
      'Centro de Laser Er:YAG LiteTouch™ Certificado',
      'Abordagem minimamente invasiva em cada procedimento',
      'Tratamentos no mesmo dia com recuperação rápida',
      'Materiais biocompatíveis exclusivamente',
      'Planejamento de tratamento personalizado com imagem 3D',
      'Experiência de luxo para o paciente desde a chegada ao pós-atendimento',
    ],
    pillars: [
      { title: 'Precisão', text: 'Cada procedimento guiado por tecnologia precisa de laser e décadas de experiência clínica.' },
      { title: 'Conforto', text: 'Redefinindo a experiência odontológica — tratamentos tão gentis que você esquecerá que está no dentista.' },
      { title: 'Excelência', text: 'Padrões intransigentes em materiais, técnicas e atendimento ao paciente em cada etapa.' },
    ],
  },
  contact: {
    badge: 'Comece Sua Jornada',
    title: 'Contato',
    subtitle: 'Experimente o futuro da odontologia. Agende sua consulta hoje.',
    info: {
      location: { label: 'Localização', value: 'Av. Getúlio Vargas, 1000, Ed. Premier\nFeira de Santana, BA' },
      phone: { label: 'Telefone', value: '+55 (75) 99999-0100' },
      email: { label: 'E-mail', value: 'contato@lumiere-dental.com' },
      hours: { label: 'Horário', value: 'Seg – Sex: 9:00 – 18:00\nSáb: 10:00 – 15:00' },
    },
    form: {
      name: 'Nome Completo',
      email: 'Endereço de E-mail',
      phone: 'Telefone',
      servicePlaceholder: 'Selecione o Serviço',
      services: [
        { value: 'laser', label: 'Tratamento a Laser Er:YAG' },
        { value: 'implants', label: 'Implantes Dentários' },
        { value: 'aligners', label: 'Alinhadores Invisíveis' },
        { value: 'consultation', label: 'Consulta Geral' },
      ],
      message: 'Sua Mensagem',
      submit: 'Enviar Solicitação',
      success: 'Obrigado pelo seu contato. Entraremos em contato em breve.',
    },
  },
  footer: {
    copy: 'Lumière Dental. Todos os direitos reservados.',
  },
  logos: {
    golden: logoGolden,
    white: logoWhite,
    title: titleSvg,
    icon: iconSvg,
  }
};
