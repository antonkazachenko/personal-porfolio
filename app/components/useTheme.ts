'use client';

import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'theme';

/** Dark is the design default (see :root in globals.css). */
const DEFAULT_THEME: Theme = 'dark';

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME;
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Drives the active color theme. Reads the persisted value on mount, writes the
 * `data-theme` attribute on <html> (which the CSS variable system keys off), and
 * keeps every mounted switcher in sync via a custom event.
 */
export function useTheme() {
  // Start from the default so server and first client render match (no hydration
  // mismatch); the real value is applied in the effect below.
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setThemeState(readStoredTheme());

    const handleChange = (event: Event) => {
      const next = (event as CustomEvent<Theme>).detail;
      if (next === 'light' || next === 'dark') setThemeState(next);
    };
    window.addEventListener('themechange', handleChange);
    return () => window.removeEventListener('themechange', handleChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this session */
    }
    window.dispatchEvent(new CustomEvent<Theme>('themechange', { detail: next }));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return { theme, setTheme, toggleTheme };
}
