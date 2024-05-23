import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from './utils/i18n.ts';

function LanguageSwitcher() {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Estado para controlar o idioma atual

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt-BR' : 'en'; // Alternar entre 'en' e 'pt-BR'
    setCurrentLanguage(newLanguage);
    i18next.changeLanguage(newLanguage); // Alterar o idioma no i18next
  };

  return (
    <button onClick={toggleLanguage}>
      {currentLanguage === 'en' ? t('Português') : t('English')}
    </button>
  );
}

export default LanguageSwitcher;
