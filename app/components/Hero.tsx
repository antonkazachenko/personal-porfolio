'use client';

import { Download, MapPin } from "lucide-react";
import ProfilePicture from "@/app/components/ProfilePicture";
import { useI18n } from "@/app/i18n/I18nProvider";

const RESUME_URL = "/Software_Developer_Resume_Anton_Kazachenko.pdf";

export default function Hero() {
  const { t } = useI18n();

  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
      <p className="hero-description">{t('hero.description')}</p>

      <div className="hero-actions">
        <div className="hero-badges">
          <span className="hero-badge">
            <MapPin className="hero-badge-icon" strokeWidth={2} aria-hidden="true" />
            {t('hero.location')}
          </span>
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {t('hero.relocation')}
          </span>
        </div>

        <a
          className="hero-resume"
          href={RESUME_URL}
          download
        >
          <Download className="hero-resume-icon" strokeWidth={2} aria-hidden="true" />
          {t('hero.downloadResume')}
        </a>
      </div>
    </div>
  );
}
