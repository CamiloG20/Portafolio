import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

interface ProjectLinks {
  [key: string]: string;
}

enum View {
  Home = 'isHome',
  AboutMe = 'isAboutMe',
  Projects = 'isProjects',
  Contact = 'isContact',
}

@Component({
  selector: 'app-root',
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public languageService: LanguageService) {}

  title = 'Portfolio2.0';
  isShowMenu: boolean = false;
  view: View = View.Home;
  isDarkMode: boolean = false;

  View = View;

  handleGoToMenu(name: View) {
    this.view = name;
    this.isShowMenu = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleLanguage() {
    const newLang =
      this.languageService.getCurrentLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(newLang);
  }

  getProjectLink(title: string): string {
    const projectLinks: ProjectLinks = {
      'Job Hunter AI': 'https://github.com/CamiloG20/job-hunter-ai',
      'Prueba Tecnica':
        'https://github.com/CamiloG20/Prueba-Tecnica-Desarrollador',
      Portfolio: 'https://cescuderog20-portafolio.netlify.app/',
      Pokedex: 'https://github.com/RickyBv1/Pokedex',
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
      'Job Hunter AI': 'icons/default.png',
      'Prueba Tecnica': 'icons/default.png',
      Portfolio: 'projects/portfolio-v1.0.png',
      Pokedex: 'projects/pokedex.png',
    };
    return images[title] || 'icons/default.png';
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  downloadCV() {
    const cvPath = 'cv/CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Camilo_Escudero_CV.pdf';
    link.target = '_blank';
    link.click();
  }

  goToLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/ricardo-cortes-b29739179/',
      '_blank'
    );
  }
}
