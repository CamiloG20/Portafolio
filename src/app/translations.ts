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
    aboutTitle: 'Engineer by craft. Curious by nature.',
    aboutIntro:
      'I am a Full-Stack Software Engineer with 3+ years building multi-tenant SaaS and production systems across LATAM. Professionally, I design APIs, modular backends, and modern UIs with TypeScript, NestJS, Vue 3/Nuxt 3, React, MySQL/PostgreSQL, AWS, and Docker. I care about clean architecture, performance, code review, testing, CI/CD, and applied AI (Bedrock, Gemini, MCP).\n\nPersonally, I recharge outdoors and through community: reading, hiking mountains and exploring routes, basketball, swimming, video games, and Scouts. Those habits shape how I work — disciplined, collaborative, and always ready for the next challenge.',
    hobbiesKicker: 'Outside of code',
    hobbiesLead:
      'My free time balances focus, movement, and community — the same energy I bring to shipping software.',
    hobbyReadTitle: 'Reading',
    hobbyReadText:
      'I read to expand perspective, stay curious, and keep learning beyond the IDE.',
    hobbyHikeTitle: 'Hiking & exploration',
    hobbyHikeText:
      'Walking, climbing hills, and exploring trails helps me disconnect and reset with intention.',
    hobbyBasketTitle: 'Basketball',
    hobbyBasketText:
      'Team pace, quick decisions, and staying active — my competitive reset.',
    hobbySwimTitle: 'Swimming',
    hobbySwimText:
      'Rhythm and endurance. Swimming clears my head after deep work.',
    hobbyGamesTitle: 'Video games',
    hobbyGamesText:
      'Strategy, creativity, and problem-solving in another format.',
    hobbyScoutsTitle: 'Scouts',
    hobbyScoutsText:
      'Service, leadership, and outdoor skills. Scouts keep me grounded in values and teamwork.',
    stackKicker: 'Core stack',
    hobbiesLine:
      'I enjoy reading, hiking, basketball, swimming, video games, and Scouts.',
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
        title: 'Hogwarts Dex',
        description:
          'Pokédex-style catalog of Harry Potter characters and fantastical creatures via Potter DB.',
        technologies: 'React · TypeScript · Vite · Potter DB API',
        linkText: 'Open live site',
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
    aboutTitle: 'Ingeniero por oficio. Curioso por naturaleza.',
    aboutIntro:
      'Soy Software Engineer Full-Stack con 3+ años construyendo SaaS multi-tenant y sistemas en producción en LATAM. En lo laboral diseño APIs, backends modulares y UIs modernas con TypeScript, NestJS, Vue 3/Nuxt 3, React, MySQL/PostgreSQL, AWS y Docker. Me importan la arquitectura limpia, el rendimiento, el code review, los tests, el CI/CD y la IA aplicada (Bedrock, Gemini, MCP).\n\nEn lo personal recargo energía con lectura, caminatas, subir cerros e incursiones, básquet, natación, videojuegos y Scouts. Esos hábitos marcan cómo trabajo: con disciplina, colaboración y ganas del siguiente reto.',
    hobbiesKicker: 'Fuera del código',
    hobbiesLead:
      'Mi tiempo libre combina foco, movimiento y comunidad — la misma energía con la que entrego software.',
    hobbyReadTitle: 'Lectura',
    hobbyReadText:
      'Leo para ampliar perspectiva, mantener la curiosidad y seguir aprendiendo fuera del IDE.',
    hobbyHikeTitle: 'Cerros e incursiones',
    hobbyHikeText:
      'Caminar, subir cerros y explorar rutas me ayuda a desconectar y resetear con intención.',
    hobbyBasketTitle: 'Básquet',
    hobbyBasketText:
      'Ritmo de equipo, decisiones rápidas y movimiento — mi reset competitivo.',
    hobbySwimTitle: 'Natación',
    hobbySwimText:
      'Ritmo y resistencia. Nadar me limpia la cabeza después del trabajo profundo.',
    hobbyGamesTitle: 'Videojuegos',
    hobbyGamesText:
      'Estrategia, creatividad y resolución de problemas en otro formato.',
    hobbyScoutsTitle: 'Scouts',
    hobbyScoutsText:
      'Servicio, liderazgo y vida outdoor. Los Scouts me mantienen anclado en valores y trabajo en equipo.',
    stackKicker: 'Stack principal',
    hobbiesLine:
      'Disfruto la lectura, subir cerros, básquet, natación, videojuegos y Scouts.',
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
        title: 'Hogwarts Dex',
        description:
          'Catálogo estilo Pokédex de personajes y criaturas fantásticas de Harry Potter con Potter DB.',
        technologies: 'React · TypeScript · Vite · Potter DB API',
        linkText: 'Abrir sitio live',
      },
    ],
  },
};
