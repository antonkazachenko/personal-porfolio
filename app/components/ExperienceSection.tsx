"use client";

import React, {forwardRef, ForwardedRef, ReactElement} from 'react';
import {CJSFIcon, CopperleafIcon, SFUIcon} from "@/app/public/icons";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: ReactElement<any, any>;
  theme: string;
}

const experiences: Experience[] = [
  {
    company: "Copperleaf",
    role: "Software Developer",
    duration: "May 2024 - Present",
    description: [
      "Summer & Fall 2024.",
      "Frontend Developer.",
      "Design System Team.",
    ],
    logo: <CopperleafIcon />,
    theme: "white",
  },
  {
    company: "SFU",
    role: "Research Assistant",
    duration: "Dec 2023 - Present",
    description: [
      "• Collaborated with a PhD student to implement and experiment with advanced data structures.",
      "• Presented findings and results to academic peers for feedback and further refinement.",
      "• Contributed to research projects closely aligned with course topics, ensuring practical integration with theoretical knowledge.",
      "• Assisted in developing algorithms and optimizing code for enhanced efficiency.",
      "• Conducted in-depth analysis and performance testing of various data structures for practical applications.",
    ],
    logo: <SFUIcon />,
    theme: "red",
  },
  {
    company: "Microsoft Teals Program",
    role: "Teaching Assistant",
    duration: "May 2024 - Present",
    description: [
      "• Led interactive Python programming sessions for 9th-grade students, encouraging enthusiasm for coding and problem-solving.",
      "• Established and upheld a learning environment that celebrates diversity and inclusion, ensuring all students feel valued and supported.",
      "• Evaluated student progress through regular assessments and feedback, adapting teaching methods to meet diverse learning needs.",
      "• Assisted students with individual challenges in understanding course material, providing targeted support to enhance learning outcomes.",
    ],
    logo: <SFUIcon />,
    theme: "yellow",
  },
  {
    company: "CJSF 90.1",
    role: "Mobile Application Developer",
    duration: "Sep 2023 - May 2024",
    description: [
      "• Enhanced the responsiveness and user-friendliness of the user interface, achieving a 30% improvement in overall user engagement.",
      "• Improved the efficiency of state management with the React Context API, resulting in a 40% increase in application performance.",
      "• Successfully resolved adaptivity-related bugs, enhancing app performance and user experience by 50%.",
      "• Increased user engagement by 25% through the implementation of a robust 'favorites' feature, enhancing the overall usability of the app.",
    ],
    logo: <CJSFIcon />,
    theme: "white",
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
            <div className={`experience-card ${index % 2 === 0 ? 'right-card' : 'left-card'} border-${exp.theme}`}>
              <div className={`experience-logo ${exp.theme}`}>
                {exp.logo}
              </div>
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
