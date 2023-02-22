export type LanguageContextType = {
  language: string;
  changeLanguage: (language: string) => void;
};

export type TranslationFile = {
  [key: string]: string | TranslationFile;
};

export type UseLanguageHook = {
  language: string;
  changeLanguage: (language: string) => void;
};
