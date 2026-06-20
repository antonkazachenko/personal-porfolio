"use client";

import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, GithubMobileIcon, LinkedinIcon, LinkedinMobileIcon, TabIcon } from "@/public/icons";
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
          <TabIcon className="mobile-logo-svg" />
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
            <GithubIcon className="social-icon-desktop" />
            <GithubMobileIcon className="social-icon-mobile" />
          </a>
        </div>
        <div className="icon-wrapper">
          <a href="https://linkedin.com/in/antonkazachenko" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="social-icon-desktop" />
            <LinkedinMobileIcon className="social-icon-mobile" />
          </a>
        </div>
        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar hamburger-bar--top" />
          <span className="hamburger-bar hamburger-bar--mid" />
          <span className="hamburger-bar hamburger-bar--bot" />
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
