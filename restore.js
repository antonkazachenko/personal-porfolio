const fs = require('fs');
let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

const skillsStr = fs.readFileSync('dict_updates.txt', 'utf-8');
const skillsType = skillsStr.split('EN:')[0].replace('TYPE:', '').trim().split('\n').map(l => '  ' + l).join('\n');
const skillsEn = skillsStr.split('DE:')[0].split('EN:')[1].trim().split('\n').map(l => '    ' + l).join('\n');
const skillsDe = skillsStr.split('FR:')[0].split('DE:')[1].trim().split('\n').map(l => '    ' + l).join('\n');
const skillsFr = skillsStr.split('FR:')[1].trim().split('\n').map(l => '    ' + l).join('\n');

const missingTypes = `
  goTodoList: {
    featuresHeading: string;
    description: string;
    features: {
      layeredArchitecture: { title: string; description: string };
      taskScheduling: { title: string; description: string };
      jwtAuth: { title: string; description: string };
      dockerBuild: { title: string; description: string };
    };
    tech: {
      stack: { go: string; sqlite: string; javascript: string; docker: string; html5: string; css3: string };
      badges: { chiRouter: string; sqlx: string; jwtAuth: string; testify: string };
    };
  };
  dataAnalysis: {
    heroEyebrow: string;
    keyFindings: string;
    findings: {
      correlation: { title: string; description: string };
      creditHistory: { title: string; description: string };
      conclusion: { title: string; description: string };
    };
  };
  demoCredentials: {
    toggle: string;
    accessLabel: string;
    email: string;
    password: string;
  };
  projectLinks: {
    liveDemo: string;
    github: string;
    linkedinPost: string;
  };
  skills: {
    heading: string;
    categories: { softwareDev: string; cloudDevops: string; dataScience: string; };
${skillsType}
  };
`;

const enMissing = `
    techSection: {
      usedHeading: 'Technologies Used',
      heading: 'Technologies',
      coreStack: 'Core Stack',
      librariesTooling: 'Libraries & Tooling',
    },
    goTodoList: {
      featuresHeading: 'Key Features',
      description: 'A robust REST API for task management, built with Go and SQLite, utilizing a clean layered architecture and JWT authentication.',
      features: {
        layeredArchitecture: {
          title: 'Layered Architecture',
          description: 'Separation of concerns using controllers, services, and repositories for maintainable and testable code.'
        },
        taskScheduling: {
          title: 'Task Scheduling',
          description: 'Background workers that periodically clean up expired JWT tokens and stale data.'
        },
        jwtAuth: {
          title: 'JWT Auth',
          description: 'Secure endpoints using stateless JWTs for scalable authentication.'
        },
        dockerBuild: {
          title: 'Docker Build',
          description: 'Multi-stage Dockerfile for lightweight and secure deployments.'
        }
      },
      tech: {
        stack: {
          go: 'Backend Language',
          sqlite: 'Persistent Data Storage',
          javascript: 'Frontend Logic',
          docker: 'Containerization',
          html5: 'Markup',
          css3: 'Styling',
        },
        badges: {
          chiRouter: 'Lightweight idiomatic routing',
          sqlx: 'SQL toolkit for Go',
          jwtAuth: 'Secure token authentication',
          testify: 'Unit testing utilities',
        },
      },
    },
    dataAnalysis: {
      heroEyebrow: 'Data Analysis Project',
      keyFindings: 'Key Findings',
      findings: {
        correlation: {
          title: 'Correlation Analysis',
          description: 'Identified strong correlations between specific demographic factors and credit default risk.'
        },
        creditHistory: {
          title: 'Credit History Impact',
          description: 'Historical credit data was the most significant predictor of future loan performance.'
        },
        conclusion: {
          title: 'Conclusion',
          description: 'The insights guided the development of a more accurate credit scoring model.'
        }
      }
    },
    demoCredentials: {
      toggle: 'Demo Credentials',
      accessLabel: 'Demo Access',
      email: 'Email:',
      password: 'Password:',
    },
    projectLinks: {
      liveDemo: 'Live Demo',
      github: 'GitHub',
      linkedinPost: 'LinkedIn Post',
    },
    skills: {
      heading: 'MY SKILLS',
      categories: { softwareDev: 'Software Development', cloudDevops: 'Cloud & DevOps', dataScience: 'Data Science' },
${skillsEn}
    },
`;

