const fs = require('fs');

let content = fs.readFileSync('app/components/ExperienceSection.tsx', 'utf-8');

// 1. Add useI18n import
if (!content.includes('useI18n')) {
  content = content.replace(
    'import {CJSFIcon, CopperleafIcon, GDSCIcon, MicrosoftIcon, SFUIcon} from "@/public/icons";',
    'import {CJSFIcon, CopperleafIcon, GDSCIcon, MicrosoftIcon, SFUIcon} from "@/public/icons";\nimport { useI18n } from "@/app/i18n/I18nProvider";'
  );
}

// 2. Add key field to Experience interface
if (!content.includes('key?: string;')) {
  content = content.replace(
    'interface Experience {\n  company: string;',
    'interface Experience {\n  key?: string;\n  company: string;'
  );
}

// 3. Add key: "ifs" to IFS experience
content = content.replace(
  'company: "IFS Copperleaf · Internship",',
  'key: "ifs",\n    company: "IFS Copperleaf · Internship",'
);

// 4. Add useI18n hook
if (!content.includes('const { t } = useI18n();')) {
  content = content.replace(
    'const [expanded, setExpanded] = useState<boolean[]>(() => experiences.map((_, i) => i === 0));',
    'const [expanded, setExpanded] = useState<boolean[]>(() => experiences.map((_, i) => i === 0));\n  const { t } = useI18n();'
  );
}

// 5. Replace headings
content = content.replace(
  '<h1 className="section-header-bg">EXPERIENCE</h1>\n        <h2 className="section-header">EXPERIENCE</h2>',
  '<h1 className="section-header-bg">{t(\'experience.heading\')}</h1>\n        <h2 className="section-header">{t(\'experience.heading\')}</h2>'
);

// 6. Map translations
const replacementLogic = `
          const isExpanded = expanded[index];
          
          let company = exp.company;
          let role = exp.role;
          let duration = exp.duration;
          let about = exp.about;
          let description = exp.description;
          
          if (exp.key === 'ifs') {
            company = t('experience.ifs.company');
            role = t('experience.ifs.role');
            duration = t('experience.ifs.duration');
            about = t('experience.ifs.about');
            description = [
              t('experience.ifs.description1'),
              t('experience.ifs.description2'),
              t('experience.ifs.description3')
            ];
          }

          const hasDetails = description.length > 0;
`;

content = content.replace(
  '          const isExpanded = expanded[index];\n          const hasDetails = exp.description.length > 0;',
  replacementLogic.trim()
);

// We need to replace instances of exp.company, exp.role, exp.duration, exp.about, exp.description
// below the hasDetails variable with the local variables company, role, duration, about, description.
content = content.replace(/exp\.duration/g, 'duration');
content = content.replace(/exp\.company/g, 'company');
content = content.replace(/exp\.role/g, 'role');
content = content.replace(/exp\.about/g, 'about');
content = content.replace(/exp\.description/g, 'description');

fs.writeFileSync('app/components/ExperienceSection.tsx', content);

