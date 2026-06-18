'use client';

import React, { useState } from 'react';
import { WebIcon, CloudIcon, AtomIcon } from '@/public/icons';

type Category = 'Software Development' | 'Cloud & DevOps' | 'Data Science';

interface Project {
  name: string;
  subtitle: string;
  color: string;
  category: Category;
}

const projects: Project[] = [
  { name: 'React Burger', subtitle: 'React Application', color: '#9205af', category: 'Software Development' },
  { name: 'Go Todo List', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
  { name: 'Go #3', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
  { name: 'Go4', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
  { name: 'Go5', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
  { name: 'Go6', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
];

const filters: { label: Category; icon: React.ReactNode }[] = [
  { label: 'Software Development', icon: <WebIcon /> },
  { label: 'Cloud & DevOps', icon: <CloudIcon /> },
  { label: 'Data Science', icon: <AtomIcon /> },
];

const ArrowButton = ({ color }: { color: string }) => (
  <div className="project-arrow-btn" style={{ backgroundColor: color }}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 10.5L10.5 1.5M10.5 1.5H3.75M10.5 1.5V8.25"
        stroke="#F5F5F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card" style={{ '--project-color': project.color } as React.CSSProperties}>
    <div className="project-card-image" />
    <div className="project-card-footer">
      <div>
        <p className="project-card-name">{project.name}</p>
        <p className="project-card-subtitle">{project.subtitle}</p>
      </div>
      <ArrowButton color={project.color} />
    </div>
  </div>
);

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('Software Development');
  const filtered = projects.filter(p => p.category === activeFilter);
  const shouldAnimate = filtered.length > 3;
  const carouselItems = shouldAnimate ? [...filtered, ...filtered] : filtered;

  return (
    <section className="projects-section">
      <div className="skills-header-container">
        <h1 className="section-header-bg">PROJECTS</h1>
        <h2 className="section-header">PROJECTS</h2>
      </div>

      <div className="categories-container">
        {filters.map(f => (
          <div
            key={f.label}
            className={`category ${activeFilter === f.label ? 'active-category' : ''}`}
            onClick={() => setActiveFilter(f.label)}
          >
            {f.icon}
            <span>{f.label}</span>
          </div>
        ))}
      </div>

      <div className="projects-carousel-wrapper">
        <div className={`projects-carousel ${shouldAnimate ? 'projects-carousel--animate' : 'projects-carousel--static'}`}>
          {carouselItems.map((project, i) => (
            <ProjectCard key={`${project.name}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
