"use client";

import React, { forwardRef, ForwardedRef } from 'react';
import LanguageList from "@/app/components/LanguageList";

const LanguageSection = forwardRef<HTMLDivElement, object>((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="skills-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">LANGUAGES</h1>
        <h2 className="section-header">LANGUAGES</h2>
      </div>
      <LanguageList/>
    </div>
  );
});

LanguageSection.displayName = "LanguageSection";

export default LanguageSection;
