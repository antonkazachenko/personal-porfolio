import ThemeSwitcher from './ThemeSwitcher';
import {GithubIcon, LinkedinIcon} from "@/app/assets/icons";
import App from "@/app/components/LangDropdown";
import LangDropdown from "@/app/components/LangDropdown";

export default function Header() {
  return (
    <header className="header">
      <div className="left-menu">
        <ThemeSwitcher/>
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
        <GithubIcon/>
        <LinkedinIcon/>
      </div>
    </header>
  )
    ;
}