const reactBurgerTechEn = `
      tech: {
        stack: {
          react: 'Component-based UI library',
          typescript: 'Typed superset of JavaScript',
          redux: 'Predictable global state',
          cypress: 'End-to-end testing',
          jest: 'Unit testing framework',
        },
        badges: {
          reactRouter: 'Client-side routing',
          reactDnd: 'Drag-and-drop interactions',
          contextApi: 'Shared state & translations',
          websockets: 'Real-time data streaming',
          jwts: 'Token-based authentication',
        },
      },
`;

const deMissing = `
    techSection: {
      usedHeading: 'Verwendete Technologien',
      heading: 'Technologien',
      coreStack: 'Core-Stack',
      librariesTooling: 'Bibliotheken & Tools',
    },
    goTodoList: {
      featuresHeading: 'Hauptfunktionen',
      description: 'Eine robuste REST-API zur Aufgabenverwaltung, erstellt mit Go und SQLite, basierend auf einer sauberen Schichtenarchitektur und JWT-Authentifizierung.',
      features: {
        layeredArchitecture: {
          title: 'Schichtenarchitektur',
          description: 'Trennung von Verantwortlichkeiten durch Controller, Services und Repositories für wartbaren und testbaren Code.'
        },
        taskScheduling: {
          title: 'Aufgabenplanung',
          description: 'Hintergrundprozesse, die regelmäßig abgelaufene JWT-Token und veraltete Daten bereinigen.'
        },
        jwtAuth: {
          title: 'JWT-Authentifizierung',
          description: 'Sichere Endpunkte durch zustandslose JWTs für skalierbare Authentifizierung.'
        },
        dockerBuild: {
          title: 'Docker-Build',
          description: 'Mehrstufiges Dockerfile für schlanke und sichere Deployments.'
        }
      },
      tech: {
        stack: {
          go: 'Backend-Sprache',
          sqlite: 'Persistente Datenspeicherung',
          javascript: 'Frontend-Logik',
          docker: 'Containerisierung',
          html5: 'Markup',
          css3: 'Styling',
        },
        badges: {
          chiRouter: 'Leichtgewichtiges idiomatisches Routing',
          sqlx: 'SQL-Toolkit für Go',
          jwtAuth: 'Sichere Token-Authentifizierung',
          testify: 'Unit-Testing-Dienstprogramme',
        },
      },
    },
    dataAnalysis: {
      heroEyebrow: 'Datenanalyse-Projekt',
      keyFindings: 'Wichtigste Erkenntnisse',
      findings: {
        correlation: {
          title: 'Korrelationsanalyse',
          description: 'Es wurden starke Korrelationen zwischen bestimmten demografischen Faktoren und dem Kreditrisiko identifiziert.'
        },
        creditHistory: {
          title: 'Einfluss der Kredithistorie',
          description: 'Historische Kreditdaten waren der signifikanteste Prädiktor für die zukünftige Kreditleistung.'
        },
        conclusion: {
          title: 'Fazit',
          description: 'Die Erkenntnisse führten zur Entwicklung eines genaueren Kreditbewertungsmodells.'
        }
      }
    },
    demoCredentials: {
      toggle: 'Demo-Zugangsdaten',
      accessLabel: 'Demo-Zugang',
      email: 'E-Mail:',
      password: 'Passwort:',
    },
    projectLinks: {
      liveDemo: 'Live-Demo',
      github: 'GitHub',
      linkedinPost: 'LinkedIn-Beitrag',
    },
    skills: {
      heading: 'MEINE FÄHIGKEITEN',
      categories: { softwareDev: 'Softwareentwicklung', cloudDevops: 'Cloud & DevOps', dataScience: 'Data Science' },
${skillsDe}
    },
`;

const reactBurgerTechDe = `
      tech: {
        stack: {
          react: 'Komponentenbasierte UI-Bibliothek',
          typescript: 'Typisierte JavaScript-Erweiterung',
          redux: 'Vorhersagbarer globaler State',
          cypress: 'End-to-End-Testing',
          jest: 'Unit-Testing-Framework',
        },
        badges: {
          reactRouter: 'Client-seitiges Routing',
          reactDnd: 'Drag-and-Drop-Interaktionen',
          contextApi: 'Gemeinsamer State & Übersetzungen',
          websockets: 'Echtzeit-Datenstreaming',
          jwts: 'Token-basierte Authentifizierung',
        },
      },
`;


