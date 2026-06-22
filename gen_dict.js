const fs = require('fs');
const keys = JSON.parse(fs.readFileSync('keys.json', 'utf-8'));

// Minimal translation dictionary for German and French
const translations = {
  de: {
    "Frontend framework": "Frontend-Framework",
    "JS transpiler": "JS-Transpiler",
    "Web styling": "Web-Styling",
    "E2E testing": "E2E-Testing",
    "Backend language": "Backend-Sprache",
    "Template engine": "Template-Engine",
    "Web markup": "Web-Markup",
    "Unit testing": "Unit-Testing",
    "Web scripting": "Web-Skripting",
    "Relational database": "Relationale Datenbank",
    "React framework": "React-Framework",
    "State management": "State-Management",
    "JS runtime": "JS-Laufzeitumgebung",
    "CSS processor": "CSS-Prozessor",
    "Database ORM": "Datenbank-ORM",
    "UI library": "UI-Bibliothek",
    "Mobile framework": "Mobile-Framework",
    "Systems language": "Systemsprache",
    "Reactive programming": "Reaktive Programmierung",
    "CSS preprocessor": "CSS-Präprozessor",
    "Query language": "Abfragesprache",
    "Embedded database": "Eingebettete Datenbank",
    "Typed JavaScript": "Typisiertes JavaScript",
    "Config automation": "Konfigurationsautomatisierung",
    "Cloud platform": "Cloud-Plattform",
    "Containerization": "Containerisierung",
    "CI/CD pipelines": "CI/CD-Pipelines",
    "Metrics visualization": "Metrik-Visualisierung",
    "K8s packaging": "K8s-Paketierung",
    "CI/CD automation": "CI/CD-Automatisierung",
    "Container orchestration": "Container-Orchestrierung",
    "Artifact repository": "Artefakt-Repository",
    "Metrics monitoring": "Metrik-Überwachung",
    "Code quality": "Code-Qualität",
    "Infrastructure as code": "Infrastruktur als Code",
    "Big data processing": "Big-Data-Verarbeitung",
    "Gradient boosting": "Gradient Boosting",
    "Cloud notebooks": "Cloud-Notebooks",
    "Interactive notebooks": "Interaktive Notebooks",
    "Neural network API": "Neuronale Netz-API",
    "Data visualization": "Datenvisualisierung",
    "Numerical computing": "Numerisches Rechnen",
    "Data analysis": "Datenanalyse",
    "Data language": "Datensprache",
    "Deep learning": "Deep Learning",
    "ML library": "ML-Bibliothek",
    "Scientific computing": "Wissenschaftliches Rechnen",
    "ML framework": "ML-Framework"
  },
  fr: {
    "Frontend framework": "Framework Frontend",
    "JS transpiler": "Transpileur JS",
    "Web styling": "Style Web",
    "E2E testing": "Tests E2E",
    "Backend language": "Langage Backend",
    "Template engine": "Moteur de templates",
    "Web markup": "Balisage Web",
    "Unit testing": "Tests unitaires",
    "Web scripting": "Scripting Web",
    "Relational database": "Base de données relationnelle",
    "React framework": "Framework React",
    "State management": "Gestion d'état",
    "JS runtime": "Environnement d'exécution JS",
    "CSS processor": "Processeur CSS",
    "Database ORM": "ORM de base de données",
    "UI library": "Bibliothèque UI",
    "Mobile framework": "Framework mobile",
    "Systems language": "Langage système",
    "Reactive programming": "Programmation réactive",
    "CSS preprocessor": "Préprocesseur CSS",
    "Query language": "Langage de requête",
    "Embedded database": "Base de données embarquée",
    "Typed JavaScript": "JavaScript typé",
    "Config automation": "Automatisation de la configuration",
    "Cloud platform": "Plateforme cloud",
    "Containerization": "Conteneurisation",
    "CI/CD pipelines": "Pipelines CI/CD",
    "Metrics visualization": "Visualisation de métriques",
    "K8s packaging": "Package K8s",
    "CI/CD automation": "Automatisation CI/CD",
    "Container orchestration": "Orchestration de conteneurs",
    "Artifact repository": "Référentiel d'artefacts",
    "Metrics monitoring": "Surveillance des métriques",
    "Code quality": "Qualité du code",
    "Infrastructure as code": "Infrastructure en tant que code",
    "Big data processing": "Traitement de métadonnées",
    "Gradient boosting": "Gradient boosting",
    "Cloud notebooks": "Notebooks cloud",
    "Interactive notebooks": "Notebooks interactifs",
    "Neural network API": "API de réseaux de neurones",
    "Data visualization": "Visualisation de données",
    "Numerical computing": "Calcul numérique",
    "Data analysis": "Analyse de données",
    "Data language": "Langage de données",
    "Deep learning": "Apprentissage profond",
    "ML library": "Bibliothèque ML",
    "Scientific computing": "Calcul scientifique",
    "ML framework": "Framework ML"
  }
};

let enOutput = 'tooltips: {\n';
let deOutput = 'tooltips: {\n';
let frOutput = 'tooltips: {\n';
let tsType = 'tooltips: {\n';

for (const [desc, key] of Object.entries(keys)) {
  tsType += `  ${key}: string;\n`;
  enOutput += `  ${key}: "${desc}",\n`;
  deOutput += `  ${key}: "${translations.de[desc]}",\n`;
  frOutput += `  ${key}: "${translations.fr[desc]}",\n`;
}
tsType += '}';
enOutput += '}';
deOutput += '}';
frOutput += '}';

fs.writeFileSync('dict_updates.txt', `TYPE:\n${tsType}\n\nEN:\n${enOutput}\n\nDE:\n${deOutput}\n\nFR:\n${frOutput}`);

let dataContent = fs.readFileSync('app/data/skillsData.ts', 'utf-8');
dataContent = dataContent.replace(/description:\s*"([^"]+)"/g, (match, desc) => `description: "${keys[desc]}"`);
fs.writeFileSync('app/data/skillsData.ts', dataContent);
