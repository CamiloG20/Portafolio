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
    menuToggle: 'Open menu',
    navImpact: 'Impact',
    navPrivate: 'Demos',
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
    hobbiesKicker: 'Outside of code',
    hobbiesLead:
      'I disconnect with the same energy I bring to shipping software: challenges, focus, and a bit of fun.',
    hobbyGamesTitle: 'Video games',
    hobbyGamesText:
      'Strategy, creativity, and problem-solving in another format — my reset after deep coding sessions.',
    hobbyBasketTitle: 'Basketball',
    hobbyBasketText:
      'Team rhythm, quick decisions, and staying active. It keeps my mind sharp outside the keyboard.',
    stackKicker: 'Core stack',
    hobbiesLine: 'Outside of coding, I enjoy video games and basketball.',
    experienceKicker: 'Experience',
    projects: 'Work',
    projectsTitle: 'Selected public work',
    privateKicker: 'Private work',
    privateTitle: 'Production systems available on request',
    privateLead:
      'My strongest delivery sits in private repos. I can walk you through architecture, trade-offs, and demos live.',
    privateTwiins: 'Multi-tenant HR SaaS in production across LATAM.',
    privateVacari: 'Clinical SPA + microservices platform (demo under NDA/request).',
    privateCta: 'Request a demo',
    contact: 'Contact',
    contact2: 'Contact',
    contactTitle: 'Let’s build the next system together.',
    contactLead:
      'Open to Full-Stack / SaaS roles across LATAM. Both emails below are active — pick either one.',
    phoneNumber: 'Phone',
    emailPrimary: 'Primary email',
    emailSecondary: 'Secondary email',
    footerNote: 'Open to opportunities · Remote LATAM',

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
        technologies: 'Vue 3 · Express · SQLite · Gemini',
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
    menuToggle: 'Abrir menú',
    navImpact: 'Impacto',
    navPrivate: 'Demos',
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
    hobbiesKicker: 'Fuera del código',
    hobbiesLead:
      'Desconecto con la misma energía con la que entrego software: retos, foco y un poco de diversión.',
    hobbyGamesTitle: 'Videojuegos',
    hobbyGamesText:
      'Estrategia, creatividad y resolución de problemas en otro formato — mi reset después de sesiones intensas.',
    hobbyBasketTitle: 'Basketball',
    hobbyBasketText:
      'Ritmo de equipo, decisiones rápidas y movimiento. Me mantiene fresco fuera del teclado.',
    stackKicker: 'Stack principal',
    hobbiesLine: 'Fuera del código, disfruto de los videojuegos y el basketball.',
    experienceKicker: 'Experiencia',
    projects: 'Trabajo',
    projectsTitle: 'Trabajo público seleccionado',
    privateKicker: 'Trabajo privado',
    privateTitle: 'Sistemas en producción con demo bajo solicitud',
    privateLead:
      'Mi entrega más fuerte está en repos privados. Puedo mostrarte arquitectura, decisiones y demos en vivo.',
    privateTwiins: 'SaaS multi-tenant de HR en producción en LATAM.',
    privateVacari: 'Plataforma clínica SPA + microservicios (demo bajo solicitud/NDA).',
    privateCta: 'Pedir una demo',
    contact: 'Contacto',
    contact2: 'Contacto',
    contactTitle: 'Construyamos el siguiente sistema juntos.',
    contactLead:
      'Abierto a roles Full-Stack / SaaS en LATAM. Ambos emails están activos — usa el que prefieras.',
    phoneNumber: 'Teléfono',
    emailPrimary: 'Email principal',
    emailSecondary: 'Email secundario',
    footerNote: 'Abierto a oportunidades · Remoto LATAM',

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
        technologies: 'Vue 3 · Express · SQLite · Gemini',
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
