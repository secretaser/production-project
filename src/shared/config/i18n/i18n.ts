// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         react: { useSuspense: false },
//         fallbackLng: 'ru',
//         debug: true,
//         interpolation: {
//             escapeValue: false,
//         },
//         backend: {
//             loadPath: '/locales/{{lng}}/{{ns}}.json',
//         },
//     });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        react: { useSuspense: false },
        fallbackLng: 'ru',
        debug: true,
        load: 'languageOnly',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        keySeparator: false,
    });

export default i18n;
