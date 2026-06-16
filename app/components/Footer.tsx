"use client";

import React from "react";
import { User, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/public/icons";
import "./styles.css";

const Footer = () => {
  // TODO: wire up actual email sending. Stubbed for now.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No-op stub — form submission is not implemented yet.
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3 className="footer-heading">Have any project in mind?</h3>
          <p className="footer-subheading">I&apos;m available for freelancing</p>

          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-field">
              <User className="footer-field-icon" size={18} />
              <input type="text" name="fullName" placeholder="Full Name" />
            </div>

            <div className="footer-field">
              <Mail className="footer-field-icon" size={18} />
              <input type="email" name="email" placeholder="Email" />
            </div>

            <textarea
              className="footer-message"
              name="message"
              placeholder="Message"
              rows={4}
            />

            <button type="submit" className="footer-submit">
              Submit
            </button>
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
            <a className="footer-page-link" href="#skills">Skills</a>
            <a className="footer-page-link" href="#experience">Experience</a>
            <a className="footer-page-link" href="#projects">Projects</a>
            <a className="footer-page-link" href="#education">Education</a>
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
  );
};

export default Footer;
