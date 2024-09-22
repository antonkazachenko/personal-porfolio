import React from 'react';
import {AtomIcon, CloudIcon, WebIcon} from "@/app/public/icons";

const skillsData = [
  {
    category: "Software Dev",
    tabIcon: WebIcon,
    skills: [
      { name: "Next.js", icon: "nextjs-icon.png" },
      { name: "HTML5", icon: "html5-icon.png" },
      { name: "SQL", icon: "sql-icon.png" },
      { name: "Rust", icon: "rust-icon.png" },
      { name: "React Native", icon: "react-native-icon.png" },
    ],
  },
  {
    category: "Cloud & DevOps",
    tabIcon: CloudIcon,
    skills: [],
  },
  {
    category: "Data Science",
    tabIcon: AtomIcon,
    skills: [],
  },
];

const SkillsSection = () => {
  return (
    <div className="skills-section">
      {/* Background text */}
      <h1 className="section-header-bg">MY SKILLS</h1>

      {/* Foreground text */}
      <h2 className="section-header">MY SKILLS</h2>

      <div className="categories-container">
        {skillsData.map((category, index) => (
          <div key={index} className={`category ${index === 0 ? "active-category" : ""}`}>
            <category.tabIcon/>
            <span>{category.category}</span>
          </div>
        ))}
      </div>

      <div className="skills-icons">
        {skillsData[0].skills.map((skill, index) => (
          <div key={index} className="skill-icon">
            <img src={`/icons/${skill.icon}`} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
