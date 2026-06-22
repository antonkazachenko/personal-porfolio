"use client";

import React, { forwardRef, ForwardedRef } from 'react';
import LanguageList from "@/app/components/LanguageList";
import { useI18n } from "@/app/i18n/I18nProvider";

const LanguageSection = forwardRef<HTMLDivElement, object>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { t } = useI18n();

  return (
    <div className="skills-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">{t('languages.heading')}</h1>
        <h2 className="section-header">{t('languages.heading')}</h2>
      </div>
      <LanguageList/>
    </div>
  );
});

LanguageSection.displayName = "LanguageSection";

export default LanguageSection;
