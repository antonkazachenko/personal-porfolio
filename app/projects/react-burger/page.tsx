'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, ExternalLink, Share2, Zap, Key, Route, Move } from 'lucide-react';
import { ReactIcon, TypeScriptIcon, ReduxIcon, CypressIcon, JestIcon, GithubIcon, LinkedinIcon, GithubMobileIcon, LinkedinMobileIcon, TabIcon } from '@/public/icons';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import TechBadge from '@/app/components/TechBadge';
import '@/app/components/styles.css';

const PROJECT_COLOR = '#9205af';

const NAV_ITEMS = ['Skills', 'Experience', 'Projects', 'Education', 'Contacts'];

const FEATURES = [
  {
    title: 'JWT Authentication',
    description:
      'Secure user registration and login backed by JSON Web Tokens, with protected routes that redirect unauthenticated users.',
  },
  {
    title: 'Real-time Orders',
    description:
      'Live order status updates delivered via a WebSocket connection so users always see the current state of their order.',
  },
  {
    title: 'Drag & Drop Builder',
    description:
      'Interactive burger constructor with drag-and-drop ingredient selection, letting users freely compose any burger they want.',
  },
  {
    title: 'State Management',
    description:
      'Centralised global state handled by Redux, with React Context API used for lightweight local state sharing across component trees.',
  },
];

export default function ReactBurgerPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        {/* Header */}
        <header className="header">
          <div className="left-menu">
            <span className="mobile-logo" aria-hidden="true">
              <TabIcon className="mobile-logo-svg" />
            </span>
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

        {/* Hero */}
        <section className="project-page-hero">
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

        {/* Tech strip */}
        <div className="project-tech-strip">
          <p className="project-tech-label">Tools &amp; Technologies Used</p>
          <div className="project-tech-container">
            <div className="project-tech-logos">
              <div className="project-tech-icon"><ReactIcon /></div>
              <div className="project-tech-icon"><TypeScriptIcon /></div>
              <div className="project-tech-icon"><ReduxIcon /></div>
              <div className="project-tech-icon"><CypressIcon /></div>
              <div className="project-tech-icon"><JestIcon /></div>
            </div>
            <div className="project-tech-badges">
              <TechBadge label="React Router" icon={<Route size={18} />} color="#f44250" />
              <TechBadge label="React DnD" icon={<Move size={18} />} color="#34d399" />
              <TechBadge label="React Context API" icon={<Share2 size={18} />} color="#61dafb" />
              <TechBadge label="WebSockets" icon={<Zap size={18} />} color="#8b5cf6" />
              <TechBadge label="JWTs" icon={<Key size={18} />} color="#f59e0b" />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="project-features-section">
          <div className="skills-header-container">
            <h1 className="section-header-bg">KEY FEATURES</h1>
            <h2 className="section-header">KEY FEATURES</h2>
          </div>
          <div className="project-features-grid">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="project-feature-card"
                style={{ borderColor: PROJECT_COLOR }}
              >
                <h3 className="project-feature-title">{f.title}</h3>
                <p className="project-feature-desc">{f.description}</p>
              </div>
            ))}
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
              <div className="footer-column">
                <h4 className="footer-column-title">Contacts</h4>
                <a className="footer-contact-link" href="tel:+17789280654">
                  <Phone size={16} />
                  <span>778-928-0654</span>
                </a>
                <a className="footer-contact-link" href="mailto:aka184@sfu.ca">
                  <Mail size={16} />
                  <span>aka184@sfu.ca</span>
                </a>
              </div>

              <div className="footer-column">
                <h4 className="footer-column-title">Pages</h4>
                <Link href="/" className="footer-page-link">Skills</Link>
                <Link href="/" className="footer-page-link">Experience</Link>
                <Link href="/" className="footer-page-link">Projects</Link>
                <Link href="/" className="footer-page-link">Education</Link>
              </div>

              <div className="footer-socials">
                <a href="https://github.com/antonkazachenko" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href="https://linkedin.com/in/antonkazachenko" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <RightsSection />
    </>
  );
}
