import React, { createContext, useState } from 'react';
import i18n from 'localization/i18n';
import i18next from 'i18next';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    () => i18next.resolvedLanguage
  );

  console.log('resolved lang', i18next.resolvedLanguage);
  const changeLanguage = lang => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
