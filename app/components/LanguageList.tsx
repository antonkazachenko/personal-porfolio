import {FrenchIcon, RussiaIcon, UKIcon} from "@/public/icons";


const LanguageList = () => {
  return (
    <div className="language-list">
      <div>
        <UKIcon/>
        <span className="lang-emoji">🇬🇧</span>
        <h3>English</h3>
        <p>Bilingual proficiency</p>
      </div>

      <div>
        <RussiaIcon/>
        <span className="lang-emoji">🇷🇺</span>
        <h3>Russian</h3>
        <p>Bilingual proficiency</p>
      </div>

      <div>
        <FrenchIcon/>
        <span className="lang-emoji">🇫🇷</span>
        <h3>French</h3>
        <p>Intermediate proficiency</p>
      </div>
    </div>
  );
}

export default LanguageList;
