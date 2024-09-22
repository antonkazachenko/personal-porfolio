import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SkillsSection from "@/app/components/SkillsSection";

export default function Home() {
  return (
    <>
      <div className="main-page">
        <Header/>
        <Hero/>
      </div>
      <SkillsSection/>
    </>
  );
}
