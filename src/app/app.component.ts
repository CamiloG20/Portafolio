import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;

  constructor(public languageService: LanguageService) {}

  isDarkMode = true;
  isNavOpen = false;
  private lastFocused: HTMLElement | null = null;

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
    if (this.isNavOpen) {
      this.closeNav(true);
      return;
    }
    this.openNav();
  }

  openNav() {
    this.lastFocused = document.activeElement as HTMLElement | null;
    this.isNavOpen = true;
    queueMicrotask(() => {
      document.getElementById('mobile-nav')?.querySelector('a')?.focus();
    });
  }

  closeNav(restoreFocus = false) {
    this.isNavOpen = false;
    if (restoreFocus) {
      queueMicrotask(() => {
        (this.lastFocused || this.menuToggle?.nativeElement)?.focus();
      });
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    if (!this.isNavOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeNav(true);
      return;
    }

    if (event.key !== 'Tab') return;

    const panel = document.getElementById('mobile-nav');
    if (!panel) return;

    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    this.closeNav();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  getProjectLink(title: string): string {
    const projectLinks: ProjectLinks = {
      'Job Hunter AI': 'https://github.com/CamiloG20/job-hunter-ai',
      'Hogwarts Dex': 'https://hogwarts-dex.vercel.app',
      Portfolio: 'https://cescuderog20-portafolio.netlify.app/',
      'Prueba Tecnica':
        'https://github.com/CamiloG20/Prueba-Tecnica-Desarrollador',
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

  getProjectImagePath(title: string, format: 'webp' | 'jpg' = 'webp'): string {
    const base: ProjectLinks = {
      'Job Hunter AI': 'projects/job-hunter-ai',
      'Hogwarts Dex': 'projects/hogwarts-dex',
      Portfolio: 'projects/portfolio-live',
      'Prueba Tecnica': 'projects/prueba-tecnica',
    };
    const path = base[title];
    if (!path) return 'icons/default.png';
    return `${path}.${format}`;
  }

  getExperience(): ExperienceItem[] {
    const lang = this.languageService.getCurrentLanguage();
    return this.languageService.translations[lang][
      'experienceList'
    ] as unknown as ExperienceItem[];
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
