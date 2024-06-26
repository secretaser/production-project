// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n
//     .use(initReactI18next)
//     .init({
//         react: { useSuspense: false },
//         lng: 'en',
//         fallbackLng: 'en',
//         debug: false,

//         interpolation: {
//             escapeValue: false, // not needed for react!!
//         },
//         resources: { ru: { translations: {} } },
//     });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        resources: { en: { translations: {} } },
    });

export default i18n;
