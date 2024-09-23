'use client';

import React, { useRef } from 'react';
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SkillsSection from "@/app/components/SkillsSection";

export default function Home() {
  const skillsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSkills = () => {
    if (skillsSectionRef.current) {
      skillsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="main-page">
        {/* Pass the scrollToSkills function as a prop to the Header */}
        <Header onScrollToSkills={scrollToSkills} />
        <Hero />
      </div>
      {/* Attach the ref to the SkillsSection component */}
      <SkillsSection ref={skillsSectionRef} />
    </>
  );
}
