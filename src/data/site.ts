export type Skill = {
  name: string
  icon: string
}

export type Project = {
  name: string
  tagline: string
  description: string
  stack: string[]
  url: string
  github?: string
  image?: string
  preview: string
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
}

export type Education = {
  course: string
  institution: string
  period: string
}

export type Highlight = {
  label: string
  value: string
}

export type SiteData = {
  name: string
  role: string
  shortRole: string
  heroKicker: string
  heroDescription: string
  photo: string
  aboutTitle: string
  about: string[]
  aboutCards: string[]
  skillsTitle: string
  skills: Skill[]
  projectsTitle: string
  projects: Project[]
  experienceTitle: string
  experience: Experience[]
  educationTitle: string
  education: Education[]
  contactTitle: string
  contactBody: string
  email: string
  whatsapp: string
  github: string
  linkedin: string
}

export const site: SiteData = {
  name: 'Expedito Ernande',
  role: 'Desenvolvedor Full Stack',
  shortRole: 'Front-End, React, Node.js e integrações',
  heroKicker: 'Olá, eu sou',
  heroDescription:
    'Desenvolvo interfaces modernas, responsivas e funcionais — e por trás delas, APIs, checkout, pagamentos e integrações que fazem a venda acontecer.',
  photo: '/foto-perfil.jpg',

  aboutTitle: 'Sobre mim',
  about: [
    'Sou formado em Análise e Desenvolvimento de Sistemas e atuo na área de tecnologia desde 2023, em São Paulo.',
    'Meu interesse artístico e criativo me levou ao desenvolvimento front-end e, depois, ao desenvolvimento Full Stack — criando interfaces, sites responsivos e fluxos completos de venda online.',
    'Tenho formação em HTML, CSS, JavaScript ES6, React, TypeScript e Next.js pela Origamid, além da graduação em ADS. Hoje também aplico IA no dia a dia de programação para construir soluções mais rápidas e completas.',
  ],
  aboutCards: ['Front-End', 'Web Development', 'UI/UX', 'Responsive Design'],

  skillsTitle: 'Skills',
  skills: [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Next.js', icon: 'next' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Express', icon: 'express' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Mercado Pago', icon: 'mercadopago' },
  ],

  projectsTitle: 'Projetos',
  projects: [
    {
      name: 'GRAXA',
      tagline: 'Landing de estúdio de design',
      description:
        'Landing one-page de estúdio de design: hero com marquee, cases em SVG, serviços em accordion, processo em timeline, contadores animados e formulário de leads com validação, honeypot, rate limit e Postgres.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'Postgres'],
      url: 'https://graxa-estudio.vercel.app',
      image: '/projects/graxa.jpg',
      preview: 'from-[#d4ff3f] via-[#6b8f1f] to-[#0b0b0d]',
    },
    {
      name: 'NULLVOID',
      tagline: 'Loja de streetwear grunge',
      description:
        'Loja de streetwear grunge em preto e vermelho: Special Elite, grão de fotocópia, fitas adesivas e degradês do preto para o transparente. Checkout em 5 etapas com CPF, busca de CEP, frete por faixa em API route, Pix com BR Code EMV ou cartão em 3x, e pedidos em Postgres.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'React', 'SVG', 'Postgres'],
      url: 'https://nullvoid-store.vercel.app',
      image: '/projects/nullvoid.jpg',
      preview: 'from-[#ff4b3e] via-[#8f100c] to-[#0a0505]',
    },
    {
      name: 'ÉLAN Perfumes',
      tagline: 'Landing de ecommerce de perfumes',
      description:
        'Landing de perfumaria digital: catálogo de seis fragrâncias com pirâmide de notas, kits e assinatura mensal, FAQ em accordion, frascos ilustrados em SVG e OG image gerada no servidor. Página 100% estática.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
      url: 'https://elan-perfumes.vercel.app',
      image: '/projects/elan-perfumes.jpg',
      preview: 'from-[#dcc07c] via-[#c7a25a] to-[#0b0912]',
    },
    {
      name: 'AURA Botânica',
      tagline: 'Loja de sabonetes artesanais',
      description:
        'Landing page de produto com checkout completo: Pix com desconto, cartão e boleto via Mercado Pago, cálculo de frete por CEP (Correios + Melhor Envio) e painel de pedidos.',
      stack: ['React', 'Tailwind', 'Node.js', 'Mercado Pago', 'Melhor Envio'],
      url: 'https://aura-store-green-delta.vercel.app',
      image: '/projects/aura.jpg',
      preview: 'from-[#8b5cf6] via-[#6d28d9] to-[#1e1b4b]',
    },
    {
      name: 'NØCT',
      tagline: 'Loja de moda alternativa',
      description:
        'Storefront de moda urbana: peças oversized em paleta monocromática (camisetas, calças cargo, moletons, jaquetas), catálogo por categoria, busca, novidades e 5% de desconto no Pix. Mesmo modelo white-label da AURA, com identidade visual própria.',
      stack: ['React', 'Tailwind', 'Node.js', 'Mercado Pago'],
      url: 'https://noct-store-iota.vercel.app',
      image: '/projects/noct.jpg',
      preview: 'from-[#a855f7] via-[#7c3aed] to-[#2b1055]',
    },
  ],

  experienceTitle: 'Experiência',
  experience: [
    {
      role: 'Desenvolvedor Full Stack',
      company: 'Projetos próprios e demos',
      period: '2023 — presente',
      description:
        'Construção de lojas virtuais com checkout via Mercado Pago, cálculo de frete e painel de pedidos — do front-end ao backend.',
    },
  ],

  educationTitle: 'Formação',
  education: [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: '',
      period: 'Graduação',
    },
    {
      course: 'HTML, CSS, JavaScript ES6, React, TypeScript e Next.js',
      institution: 'Origamid',
      period: 'Cursos',
    },
  ],

  contactTitle: 'Vamos trabalhar juntos?',
  contactBody:
    'Estou disponível para novos projetos, oportunidades profissionais e colaborações.',
  email: 'expeditoernande@hotmail.com',
  whatsapp: 'https://wa.me/5511977983738',
  github: 'https://github.com/expeditoernande',
  linkedin: 'https://www.linkedin.com/in/expeditoernande/',
}