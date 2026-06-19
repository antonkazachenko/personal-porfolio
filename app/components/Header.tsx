"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, LinkedinIcon } from "@/public/icons";
import LangDropdown from "@/app/components/LangDropdown";

interface HeaderProps {
  onScrollToSkills: () => void;
  onScrollToExperience: () => void;
  onScrollToProjects: () => void;
  onScrollToEducation: () => void;
  onScrollToContacts: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollToSkills,
  onScrollToExperience,
  onScrollToProjects,
  onScrollToEducation,
  onScrollToContacts,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { label: string; onClick: () => void }[] = [
    { label: "Skills", onClick: onScrollToSkills },
    { label: "Experience", onClick: onScrollToExperience },
    { label: "Projects", onClick: onScrollToProjects },
    { label: "Education", onClick: onScrollToEducation },
    { label: "Contacts", onClick: onScrollToContacts },
  ];

  const handleNavClick = (onClick: () => void) => () => {
    onClick();
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left-menu">
        <span className="mobile-logo" aria-hidden="true">
          <span className="mobile-logo-badge">
            AK
            <span className="mobile-logo-dot" />
          </span>
        </span>
        <ThemeSwitcher />
        <LangDropdown />
      </div>
      <ul className="menu-list">
        {navItems.map((item) => (
          <li key={item.label} onClick={item.onClick}>{item.label}</li>
        ))}
      </ul>
      <div className="right-menu">
        <div className="icon-wrapper">
          <a href="https://github.com/antonkazachenko" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
        <div className="icon-wrapper">
          <a href="https://linkedin.com/in/antonkazachenko" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div>
        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <>
          <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} />
          <nav className="mobile-drawer">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="mobile-drawer-link"
                onClick={handleNavClick(item.onClick)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
