"use client";

import React from "react";
import { User, Mail, Phone, Check, AlertCircle, Loader2 } from "lucide-react";
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

  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

  const CONTACT_EMAIL = "kazachenkowork@gmail.com";

  const handleReset = () => setStatus("idle");

  // Submissions are handled by Netlify Forms. Netlify detects the form from the
  // static public/__forms.html stand-in (the React form below isn't in any
  // static HTML), so we POST the url-encoded payload there with a matching
  // `form-name`. Keep field names in sync with public/__forms.html.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">{t('footer.heading')}</h3>
          <p className="footer-subheading">{t('footer.subheading')}</p>

          <div className="footer-form-wrap" data-status={status}>
            {status !== "success" && status !== "error" && (
              <form
                className={`footer-form${status === "sending" ? " footer-form--sending" : ""}`}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="footer-field-group">
                  <label className="footer-field-label">{t('footer.nameLabel')}</label>
                  <div className="footer-field">
                    <User className="footer-field-icon" size={18} />
                    <input type="text" name="fullName" placeholder={t('footer.namePlaceholder')} disabled={status === "sending"} />
                  </div>
                </div>

                <div className="footer-field-group">
                  <label className="footer-field-label">{t('footer.emailLabel')}</label>
                  <div className="footer-field">
                    <Mail className="footer-field-icon" size={18} />
                    <input type="email" name="email" placeholder={t('footer.emailPlaceholder')} disabled={status === "sending"} />
                  </div>
                </div>

                <div className="footer-field-group">
                  <label className="footer-field-label">{t('footer.messageLabel')}</label>
                  <textarea
                    className="footer-message"
                    name="message"
                    placeholder={t('footer.messagePlaceholder')}
                    rows={4}
                    disabled={status === "sending"}
                  />
                </div>

                <button type="submit" className="footer-submit" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <Loader2 className="footer-submit-spinner" size={16} aria-hidden="true" />
                      {t('footer.sending')}
                    </>
                  ) : (
                    t('footer.send')
                  )}
                </button>
              </form>
            )}

            {status === "success" && (
              <div className="footer-result footer-result--success" role="status">
                <span className="footer-result-icon">
                  <Check size={22} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div className="footer-result-text">
                  <h4 className="footer-result-title">{t('footer.successTitle')}</h4>
                  <p className="footer-result-body">{t('footer.successBody')}</p>
                </div>
                <button type="button" className="footer-result-link" onClick={handleReset}>
                  {t('footer.sendAnother')}
                </button>
              </div>
            )}

            {status === "error" && (
              <div className="footer-result footer-result--error" role="alert">
                <span className="footer-result-icon">
                  <AlertCircle size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <div className="footer-result-text">
                  <h4 className="footer-result-title">{t('footer.errorTitle')}</h4>
                  <p className="footer-result-body">
                    {t('footer.errorBody')}{' '}
                    <a className="footer-result-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                </div>
                <button type="button" className="footer-result-btn" onClick={handleReset}>
                  {t('footer.tryAgain')}
                </button>
              </div>
            )}
          </div>
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
