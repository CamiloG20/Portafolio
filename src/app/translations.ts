interface ProjectItem {
  title: string;
  description: string;
  technologies: string;
  linkText: string;
}

interface ExperienceItem {
  role: string;
  period: string;
  summary: string;
}

interface Translations {
  [key: string]: string | ProjectItem[] | ExperienceItem[];
}

export interface TranslationData {
  en: Translations;
  es: Translations;
}

export const translations: TranslationData = {
  en: {
    locationLine: 'Quito, Ecuador · Remote / Hybrid / On-site',
    description: 'Full-Stack · SaaS · Cloud',
    heroLead:
      'I build multi-tenant platforms and production APIs end to end — from UI to cloud.',
    contactMeButton: 'Contact Me',
    downloadCV: 'Download CV',
    themeToggle: 'Toggle theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    navImpact: 'Impact',
    impactKicker: 'Selected impact',
    impactPrs: '160+',
    impactPrsHint: 'PRs merged at TwiinsHRM in 8 months',
    impactPerf: '+80%',
    impactPerfHint: 'faster critical ranking queries',
    impactLatam: '7',
    impactLatamHint: 'LATAM countries reached in production',
    aboutMe: 'About',
    aboutTitle: 'Software Engineer focused on SaaS that ships.',
    aboutIntro:
      'Full-Stack engineer with 3+ years delivering multi-tenant systems in production. Stack: TypeScript, NestJS, Vue 3/Nuxt 3, React, MySQL/PostgreSQL, AWS, Docker. I care about clean architecture, performance, reviews, tests, CI/CD, and applied AI (Bedrock, Gemini, MCP).',
    hobbiesLine: 'Outside of coding, I enjoy video games and basketball.',
    experienceKicker: 'Experience',
    projects: 'Work',
    projectsTitle: 'Selected public work',
    contact: 'Contact',
    contact2: 'Contact',
    contactTitle: 'Let’s build the next system together.',
    contactLead:
      'Open to Full-Stack / SaaS roles across LATAM. Reach me on either email — both are active.',
    phoneNumber: 'Phone',
    emailPrimary: 'Primary email',
    emailSecondary: 'Secondary email',
    footerNote: 'Available for opportunities',

    experienceList: [
      {
        role: 'Software Engineer (part-time) — Centro Médico Vacari',
        period: 'Jun 2026 – Present',
        summary:
          'vacari-platform (private): React/Vite · Next.js APIs · PostgreSQL/Prisma · Keycloak · Docker · Gemini. SPA + modular APIs for clinical operations. Demo on request.',
      },
      {
        role: 'Software Engineer Full-Stack — TwiinsHRM',
        period: 'Oct 2025 – May 2026',
        summary:
          'Multi-tenant HR SaaS in production (LATAM). NestJS · Vue/Nuxt · MySQL · AWS. +80% ranking performance, +15 automated reports, Recognitions module, 160+ PRs.',
      },
      {
        role: 'Software Engineer Full-Stack — IDUKAY',
        period: 'Sep 2023 – Sep 2025',
        summary:
          'Education platform. Angular · Selenium · Jasmine. Built a reusable library of 20–40 components and strengthened E2E quality.',
      },
      {
        role: 'Software Engineer Full-Stack — WIDE-SOLUTIONS',
        period: 'Nov 2022 – Aug 2023',
        summary:
          'React · React Native systems in production for Ecuador enterprise clients. Stabilized critical legacy flows.',
      },
    ],

    projectsList: [
      {
        title: 'Job Hunter AI',
        description:
          'Multi-tenant SaaS for automated job search with AI (Gemini).',
        technologies: 'Vue 3 · NestJS · SQLite · Gemini',
        linkText: 'View repository',
      },
      {
        title: 'Prueba Tecnica',
        description:
          'Employee + family CRUD with documented REST API and validations.',
        technologies: 'Angular · PHP · MySQL',
        linkText: 'View repository',
      },
      {
        title: 'Portfolio',
        description: 'This site — Angular portfolio with i18n and Netlify deploy.',
        technologies: 'Angular · TypeScript · SCSS',
        linkText: 'Open live site',
      },
      {
        title: 'Pokedex',
        description: 'Early frontend practice consuming PokeAPI.',
        technologies: 'Angular · SCSS · TypeScript',
        linkText: 'View repository',
      },
    ],
  },

  es: {
    locationLine: 'Quito, Ecuador · Remoto / Híbrido / Presencial',
    description: 'Full-Stack · SaaS · Cloud',
    heroLead:
      'Construyo plataformas multi-tenant y APIs en producción de punta a punta — del UI a la nube.',
    contactMeButton: 'Contáctame',
    downloadCV: 'Descargar CV',
    themeToggle: 'Cambiar tema',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    navImpact: 'Impacto',
    impactKicker: 'Impacto seleccionado',
    impactPrs: '160+',
    impactPrsHint: 'PRs mergeados en TwiinsHRM en 8 meses',
    impactPerf: '+80%',
    impactPerfHint: 'más rápido en queries críticas de ranking',
    impactLatam: '7',
    impactLatamHint: 'países LATAM alcanzados en producción',
    aboutMe: 'Sobre mí',
    aboutTitle: 'Software Engineer enfocado en SaaS que llega a producción.',
    aboutIntro:
      'Ingeniero Full-Stack con 3+ años entregando sistemas multi-tenant en producción. Stack: TypeScript, NestJS, Vue 3/Nuxt 3, React, MySQL/PostgreSQL, AWS, Docker. Me importa la arquitectura limpia, el rendimiento, reviews, tests, CI/CD e IA aplicada (Bedrock, Gemini, MCP).',
    hobbiesLine: 'Fuera del código, disfruto de los videojuegos y el basketball.',
    experienceKicker: 'Experiencia',
    projects: 'Trabajo',
    projectsTitle: 'Trabajo público seleccionado',
    contact: 'Contacto',
    contact2: 'Contacto',
    contactTitle: 'Construyamos el siguiente sistema juntos.',
    contactLead:
      'Abierto a roles Full-Stack / SaaS en LATAM. Escríbeme a cualquiera de los dos emails — ambos están activos.',
    phoneNumber: 'Teléfono',
    emailPrimary: 'Email principal',
    emailSecondary: 'Email secundario',
    footerNote: 'Disponible para oportunidades',

    experienceList: [
      {
        role: 'Software Engineer (parcial) — Centro Médico Vacari',
        period: 'Jun 2026 – Actualidad',
        summary:
          'vacari-platform (privado): React/Vite · Next.js APIs · PostgreSQL/Prisma · Keycloak · Docker · Gemini. SPA + APIs modulares para operaciones clínicas. Demo bajo solicitud.',
      },
      {
        role: 'Software Engineer Full-Stack — TwiinsHRM',
        period: 'Oct 2025 – May 2026',
        summary:
          'SaaS multi-tenant de HR en producción (LATAM). NestJS · Vue/Nuxt · MySQL · AWS. +80% rendimiento en ranking, +15 reportes automatizados, módulo de Reconocimientos, 160+ PRs.',
      },
      {
        role: 'Software Engineer Full-Stack — IDUKAY',
        period: 'Sep 2023 – Sep 2025',
        summary:
          'Plataforma educativa. Angular · Selenium · Jasmine. Librería de 20–40 componentes y mayor calidad E2E.',
      },
      {
        role: 'Software Engineer Full-Stack — WIDE-SOLUTIONS',
        period: 'Nov 2022 – Ago 2023',
        summary:
          'Sistemas React · React Native en producción para clientes empresariales en Ecuador.',
      },
    ],

    projectsList: [
      {
        title: 'Job Hunter AI',
        description:
          'SaaS multi-tenant de búsqueda de empleo con IA (Gemini).',
        technologies: 'Vue 3 · NestJS · SQLite · Gemini',
        linkText: 'Ver repositorio',
      },
      {
        title: 'Prueba Tecnica',
        description:
          'CRUD de empleados y familiares con API REST documentada.',
        technologies: 'Angular · PHP · MySQL',
        linkText: 'Ver repositorio',
      },
      {
        title: 'Portfolio',
        description: 'Este sitio — Angular con i18n y deploy en Netlify.',
        technologies: 'Angular · TypeScript · SCSS',
        linkText: 'Abrir sitio live',
      },
      {
        title: 'Pokedex',
        description: 'Práctica temprana de frontend consumiendo PokeAPI.',
        technologies: 'Angular · SCSS · TypeScript',
        linkText: 'Ver repositorio',
      },
    ],
  },
};
