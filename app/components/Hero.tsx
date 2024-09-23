import ProfilePicture from "@/app/components/ProfilePicture";

export default function Hero() {
  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">
        Software Developer Intern at&nbsp;Copperleaf, enhancing&nbsp;UX with TypeScript and Angular. Microsoft TEALS&nbsp;TA,
        teaching Python to&nbsp;high school students. Former Community Advisor at&nbsp;SFU and Mobile Developer at&nbsp;CJSF 90.1&nbsp;FM.
        President&amp;apos;s Honour Roll recipient, committed to&nbsp;fostering inclusivity and innovation in&nbsp;tech.
      </p>
    </div>
  );
}
