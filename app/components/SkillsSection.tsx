"use client";

import React, { useState, forwardRef, ForwardedRef } from 'react';
import skillsData from "@/app/data/skillsData";
import { useI18n } from '@/app/i18n/I18nProvider';

const SkillsSection = forwardRef<HTMLDivElement, object>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const { t } = useI18n();

  return (
    <div className="skills-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">{t('skills.heading')}</h1>
        <h2 className="section-header">{t('skills.heading')}</h2>
      </div>

      {/* Category Tabs */}
      <div className="categories-container">
        {skillsData.map((category, index) => {
          let catKey = 'softwareDev';
          if (category.category === "Cloud & DevOps") catKey = 'cloudDevops';
          if (category.category === "Data Science") catKey = 'dataScience';

          return (
            <div
              key={index}
              className={`category ${index === activeCategoryIndex ? "active-category" : ""}`}
              onClick={() => setActiveCategoryIndex(index)}
            >
              <category.tabIcon />
              <span>{t(`skills.categories.${catKey}`)}</span>
            </div>
          );
        })}
      </div>

      {/* Display Skills of the Active Category */}
      <div className="skills-icons">
        {skillsData[activeCategoryIndex].skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-icon-wrapper${skill.hideInLight ? " skill-hide-light" : ""}`}
          >
            <div className="skill-icon">
              {/* Default logo. A plain <img> rather than an inlined SVG component, so
                  the markup stays out of the JS bundle and loads lazily. `skill-icon-dark`
                  is only applied when a light variant exists to replace it — it carries
                  `display: none` in the light theme (see styles.css). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={`skill-icon-img${skill.lightIcon ? " skill-icon-dark" : ""}`}
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
              />
              {/* Dark-colored variant shown only in light theme. */}
              {skill.lightIcon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="skill-icon-light" src={skill.lightIcon} alt={skill.name} loading="lazy" />
              )}
            </div>
            <div className="skill-tooltip">
              <span className="skill-tooltip-name">{skill.name}</span>
              <span className="skill-tooltip-desc">{t(`skills.tooltips.${skill.description}`)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
