"use client";

import React, {forwardRef, ForwardedRef, ReactElement, useState, useEffect, useRef, CSSProperties} from 'react';
import Image from "next/image";
import {ChevronUp} from "lucide-react";
import {CJSFIcon, CopperleafIcon, GDSCIcon, MicrosoftIcon, SFUIcon} from "@/public/icons";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: ReactElement<any, any>;
  theme: "white" | "red" | "yellow" | "green" | "blue" | "purple";
}

const themeColors: Record<Experience["theme"], string> = {
  white: "#F5F5F5",
  red: "#DB0632",
  yellow: "#FFB909",
  green: "#0EAB00",
  blue: "#4285F4",
  purple: "#9205af",
};

const experiences: Experience[] = [
  {
    company: "Infoblox · Permanent Full-time",
    role: "Associate Software Engineer",
    duration: "Mar 2026 - Present",
    description: [
      "Built and maintained backend microservices in Go (Golang), deployed to Kubernetes via Helm charts and monitored with Grafana dashboards and alerting.",
      "Designed event-driven data pipelines using Kafka for asynchronous message processing across distributed services.",
      "Owned frontend feature development in Angular, architecting microfrontends for independent deployment and consistent UI across teams.",
      "Integrated with Databricks to query and ingest large-scale datasets for downstream analytics.",
    ],
    logo: <Image src="/infoblox_logo.png" alt="Infoblox" width={45} height={45} />,
    theme: "green",
  },
  {
    company: "SFU Google Developer Student Club (GDSC)",
    role: "Guest Mentor",
    duration: "Mar 2026",
    description: [
      "Helped students navigate through getting their first internship.",
    ],
    logo: <GDSCIcon />,
    theme: "blue",
  },
  {
    company: "IFS Copperleaf · Internship",
    role: "Software Developer Intern",
    duration: "May 2024 - Dec 2024",
    description: [
      "Contributed to the development of a scalable design system using Angular and TypeScript, building reusable components to improve UI consistency across the company's applications.",
      "Assisted in implementing state management solutions using NgRx and integrated RxJS for reactive programming to handle asynchronous operations and streamline data-fetching workflows.",
      "Supported fullstack development for a mission-critical visual regression testing platform using Prisma with NestJS and PostgreSQL in a Docker environment, refining SQL migration scripts and leveraging pgAdmin for effective database management."
    ],
    logo: <CopperleafIcon />,
    theme: "purple",
  },
  {
    company: "SFU · Permanent Part-time",
    role: "Research Assistant",
    duration: "Sep 2024 - Dec 2025",
    description: [
      "Collaborated with a PhD student to implement and experiment with advanced data structures.",
      "Presented findings and results to academic peers for feedback and further refinement.",
      "Contributed to research projects closely aligned with course topics, ensuring practical integration with theoretical knowledge.",
      "Assisted in developing algorithms and optimizing code for enhanced efficiency.",
      "Conducted in-depth analysis and performance testing of various data structures for practical applications.",
    ],
    logo: <SFUIcon />,
    theme: "red",
  },
  {
    company: "Microsoft Teals Program · Volunteering",
    role: "Teaching Assistant",
    duration: "May 2024 - Aug 2024",
    description: [
      "Led interactive Python programming sessions for 9th-grade students, encouraging enthusiasm for coding and problem-solving.",
      "Established and upheld a learning environment that celebrates diversity and inclusion, ensuring all students feel valued and supported.",
      "Evaluated student progress through regular assessments and feedback, adapting teaching methods to meet diverse learning needs.",
      "Assisted students with individual challenges in understanding course material, providing targeted support to enhance learning outcomes.",
    ],
    logo: <MicrosoftIcon />,
    theme: "yellow",
  },
  {
    company: "CJSF 90.1 · Permanent Part-time",
    role: "Mobile Application Developer",
    duration: "Sep 2023 - May 2024",
    description: [
      "Enhanced the responsiveness and user-friendliness of the user interface, achieving a 30% improvement in overall user engagement.",
      "Improved the efficiency of state management with the React Context API, resulting in a 40% increase in application performance.",
      "Successfully resolved adaptivity-related bugs, enhancing app performance and user experience by 50%.",
      "Increased user engagement by 25% through the implementation of a robust 'favorites' feature, enhancing the overall usability of the app.",
    ],
    logo: <CJSFIcon />,
    theme: "white",
  },
];

