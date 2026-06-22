'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, ExternalLink, Share2, Zap, Key, Route, Move, ArrowLeft } from 'lucide-react';
import { ReactIcon, TypeScriptIcon, ReduxIcon, CypressIcon, JestIcon, GithubIcon, LinkedinIcon, GithubMobileIcon, LinkedinMobileIcon, TabIcon } from '@/public/icons';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import TechBadge from '@/app/components/TechBadge';
import DemoCredentials from '@/app/components/DemoCredentials';
import { useI18n } from '@/app/i18n/I18nProvider';
import '@/app/components/styles.css';

const PROJECT_COLOR = '#9205af';

// Nav keys map to the shared nav.* dictionary entries (links go home).
const NAV_KEYS = ['skills', 'experience', 'projects', 'education', 'contacts'] as const;

const TECH_STACK = [
  { name: 'React', description: 'Component-based UI library', Icon: ReactIcon },
  { name: 'TypeScript', description: 'Typed superset of JavaScript', Icon: TypeScriptIcon },
  { name: 'Redux', description: 'Predictable global state', Icon: ReduxIcon },
  { name: 'Cypress', description: 'End-to-end testing', Icon: CypressIcon },
  { name: 'Jest', description: 'Unit testing framework', Icon: JestIcon },
];

const BADGES = [
  { label: 'React Router', Icon: Route, color: '#f44250', description: 'Client-side routing' },
  { label: 'React DnD', Icon: Move, color: '#34d399', description: 'Drag-and-drop interactions' },
  { label: 'React Context API', Icon: Share2, color: '#61dafb', description: 'Shared state & translations' },
  { label: 'WebSockets', Icon: Zap, color: '#8b5cf6', description: 'Real-time data streaming' },
  { label: 'JWTs', Icon: Key, color: '#f59e0b', description: 'Token-based authentication' },
];

// Feature keys map to the reactBurger.features.* dictionary entries; titles and
// descriptions are resolved via t() at render time.
const FEATURE_KEYS = ['dragDrop', 'state', 'testing', 'auth', 'liveData', 'deploy'] as const;

