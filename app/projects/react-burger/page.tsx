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
import '@/app/components/styles.css';

const PROJECT_COLOR = '#9205af';

const NAV_ITEMS = ['Skills', 'Experience', 'Projects', 'Education', 'Contacts'];

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

const FEATURES = [
  {
    title: 'Drag & Drop',
    description:
      'Assemble a burger by dragging ingredients straight into the constructor. React DnD manages the drag sources, drop targets, and live reordering, so composing and rearranging a build feels natural and responsive.',
  },
  {
    title: 'State & Localization',
    description:
      'Global state is centralised with Redux and @reduxjs/toolkit, keeping the cart, ingredients, and order flow predictable, while the React Context API powers in-app translations for a fully multilingual interface.',
  },
  {
    title: 'Testing',
    description:
      'A two-layer test suite keeps changes safe: Cypress drives end-to-end flows through the real UI, while Jest covers units and reducers — together guarding against regressions on every commit.',
  },
  {
    title: 'Auth',
    description:
      'Registration and login are secured with JSON Web Tokens. Tokens are stored securely and attached to protected requests, with guarded routes that redirect unauthenticated users away from private pages.',
  },
  {
    title: 'Live Data',
    description:
      'A persistent WebSocket connection streams the public order feed and the user’s personal order history in real time, so statuses update instantly with no manual refreshes or polling.',
  },
  {
    title: 'CD / Deploy',
    description:
      'Continuous delivery ships the app to GitHub Pages, turning every push to the main branch into an automated build and deploy for fast, repeatable releases.',
  },
];

export default function ReactBurgerPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="project-page container mx-auto">
        {/* Header */}
        <header className="header">
          <div className="left-menu">
            <Link href="/" className="mobile-logo" aria-label="Home">
              <TabIcon className="mobile-logo-svg" />
            </Link>
            <ThemeSwitcher />
            <LangDropdown />
          </div>
          <ul className="menu-list">
            {NAV_ITEMS.map((label) => (
              <li key={label}><Link href="/">{label}</Link></li>
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
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
                {NAV_ITEMS.map((label) => (
                  <Link
                    key={label}
                    href="/"
                    className="mobile-drawer-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </>
          )}
        </header>

        {/* Back to home (desktop) */}
        <Link href="/" className="project-back-btn" aria-label="Back to home">
          <ArrowLeft size={14} />
          Back
        </Link>

        {/* Back to home (mobile) */}
        <Link href="/" className="mobile-home-button" aria-label="Home">
          <svg
            className="mobile-home-button-chevron"
            viewBox="0 0 4 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M3.5 0.5L0.5 4L3.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Home
        </Link>

        {/* Hero */}
        <section className="project-page-hero" id="overview">
          <div className="project-page-hero-text">
            <h1 className="project-page-title">React Burger</h1>
            <p className="project-page-subtitle">
              A full-stack burger-ordering SPA built with React, featuring drag-and-drop ingredient
              selection, real-time order tracking, and JWT-secured accounts.
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
            <h1 className="section-header-bg">KEY FEATURES</h1>
            <h2 className="section-header">KEY FEATURES</h2>
          </div>
          <div className="project-features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="project-feature-card">
                <h3 className="project-feature-title">{f.title}</h3>
                <p className="project-feature-desc">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Key Features (mobile) — Figma finding-card layout */}
          <div className="features-mobile">
            <div className="features-mobile-head">
              <h2 className="features-mobile-title">Key Features</h2>
              <span className="features-mobile-index">03</span>
            </div>
            <div className="features-mobile-list">
              {FEATURES.map((f, i) => (
                <article key={f.title} className="feature-card-m">
                  <div className="feature-card-m-head">
                    <h3 className="feature-card-m-title">{f.title}</h3>
                    <span className="feature-card-m-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="feature-card-m-desc">{f.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-contact">
              <h3 className="footer-heading">Have any project in mind?</h3>
              <p className="footer-subheading">I&apos;m available for freelancing</p>
              <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                <div className="footer-field">
                  <User className="footer-field-icon" size={18} />
                  <input type="text" name="fullName" placeholder="Full Name" />
                </div>
                <div className="footer-field">
                  <Mail className="footer-field-icon" size={18} />
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <textarea className="footer-message" name="message" placeholder="Message" rows={4} />
                <button type="submit" className="footer-submit">Submit</button>
              </form>
            </div>

            <div className="footer-info">
              <div className="footer-info-card">
                <div className="footer-column">
                  <h4 className="footer-column-title">Direct</h4>
                  <a className="footer-contact-link" href="tel:+17789280654">
                    <span className="footer-icon-circle"><Phone size={14} /></span>
                    <span>+1 778-928-0654</span>
                  </a>
                  <a className="footer-contact-link" href="mailto:aka184@sfu.ca">
                    <span className="footer-icon-circle"><Mail size={14} /></span>
                    <span>aka184@sfu.ca</span>
                  </a>
                </div>

                <div className="footer-column footer-column--socials">
                  <h4 className="footer-column-title">Socials</h4>
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
                  <h4 className="footer-column-title">Pages</h4>
                  <a className="footer-page-link" href="#overview">Overview</a>
                  <a className="footer-page-link" href="#technologies">Technologies</a>
                  <a className="footer-page-link" href="#features">Key Features</a>
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
