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
    sfu: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
    };`;

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
      sfu: {
        company: "SFU · Permanent Part-time",
        role: "Research Assistant",
        duration: "Sep 2024 - Dec 2025",
        about: "",
        description1: "Lead contributor in SFU’s People and Data-Centric Computing Research Group on a project to understand AI training data and design innovative ways to communicate dataset details.",
        description2: "Built end-to-end research infrastructure: reproducible data pipelines and management workflows, plus a full backend with a functional API for extensible data exploration.",
        description3: "Designed and implemented the project website front end, including custom interactive visualizations to surface key properties of AI training data.",
        description4: "Consistently applied strong software engineering practices (version control, documentation, project management) while independently driving progress across diverse research areas."
      }`;

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
      sfu: {
        company: "SFU · Feste Teilzeit",
        role: "Forschungsassistent",
        duration: "Sep 2024 - Dez 2025",
        about: "",
        description1: "Hauptbeitragender in der Forschungsgruppe People and Data-Centric Computing der SFU bei einem Projekt zum Verständnis von KI-Trainingsdaten und zur Entwicklung innovativer Methoden zur Kommunikation von Datensatzdetails.",
        description2: "Aufbau einer durchgängigen Forschungsinfrastruktur: reproduzierbare Datenpipelines und Management-Workflows sowie ein vollständiges Backend mit einer funktionalen API für erweiterbare Datenexploration.",
        description3: "Design und Implementierung des Frontends für die Projekt-Website, einschließlich benutzerdefinierter interaktiver Visualisierungen zur Darstellung wichtiger Eigenschaften von KI-Trainingsdaten.",
        description4: "Konsequente Anwendung fundierter Software-Engineering-Praktiken (Versionskontrolle, Dokumentation, Projektmanagement) bei gleichzeitiger eigenverantwortlicher Vorantreibung von Fortschritten in verschiedenen Forschungsbereichen."
      }`;

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
      sfu: {
        company: "SFU · Temps partiel permanent",
        role: "Assistant de recherche",
        duration: "Sep 2024 - Déc 2025",
        about: "",
        description1: "Contributeur principal au sein du groupe de recherche People and Data-Centric Computing de la SFU sur un projet visant à comprendre les données d’entraînement de l’IA et à concevoir des moyens innovants de communiquer les caractéristiques des ensembles de données.",
        description2: "Construit une infrastructure de recherche de bout en bout : pipelines de données reproductibles et flux de gestion des données, ainsi qu’un backend complet avec une API fonctionnelle pour l’exploration extensible des données.",
        description3: "Conçu et implémenté l’interface front-end du site web du projet, incluant des visualisations interactives personnalisées pour mettre en évidence les propriétés clés des données d’entraînement de l’IA.",
        description4: "Appliqué de manière constante de solides pratiques d’ingénierie logicielle (contrôle de version, documentation, gestion de projet) tout en faisant progresser le projet de façon autonome à travers divers axes de recherche."
      }`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/    ifs: \{\s*company: string;\s*role: string;\s*duration: string;\s*about: string;\s*description1: string;\s*description2: string;\s*description3: string;\s*\};/m, (match) => match + '\n' + tsType);

// Insert Data
let replaceCount = 0;
content = content.replace(/      ifs: \{[\s\S]*?description3: [\s\S]*?\"\n      \}/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return match + ',\n' + enData;
  if (replaceCount === 2) return match + ',\n' + deData;
  if (replaceCount === 3) return match + ',\n' + frData;
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
