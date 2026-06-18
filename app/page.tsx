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
import Footer from "@/app/components/Footer";

export default function Home() {
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);
  const experienceSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSkills = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    if (experienceSectionRef.current) {
      experienceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="main-page">
          <Header onScrollToSkills={scrollToSkills} onScrollToExperience={scrollToExperience} />
          <Hero />
        </div>
        <SkillsSection ref={skillsSectionRef} />
        <ExperienceSection ref={experienceSectionRef} />
        <ProjectsSection />
        <ReferencesCarousel />
        <LanguageSection />
        <Footer />
      </div>
      <RightsSection />
    </>
  );
}

