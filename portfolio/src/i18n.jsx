import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'ta', 'fr', 'hi', 'ru', 'es', 'ja', 'ar'],
    ns: ['footer', 'whyChoose', 'videoSection', 'bestChoice', 'ourServices', 'header', 'home', 'imageMarquee', 'ourCases', 'processStep', 'questionAnswer', 'testimonial', 'textImage','aboutPage','aboutSection','caseDetailPage'],
    defaultNS: 'header',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
