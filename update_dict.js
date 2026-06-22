const fs = require('fs');

const tsType = `
  skills: {
    heading: string;
    categories: {
      softwareDev: string;
      cloudDevops: string;
      dataScience: string;
    };
${fs.readFileSync('dict_updates.txt', 'utf-8').split('EN:')[0].replace('TYPE:', '').trim().split('\n').map(l => '    ' + l).join('\n')}
  };
`;

const enData = `
    skills: {
      heading: 'MY SKILLS',
      categories: {
        softwareDev: 'Software Development',
        cloudDevops: 'Cloud & DevOps',
        dataScience: 'Data Science',
      },
${fs.readFileSync('dict_updates.txt', 'utf-8').split('DE:')[0].split('EN:')[1].trim().split('\n').map(l => '      ' + l).join('\n')}
    },
`;

const deData = `
    skills: {
      heading: 'MEINE FÄHIGKEITEN',
      categories: {
        softwareDev: 'Softwareentwicklung',
        cloudDevops: 'Cloud & DevOps',
        dataScience: 'Data Science',
      },
${fs.readFileSync('dict_updates.txt', 'utf-8').split('FR:')[0].split('DE:')[1].trim().split('\n').map(l => '      ' + l).join('\n')}
    },
`;

const frData = `
    skills: {
      heading: 'MES COMPÉTENCES',
      categories: {
        softwareDev: 'Développement Logiciel',
        cloudDevops: 'Cloud & DevOps',
        dataScience: 'Science des Données',
      },
${fs.readFileSync('dict_updates.txt', 'utf-8').split('FR:')[1].trim().split('\n').map(l => '      ' + l).join('\n')}
    },
`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

content = content.replace(/projectLinks: \{/, tsType.trim() + '\n  projectLinks: {');
content = content.replace(/projectLinks: \{/g, (match, offset) => {
  if (offset > 200 && offset < 450) {
    return enData.trim() + '\n    projectLinks: {';
  } else if (offset > 450 && offset < 750) {
    return deData.trim() + '\n    projectLinks: {';
  } else if (offset > 750) {
    return frData.trim() + '\n    projectLinks: {';
  }
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
