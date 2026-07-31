import { Injectable } from '@angular/core';
import { translations, TranslationData } from '../translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: 'en' | 'es' = 'en';
  translations: TranslationData = translations;

  constructor() {
    this.applyDocumentLang(this.currentLanguage);
  }

  setLanguage(lang: 'en' | 'es') {
    this.currentLanguage = lang;
    this.applyDocumentLang(lang);
  }

  getTranslation(key: string): string {
    const translation = this.translations[this.currentLanguage][key];
    if (typeof translation === 'string') {
      return translation;
    }
    return key;
  }

  getCurrentLanguage(): 'en' | 'es' {
    return this.currentLanguage;
  }

  private applyDocumentLang(lang: 'en' | 'es') {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }
}
