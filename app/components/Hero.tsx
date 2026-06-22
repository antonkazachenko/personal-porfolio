'use client';

import ProfilePicture from "@/app/components/ProfilePicture";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
      <p className="hero-description">{t('hero.description')}</p>
    </div>
  );
}
