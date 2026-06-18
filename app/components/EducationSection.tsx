'use client';

import React from 'react';
import { SFUIcon } from '@/public/icons';

export default function EducationSection() {
  return (
    <section className="education-section">
      <div className="skills-header-container">
        <h1 className="section-header-bg">EDUCATION</h1>
        <h2 className="section-header">EDUCATION</h2>
      </div>

      {/* SFU Card */}
      <div className="education-card">
        {/* Left: info */}
        <div className="education-card-body">
          <div className="education-card-header">
            <div className="education-logo">
              <SFUIcon />
            </div>
            <div>
              <p className="education-institution">Simon Fraser University</p>
              <h3 className="education-degree">Bachelor of Science · Computing Science</h3>
            </div>
          </div>

          <p className="education-description">
            Final-year Computing Science student at Simon Fraser University, specializing in algorithms, AI, and software development.
          </p>

          <ul className="education-list">
            <li>GPA 3.6+</li>
            <li>
              Awarded the President&apos;s Honour Roll for Fall 2023, a testament to my dedication to academic excellence with a 4.0+ GPA.
            </li>
          </ul>
        </div>

        {/* Right: campus image */}
        <div className="education-card-image">
          <img
            src="https://www.sfu.ca/content/sfu/about/campuses/burnaby/jcr:content/main_content/sfuimage_1042267041.img.640.high.jpg/1415748686000.jpg"
            alt="Simon Fraser University campus"
            className="education-campus-img"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Course Certificates — commented out for future use */}
      {/*
      <div className="education-certificates">
        <div className="education-cert-card">
          <div className="education-cert-image" />
          <div className="education-cert-footer">
            <div>
              <p className="education-cert-name">Learn Bootstrap Course</p>
              <p className="education-cert-source">Codecademy</p>
            </div>
            <div className="project-arrow-btn" style={{ backgroundColor: '#101630' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="education-cert-card">
          <div className="education-cert-image" />
          <div className="education-cert-footer">
            <div>
              <p className="education-cert-name">Intermediate TypeScript</p>
              <p className="education-cert-source">Codecademy</p>
            </div>
            <div className="project-arrow-btn" style={{ backgroundColor: '#101630' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="education-cert-card">
          <div className="education-cert-image" />
          <div className="education-cert-footer">
            <div>
              <p className="education-cert-name">TypeScript Course</p>
              <p className="education-cert-source">Codecademy</p>
            </div>
            <div className="project-arrow-btn" style={{ backgroundColor: '#101630' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      */}
    </section>
  );
}
