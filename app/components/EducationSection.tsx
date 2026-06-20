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

    </section>
  );
}
