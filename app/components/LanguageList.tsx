import {GermanIcon, RussiaIcon, UKIcon} from "@/public/icons";


const LanguageList = () => {
  return (
    <div className="language-list">
      <div>
        <UKIcon/>
        <h3>English</h3>
        <p>Bilingual (C2)</p>
      </div>

      <div>
        <RussiaIcon/>
        <h3>Russian</h3>
        <p>Bilingual (C2)</p>
      </div>

      <div>
        <GermanIcon/>
        <h3>German</h3>
        <p>Intermediate (B1)</p>
      </div>
    </div>
  );
}

export default LanguageList;
