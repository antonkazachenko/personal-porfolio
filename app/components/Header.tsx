import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, LinkedinIcon } from "@/public/icons";
import LangDropdown from "@/app/components/LangDropdown";

interface HeaderProps {
  onScrollToSkills: () => void;
  onScrollToExperience: () => void;
  onScrollToProjects: () => void;
  onScrollToEducation: () => void;
  onScrollToContacts: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollToSkills,
  onScrollToExperience,
  onScrollToProjects,
  onScrollToEducation,
  onScrollToContacts,
}) => {
  return (
    <header className="header">
      <div className="left-menu">
        <ThemeSwitcher />
        <LangDropdown />
      </div>
      <ul className="menu-list">
        <li onClick={onScrollToSkills}>Skills</li>
        <li onClick={onScrollToExperience}>Experience</li>
        <li onClick={onScrollToProjects}>Projects</li>
        <li onClick={onScrollToEducation}>Education</li>
        <li onClick={onScrollToContacts}>Contacts</li>
      </ul>
      <div className="right-menu">
        <div className="icon-wrapper">
          <a href="https://github.com/antonkazachenko" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </div>
        <div className="icon-wrapper">
          <a href="https://linkedin.com/in/antonkazachenko" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

