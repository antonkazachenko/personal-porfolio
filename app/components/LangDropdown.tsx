'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const LANGUAGES = ['En', 'De', 'Fr', 'It'];

export default function LangDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('En');
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

  const options = LANGUAGES.filter(l => l !== selected);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-dropdown-trigger" onClick={() => setIsOpen(o => !o)}>
        {selected}
        <ChevronDown
          size={14}
          className={`lang-dropdown-chevron ${isOpen ? 'lang-dropdown-chevron--open' : ''}`}
        />
      </button>

      <ul className={`lang-dropdown-menu ${isOpen ? 'lang-dropdown-menu--open' : ''}`}>
        {options.map(lang => (
          <li key={lang} onClick={() => { setSelected(lang); setIsOpen(false); }}>
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
}
