import React from 'react';
import skillsData from "@/app/data/skillsData";



const   SkillsSection = () => {
  return (
    <div className="skills-section">
      <div class="skills-header-container">
        <h1 class="section-header-bg">MY SKILLS</h1>
        <h2 class="section-header">MY SKILLS</h2>
      </div>

      <div className="categories-container">
        {skillsData.map((category, index) => (
          <div key={index} className={`category ${index === 0 ? "active-category" : ""}`}>
            <category.tabIcon/>
            <span>{category.category}</span>
          </div>
        ))}
      </div>

      <div className="skills-icons">
        {skillsData[0].skills.map((SkillComponent, index) => (
          <div key={index} className="skill-icon">
            <div key={index} className="skill-icon">
              <SkillComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
