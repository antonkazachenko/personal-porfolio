'use client';

import React from 'react';
import { SFUIcon } from '@/public/icons';

const certificates: { name: string; source: string }[] = [
  { name: 'Full-Stack React Course', source: 'Coursera' },
  { name: 'Front-End Web Application', source: 'Coursera' },
  { name: 'Database Course', source: 'Coursera' },
];

const CertArrow = () => (
  <div className="project-arrow-btn" style={{ backgroundColor: '#0eab00' }}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25" stroke="#F5F5F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

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
              <h3 className="education-degree">BSc with Distinction · Computing Science</h3>
            </div>
          </div>

          <p className="education-description">
            Computing Science graduate from Simon Fraser University, specializing in algorithms, AI, and software development.
          </p>

          <ul className="education-list">
            <li>GPA 3.57</li>
            <li>President&apos;s Honour Roll (4.0+ GPA): Fall 2023</li>
            <li>Dean&apos;s Honour Roll (3.5+ GPA): Spring 2025, Summer 2025, Fall 2025</li>
          </ul>
        </div>

        {/* Right: campus image */}
        <div className="education-card-image">
          <img
            src="/images/sfu.jpg"
            alt="Simon Fraser University campus"
            className="education-campus-img"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Course Certificates */}
      <div className="education-certificates">
        {certificates.map((cert) => (
          <div className="education-cert-card" key={cert.name}>
            <div className="education-cert-image" />
            <div className="education-cert-footer">
              <div>
                <p className="education-cert-name">{cert.name}</p>
                <p className="education-cert-source">{cert.source}</p>
              </div>
              <CertArrow />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
