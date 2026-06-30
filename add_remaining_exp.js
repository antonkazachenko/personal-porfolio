const fs = require('fs');

const tsType = `
    infoblox: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
    };
    gdsc: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
    };`;

const enData = `
      infoblox: {
        company: "Infoblox · Permanent Full-time",
        role: "Software Engineer",
        duration: "Mar 2026 - Present",
        about: "Infoblox is a cloud-first networking company specializing in DNS, DHCP, and IP address management (DDI) and cybersecurity.",
        description1: "Built and maintained backend microservices in Go (Golang), deployed to Kubernetes via Helm charts and monitored with Grafana dashboards and alerting.",
        description2: "Designed event-driven data pipelines using Kafka for asynchronous message processing across distributed services.",
        description3: "Owned frontend feature development in Angular, architecting microfrontends for independent deployment and consistent UI across teams.",
        description4: "Integrated with Databricks to query and ingest large-scale datasets for downstream analytics."
      },
      gdsc: {
        company: "SFU Google Developer Student Club",
        role: "Guest Mentor",
        duration: "Mar 2026",
        about: "GDSC is a Google-supported student community at SFU.",
        description1: "Helped students navigate through getting their first internship."
      }`;

const deData = `
      infoblox: {
        company: "Infoblox · Feste Vollzeit",
        role: "Software Engineer",
        duration: "März 2026 - Heute",
        about: "Infoblox ist ein Cloud-First-Netzwerkunternehmen, das sich auf DNS, DHCP und IP-Adressverwaltung (DDI) sowie Cybersicherheit spezialisiert hat.",
        description1: "Erstellung und Wartung von Backend-Microservices in Go (Golang), die über Helm-Charts in Kubernetes bereitgestellt und mit Grafana-Dashboards und Warnmeldungen überwacht wurden.",
        description2: "Entwurf ereignisgesteuerter Datenpipelines unter Verwendung von Kafka für die asynchrone Nachrichtenverarbeitung über verteilte Dienste hinweg.",
        description3: "Verantwortlich für die Frontend-Feature-Entwicklung in Angular, Architektur von Microfrontends für unabhängige Deployments und eine konsistente Benutzeroberfläche teamübergreifend.",
        description4: "Integration mit Databricks zur Abfrage und Aufnahme umfangreicher Datensätze für nachgelagerte Analysen."
      },
      gdsc: {
        company: "SFU Google Developer Student Club",
        role: "Gast-Mentor",
        duration: "März 2026",
        about: "GDSC ist eine von Google unterstützte Studenten-Community an der SFU.",
        description1: "Unterstützung von Studierenden bei der Suche und Vorbereitung auf ihr erstes Praktikum."
      }`;

const frData = `
      infoblox: {
        company: "Infoblox · Temps plein permanent",
        role: "Ingénieur logiciel associé",
        duration: "Mars 2026 - Présent",
        about: "Infoblox est une entreprise de mise en réseau axée sur le cloud, spécialisée dans la gestion DNS, DHCP et des adresses IP (DDI) ainsi que dans la cybersécurité.",
        description1: "Création et maintenance de microservices backend en Go (Golang), déployés sur Kubernetes via des charts Helm et surveillés avec des tableaux de bord Grafana et des alertes.",
        description2: "Conception de pipelines de données basés sur les événements utilisant Kafka pour le traitement asynchrone des messages à travers des services distribués.",
        description3: "Responsable du développement des fonctionnalités frontend en Angular, architecture de micro-frontends pour un déploiement indépendant et une interface utilisateur cohérente entre les équipes.",
        description4: "Intégration avec Databricks pour interroger et ingérer des ensembles de données à grande échelle pour des analyses en aval."
      },
      gdsc: {
        company: "SFU Google Developer Student Club",
        role: "Mentor invité",
        duration: "Mars 2026",
        about: "GDSC est une communauté étudiante soutenue par Google à la SFU.",
        description1: "Aidé les étudiants à naviguer dans le processus d'obtention de leur premier stage."
      }`;

let content = fs.readFileSync('app/i18n/dictionaries.ts', 'utf-8');

// Insert type definition
content = content.replace(/    sfu: \{\s*company: string;\s*role: string;\s*duration: string;\s*about: string;\s*description1: string;\s*description2: string;\s*description3: string;\s*description4: string;\s*\};/m, (match) => match + '\n' + tsType);

// Insert Data
let replaceCount = 0;
content = content.replace(/      sfu: \{[\s\S]*?description4: [\s\S]*?\"\n      \}/g, (match) => {
  replaceCount++;
  if (replaceCount === 1) return match + ',\n' + enData;
  if (replaceCount === 2) return match + ',\n' + deData;
  if (replaceCount === 3) return match + ',\n' + frData;
  return match;
});

fs.writeFileSync('app/i18n/dictionaries.ts', content);
