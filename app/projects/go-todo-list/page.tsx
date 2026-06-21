'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Phone, ExternalLink, Share2, Zap, Key, Route, Move, ArrowLeft, Database, Server, Lock, Globe, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GithubMobileIcon, LinkedinMobileIcon, TabIcon, GoIcon, SQLiteIcon, JSIcon, HTML5Icon, CSS3Icon, DockerIcon } from '@/public/icons';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import TechBadge from '@/app/components/TechBadge';
import DemoCredentials from '@/app/components/DemoCredentials';
import '@/app/components/styles.css';

const PROJECT_COLOR = '#00b8be';

const NAV_ITEMS = ['Skills', 'Experience', 'Projects', 'Education', 'Contacts'];

const TECH_STACK = [
  { name: 'Go', description: 'Backend Language', Icon: GoIcon },
  { name: 'SQLite', description: 'Persistent Data Storage', Icon: SQLiteIcon },
  { name: 'JavaScript', description: 'Frontend Logic', Icon: JSIcon },
  { name: 'Docker', description: 'Containerization', Icon: DockerIcon },
  { name: 'HTML5', description: 'Markup', Icon: HTML5Icon },
  { name: 'CSS3', description: 'Styling', Icon: CSS3Icon },
];

const BADGES = [
  { label: 'Chi Router', Icon: Route, color: '#00b8be', description: 'Lightweight idiomatic routing' },
  { label: 'SQLx', Icon: Database, color: '#336791', description: 'SQL toolkit for Go' },
  { label: 'JWT Auth', Icon: Key, color: '#f59e0b', description: 'Secure token authentication' },
  { label: 'Testify', Icon: CheckCircle, color: '#00e676', description: 'Unit testing utilities' },
];

const FEATURES = [
  {
    title: 'Layered Architecture',
    description:
      'The API is built using a clean layered architecture, with separate Controller, Service, Repository, and Entity layers for improved maintainability and separation of concerns.',
  },
  {
    title: 'Task Scheduling',
    description:
      'Users can schedule tasks for future dates with the ability to set up custom repeat intervals, managed completely in the Go backend.',
  },
  {
    title: 'JWT Authentication',
    description:
      'Secure login and endpoint protection handled using JSON Web Tokens (JWT), ensuring that tasks are safely associated with specific user sessions.',
  },
  {
    title: 'Multi-stage Docker Build',
    description:
      'The application features a multi-stage Dockerfile that creates a lightweight, production-ready image containing only the compiled Go binary and essential static files.',
  },
];

export default function GoTodoListPage() {
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
            <h1 className="project-page-title">Go Todo List</h1>
            <p className="project-page-subtitle">
              A high-performance Todo List API built with Go and PostgreSQL, featuring secure authentication and robust data management.
            </p>
          </div>

          <div className="project-ctas">
            <a
              href="https://go-todo-list-api.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn project-cta-btn--primary"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/antonkazachenko/go-todo-list-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              GitHub
              <GithubMobileIcon />
            </a>
            <a
              href="https://www.linkedin.com/posts/antonkazachenko_go-golang-api-activity-7233984088502628354-noTZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJ2Do4B9tI2b3krKnfVsIC4Lwji0Sz3of0"
              target="_blank"
              rel="noopener noreferrer"
              className="project-cta-btn"
            >
              LinkedIn Post
              <LinkedinMobileIcon />
            </a>
          </div>

          <DemoCredentials credentials={[{ key: 'Password:', value: 'test12345' }]} />

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
