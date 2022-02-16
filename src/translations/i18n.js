import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_ES } from "./countries/es";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     es: {
       translation: TRANSLATIONS_ES 
     },
   }
 });
 
i18n.changeLanguage("es");