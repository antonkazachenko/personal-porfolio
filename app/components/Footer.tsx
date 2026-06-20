"use client";

import React from "react";
import { User, Mail, Phone } from "lucide-react";
import { GithubIcon, GithubMobileIcon, LinkedinIcon, LinkedinMobileIcon } from "@/public/icons";
import "./styles.css";

interface FooterProps {
  onScrollToSkills: () => void;
  onScrollToExperience: () => void;
  onScrollToProjects: () => void;
  onScrollToEducation: () => void;
}

const Footer = ({ onScrollToSkills, onScrollToExperience, onScrollToProjects, onScrollToEducation }: FooterProps) => {
  // TODO: wire up actual email sending. Stubbed for now.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No-op stub — form submission is not implemented yet.
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">Have a project in mind?</h3>
          <p className="footer-subheading">Feel free to contact me via the form below or directly.</p>

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-field-group">
              <label className="footer-field-label">Full Name</label>
              <div className="footer-field">
                <User className="footer-field-icon" size={18} />
                <input type="text" name="fullName" placeholder="John Doe" />
              </div>
            </div>

            <div className="footer-field-group">
              <label className="footer-field-label">Email</label>
              <div className="footer-field">
                <Mail className="footer-field-icon" size={18} />
                <input type="email" name="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="footer-field-group">
              <label className="footer-field-label">Message</label>
              <textarea
                className="footer-message"
                name="message"
                placeholder="Hello Anton..."
                rows={4}
              />
            </div>

            <button type="submit" className="footer-submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="footer-info">
          <div className="footer-info-card">
            <div className="footer-column">
              <h4 className="footer-column-title">Direct</h4>
              <a className="footer-contact-link" href="tel:+17789280654">
                <span className="footer-icon-circle">
                  <Phone size={14} />
                </span>
                <span>+1 778-928-0654</span>
              </a>
              <a className="footer-contact-link" href="mailto:aka184@sfu.ca">
                <span className="footer-icon-circle">
                  <Mail size={14} />
                </span>
                <span>aka184@sfu.ca</span>
              </a>
            </div>

            <div className="footer-column">
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
          </div>

          <div className="footer-column footer-pages">
            <h4 className="footer-column-title">Pages</h4>
            <button className="footer-page-link" onClick={onScrollToSkills}>Skills</button>
            <button className="footer-page-link" onClick={onScrollToExperience}>Experience</button>
            <button className="footer-page-link" onClick={onScrollToProjects}>Projects</button>
            <button className="footer-page-link" onClick={onScrollToEducation}>Education</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
