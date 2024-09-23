"use client";

import React, { useState, forwardRef, ForwardedRef } from 'react';
import skillsData from "@/app/data/skillsData";

const SkillsSection = forwardRef<HTMLDivElement, Record<string, never>>((_, ref: ForwardedRef<HTMLDivElement>) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <div className="skills-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">MY SKILLS</h1>
        <h2 className="section-header">MY SKILLS</h2>
      </div>

      {/* Category Tabs */}
      <div className="categories-container">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`category ${index === activeCategoryIndex ? "active-category" : ""}`}
            onClick={() => setActiveCategoryIndex(index)}
          >
            <category.tabIcon />
            <span>{category.category}</span>
          </div>
        ))}
      </div>

      {/* Display Skills of the Active Category */}
      <div className="skills-icons">
        {skillsData[activeCategoryIndex].skills.map((SkillComponent, index) => (
          <div key={index} className="skill-icon">
            <SkillComponent />
          </div>
        ))}
      </div>
    </div>
  );
});

// Set the display name for the forwardRef component
SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
