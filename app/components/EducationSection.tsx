'use client';

import React from 'react';
import { SFUIcon } from '@/public/icons';
import { useI18n } from '@/app/i18n/I18nProvider';

export default function EducationSection() {
  const { t } = useI18n();

  return (
    <section className="education-section">
      <div className="skills-header-container">
        <h1 className="section-header-bg">{t('education.heading')}</h1>
        <h2 className="section-header">{t('education.heading')}</h2>
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
              <h3 className="education-degree">{t('education.degree')}</h3>
            </div>
          </div>

          <p className="education-description">
            {t('education.description')}
          </p>

          <ul className="education-list">
            <li>{t('education.gpa')}</li>
            <li>{t('education.presidents')}</li>
            <li>{t('education.deans')}</li>
          </ul>
        </div>

        {/* Right: campus image */}
        <div className="education-card-image">
          <img
            src="/images/sfu.jpg"
            alt={t('education.campusAlt')}
            className="education-campus-img"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>

    </section>
  );
}
