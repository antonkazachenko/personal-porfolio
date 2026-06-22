const fs = require('fs');
let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// I will just remove the nested tech from features, and put it after features

let arr = content.split('reactBurger: {');

for (let i = 1; i < arr.length; i++) {
  // arr[i] contains the block for reactBurger
  
  // the tech block looks like:
  //       tech: {
  //         stack: { ... },
  //         badges: { ... },
  //       },
  //       }, <-- this is the close for features
  
  // We need to move the `tech: { ... }` block out of the `features` block.
  // Replace `        deploy: {[\s\S]*?},\n      tech: {[\s\S]*?},\n      },`
  // with `        deploy: { ... },\n      },\n      tech: { ... },`
  
  arr[i] = arr[i].replace(/(deploy: \{[\s\S]*?\},)\n\s*tech: (\{[\s\S]*?badges: \{[\s\S]*?\},?\n\s*\}),?\n\s*\},/g, 
    "$1\n      },\n      tech: $2,");
}

fs.writeFileSync('app/i18n/dictionaries.ts', arr.join('reactBurger: {'));

