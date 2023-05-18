import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

interface Detection {
   order: string[];
   caches: string[];
}

interface Interpolation {
   escapeValue: boolean;
}

interface I18nConfig {
   fallbackLng: string;
   debug: boolean;
   detection: Detection;
   interpolation: Interpolation;
}

const i18nConfig: I18nConfig = {
   fallbackLng: 'ru',
   debug: true,
   detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
   },
   interpolation: {
      escapeValue: false
   }
};

i18n.use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init(i18nConfig);

export default i18n;
