import ThemeSwitcher from './ThemeSwitcher';
import { GithubIcon, LinkedinIcon } from "@/app/public/icons";
import LangDropdown from "@/app/components/LangDropdown";

export default function Header() {
  return (
    <header className="header">
      <div className="left-menu">
        <ThemeSwitcher />
        <LangDropdown />
      </div>
      <ul className="menu-list">
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contacts</li>
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
