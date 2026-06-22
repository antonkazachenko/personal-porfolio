"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, GithubMobileIcon, LinkedinIcon, LinkedinMobileIcon, TabIcon } from "@/public/icons";
import LangDropdown from "@/app/components/LangDropdown";
import { useI18n } from "@/app/i18n/I18nProvider";

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
  const { t } = useI18n();

  const navItems: { key: string; label: string; onClick: () => void }[] = [
    { key: "skills", label: t("nav.skills"), onClick: onScrollToSkills },
    { key: "experience", label: t("nav.experience"), onClick: onScrollToExperience },
    { key: "projects", label: t("nav.projects"), onClick: onScrollToProjects },
    { key: "education", label: t("nav.education"), onClick: onScrollToEducation },
    { key: "contacts", label: t("nav.contacts"), onClick: onScrollToContacts },
  ];

  const handleNavClick = (onClick: () => void) => () => {
    onClick();
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left-menu">
        <Link href="/" className="mobile-logo" aria-label={t("header.home")}>
          <TabIcon className="mobile-logo-svg" />
        </Link>
        <ThemeSwitcher />
        <LangDropdown />
      </div>
      <ul className="menu-list">
        {navItems.map((item) => (
          <li key={item.key} onClick={item.onClick}>{item.label}</li>
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
          aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
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
                key={item.key}
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
