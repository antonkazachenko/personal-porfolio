'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { dictionaries, DEFAULT_LOCALE, LOCALES, type Locale } from './dictionaries';

export const LOCALE_STORAGE_KEY = 'locale';

type I18nContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  /** Translate a dot-path key, e.g. t('hero.subtitle'). */
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

function resolve(dict: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[part];
    return undefined;
  }, dict);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Start from the default so server and first client render match; the stored
  // locale is applied after mount (same approach as the theme system).
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — locale still applies for this session */
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const fromLocale = resolve(dictionaries[locale], key);
      if (typeof fromLocale === 'string') return fromLocale;
      const fromDefault = resolve(dictionaries[DEFAULT_LOCALE], key);
      return typeof fromDefault === 'string' ? fromDefault : key;
    },
    [locale],
  );

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}