const frMissing = `
    techSection: {
      usedHeading: 'Technologies utilisées',
      heading: 'Technologies',
      coreStack: 'Stack Principal',
      librariesTooling: 'Bibliothèques & Outils',
    },
    goTodoList: {
      featuresHeading: 'Fonctionnalités clés',
      description: 'Une API REST robuste pour la gestion des tâches, construite avec Go et SQLite, utilisant une architecture en couches propre et une authentification JWT.',
      features: {
        layeredArchitecture: {
          title: 'Architecture en couches',
          description: 'Séparation des responsabilités via des contrôleurs, services et dépôts pour un code maintenable et testable.'
        },
        taskScheduling: {
          title: 'Planification des tâches',
          description: 'Des workers en arrière-plan qui nettoient périodiquement les tokens JWT expirés et les données obsolètes.'
        },
        jwtAuth: {
          title: 'Authentification JWT',
          description: 'Points finaux sécurisés via des JWT sans état pour une authentification évolutive.'
        },
        dockerBuild: {
          title: 'Build Docker',
          description: 'Dockerfile multi-étapes pour des déploiements légers et sécurisés.'
        }
      },
      tech: {
        stack: {
          go: 'Langage backend',
          sqlite: 'Stockage de données persistant',
          javascript: 'Logique frontend',
          docker: 'Conteneurisation',
          html5: 'Balisage',
          css3: 'Style',
        },
        badges: {
          chiRouter: 'Routage idiomatique léger',
          sqlx: 'Boîte à outils SQL pour Go',
          jwtAuth: 'Authentification sécurisée par jeton',
          testify: 'Utilitaires de tests unitaires',
        },
      },
    },
    dataAnalysis: {
      heroEyebrow: 'Projet d\\'analyse de données',
      keyFindings: 'Résultats clés',
      findings: {
        correlation: {
          title: 'Analyse de corrélation',
          description: 'Identification de fortes corrélations entre des facteurs démographiques spécifiques et le risque de défaut de crédit.'
        },
        creditHistory: {
          title: 'Impact de l\\'historique de crédit',
          description: 'Les données de crédit historiques ont été le prédicteur le plus significatif de la performance future du prêt.'
        },
        conclusion: {
          title: 'Conclusion',
          description: 'Les informations ont guidé le développement d\\'un modèle de notation de crédit plus précis.'
        }
      }
    },
    demoCredentials: {
      toggle: 'Identifiants de démo',
      accessLabel: 'Accès Démo',
      email: 'E-mail :',
      password: 'Mot de passe :',
    },
    projectLinks: {
      liveDemo: 'Démo en direct',
      github: 'GitHub',
      linkedinPost: 'Post LinkedIn',
    },
    skills: {
      heading: 'MES COMPÉTENCES',
      categories: { softwareDev: 'Développement Logiciel', cloudDevops: 'Cloud & DevOps', dataScience: 'Science des Données' },
${skillsFr}
    },
`;

const reactBurgerTechFr = `
      tech: {
        stack: {
          react: 'Bibliothèque d\\'interface utilisateur',
          typescript: 'Sur-ensemble typé de JavaScript',
          redux: 'État global prévisible',
          cypress: 'Tests de bout en bout',
          jest: 'Framework de tests unitaires',
        },
        badges: {
          reactRouter: 'Routage côté client',
          reactDnd: 'Interactions glisser-déposer',
          contextApi: 'État partagé & traductions',
          websockets: 'Flux de données en temps réel',
          jwts: 'Authentification par jeton',
        },
      },
`;

// 1. Insert types before projectFooter: { in type Dictionary
content = content.replace(/  projectFooter: \{/, missingTypes.trim() + '\n  projectFooter: {');

// 2. Insert enMissing before projectFooter: { in en
// Note: we can use a string replacement that targets the en block
// The string '    projectFooter: {' appears 3 times.
let replaceCount = 0;
content = content.replace(/    projectFooter: \{/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return enMissing.trim() + '\n    projectFooter: {';
  if (replaceCount === 2) return deMissing.trim() + '\n    projectFooter: {';
  if (replaceCount === 3) return frMissing.trim() + '\n    projectFooter: {';
  return match;
});

// 3. Insert reactBurgerTech after deploy: { ... }, in reactBurger.features
content = content.replace(/        deploy: \{[\s\S]*?\},/g, (match, offset) => {
  if (offset < 8000) return match + '\n' + reactBurgerTechEn.trim();
  if (offset < 14000) return match + '\n' + reactBurgerTechDe.trim();
  return match + '\n' + reactBurgerTechFr.trim();
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
