import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from 'localization/en/en';
import { ua } from 'localization/ua/ua';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from './locales/en/translation.json';
// import translationUA from './locales/ua/translation.json';
// import I18NextHttpBackend from 'i18next-http-backend';

// i18n.use(I18NextHttpBackend).use(LanguageDetector).use(initReactI18next).init(
//     {
//         debug: true,
//         fallbackLng: 'en',
//         resources: {
//             en: {
//                 translation: translationEN,
//             },
//             ua: {
//                 translation: translationUA,
//             },
//         },
//         detection: {
//             order: ['queryString', 'cookie'],
//             cache: ['cookie']
//         },
//         interpolation: {
//             escapeValue: false
//         }
//     }
// )

// export default i18n;