const ExperienceSection = forwardRef<HTMLDivElement, object>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const [expanded, setExpanded] = useState<boolean[]>(() => experiences.map((_, i) => i === 0));

  const toggle = (index: number) => {
    setExpanded((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  // The vertical line should run from the first date badge to just past the last
  // one (a small stub below it) — no line above the first badge. Card heights are
  // dynamic (collapsing/images), so measure the badge centres rather than guess.
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstDateRef = useRef<HTMLDivElement>(null);
  const lastDateRef = useRef<HTMLDivElement>(null);
  const [lineMetrics, setLineMetrics] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const STUB = 70; // length of the line that hangs below the last badge
    const compute = () => {
      const t = timelineRef.current;
      const first = firstDateRef.current;
      const last = lastDateRef.current;
      if (!t || !first || !last) return;
      const tRect = t.getBoundingClientRect();
      const fRect = first.getBoundingClientRect();
      const lRect = last.getBoundingClientRect();
      const top = fRect.top + fRect.height / 2 - tRect.top;
      const lastCenter = lRect.top + lRect.height / 2 - tRect.top;
      setLineMetrics({ top, height: lastCenter - top + STUB });
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(timeline);
    window.addEventListener("resize", compute);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Build the timeline gradient from each card's theme colour, top to bottom,
  // so it always stays in sync with the experiences list.
  const lineGradient = `linear-gradient(180deg, ${experiences
    .map((exp, i) => {
      const stop = experiences.length > 1 ? (i / (experiences.length - 1)) * 100 : 0;
      return `${themeColors[exp.theme]} ${Math.round(stop)}%`;
    })
    .join(", ")})`;

  return (
    <div className="experience-section" ref={ref}>
      <div className="skills-header-container">
        <h1 className="section-header-bg">EXPERIENCE</h1>
        <h2 className="section-header">EXPERIENCE</h2>
      </div>
      <div className="experience-timeline" ref={timelineRef}>
        <div
          className="timeline-line"
          style={
            lineMetrics
              ? { background: lineGradient, top: `${lineMetrics.top}px`, height: `${lineMetrics.height}px` }
              : { background: lineGradient, opacity: 0 }
          }
        ></div>
        {experiences.map((exp, index) => {
          const isExpanded = expanded[index];
          const hasDetails = exp.description.length > 0;
          const dateRef =
            index === 0 ? firstDateRef : index === experiences.length - 1 ? lastDateRef : undefined;
          return (
            <div
              className="experience-item"
              key={index}
              style={{ "--exp-color": themeColors[exp.theme] } as CSSProperties}
            >
              <div className="timeline-date" ref={dateRef}>
                <span>{exp.duration}</span>
              </div>
              <div
                className={`experience-card ${index % 2 === 0 ? 'right-card' : 'left-card'} ${hasDetails ? 'experience-card--clickable' : ''}`}
                onClick={() => hasDetails && toggle(index)}
                role={hasDetails ? 'button' : undefined}
                aria-expanded={hasDetails ? isExpanded : undefined}
              >
                <div className="experience-card-header">
                  <div className="experience-logo">
                    {exp.logo}
                  </div>
                  <div className="experience-heading">
                    <p className="experience-company">{exp.company}</p>
                    <h3 className="experience-role">{exp.role}</h3>
                  </div>
                  {hasDetails && (
                    <span className="experience-toggle" aria-hidden="true">
                      <ChevronUp
                        size={18}
                        style={{
                          transform: isExpanded ? "rotate(0deg)" : "rotate(180deg)",
                          transition: "transform 0.25s ease",
                        }}
                      />
                    </span>
                  )}
                </div>
                {hasDetails && (
                  <div className={`experience-collapsible ${isExpanded ? 'expanded' : ''}`}>
                    <div className="experience-collapsible-inner">
                      <ul className="experience-description">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
