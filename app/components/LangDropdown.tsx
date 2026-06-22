'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/app/i18n/I18nProvider';
import { LOCALES, LOCALE_LABELS } from '@/app/i18n/dictionaries';

export default function LangDropdown() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = LOCALES.filter(l => l !== locale);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-dropdown-trigger" onClick={() => setIsOpen(o => !o)}>
        {LOCALE_LABELS[locale]}
        <ChevronDown
          size={14}
          className={`lang-dropdown-chevron ${isOpen ? 'lang-dropdown-chevron--open' : ''}`}
        />
      </button>

      <ul className={`lang-dropdown-menu ${isOpen ? 'lang-dropdown-menu--open' : ''}`}>
        {options.map(lang => (
          <li key={lang} onClick={() => { setLocale(lang); setIsOpen(false); }}>
            {LOCALE_LABELS[lang]}
          </li>
        ))}
      </ul>
    </div>
  );
}
