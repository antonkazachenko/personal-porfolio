import ProfilePicture from "@/app/components/ProfilePicture";

export default function Hero() {
  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">SWE&nbsp;I @&nbsp;Infoblox</p>
    </div>
  );
}
