import en from './locales/en';

export type Language = 'en' | 'es' | 'ru' | 'hu' | 'pt' | 'fr' | 'de' | 'it' | 'pl' | 'nl';

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  hu: 'Magyar',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pl: 'Polski',
  nl: 'Nederlands',
};

/**
 * Only English ships in the initial bundle. Other locales are loaded on
 * demand (see loadLocale) which keeps first-load JavaScript small.
 */
export const translations: Partial<Record<Language, Record<string, string>>> = { en };

const loaders: Record<Language, () => Promise<{ default: Record<string, string> }>> = {
  en: () => import('./locales/en'),
  es: () => import('./locales/es'),
  ru: () => import('./locales/ru'),
  hu: () => import('./locales/hu'),
  pt: () => import('./locales/pt'),
  fr: () => import('./locales/fr'),
  de: () => import('./locales/de'),
  it: () => import('./locales/it'),
  pl: () => import('./locales/pl'),
  nl: () => import('./locales/nl'),
};

export async function loadLocale(lang: Language): Promise<Record<string, string>> {
  const cached = translations[lang];
  if (cached) return cached;
  const mod = await loaders[lang]();
  translations[lang] = mod.default;
  return mod.default;
}
