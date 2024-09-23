"use client";

import React, { forwardRef, ForwardedRef } from 'react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    company: "SFU",
    role: "Community Advisor",
    duration: "Dec 2023 - Present",
    description: [
      "Cultivated a positive, educational community experience for residents.",
      "Facilitated academic and social integration among residents.",
    ],
    logo: "/images/sfu_logo.png",
  },
  {
    company: "Copperleaf",
    role: "Software Developer",
    duration: "May 2024 - Present",
    description: [
      "Summer & Fall 2024.",
      "Frontend Developer.",
      "Design System Team.",
    ],
    logo: "/images/copperleaf_logo.png",
  },
  {
    company: "SFU",
    role: "Community Advisor",
    duration: "Dec 2023 - Present",
    description: [
      "Cultivated a positive, educational community experience for residents.",
      "Facilitated academic and social integration among residents.",
    ],
    logo: "/images/sfu_logo.png",
  },
  {
    company: "Copperleaf",
    role: "Software Developer",
    duration: "May 2024 - Present",
    description: [
      "Summer & Fall 2024.",
      "Frontend Developer.",
      "Design System Team.",
    ],
    logo: "/images/copperleaf_logo.png",
  },
];

const ExperienceSection = forwardRef<HTMLDivElement, object>((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="experience-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">EXPERIENCE</h1>
        <h2 className="section-header">EXPERIENCE</h2>
      </div>
      <div className="experience-timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="timeline-date">
              <span>{exp.duration}</span>
            </div>
            <div className={`experience-card ${index % 2 === 0 ? 'left-card' : 'right-card'}`}>
              <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
