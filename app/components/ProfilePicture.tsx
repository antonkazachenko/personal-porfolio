import Image from 'next/image';
import profilePic from '@/public/images/linkedin_pfp.png';

export default function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      {/* This is the page's LCP element, so it must be preloaded rather than
          lazy-loaded (next/image defaults to lazy without `priority`). `sizes`
          matches the container: 186px on mobile (styles.css), 300px above it. */}
      <Image
        src={profilePic}
        alt="Profile Picture"
        className="profile-picture"
        width={240}
        height={240}
        sizes="(max-width: 768px) 186px, 300px"
        priority
      />
    </div>
  );
}
