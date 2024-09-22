import Image from 'next/image';
import profilePic from '@/app/public/images/linkedin_pfp.png';

export default function ProfilePicture() {
  return (
    <div className="profile-picture-container">
      <Image
        src={profilePic}
        alt="Profile Picture"
        className="profile-picture"
        width={240}
        height={240}
        quality={100}
      />
    </div>
  );
}
