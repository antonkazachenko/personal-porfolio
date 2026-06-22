const fs = require('fs');

const tsType = `
    sfu: {
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
      sfu: {
        company: "SFU · Permanent Part-time",
        role: "Research Assistant",
        duration: "Sep 2024 - Dec 2025",
        about: "",
        description1: "Lead contributor in SFU’s People and Data-Centric Computing Research Group on a project to understand AI training data and design innovative ways to communicate dataset details.",
        description2: "Built end-to-end research infrastructure: reproducible data pipelines and management workflows, plus a full backend with a functional API for extensible data exploration.",
        description3: "Designed and implemented the project website front end, including custom interactive visualizations to surface key properties of AI training data.",
        description4: "Consistently applied strong software engineering practices (version control, documentation, project management) while independently driving progress across diverse research areas."
      },
`;

const deData = `
      sfu: {
        company: "SFU · Feste Teilzeit",
        role: "Forschungsassistent",
        duration: "Sep 2024 - Dez 2025",
        about: "",
        description1: "Hauptbeitragender in der Forschungsgruppe People and Data-Centric Computing der SFU bei einem Projekt zum Verständnis von KI-Trainingsdaten und zur Entwicklung innovativer Methoden zur Kommunikation von Datensatzdetails.",
        description2: "Aufbau einer durchgängigen Forschungsinfrastruktur: reproduzierbare Datenpipelines und Management-Workflows sowie ein vollständiges Backend mit einer funktionalen API für erweiterbare Datenexploration.",
        description3: "Design und Implementierung des Frontends für die Projekt-Website, einschließlich benutzerdefinierter interaktiver Visualisierungen zur Darstellung wichtiger Eigenschaften von KI-Trainingsdaten.",
        description4: "Konsequente Anwendung fundierter Software-Engineering-Praktiken (Versionskontrolle, Dokumentation, Projektmanagement) bei gleichzeitiger eigenverantwortlicher Vorantreibung von Fortschritten in verschiedenen Forschungsbereichen."
      },
`;

const frData = `
      sfu: {
        company: "SFU · Temps partiel permanent",
        role: "Assistant de recherche",
        duration: "Sep 2024 - Déc 2025",
        about: "",
        description1: "Contributeur principal au sein du groupe de recherche People and Data-Centric Computing de la SFU sur un projet visant à comprendre les données d’entraînement de l’IA et à concevoir des moyens innovants de communiquer les caractéristiques des ensembles de données.",
        description2: "Construit une infrastructure de recherche de bout en bout : pipelines de données reproductibles et flux de gestion des données, ainsi qu’un backend complet avec une API fonctionnelle pour l’exploration extensible des données.",
        description3: "Conçu et implémenté l’interface front-end du site web du projet, incluant des visualisations interactives personnalisées pour mettre en évidence les propriétés clés des données d’entraînement de l’IA.",
        description4: "Appliqué de manière constante de solides pratiques d’ingénierie logicielle (contrôle de version, documentation, gestion de projet) tout en faisant progresser le projet de façon autonome à travers divers axes de recherche."
      },
`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/    cjsf: \{/, tsType.trim() + '\n    cjsf: {');

// Insert enData
let replaceCount = 0;
content = content.replace(/      cjsf: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enData.trim() + '\n      cjsf: {';
  if (replaceCount === 2) return deData.trim() + '\n      cjsf: {';
  if (replaceCount === 3) return frData.trim() + '\n      cjsf: {';
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
