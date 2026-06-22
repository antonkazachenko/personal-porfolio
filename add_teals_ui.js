const fs = require('fs');

let content = fs.readFileSync('app/components/ExperienceSection.tsx', 'utf-8');

// 1. Add key: "teals" to Microsoft TEALS experience
content = content.replace(
  'company: "Microsoft Teals Program · Volunteering",',
  'key: "teals",\n    company: "Microsoft Teals Program · Volunteering",'
);

// 2. Add teals mapping logic
const tealsLogic = `
          } else if (exp.key === 'teals') {
            company = t('experience.teals.company');
            role = t('experience.teals.role');
            duration = t('experience.teals.duration');
            about = t('experience.teals.about');
            description = [
              t('experience.teals.description1'),
              t('experience.teals.description2'),
              t('experience.teals.description3'),
              t('experience.teals.description4')
            ];
          }

          const hasDetails`;

content = content.replace(
  '          }\n\n          const hasDetails',
  tealsLogic
);

fs.writeFileSync('app/components/ExperienceSection.tsx', content);

