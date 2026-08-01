'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Construction } from 'lucide-react';
import { WebIcon, CloudIcon, AtomIcon } from '@/public/icons';
import { useI18n } from '@/app/i18n/I18nProvider';

type Category = 'Software Development' | 'Cloud & DevOps' | 'Data Science';

interface Project {
  name: string;
  subtitle: string;
  color: string;
  category: Category;
  href?: string;
  video?: string;
  poster?: string;
  wip?: boolean;
}

const projects: Project[] = [
  { name: 'React Burger', subtitle: 'React Application', color: '#9205af', category: 'Software Development', href: '/projects/react-burger', video: '/react-burger-demo.mp4', poster: '/react-burger-demo-poster.jpg' },
  { name: 'Go Todo List', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development', href: '/projects/go-todo-list', video: '/go-todo-list-demo.mp4', poster: '/go-todo-list-demo-poster.jpg' },
  { name: 'Go Metrics Collector', subtitle: 'Go Application', color: '#00b8be', category: 'Software Development', wip: true },
];

const filters: { label: Category; icon: React.ReactNode }[] = [
  { label: 'Software Development', icon: <WebIcon /> },
  { label: 'Cloud & DevOps', icon: <CloudIcon /> },
  { label: 'Data Science', icon: <AtomIcon /> },
];

// The Category string is the logical key (filtering/state); these map it to the
// translation key for display only. Subtitles map likewise.
const CATEGORY_LABEL_KEY: Record<Category, string> = {
  'Software Development': 'projects.catSoftware',
  'Cloud & DevOps': 'projects.catCloud',
  'Data Science': 'projects.catData',
};

const SUBTITLE_KEY: Record<string, string> = {
  'React Application': 'projects.subtitleReact',
  'Go Application': 'projects.subtitleGo',
};

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

const ProjectCard = ({ project, canHover }: { project: Project; canHover: boolean }) => {
  const { t } = useI18n();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const subtitle = SUBTITLE_KEY[project.subtitle] ? t(SUBTITLE_KEY[project.subtitle]) : project.subtitle;

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

  // Without hover there's nothing to trigger playback, and the video first frame
  // doesn't render reliably, so show a static poster image instead. This starts
  // out false on every device so the initial HTML never references the MP4s.
  const showVideo = project.video && canHover;

  const inner = (
    <div
      className="project-card"
      style={{ '--project-color': project.color } as React.CSSProperties}
      onMouseEnter={showVideo ? playVideo : undefined}
      onMouseLeave={showVideo ? pauseVideo : undefined}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          className="project-card-image project-card-video"
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : project.poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="project-card-image project-card-video"
          src={project.poster}
          alt={project.name}
          loading="lazy"
        />
      ) : project.wip ? (
        <div className="project-card-image project-card-image--wip">
          <span className="project-status-badge">
            <span className="project-status-dot" />
            {t('projects.inProgress')}
          </span>
          <Construction className="project-card-construction" aria-hidden="true" />
        </div>
      ) : (
        <div className="project-card-image" />
      )}
      <div className="project-card-footer">
        <div>
          <p className="project-card-name">{project.name}</p>
          <p className="project-card-subtitle">{subtitle}</p>
        </div>
        <ArrowButton color={project.color} />
      </div>
    </div>
  );
  return project.href ? <Link href={project.href}>{inner}</Link> : inner;
};

export default function ProjectsSection() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<Category>('Software Development');
  const [isMobile, setIsMobile] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // The demo videos only exist to play on hover, so hover capability — not
  // viewport width — is the real precondition. Starting at `false` also keeps the
  // multi-megabyte <video> elements out of the server-rendered HTML, so phones
  // never pay for metadata requests on files they can't use.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mq.matches);
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
        <h1 className="section-header-bg">{t('projects.heading')}</h1>
        <h2 className="section-header">{t('projects.heading')}</h2>
      </div>

      <div className="categories-container">
        {filters.map(f => (
          <div
            key={f.label}
            className={`category ${activeFilter === f.label ? 'active-category' : ''}`}
            onClick={() => selectFilter(f.label)}
          >
            {f.icon}
            <span>{t(CATEGORY_LABEL_KEY[f.label])}</span>
          </div>
        ))}
      </div>

      <div className="projects-carousel-wrapper">
        <div className={`projects-carousel ${shouldAnimate ? 'projects-carousel--animate' : 'projects-carousel--static'}`}>
          {carouselItems.map((project, i) => (
            <ProjectCard key={`${project.name}-${i}`} project={project} canHover={canHover} />
          ))}
          {(activeFilter === 'Data Science' || activeFilter === 'Cloud & DevOps') && (
            <div className="category-wip-indicator">
              <Construction size={40} className="category-wip-icon" aria-hidden="true" />
              <p>{t('projects.workInProgress')}</p>
            </div>
          )}
        </div>
      </div>

      {showMoreButton && (
        <button
          type="button"
          className="projects-show-more"
          onClick={() => setShowAll(v => !v)}
        >
          {showAll ? t('projects.showLess') : t('projects.showMore')}
        </button>
      )}
    </section>
  );
}
