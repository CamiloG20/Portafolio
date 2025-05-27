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
    description: `Full-stack developer`,
    contactMeButton: 'Contact Me',
    downloadCV: 'Download CV',
    home: 'HOME',
    homeInfo: `Mid-Level Web Developer |  Full Stack with a designer's eye and an engineer's mind.
<br> I’m a Mid-Level web developer with experience in JavaScript, TypeScript, Angular, React, HTML, and CSS. My passion is to create intuitive, functional, and visually appealing web experiences. Always eager to learn new technologies, my goal is to evolve into a Senior Full Stack Developer.
Outside of coding, I enjoy video games and basketball.
<br>Let's build something great together! 🚀`,
    aboutMe: 'ABOUT ME',
    aboutMeDescription: `Mid-Level Web Developer |  Full Stack with a designer's eye and an engineer's mind.
<br>
I'm a Mid-Level web developer with experience in JavaScript, TypeScript, Angular, HTML, and CSS. As a self-taught programmer, I've worked on a few projects where I focused on creating clean, intuitive, and visually appealing user experiences. I enjoy the challenge of turning ideas into interactive and responsive web applications, always aiming for a balance between aesthetics and functionality.
<br>
I thrive in collaborative environments, valuing the opportunity to learn from experienced developers while fostering a positive and relaxed workspace. I believe that teamwork and continuous learning are key to professional growth. Although my backend experience is minimal, I'm eager to expand my knowledge and take on new challenges that will help me become a well-rounded full-stack developer.
<br>
For me, coding should be as enjoyable as it is challenging. While problem-solving and debugging can be tough at times, I believe in making the process fun and engaging. Whether I'm refining UI designs, optimizing performance, or experimenting with new technologies, I approach development with curiosity and enthusiasm.
<br>
Beyond coding, I'm always looking for new challenges both on and off the screen. I'm passionate about video games, where I enjoy strategy, creativity, and problem-solving in a different way. Additionally, I enjoy hiking, an activity that allows me to connect with nature and overcome physical challenges while exploring unknown routes. Both hobbies fuel my love for challenges, adaptability, and constant improvement—values that I bring into my work as a developer.`,
    projects: 'PROJECTS',
    contact: 'CONTACT ME',
    contact2: 'CONTACT',
    phoneNumber: 'Phone number:',

    //text for the project cards
    projectsList: [
      {
        title: 'Pokedex',
        description:
          'Tool that consumes PokeAPI to see the information of different types of pokemons',
        technologies: 'Angular, SCSS, TypeScript',
        linkText: 'Watch the repository',
      }
    ],
  },

  es: {
    hello: 'HOLA',
    im: 'Soy Camilo',
    description: `Desarrollador Full-stack`,
    contactMeButton: 'Contactame',
    downloadCV: 'Descargar CV',
    home: 'INICIO',
    homeInfo: `Desarrollador Web Mid-Level | Full Stack con ojo de diseñador y mente de ingeniero
    <br>Soy un desarrollador web Mid-Level con experiencia en JavaScript, TypeScript, Angular, React, HTML y CSS. Mi pasión es crear experiencias web intuitivas, funcionales y visualmente atractivas. Siempre en    busca    de nuevas tecnologías, mi meta es evolucionar hacia un desarrollador Full Stack Senior.
Fuera del código, disfruto de los videojuegos y el basketball.
<br>¡Construyamos algo increíble juntos! 🚀`,
    aboutMe: 'SOBRE MÍ',
    aboutMeDescription: `Desarrollador Web Mid-Level | Full Stack con ojo de diseñador y mente de ingeniero
<br>
Soy un desarrollador web Mid-Level con experiencia en JavaScript, TypeScript, Angular, React, HTML y CSS. Como programador autodidacta, he trabajado en varios proyectos en los que me he centrado en crear experiencias de usuario limpias, intuitivas y visualmente atractivas. Disfruto el desafío de convertir ideas en aplicaciones web interactivas y responsivas, siempre buscando un equilibrio entre estética y funcionalidad.
<br>
Me desenvuelvo mejor en entornos colaborativos, valorando la oportunidad de aprender de desarrolladores con más experiencia mientras promuevo un ambiente de trabajo positivo y relajado. Creo firmemente que el trabajo en equipo y el aprendizaje continuo son clave para el crecimiento profesional. Aunque mi experiencia en el backend es limitada, estoy ansioso por ampliar mis conocimientos y asumir nuevos desafíos que me ayuden a convertirme en un desarrollador full-stack completo.
<br>
Para mí, programar debe ser tan divertido como desafiante. Aunque la resolución de problemas y la depuración pueden ser complicadas a veces, creo en hacer que el proceso sea entretenido y enriquecedor. Ya sea refinando diseños de interfaz, optimizando el rendimiento o experimentando con nuevas tecnologías, abordo el desarrollo con curiosidad y entusiasmo.
<br>
Más allá del código, siempre busco nuevos retos dentro y fuera de la pantalla. Soy un apasionado de los videojuegos, donde disfruto de la estrategia, la creatividad y la resolución de problemas desde una perspectiva diferente. Además, disfruto del excursionismo, una actividad que me permite conectar con la naturaleza y superar desafíos físicos mientras exploro rutas desconocidas. Ambas aficiones alimentan mi amor por los desafíos, la adaptabilidad y la mejora constante, valores que aplico en mi trabajo como desarrollador.`,
    projects: 'PROYECTOS',
    contact: 'CONTACTO',
    contact2: 'CONTACTO',
    phoneNumber: 'Numero de teléfono:',

    //texto para las tarjetas de proyectos
    projectsList: [
      {
        title: 'Pokedex',
        description:
          'Herramienta que consume la PokeAPI para ver la información de distintos tipos de Pokémon',
        technologies: 'Angular, SCSS, TypeScript',
        linkText: 'Mira el repositorio',
      },
      
    ],
  },
};
