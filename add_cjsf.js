const fs = require('fs');

const tsType = `
    cjsf: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
    };
`;

const enData = `
      cjsf: {
        company: "CJSF 90.1 · Permanent Part-time",
        role: "Mobile Application Developer",
        duration: "Sep 2023 - May 2024",
        about: "CJSF 90.1 FM is the independent campus and community radio station of Simon Fraser University, broadcasting music, news, and culture.",
        description1: "Enhanced the responsiveness and user-friendliness of the user interface, achieving a 30% improvement in overall user engagement.",
        description2: "Improved the efficiency of state management with the React Context API, resulting in a 40% increase in application performance.",
        description3: "Successfully resolved adaptivity-related bugs, enhancing app performance and user experience by 50%.",
        description4: "Increased user engagement by 25% through the implementation of a robust 'favorites' feature, enhancing the overall usability of the app."
      },
`;

const deData = `
      cjsf: {
        company: "CJSF 90.1 · Feste Teilzeit",
        role: "Mobile-App-Entwickler",
        duration: "Sep 2023 - Mai 2024",
        about: "CJSF 90.1 FM ist der unabhängige Campus- und Community-Radiosender der Simon Fraser University, der Musik, Nachrichten und Kultur sendet.",
        description1: "Verbesserung der Reaktionsfähigkeit und Benutzerfreundlichkeit der Benutzeroberfläche, wodurch das allgemeine Nutzerengagement um 30 % gesteigert wurde.",
        description2: "Steigerung der Effizienz des State Managements mit der React Context API, was zu einer Leistungssteigerung der Anwendung um 40 % führte.",
        description3: "Erfolgreiche Behebung von Anpassungsfehlern, wodurch die Anwendungsleistung und die Nutzererfahrung um 50 % verbessert wurden.",
        description4: "Steigerung des Nutzerengagements um 25 % durch die Implementierung einer robusten 'Favoriten'-Funktion, wodurch die allgemeine Nutzbarkeit der App verbessert wurde."
      },
`;

const frData = `
      cjsf: {
        company: "CJSF 90.1 · Temps partiel permanent",
        role: "Développeur d'applications mobiles",
        duration: "Sep 2023 - Mai 2024",
        about: "CJSF 90.1 FM est la station de radio communautaire et de campus indépendante de l'Université Simon Fraser, diffusant de la musique, des nouvelles et de la culture.",
        description1: "Amélioration de la réactivité et de la convivialité de l'interface utilisateur, avec une augmentation de 30 % de l'engagement global des utilisateurs.",
        description2: "Optimisation de l'efficacité de la gestion des états avec l'API React Context, ce qui a entraîné une augmentation de 40 % des performances de l'application.",
        description3: "Résolution réussie de bogues liés à l'adaptabilité, améliorant les performances de l'application et l'expérience utilisateur de 50 %.",
        description4: "Augmentation de l'engagement des utilisateurs de 25 % grâce à la mise en œuvre d'une fonctionnalité robuste de 'favoris', améliorant ainsi la convivialité générale de l'application."
      },
`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/    teals: \{/, tsType.trim() + '\n    teals: {');

// Insert enData
let replaceCount = 0;
content = content.replace(/      teals: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enData.trim() + '\n      teals: {';
  if (replaceCount === 2) return deData.trim() + '\n      teals: {';
  if (replaceCount === 3) return frData.trim() + '\n      teals: {';
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);

