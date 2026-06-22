const fs = require('fs');
const content = fs.readFileSync('app/data/skillsData.ts', 'utf-8');

const matches = [...content.matchAll(/description:\s*"([^"]+)"/g)];
const uniqueDescs = [...new Set(matches.map(m => m[1]))];

const keys = uniqueDescs.reduce((acc, desc) => {
  let key = desc.replace(/[- /]/g, ' ').split(' ').map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1)).join('');
  // Handle some specific cases
  key = key.replace(/[^a-zA-Z0-9]/g, '');
  acc[desc] = key;
  return acc;
}, {});

console.log(JSON.stringify(keys, null, 2));
