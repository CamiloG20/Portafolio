import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

interface ProjectLinks {
  [key: string]: string;
}

interface ExperienceItem {
  role: string;
  period: string;
  summary: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public languageService: LanguageService) {}

  isDarkMode = true;
  isNavOpen = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('light-theme', !this.isDarkMode);
  }

  toggleLanguage() {
    const newLang =
      this.languageService.getCurrentLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(newLang);
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    this.isNavOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  getProjectLink(title: string): string {
    const projectLinks: ProjectLinks = {
      'Job Hunter AI': 'https://github.com/CamiloG20/job-hunter-ai',
      'Prueba Tecnica':
        'https://github.com/CamiloG20/Prueba-Tecnica-Desarrollador',
      Portfolio: 'https://cescuderog20-portafolio.netlify.app/',
      'Hogwarts Dex': 'https://hogwarts-dex.vercel.app',
    };
    return projectLinks[title] || '#';
  }

  getProjectsList(): {
    title: string;
    description: string;
    technologies: string;
    linkText: string;
  }[] {
    const currentLanguage = this.languageService.getCurrentLanguage();
    return this.languageService.translations[currentLanguage][
      'projectsList'
    ] as {
      title: string;
      description: string;
      technologies: string;
      linkText: string;
    }[];
  }

  getProjectImagePath(title: string): string {
    const images: ProjectLinks = {
      'Job Hunter AI': 'projects/job-hunter-ai.jpg',
      'Prueba Tecnica': 'projects/prueba-tecnica.jpg',
      Portfolio: 'projects/portfolio-live.jpg',
      'Hogwarts Dex': 'projects/hogwarts-dex.svg',
    };
    return images[title] || 'icons/default.png';
  }

  getExperience(): ExperienceItem[] {
    const lang = this.languageService.getCurrentLanguage();
    return this.languageService.translations[lang]['experienceList'] as unknown as ExperienceItem[];
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv/CV.pdf';
    link.download = 'Camilo_Escudero_CV.pdf';
    link.target = '_blank';
    link.click();
  }
}
