const fs = require('fs');

const tsType = `
    teals: {
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
      teals: {
        company: "Microsoft Teals Program · Volunteering",
        role: "Teaching Assistant",
        duration: "May 2024 - Aug 2024",
        about: "Microsoft TEALS is a volunteer-run program that partners with high schools to build sustainable computer science programs through industry professional support.",
        description1: "Led interactive Python programming sessions for 9th-grade students, encouraging enthusiasm for coding and problem-solving.",
        description2: "Established and upheld a learning environment that celebrates diversity and inclusion, ensuring all students feel valued and supported.",
        description3: "Evaluated student progress through regular assessments and feedback, adapting teaching methods to meet diverse learning needs.",
        description4: "Assisted students with individual challenges in understanding course material, providing targeted support to enhance learning outcomes."
      },
`;

const deData = `
      teals: {
        company: "Microsoft TEALS-Programm · Ehrenamt",
        role: "Lehrassistent",
        duration: "Mai 2024 - Aug 2024",
        about: "Microsoft TEALS ist ein ehrenamtliches Programm, das mit High Schools zusammenarbeitet, um durch die Unterstützung von Fachleuten aus der Industrie nachhaltige Informatikprogramme aufzubauen.",
        description1: "Leitung interaktiver Programmierworkshops mit Python für Schülerinnen und Schüler der 9. Klasse und Förderung von Begeisterung für Programmierung und Problemlösen.",
        description2: "Aufbau und Pflege eines Lernumfelds, das Vielfalt und Inklusion wertschätzt, sodass sich alle Schülerinnen und Schüler wertgeschätzt und unterstützt fühlen.",
        description3: "Bewertung des Lernfortschritts der Schülerinnen und Schüler durch regelmäßige Leistungsüberprüfungen und Feedback sowie Anpassung der Lehrmethoden an unterschiedliche Lernbedürfnisse.",
        description4: "Unterstützung von Schülerinnen und Schülern bei individuellen Schwierigkeiten im Verständnis der Kursinhalte durch gezielte Förderung zur Verbesserung der Lernergebnisse."
      },
`;

const frData = `
      teals: {
        company: "Programme Microsoft TEALS · Bénévolat",
        role: "Assistant d'enseignement",
        duration: "Mai 2024 - Août 2024",
        about: "Microsoft TEALS est un programme bénévole qui s'associe aux lycées pour développer des programmes d'informatique durables grâce au soutien de professionnels de l'industrie.",
        description1: "Animé des sessions interactives de programmation en Python pour des élèves de 3ème, en encourageant l'enthousiasme pour le codage et la résolution de problèmes.",
        description2: "Établi et maintenu un environnement d'apprentissage qui valorise la diversité et l'inclusion, en veillant à ce que tous les élèves se sentent respectés et soutenus.",
        description3: "Évalué les progrès des élèves par le biais d'évaluations régulières et de retours, en adaptant les méthodes d'enseignement pour répondre aux divers besoins d'apprentissage.",
        description4: "Aidé les élèves face à des difficultés individuelles de compréhension du matériel de cours, en fournissant un soutien ciblé pour améliorer les résultats d'apprentissage."
      },
`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/    ifs: \{/, tsType.trim() + '\n    ifs: {');

// Insert enData
let replaceCount = 0;
content = content.replace(/      ifs: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enData.trim() + '\n      ifs: {';
  if (replaceCount === 2) return deData.trim() + '\n      ifs: {';
  if (replaceCount === 3) return frData.trim() + '\n      ifs: {';
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);

