"use client";

import React from "react";
import { User, Mail, Phone } from "lucide-react";
import { GithubIcon, GithubMobileIcon, LinkedinIcon, LinkedinMobileIcon } from "@/public/icons";
import { useI18n } from "@/app/i18n/I18nProvider";
import "./styles.css";

interface FooterProps {
  onScrollToSkills: () => void;
  onScrollToExperience: () => void;
  onScrollToProjects: () => void;
  onScrollToEducation: () => void;
}

const Footer = ({ onScrollToSkills, onScrollToExperience, onScrollToProjects, onScrollToEducation }: FooterProps) => {
  const { t } = useI18n();

  // TODO: wire up actual email sending. Stubbed for now.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No-op stub — form submission is not implemented yet.
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">{t('footer.heading')}</h3>
          <p className="footer-subheading">{t('footer.subheading')}</p>

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-field-group">
              <label className="footer-field-label">{t('footer.nameLabel')}</label>
              <div className="footer-field">
                <User className="footer-field-icon" size={18} />
                <input type="text" name="fullName" placeholder={t('footer.namePlaceholder')} />
              </div>
            </div>

            <div className="footer-field-group">
              <label className="footer-field-label">{t('footer.emailLabel')}</label>
              <div className="footer-field">
                <Mail className="footer-field-icon" size={18} />
                <input type="email" name="email" placeholder={t('footer.emailPlaceholder')} />
              </div>
            </div>

            <div className="footer-field-group">
              <label className="footer-field-label">{t('footer.messageLabel')}</label>
              <textarea
                className="footer-message"
                name="message"
                placeholder={t('footer.messagePlaceholder')}
                rows={4}
              />
            </div>

            <button type="submit" className="footer-submit">
              {t('footer.send')}
            </button>
          </form>
        </div>

        <div className="footer-info">
          <div className="footer-info-card">
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.direct')}</h4>
              <a className="footer-contact-link" href="tel:+17789280654">
                <span className="footer-icon-circle">
                  <Phone size={14} />
                </span>
                <span>+1 778-928-0654</span>
              </a>
              <a className="footer-contact-link" href="mailto:kazachenkowork@gmail.com">
                <span className="footer-icon-circle">
                  <Mail size={14} />
                </span>
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
          </div>

          <div className="footer-column footer-pages">
            <h4 className="footer-column-title">{t('footer.pages')}</h4>
            <button className="footer-page-link" onClick={onScrollToSkills}>{t('nav.skills')}</button>
            <button className="footer-page-link" onClick={onScrollToExperience}>{t('nav.experience')}</button>
            <button className="footer-page-link" onClick={onScrollToProjects}>{t('nav.projects')}</button>
            <button className="footer-page-link" onClick={onScrollToEducation}>{t('nav.education')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
