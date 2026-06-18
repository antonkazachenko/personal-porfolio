import ProfilePicture from "@/app/components/ProfilePicture";

export default function Hero() {
  return (
    <div className="hero-content">
      <ProfilePicture/>
      <h1 className="hero-title">Anton Kazachenko</h1>
      <h2 className="hero-subtitle">Software Developer</h2>
      <p className="hero-description">
        Associate Software Engineer at&nbsp;Infoblox, building Go microservices and&nbsp;Angular microfrontends.
        Former Software Developer Intern at&nbsp;Copperleaf. Guest Mentor at&nbsp;SFU&nbsp;GDSC,
        helping students land their&nbsp;first&nbsp;internship.
      </p>
    </div>
  );
}
