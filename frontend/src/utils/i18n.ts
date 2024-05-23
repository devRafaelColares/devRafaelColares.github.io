import i18next from 'i18next';
import translationEn from '../Lenguages/translationEN.json'; // Arquivo de tradução em inglês

// Configuração do i18next
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // default language
  resources: {
    en: {
      translation: translationEn,
    },
  },
});

export default i18next;
