import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

import translations from '../assert/i18n'
import LanguageDetector from "i18next-browser-languagedetector";

const i18nConfig = {
    resources: translations,
    fallbackLng: 'pt-BR',
    defaultNS: 'translations'
}

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
