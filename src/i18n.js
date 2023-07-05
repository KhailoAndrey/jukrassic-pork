
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';

i18n.use(LanguageDetector).use(initReactI18next).init(
    {
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: translationEN, 
            },
            ua: {
                translation: translationUA, 
            },
        },
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    }
)

export default i18n