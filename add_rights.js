const fs = require('fs');

const tsType = `
  rights: {
    allRightsReserved: string;
  };`;

const enData = `
    rights: {
      allRightsReserved: 'All Rights Reserved.',
    },`;

const deData = `
    rights: {
      allRightsReserved: 'Alle Rechte vorbehalten.',
    },`;

const frData = `
    rights: {
      allRightsReserved: 'Tous droits réservés.',
    },`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/  references: \{/, tsType.trim() + '\n  references: {');

// Insert Data
let replaceCount = 0;
content = content.replace(/    references: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enData.trim() + '\n    references: {';
  if (replaceCount === 2) return deData.trim() + '\n    references: {';
  if (replaceCount === 3) return frData.trim() + '\n    references: {';
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
