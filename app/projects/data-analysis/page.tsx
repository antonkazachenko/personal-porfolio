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
import LangDropdown from '@/app/components/LangDropdown';
import RightsSection from '@/app/components/RightsSection';
import '@/app/components/styles.css';

const NAV_ITEMS = ['Skills', 'Experience', 'Projects', 'Education', 'Contacts'];

const GITHUB_URL = 'https://github.com/antonkazachenko';
const LINKEDIN_URL = 'https://linkedin.com/in/antonkazachenko';

// Libraries & Databases — SVG brand logos
const LIBRARIES = [
  { name: 'NumPy', Icon: NumpyLogo },
  { name: 'pandas', Icon: PandasLogo },
  { name: 'PostgreSQL', Icon: PostgresLogo },
  { name: 'PyTorch', Icon: PyTorchLogo },
  { name: 'matplotlib', Icon: MatplotlibLogo },
  { name: 'MySQL', Icon: MySqlLogo },
  { name: 'Spark', Icon: SparkLogo },
];

// Infrastructure & Tooling — lucide line icons
const TOOLING = [
  { name: 'REST API', Icon: Braces },
  { name: 'Docker', Icon: Box },
  { name: 'AWS', Icon: Cloud },
  { name: 'CLI Tools', Icon: Terminal },
  { name: 'Webhooks', Icon: Webhook },
];

const FINDINGS = [
  {
    title: 'Children & Repayment',
    description:
      'Clients without children have a higher likelihood of repaying loans on time, while those with more than two children pose a noticeably greater risk of default.',
  },
  {
    title: 'Marital Status',
    description:
      'Married and widowed clients default less often than unmarried borrowers or those in a civil partnership, making family status a meaningful signal.',
  },
  {
    title: 'Income Level',
    description:
      'Mid-income clients show the highest default rate, whereas high-income borrowers are the most reliable, with low-income clients sitting in between.',
  },
  {
    title: 'Loan Purpose',
    description:
      'Loans taken for real estate and weddings are repaid more reliably than loans for cars or education, where late repayment is more common.',
  },
  {
    title: 'Data Cleaning',
    description:
      'Missing income values were restored using category medians and duplicate or anomalous records were removed, yielding a consistent dataset for analysis.',
  },
  {
    title: 'Categorization',
    description:
      'Free-text loan purposes were lemmatized and grouped into four clear categories, making it possible to compare repayment behaviour across goals.',
  },
  {
    title: 'Conclusion',
    description:
      'Family profile and loan purpose proved to be the strongest predictors of on-time repayment, providing actionable input for the credit scoring model.',
  },
];

export default function DataAnalysisPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="project-page dap container mx-auto">
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
        <section className="dap-hero">
          <span className="dap-eyebrow">
            <span className="dap-eyebrow-dot" />
            Data Analysis Project
          </span>
          <h1 className="dap-title">Borrowers&apos; Reliability</h1>
          <p className="dap-lead">
            An analysis of loan-repayment reliability completed using real data from a bank&apos;s
            credit department, identifying which client traits predict on-time repayment.
          </p>

          <div className="dap-ctas">
            <a
              href="https://nbviewer.org/github/antonkazachenko"
              target="_blank"
              rel="noopener noreferrer"
              className="dap-cta dap-cta--primary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="dap-cta">
              <Github size={14} />
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="dap-cta">
              <Linkedin size={14} />
              LinkedIn Post
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
            <h2 className="dap-section-title">Tools &amp; Technologies</h2>
            <span className="dap-section-index">02</span>
          </div>

          <div className="dap-group">
            <p className="dap-microlabel">Libraries &amp; Databases</p>
            <div className="dap-chips">
              {LIBRARIES.map(({ name, Icon }) => (
                <div key={name} className="dap-chip">
                  <span className="dap-chip-logo"><Icon /></span>
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
            <h2 className="dap-section-title">Key Findings</h2>
            <span className="dap-section-index">03</span>
          </div>

          <p className="dap-lead dap-lead--tight">
            Across the dataset, client family profile and loan purpose emerged as the clearest
            indicators of repayment reliability.
          </p>

          <div className="dap-findings">
            {FINDINGS.map((f, i) => (
              <article key={f.title} className="dap-finding">
                <div className="dap-finding-head">
                  <h3 className="dap-finding-title">{f.title}</h3>
                  <span className="dap-finding-index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="dap-finding-desc">{f.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section className="dap-contacts">
          <h3 className="dap-contacts-title">Have a project in mind?</h3>
          <p className="dap-contacts-subtitle">
            Feel free to contact me via the form below or directly.
          </p>

          <form className="dap-form" onSubmit={(e) => e.preventDefault()}>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-name">Full Name</label>
              <input id="dap-name" type="text" name="fullName" placeholder="John Doe" />
            </div>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-email">Email</label>
              <input id="dap-email" type="email" name="email" placeholder="john@example.com" />
            </div>
            <div className="dap-field">
              <label className="dap-field-label" htmlFor="dap-message">Message</label>
              <textarea id="dap-message" name="message" placeholder="Hello Anton..." rows={4} />
            </div>
            <button type="submit" className="dap-submit">Send Message</button>
          </form>

          <div className="dap-direct-card">
            <div className="dap-direct-group">
              <p className="dap-microlabel">Direct</p>
              <a className="dap-direct-link" href="tel:+17789280654">
                <span className="dap-direct-icon"><Phone size={14} /></span>
                +1 778-928-0654
              </a>
              <a className="dap-direct-link" href="mailto:aka184@sfu.ca">
                <span className="dap-direct-icon"><Mail size={14} /></span>
                aka184@sfu.ca
              </a>
            </div>

            <div className="dap-direct-group">
              <p className="dap-microlabel">Socials</p>
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
              <p className="dap-microlabel">Pages</p>
              <a href="#" className="dap-page-link">Overview</a>
              <a href="#" className="dap-page-link">Technologies</a>
              <a href="#" className="dap-page-link">Key Findings</a>
            </div>
          </div>
        </section>
      </div>

      <RightsSection />
    </>
  );
}
