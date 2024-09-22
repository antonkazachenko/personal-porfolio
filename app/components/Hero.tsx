import ProfilePicture from "@/app/components/ProfilePicture";

export default function Hero() {
  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">
        Software Developer Intern at Copperleaf, enhancing UX with TypeScript and Angular. Microsoft TEALS TA,
        teaching Python to high school students. Former Community Advisor at SFU and Mobile Developer at CJSF 90.1 FM.
        President&apos;s Honour Roll recipient, committed to fostering inclusivity and innovation in tech.
      </p>
    </div>
  );
}
