
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';
import I18NextHttpBackend from 'i18next-http-backend';

i18n.use(I18NextHttpBackend).use(LanguageDetector).use(initReactI18next).init(
    {        
        fallbackLng: 'ua',
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

export default i18n;