'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { WebIcon, CloudIcon, AtomIcon } from '@/public/icons';

type Category = 'Software Development' | 'Cloud & DevOps' | 'Data Science';

interface Project {
  name: string;
  subtitle: string;
  color: string;
  category: Category;
  href?: string;
  video?: string;
}

const projects: Project[] = [
  { name: 'React Burger', subtitle: 'React Application', color: '#9205af', category: 'Software Development', href: '/projects/react-burger', video: '/react-burger-demo.mp4' },
  { name: 'Go Todo List', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development' },
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

const ProjectCard = ({ project }: { project: Project }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  };

  const pauseVideo = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const inner = (
    <div
      className="project-card"
      style={{ '--project-color': project.color } as React.CSSProperties}
      onMouseEnter={project.video ? playVideo : undefined}
      onMouseLeave={project.video ? pauseVideo : undefined}
    >
      {project.video ? (
        <video
          ref={videoRef}
          className="project-card-image project-card-video"
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="project-card-image" />
      )}
      <div className="project-card-footer">
        <div>
          <p className="project-card-name">{project.name}</p>
          <p className="project-card-subtitle">{project.subtitle}</p>
        </div>
        <ArrowButton color={project.color} />
      </div>
    </div>
  );
  return project.href ? <Link href={project.href}>{inner}</Link> : inner;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('Software Development');
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const selectFilter = (label: Category) => {
    setActiveFilter(label);
    setShowAll(false);
  };

  const filtered = projects.filter(p => p.category === activeFilter);
  // On mobile the carousel becomes a vertical stack, so skip the duplicate-and-scroll animation.
  const shouldAnimate = filtered.length > 3 && !isMobile;
  // On mobile, show only the first 3 until "Show more" is clicked.
  const collapsedOnMobile = isMobile && !showAll;
  const baseItems = collapsedOnMobile ? filtered.slice(0, 3) : filtered;
  const carouselItems = shouldAnimate ? [...filtered, ...filtered] : baseItems;
  const showMoreButton = isMobile && filtered.length > 3;

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
            onClick={() => selectFilter(f.label)}
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

      {showMoreButton && (
        <button
          type="button"
          className="projects-show-more"
          onClick={() => setShowAll(v => !v)}
        >
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )}
    </section>
  );
}
