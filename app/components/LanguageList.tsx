'use client';

import {FrenchIcon, RussiaIcon, UKIcon} from "@/public/icons";
import { useI18n } from "@/app/i18n/I18nProvider";


const LanguageList = () => {
  const { t } = useI18n();

  return (
    <div className="language-list">
      <div>
        <UKIcon/>
        <span className="lang-emoji">🇬🇧</span>
        <h3>{t('languages.english')}</h3>
        <p>{t('languages.bilingual')}</p>
      </div>

      <div>
        <RussiaIcon/>
        <span className="lang-emoji">🇷🇺</span>
        <h3>{t('languages.russian')}</h3>
        <p>{t('languages.bilingual')}</p>
      </div>

      <div>
        <FrenchIcon/>
        <span className="lang-emoji">🇫🇷</span>
        <h3>{t('languages.french')}</h3>
        <p>{t('languages.intermediate')}</p>
      </div>
    </div>
  );
}

export default LanguageList;
