import React from 'react';
import flatten from 'flat';
import { IntlProvider } from 'react-intl';
import {
  LanguageContextType,
  TranslationFile,
  UseLanguageHook,
} from '@/types/language.types';

// ? Translation files
import EN from '@/public/assets/locales/en.json';

const DefaultLanguage =
  process.env.NEXT_PUBLIC_APP_DEF_LANGUAGE?.toLowerCase() || 'en';

const Translations = {
  en: EN as TranslationFile,
} as const;

const LanguageContext = React.createContext<LanguageContextType>({
  language: DefaultLanguage,
  changeLanguage: () => {},
});

export default function LanguageWrapper({ children }: any) {
  const [language, setLanguage] = React.useState<string>(DefaultLanguage);

  const changeLanguage = (lang: string) => {
    setLanguage(lang || 'en');
  };

  const value = React.useMemo(
    () => ({ language, changeLanguage }),
    [language]
  ) as LanguageContextType;

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider
        locale={language}
        messages={flatten(Translations[language])}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext<UseLanguageHook>(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageWrapper');
  }
  return context;
}
