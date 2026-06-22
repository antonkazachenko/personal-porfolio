'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, ExternalLink, Key, Route, ArrowLeft, Database, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GithubMobileIcon, LinkedinMobileIcon, TabIcon, GoIcon, SQLiteIcon, JSIcon, HTML5Icon, CSS3Icon, DockerIcon } from '@/public/icons';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import { useI18n } from '@/app/i18n/I18nProvider';
import TechBadge from '@/app/components/TechBadge';
import DemoCredentials from '@/app/components/DemoCredentials';
import '@/app/components/styles.css';

const PROJECT_COLOR = '#00b8be';

const NAV_KEYS = ['skills', 'experience', 'projects', 'education', 'contacts'];

const TECH_STACK = [
  { key: 'go', name: 'Go', Icon: GoIcon },
  { key: 'sqlite', name: 'SQLite', Icon: SQLiteIcon },
  { key: 'javascript', name: 'JavaScript', Icon: JSIcon },
  { key: 'docker', name: 'Docker', Icon: DockerIcon },
  { key: 'html5', name: 'HTML5', Icon: HTML5Icon },
  { key: 'css3', name: 'CSS3', Icon: CSS3Icon },
];

const BADGES = [
  { key: 'chiRouter', label: 'Chi Router', Icon: Route, color: '#00b8be' },
  { key: 'sqlx', label: 'SQLx', Icon: Database, color: '#336791' },
  { key: 'jwtAuth', label: 'JWT Auth', Icon: Key, color: '#f59e0b' },
  { key: 'testify', label: 'Testify', Icon: CheckCircle, color: '#00e676' },
];

const FEATURE_KEYS = ['layeredArchitecture', 'taskScheduling', 'jwtAuth', 'dockerBuild'] as const;

export default function GoTodoListPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

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
            <h1 className="project-page-title">Go Todo List</h1>
            <p className="project-page-subtitle">
              {t('goTodoList.description')}
            </p>
          </div>

          <div className="project-ctas">
            <a
              href="https://go-todo-list-api.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn project-cta-btn--primary"
            >
              {t('projectLinks.liveDemo')}
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/antonkazachenko/go-todo-list-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              {t('projectLinks.github')}
              <GithubMobileIcon />
            </a>
            <a
              href="https://www.linkedin.com/posts/antonkazachenko_go-golang-api-activity-7233984088502628354-noTZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJ2Do4B9tI2b3krKnfVsIC4Lwji0Sz3of0"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              {t('projectLinks.linkedinPost')}
              <LinkedinMobileIcon />
            </a>
          </div>

          <DemoCredentials credentials={[{ key: t('demoCredentials.password'), value: 'test12345' }]} />

          {/* Demo video */}
          <video
            className="project-video"
            style={{ borderColor: PROJECT_COLOR }}
            src="/go-todo-list-demo.mp4"
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
          <p className="project-tech-label">{t('techSection.usedHeading')}</p>
          <div className="project-tech-container">
            <div className="project-tech-logos">
              {TECH_STACK.map(({ key, name, Icon }) => (
                <div key={key} className="project-tech-icon">
                  <Icon />
                  <div className="skill-tooltip">
                    <span className="skill-tooltip-name">{name}</span>
                    <span className="skill-tooltip-desc">{t(`goTodoList.tech.stack.${key}`)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="project-tech-badges">
              {BADGES.map(({ key, label, Icon, color }) => (
                <TechBadge key={key} label={label} icon={<Icon size={18} />} color={color} description={t(`goTodoList.tech.badges.${key}`)} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech section (mobile) — chip layout */}
        <section className="tech-mobile">
          <div className="tech-mobile-head">
            <h2 className="tech-mobile-title">{t('techSection.heading')}</h2>
            <span className="tech-mobile-index">02</span>
          </div>

          <div className="tech-mobile-group">
            <p className="tech-mobile-label">{t('techSection.coreStack')}</p>
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
            <p className="tech-mobile-label">{t('techSection.librariesTooling')}</p>
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
            <h1 className="section-header-bg">{t('goTodoList.featuresHeading')}</h1>
            <h2 className="section-header">{t('goTodoList.featuresHeading')}</h2>
          </div>
          <div className="project-features-grid">
            {FEATURE_KEYS.map((k) => (
              <div key={k} className="project-feature-card">
                <h3 className="project-feature-title">{t(`goTodoList.features.${k}.title`)}</h3>
                <p className="project-feature-desc">{t(`goTodoList.features.${k}.description`)}</p>
              </div>
            ))}
          </div>

          {/* Key Features (mobile) — Figma finding-card layout */}
          <div className="features-mobile">
            <div className="features-mobile-head">
              <h2 className="features-mobile-title">{t('goTodoList.featuresHeading')}</h2>
              <span className="features-mobile-index">03</span>
            </div>
            <div className="features-mobile-list">
              {FEATURE_KEYS.map((k, i) => (
                <article key={k} className="feature-card-m">
                  <div className="feature-card-m-head">
                    <h3 className="feature-card-m-title">{t(`goTodoList.features.${k}.title`)}</h3>
                    <span className="feature-card-m-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="feature-card-m-desc">{t(`goTodoList.features.${k}.description`)}</p>
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
                  <a className="footer-page-link" href="#features">{t('goTodoList.featuresHeading')}</a>
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
