interface Translations {
  [key: string]:
    | string
    | {
        title: string;
        description: string;
        technologies: string;
        linkText: string;
      }[];
}

export interface TranslationData {
  en: Translations;
  es: Translations;
}

export const translations: TranslationData = {
  en: {
    hello: 'HELLO',
    im: "I'm Camilo",
    description: `Software Engineer · Full-Stack (SaaS · APIs · Cloud)`,
    contactMeButton: 'Contact Me',
    downloadCV: 'Download CV',
    home: 'HOME',
    homeInfo: `Software Engineer Full-Stack with <b>3+ years</b> building multi-tenant SaaS and production business systems.
<br><br>
Stack: <b>TypeScript · NestJS · Vue 3/Nuxt 3 · React · MySQL/PostgreSQL · AWS · Docker</b>.
<br><br>
At TwiinsHRM: <b>160+ PRs</b> merged, <b>+80%</b> critical query performance, and work across <b>4+ tenants</b> serving users in <b>7 LATAM countries</b>.
<br><br>
Outside of coding, I enjoy video games and basketball.
<br><br>
Let's build something great together! 🚀`,
    aboutMe: 'ABOUT ME',
    aboutMeDescription: `I'm a Full-Stack Software Engineer based in Quito, Ecuador — open to remote / hybrid / on-site roles.
<br><br>
I design and ship end-to-end features: APIs, multi-tenant modules, and UIs. I care about performance, clean architecture, code review, tests, and CI/CD. I also apply AI in real products (Amazon Bedrock, Google Gemini, MCP).
<br><br>
<b>Recent experience</b>
<br>
• <b>Centro Médico Vacari</b> (Jun 2026 – Present, part-time) — vacari-platform (private): React/Vite · Next.js APIs · PostgreSQL/Prisma · Keycloak · Docker · Gemini. Demo on request.
<br>
• <b>TwiinsHRM</b> (Oct 2025 – May 2026) — multi-tenant HR SaaS in production (LATAM). NestJS · Vue 3/Nuxt 3 · MySQL · Docker · AWS. +80% ranking performance, +15 automated reports, Recognitions module end-to-end, 160+ PRs.
<br>
• <b>IDUKAY</b> (Sep 2023 – Sep 2025) — education platform. Angular · Selenium · Jasmine. Reusable component library (20–40 components).
<br>
• <b>WIDE-SOLUTIONS</b> (Nov 2022 – Aug 2023) — React · React Native apps in production for Ecuador clients.
<br><br>
Outside of coding, I enjoy video games and basketball.`,
    projects: 'PROJECTS',
    contact: 'CONTACT ME',
    contact2: 'CONTACT',
    phoneNumber: 'Phone number:',
    emailPrimary: 'Primary email:',
    emailSecondary: 'Secondary email:',
    navLabel: 'Menu',

    projectsList: [
      {
        title: 'Job Hunter AI',
        description:
          'Multi-tenant SaaS for automated job search with AI (Gemini). Product-oriented sample of my NestJS + Vue stack.',
        technologies: 'Vue 3 · NestJS · SQLite · Gemini',
        linkText: 'View repository',
      },
      {
        title: 'Prueba Tecnica',
        description:
          'Full-stack employee + family CRUD with documented REST API, validation, and basic auth header.',
        technologies: 'Angular · PHP · MySQL',
        linkText: 'View repository',
      },
      {
        title: 'Portfolio',
        description:
          'This site — Angular portfolio with i18n (EN/ES), dark mode, and Netlify deploy.',
        technologies: 'Angular · TypeScript · SCSS',
        linkText: 'View live site',
      },
      {
        title: 'Pokedex',
        description:
          'Tool that consumes PokeAPI to explore Pokémon data — early frontend practice project.',
        technologies: 'Angular · SCSS · TypeScript',
        linkText: 'View repository',
      },
    ],
  },

  es: {
    hello: 'HOLA',
    im: 'Soy Camilo',
    description: `Software Engineer · Full-Stack (SaaS · APIs · Cloud)`,
    contactMeButton: 'Contáctame',
    downloadCV: 'Descargar CV',
    home: 'INICIO',
    homeInfo: `Software Engineer Full-Stack con <b>3+ años</b> construyendo plataformas SaaS multi-tenant y sistemas de negocio en producción.
<br><br>
Stack: <b>TypeScript · NestJS · Vue 3/Nuxt 3 · React · MySQL/PostgreSQL · AWS · Docker</b>.
<br><br>
En TwiinsHRM: <b>160+ PRs</b> mergeados, <b>+80%</b> en queries críticas y trabajo en <b>4+ tenants</b> para usuarios en <b>7 países LATAM</b>.
<br><br>
Fuera del código, disfruto de los videojuegos y el basketball.
<br><br>
¡Construyamos algo increíble juntos! 🚀`,
    aboutMe: 'SOBRE MÍ',
    aboutMeDescription: `Soy Software Engineer Full-Stack en Quito, Ecuador — abierto a roles remoto / híbrido / presencial.
<br><br>
Diseño e implemento features de punta a punta: APIs, módulos multi-tenant y UIs. Me importa el rendimiento, la arquitectura limpia, el code review, los tests y el CI/CD. También aplico IA en producto real (Amazon Bedrock, Google Gemini, MCP).
<br><br>
<b>Experiencia reciente</b>
<br>
• <b>Centro Médico Vacari</b> (jun 2026 – actualidad, parcial) — vacari-platform (privado): React/Vite · Next.js APIs · PostgreSQL/Prisma · Keycloak · Docker · Gemini. Demo bajo solicitud.
<br>
• <b>TwiinsHRM</b> (oct 2025 – may 2026) — SaaS multi-tenant de HR en producción (LATAM). NestJS · Vue 3/Nuxt 3 · MySQL · Docker · AWS. +80% rendimiento en ranking, +15 reportes automatizados, módulo de Reconocimientos end-to-end, 160+ PRs.
<br>
• <b>IDUKAY</b> (sep 2023 – sep 2025) — plataforma educativa. Angular · Selenium · Jasmine. Librería de 20–40 componentes reutilizables.
<br>
• <b>WIDE-SOLUTIONS</b> (nov 2022 – ago 2023) — React · React Native en producción para clientes en Ecuador.
<br><br>
Fuera del código, disfruto de los videojuegos y el basketball.`,
    projects: 'PROYECTOS',
    contact: 'CONTACTO',
    contact2: 'CONTACTO',
    phoneNumber: 'Número de teléfono:',
    emailPrimary: 'Email principal:',
    emailSecondary: 'Email secundario:',
    navLabel: 'Menú',

    projectsList: [
      {
        title: 'Job Hunter AI',
        description:
          'SaaS multi-tenant de búsqueda de empleo con IA (Gemini). Muestra de producto con NestJS + Vue.',
        technologies: 'Vue 3 · NestJS · SQLite · Gemini',
        linkText: 'Ver repositorio',
      },
      {
        title: 'Prueba Tecnica',
        description:
          'CRUD fullstack de empleados y familiares con API REST documentada, validación y auth por header.',
        technologies: 'Angular · PHP · MySQL',
        linkText: 'Ver repositorio',
      },
      {
        title: 'Portfolio',
        description:
          'Este sitio — portafolio en Angular con i18n (EN/ES), dark mode y deploy en Netlify.',
        technologies: 'Angular · TypeScript · SCSS',
        linkText: 'Ver sitio live',
      },
      {
        title: 'Pokedex',
        description:
          'Herramienta que consume la PokeAPI para explorar Pokémon — proyecto temprano de frontend.',
        technologies: 'Angular · SCSS · TypeScript',
        linkText: 'Ver repositorio',
      },
    ],
  },
};
