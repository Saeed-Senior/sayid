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

interface BackendLang {
      loadPath: string;
}

interface I18nConfig {
   fallbackLng: string;
   debug: boolean;
   detection: Detection;
   interpolation: Interpolation;
   backend: BackendLang;

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
   },
   backend: {
      loadPath: '/sayid/{{lng}}/{{ns}}.json',
   },
};

i18n.use(Backend)
   .use(LanguageDetector)
   .use(initReactI18next)
   .init(i18nConfig);

export default i18n;
