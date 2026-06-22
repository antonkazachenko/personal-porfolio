const fs = require('fs');
let content = fs.readFileSync('app/components/ExperienceSection.tsx', 'utf-8');

content = content.replace(/let company = company;/g, 'let company = exp.company;');
content = content.replace(/let role = role;/g, 'let role = exp.role;');
content = content.replace(/let duration = duration;/g, 'let duration = exp.duration;');
content = content.replace(/let about = about;/g, 'let about = exp.about;');
content = content.replace(/let description = description;/g, 'let description = exp.description;');

fs.writeFileSync('app/components/ExperienceSection.tsx', content);
