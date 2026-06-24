'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Linkedin, Phone, Mail, Webhook, Terminal, Box, Cloud, Braces } from 'lucide-react';
import {
  GithubIcon,
  GithubMobileIcon,
  LinkedinIcon,
  LinkedinMobileIcon,
  TabIcon,
} from '@/public/icons';
import NumpyLogo from '@/public/icons/projects/data-analysis/numpy.svg';
import PandasLogo from '@/public/icons/projects/data-analysis/pandas.svg';
import PostgresLogo from '@/public/icons/projects/data-analysis/postgresql.svg';
import PyTorchLogo from '@/public/icons/projects/data-analysis/pytorch.svg';
import MatplotlibLogo from '@/public/icons/projects/data-analysis/matplotlib.svg';
import MySqlLogo from '@/public/icons/projects/data-analysis/mysql.svg';
import SparkLogo from '@/public/icons/projects/data-analysis/spark.svg';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import TechLogo from '@/app/components/TechLogo';
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import { useI18n } from '@/app/i18n/I18nProvider';
import '@/app/components/styles.css';

const NAV_KEYS = ['skills', 'experience', 'projects', 'education', 'contacts'] as const;

const GITHUB_URL = 'https://github.com/antonkazachenko';
const LINKEDIN_URL = 'https://linkedin.com/in/antonkazachenko';

// Libraries & Databases — SVG brand logos
const LIBRARIES = [
  { name: 'NumPy', Icon: NumpyLogo },
  { name: 'pandas', Icon: PandasLogo, light: '/icons/data_science/pandas-light.svg' },
  { name: 'PostgreSQL', Icon: PostgresLogo },
  { name: 'PyTorch', Icon: PyTorchLogo, light: '/icons/data_science/pytorch-light.svg' },
  { name: 'matplotlib', Icon: MatplotlibLogo },
  { name: 'MySQL', Icon: MySqlLogo },
  { name: 'Spark', Icon: SparkLogo, light: '/icons/data_science/apache-light.svg' },
];

// Infrastructure & Tooling — lucide line icons
const TOOLING = [
  { name: 'REST API', Icon: Braces },
  { name: 'Docker', Icon: Box },
  { name: 'AWS', Icon: Cloud },
  { name: 'CLI Tools', Icon: Terminal },
  { name: 'Webhooks', Icon: Webhook },
];

const FINDING_KEYS = ['children', 'marital', 'income', 'purpose', 'cleaning', 'categorization', 'conclusion'] as const;

export default function DataAnalysisPage() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="project-page dap container mx-auto">
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
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="social-icon-desktop" />
                <GithubMobileIcon className="social-icon-mobile" />
              </a>
            </div>
            <div className="icon-wrapper">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
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
        <section className="dap-hero">
          <span className="dap-eyebrow">
            <span className="dap-eyebrow-dot" />
            {t('dataAnalysis.heroEyebrow')}
          </span>
          <h1 className="dap-title">{t('dataAnalysis.title')}</h1>
          <p className="dap-lead">
            {t('dataAnalysis.description')}
          </p>

          <div className="dap-ctas">
            <a
              href="https://nbviewer.org/github/antonkazachenko"
              target="_blank"
              rel="noopener noreferrer"
              className="dap-cta dap-cta--primary"
            >
              <ExternalLink size={14} />
              {t('projectLinks.liveDemo')}
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="dap-cta">
              <Github size={14} />
              {t('projectLinks.github')}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="dap-cta">
              <Linkedin size={14} />
              {t('projectLinks.linkedinPost')}
            </a>
          </div>

          <div className="dap-media">
            <div className="dap-media-inner">
              <span className="dap-media-label">Loan Reliability Analysis</span>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="dap-section">
          <div className="dap-section-head">
            <h2 className="dap-section-title">{t('techSection.heading')}</h2>
            <span className="dap-section-index">02</span>
          </div>

          <div className="dap-group">
            <p className="dap-microlabel">Libraries &amp; Databases</p>
            <div className="dap-chips">
              {LIBRARIES.map(({ name, Icon, light }) => (
                <div key={name} className="dap-chip">
                  <span className="dap-chip-logo"><TechLogo Icon={Icon} light={light} name={name} /></span>
                  <span className="dap-chip-text">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dap-group">
            <p className="dap-microlabel">Infrastructure &amp; Tooling</p>
            <div className="dap-chips">
              {TOOLING.map(({ name, Icon }) => (
                <div key={name} className="dap-chip">
                  <span className="dap-chip-icon"><Icon size={14} /></span>
                  <span className="dap-chip-text">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="dap-section">
          <div className="dap-section-head">
            <h2 className="dap-section-title">{t('dataAnalysis.findingsHeading')}</h2>
            <span className="dap-section-index">03</span>
          </div>

          <p className="dap-lead dap-lead--tight">
            {t('dataAnalysis.findingsLead')}
          </p>

          <div className="dap-findings">
            {FINDING_KEYS.map((k, i) => (
              <article key={k} className="dap-finding">
                <div className="dap-finding-head">
                  <h3 className="dap-finding-title">{t(`dataAnalysis.findings.${k}.title`)}</h3>
                  <span className="dap-finding-index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="dap-finding-desc">{t(`dataAnalysis.findings.${k}.description`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section className="dap-contacts">
          <h3 className="dap-contacts-title">{t('projectFooter.heading')}</h3>
          <p className="dap-contacts-subtitle">
            {t('projectFooter.subheading')}
          </p>

          <form className="dap-form" onSubmit={(e) => e.preventDefault()}>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-name">{t('footer.nameLabel')}</label>
              <input id="dap-name" type="text" name="fullName" placeholder={t('footer.namePlaceholder')} />
            </div>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-email">{t('footer.emailLabel')}</label>
              <input id="dap-email" type="email" name="email" placeholder={t('footer.emailPlaceholder')} />
            </div>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-message">{t('footer.messageLabel')}</label>
              <textarea id="dap-message" name="message" placeholder={t('footer.messagePlaceholder')} rows={4} />
            </div>
            <button type="submit" className="dap-submit">{t('footer.send')}</button>
          </form>

          <div className="dap-direct-card">
            <div className="dap-direct-group">
              <p className="dap-microlabel">{t('footer.direct')}</p>
              <a className="dap-direct-link" href="tel:+17789280654">
                <span className="dap-direct-icon"><Phone size={14} /></span>
                +1 778-928-0654
              </a>
              <a className="dap-direct-link" href="mailto:kazachenkowork@gmail.com">
                <span className="dap-direct-icon"><Mail size={14} /></span>
                kazachenkowork@gmail.com
              </a>
            </div>

            <div className="dap-direct-group">
              <p className="dap-microlabel">{t('footer.socials')}</p>
              <div className="dap-socials">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="dap-social">
                  <Github size={16} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="dap-social">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            <div className="dap-pages">
              <p className="dap-microlabel">{t('footer.pages')}</p>
              <a href="#" className="dap-page-link">{t('projectFooter.overview')}</a>
              <a href="#" className="dap-page-link">{t('projectFooter.technologies')}</a>
              <a href="#" className="dap-page-link">{t('dataAnalysis.findingsHeading')}</a>
            </div>
          </div>
        </section>
      </div>

      <RightsSection />
    </>
  );
}