export default function ReactBurgerPage() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="project-page container mx-auto">
        {/* Header */}
        <header className="header">
          <div className="left-menu">
            <Link href="/" className="mobile-logo" aria-label={t('header.home')}>
              <TabIcon className="mobile-logo-svg" />
            </Link>
            <ThemeSwitcher />
            <LangDropdown />
          </div>
          <ul className="menu-list">
            {NAV_KEYS.map((key) => (
              <li key={key}><Link href="/">{t(`nav.${key}`)}</Link></li>
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
              aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
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
                {NAV_KEYS.map((key) => (
                  <Link
                    key={key}
                    href="/"
                    className="mobile-drawer-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                ))}
              </nav>
            </>
          )}
        </header>

        {/* Back to home (desktop) */}
        <Link href="/" className="project-back-btn" aria-label={t('header.backToHome')}>
          <ArrowLeft size={14} />
          {t('header.back')}
        </Link>

        {/* Back to home (mobile) */}
        <Link href="/" className="mobile-home-button" aria-label={t('header.home')}>
          <svg
            className="mobile-home-button-chevron"
            viewBox="0 0 4 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M3.5 0.5L0.5 4L3.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('header.home')}
        </Link>

        {/* Hero */}
        <section className="project-page-hero" id="overview">
          <div className="project-page-hero-text">
            <h1 className="project-page-title">React Burger</h1>
            <p className="project-page-subtitle">
              {t('reactBurger.description')}
            </p>
          </div>

          <div className="project-ctas">
            <a
              href="https://antonkazachenko.github.io/react-burger"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn project-cta-btn--primary"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/antonkazachenko/react-burger"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              GitHub
              <GithubMobileIcon />
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7376336948799614976/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              LinkedIn Post
              <LinkedinMobileIcon />
            </a>
          </div>

          <DemoCredentials />

          {/* Demo video */}
          <video
            className="project-video"
            style={{ borderColor: PROJECT_COLOR }}
            src="/react-burger-demo.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </section>

        <div id="technologies">
        {/* Tech strip (desktop) */}
        <div className="project-tech-strip">
          <p className="project-tech-label">Tools &amp; Technologies Used</p>
          <div className="project-tech-container">
            <div className="project-tech-logos">
              {TECH_STACK.map(({ name, description, Icon }) => (
                <div key={name} className="project-tech-icon">
                  <Icon />
                  <div className="skill-tooltip">
                    <span className="skill-tooltip-name">{name}</span>
                    <span className="skill-tooltip-desc">{description}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="project-tech-badges">
              {BADGES.map(({ label, Icon, color, description }) => (
                <TechBadge key={label} label={label} icon={<Icon size={18} />} color={color} description={description} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech section (mobile) — chip layout */}
        <section className="tech-mobile">
          <div className="tech-mobile-head">
            <h2 className="tech-mobile-title">Tools &amp; Technologies</h2>
            <span className="tech-mobile-index">02</span>
          </div>

          <div className="tech-mobile-group">
            <p className="tech-mobile-label">Core Stack</p>
            <div className="tech-mobile-chips">
              {TECH_STACK.map(({ name, Icon }) => (
                <div key={name} className="tech-chip">
                  <span className="tech-chip-logo"><Icon /></span>
                  <span className="tech-chip-text">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-mobile-group">
            <p className="tech-mobile-label">Libraries &amp; Tooling</p>
            <div className="tech-mobile-chips">
              {BADGES.map(({ label, Icon, color }) => (
                <div key={label} className="tech-chip">
                  <span className="tech-chip-icon" style={{ color }}><Icon size={14} /></span>
                  <span className="tech-chip-text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>

        {/* Key Features */}
        <section className="project-features-section" id="features">
          <div className="skills-header-container">
            <h1 className="section-header-bg">{t('reactBurger.featuresHeading')}</h1>
            <h2 className="section-header">{t('reactBurger.featuresHeading')}</h2>
          </div>
          <div className="project-features-grid">
            {FEATURE_KEYS.map((k) => (
              <div key={k} className="project-feature-card">
                <h3 className="project-feature-title">{t(`reactBurger.features.${k}.title`)}</h3>
                <p className="project-feature-desc">{t(`reactBurger.features.${k}.description`)}</p>
              </div>
            ))}
          </div>

          {/* Key Features (mobile) — Figma finding-card layout */}
          <div className="features-mobile">
            <div className="features-mobile-head">
              <h2 className="features-mobile-title">{t('reactBurger.featuresHeading')}</h2>
              <span className="features-mobile-index">03</span>
            </div>
            <div className="features-mobile-list">
              {FEATURE_KEYS.map((k, i) => (
                <article key={k} className="feature-card-m">
                  <div className="feature-card-m-head">
                    <h3 className="feature-card-m-title">{t(`reactBurger.features.${k}.title`)}</h3>
                    <span className="feature-card-m-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="feature-card-m-desc">{t(`reactBurger.features.${k}.description`)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-contact">
              <h3 className="footer-heading">{t('projectFooter.heading')}</h3>
              <p className="footer-subheading">{t('projectFooter.subheading')}</p>
              <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                <div className="footer-field">
                  <User className="footer-field-icon" size={18} />
                  <input type="text" name="fullName" placeholder={t('footer.nameLabel')} />
                </div>
                <div className="footer-field">
                  <Mail className="footer-field-icon" size={18} />
                  <input type="email" name="email" placeholder={t('footer.emailLabel')} />
                </div>
                <textarea className="footer-message" name="message" placeholder={t('footer.messageLabel')} rows={4} />
                <button type="submit" className="footer-submit">{t('projectFooter.submit')}</button>
              </form>
            </div>

            <div className="footer-info">
              <div className="footer-info-card">
                <div className="footer-column">
                  <h4 className="footer-column-title">{t('footer.direct')}</h4>
                  <a className="footer-contact-link" href="tel:+17789280654">
                    <span className="footer-icon-circle"><Phone size={14} /></span>
                    <span>+1 778-928-0654</span>
                  </a>
                  <a className="footer-contact-link" href="mailto:kazachenkowork@gmail.com">
                    <span className="footer-icon-circle"><Mail size={14} /></span>
                    <span>kazachenkowork@gmail.com</span>
                  </a>
                </div>

                <div className="footer-column footer-column--socials">
                  <h4 className="footer-column-title">{t('footer.socials')}</h4>
                  <div className="footer-socials">
                    <a href="https://github.com/antonkazachenko" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
                      <GithubIcon className="social-icon-desktop" />
                      <GithubMobileIcon className="social-icon-mobile" />
                    </a>
                    <a href="https://linkedin.com/in/antonkazachenko" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                      <LinkedinIcon className="social-icon-desktop" />
                      <LinkedinMobileIcon className="social-icon-mobile" />
                    </a>
                  </div>
                </div>

                <div className="footer-column footer-card-pages">
                  <h4 className="footer-column-title">{t('footer.pages')}</h4>
                  <a className="footer-page-link" href="#overview">{t('projectFooter.overview')}</a>
                  <a className="footer-page-link" href="#technologies">{t('projectFooter.technologies')}</a>
                  <a className="footer-page-link" href="#features">{t('reactBurger.featuresHeading')}</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <RightsSection />
    </>
  );
}
