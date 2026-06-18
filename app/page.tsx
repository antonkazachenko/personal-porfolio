'use client';

import React, { useRef } from 'react';
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SkillsSection from "@/app/components/SkillsSection";
import LanguageSection from "@/app/components/LanguageSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import RightsSection from '@/app/components/RightsSection';
import ReferencesCarousel from "@/app/components/ReferencesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EducationSection from "@/app/components/EducationSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const educationSectionRef = useRef<HTMLDivElement | null>(null);
  const contactsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="main-page">
          <Header
            onScrollToSkills={scrollTo(skillsSectionRef)}
            onScrollToExperience={scrollTo(experienceSectionRef)}
            onScrollToProjects={scrollTo(projectsSectionRef)}
            onScrollToEducation={scrollTo(educationSectionRef)}
            onScrollToContacts={scrollTo(contactsSectionRef)}
          />
          <Hero />
        </div>
        <SkillsSection ref={skillsSectionRef} />
        <ExperienceSection ref={experienceSectionRef} />
        <div ref={projectsSectionRef}><ProjectsSection /></div>
        <div ref={educationSectionRef}><EducationSection /></div>
        <ReferencesCarousel />
        <LanguageSection />
        <div ref={contactsSectionRef}><Footer /></div>
      </div>
      <RightsSection />
    </>
  );
}

