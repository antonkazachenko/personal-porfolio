const fs = require('fs');

const tsType = `
  experience: {
    heading: string;
    ifs: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
      description2: string;
      description3: string;
    };
  };
`;

const enData = `
    experience: {
      heading: 'EXPERIENCE',
      ifs: {
        company: 'IFS Copperleaf · Internship',
        role: 'Software Developer Intern',
        duration: 'May 2024 - Dec 2024',
        about: 'IFS Copperleaf is an enterprise SaaS company providing AI-driven asset investment planning and decision analytics for critical infrastructure.',
        description1: "Contributed to the development of a scalable design system using Angular and TypeScript, building reusable components to improve UI consistency across the company's applications.",
        description2: "Assisted in implementing state management solutions using NgRx and integrated RxJS for reactive programming to handle asynchronous operations and streamline data-fetching workflows.",
        description3: "Supported fullstack development for a mission-critical visual regression testing platform using Prisma with NestJS and PostgreSQL in a Docker environment, refining SQL migration scripts and leveraging pgAdmin for effective database management."
      }
    },
`;

const deData = `
    experience: {
      heading: 'ERFAHRUNG',
      ifs: {
        company: 'IFS Copperleaf · Praktikum',
        role: 'Praktikant Softwareentwicklung',
        duration: 'Mai 2024 - Dez 2024',
        about: 'IFS Copperleaf ist ein Enterprise-SaaS-Unternehmen, das KI-gestützte Asset-Investmentplanung und Entscheidungsanalyse für kritische Infrastrukturen anbietet.',
        description1: "Mitentwicklung eines skalierbaren Design-Systems auf Basis von Angular und TypeScript durch Aufbau wiederverwendbarer Komponenten zur Verbesserung der UI-Konsistenz in den Anwendungen des Unternehmens.",
        description2: "Unterstützung bei der Implementierung von State-Management-Lösungen mit NgRx sowie Integration von RxJS für reaktive Programmierung, um asynchrone Operationen zu handhaben und Datenabruf-Workflows zu optimieren.",
        description3: "Unterstützung der Fullstack-Entwicklung einer geschäftskritischen Plattform für visuelle Regressionstests mit Prisma, NestJS und PostgreSQL in einer Docker-Umgebung; Verfeinerung von SQL-Migrationsskripten und Nutzung von pgAdmin für effizientes Datenbankmanagement."
      }
    },
`;

const frData = `
    experience: {
      heading: 'EXPÉRIENCE',
      ifs: {
        company: 'IFS Copperleaf · Stage',
        role: 'Stagiaire en développement logiciel',
        duration: 'Mai 2024 - Déc 2024',
        about: "IFS Copperleaf est une entreprise SaaS fournissant une planification des investissements en actifs basée sur l'IA et des analyses décisionnelles pour les infrastructures critiques.",
        description1: "Contribué au développement d’un design system évolutif utilisant Angular et TypeScript, en créant des composants réutilisables afin d’améliorer la cohérence de l’interface utilisateur dans les applications de l’entreprise.",
        description2: "Aidé à la mise en place de solutions de gestion d’état avec NgRx et intégré RxJS pour la programmation réactive afin de gérer les opérations asynchrones et simplifier les flux de récupération des données.",
        description3: "Soutenu le développement full-stack d’une plateforme critique de tests de régression visuelle en utilisant Prisma avec NestJS et PostgreSQL dans un environnement Docker, en améliorant les scripts de migration SQL et en utilisant pgAdmin pour une gestion efficace des bases de données."
      }
    },
`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

content = content.replace(/  education: \{/, tsType.trim() + '\n  education: {');

let replaceCount = 0;
content = content.replace(/    education: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enData.trim() + '\n    education: {';
  if (replaceCount === 2) return deData.trim() + '\n    education: {';
  if (replaceCount === 3) return frData.trim() + '\n    education: {';
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
