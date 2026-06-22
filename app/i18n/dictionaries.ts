// Lightweight i18n dictionaries.
// Add new keys here (nested namespaces) and translate per locale. The English
// dictionary is the source of truth and the fallback for missing keys.

export const LOCALES = ['en', 'de', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Labels shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'En',
  de: 'De',
  fr: 'Fr',
};

type Dictionary = {
  nav: {
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contacts: string;
  };
  header: {
    home: string;
    openMenu: string;
    closeMenu: string;
    back: string;
    backToHome: string;
  };
  hero: {
    subtitle: string;
    description: string;
  };
  education: {
    heading: string;
    degree: string;
    description: string;
    gpa: string;
    presidents: string;
    deans: string;
    campusAlt: string;
  };
  languages: {
    heading: string;
    english: string;
    russian: string;
    french: string;
    bilingual: string;
    intermediate: string;
  };
  footer: {
    heading: string;
    subheading: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    direct: string;
    socials: string;
    pages: string;
  };
  references: {
    heading: string;
  };
  projects: {
    heading: string;
    catSoftware: string;
    catCloud: string;
    catData: string;
    subtitleReact: string;
    subtitleGo: string;
    inProgress: string;
    workInProgress: string;
    showMore: string;
    showLess: string;
  };
  techSection: {
    usedHeading: string;
    heading: string;
    coreStack: string;
    librariesTooling: string;
  };
  reactBurger: {
    description: string;
    featuresHeading: string;
    features: {
      dragDrop: { title: string; description: string };
      state: { title: string; description: string };
      testing: { title: string; description: string };
      auth: { title: string; description: string };
      liveData: { title: string; description: string };
      deploy: { title: string; description: string };
    };
    tech: {
      stack: { react: string; typescript: string; redux: string; cypress: string; jest: string };
      badges: {
        reactRouter: string;
        reactDnd: string;
        contextApi: string;
        websockets: string;
        jwts: string;
      };
    };
  };
  projectFooter: {
    heading: string;
    subheading: string;
    submit: string;
    overview: string;
    technologies: string;
  };
};

//   = non-breaking space (was &nbsp; in the original Hero markup).
export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contacts: 'Contacts',
    },
    header: {
      home: 'Home',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      back: 'Back',
      backToHome: 'Back to home',
    },
    education: {
      heading: 'Education',
      degree: 'BSc with Distinction · Computing Science',
      description:
        'Computing Science graduate from Simon Fraser University, specializing in algorithms, AI, and software development.',
      gpa: 'GPA 3.57',
      presidents: "President's Honour Roll (4.0+ GPA): Fall 2023",
      deans: "Dean's Honour Roll (3.5+ GPA): Spring 2025, Summer 2025, Fall 2025",
      campusAlt: 'Simon Fraser University campus',
    },
    languages: {
      heading: 'Languages',
      english: 'English',
      russian: 'Russian',
      french: 'French',
      bilingual: 'Bilingual proficiency',
      intermediate: 'Intermediate proficiency',
    },
    footer: {
      heading: 'Have a project in mind?',
      subheading: 'Feel free to contact me via the form below or directly.',
      nameLabel: 'Full Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      messagePlaceholder: 'Hello Anton...',
      send: 'Send Message',
      direct: 'Direct',
      socials: 'Socials',
      pages: 'Pages',
    },
    references: {
      heading: 'References',
    },
    projects: {
      heading: 'Projects',
      catSoftware: 'Software Development',
      catCloud: 'Cloud & DevOps',
      catData: 'Data Science',
      subtitleReact: 'React Application',
      subtitleGo: 'Go Application',
      inProgress: 'In Progress',
      workInProgress: 'Work in progress',
      showMore: 'Show more',
      showLess: 'Show less',
    },
    reactBurger: {
      description:
        'A full-stack burger-ordering SPA built with React, featuring drag-and-drop ingredient selection, real-time order tracking, and JWT-secured accounts.',
      featuresHeading: 'Key Features',
      features: {
        dragDrop: {
          title: 'Drag & Drop',
          description:
            'Assemble a burger by dragging ingredients straight into the constructor. React DnD manages the drag sources, drop targets, and live reordering, so composing and rearranging a build feels natural and responsive.',
        },
        state: {
          title: 'State & Localization',
          description:
            'Global state is centralised with Redux and @reduxjs/toolkit, keeping the cart, ingredients, and order flow predictable, while the React Context API powers in-app translations for a fully multilingual interface.',
        },
        testing: {
          title: 'Testing',
          description:
            'A two-layer test suite keeps changes safe: Cypress drives end-to-end flows through the real UI, while Jest covers units and reducers — together guarding against regressions on every commit.',
        },
        auth: {
          title: 'Auth',
          description:
            'Registration and login are secured with JSON Web Tokens. Tokens are stored securely and attached to protected requests, with guarded routes that redirect unauthenticated users away from private pages.',
        },
        liveData: {
          title: 'Live Data',
          description:
            "A persistent WebSocket connection streams the public order feed and the user's personal order history in real time, so statuses update instantly with no manual refreshes or polling.",
        },
        deploy: {
          title: 'CD / Deploy',
          description:
            'Continuous delivery ships the app to GitHub Pages, turning every push to the main branch into an automated build and deploy for fast, repeatable releases.',
        },
      },
    },
    projectFooter: {
      heading: 'Have any project in mind?',
      subheading: "I'm available for freelancing",
      submit: 'Submit',
      overview: 'Overview',
      technologies: 'Technologies',
    },
    hero: {
      subtitle: 'Software Developer',
      description: 'SWE I @ Infoblox',
    },
  },
  de: {
    nav: {
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      projects: 'Projekte',
      education: 'Ausbildung',
      contacts: 'Kontakt',
    },
    header: {
      home: 'Startseite',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      back: 'Zurück',
      backToHome: 'Zurück zur Startseite',
    },
    education: {
      heading: 'Ausbildung',
      degree: 'BSc mit Auszeichnung · Informatik',
      description:
        'Informatik-Absolvent der Simon Fraser University mit Schwerpunkt auf Algorithmen, KI und Softwareentwicklung.',
      gpa: 'GPA 3,57',
      presidents: "President's Honour Roll (4,0+ GPA): Herbst 2023",
      deans: "Dean's Honour Roll (3,5+ GPA): Frühjahr 2025, Sommer 2025, Herbst 2025",
      campusAlt: 'Campus der Simon Fraser University',
    },
    languages: {
      heading: 'Sprachen',
      english: 'Englisch',
      russian: 'Russisch',
      french: 'Französisch',
      bilingual: 'Zweisprachige Kenntnisse',
      intermediate: 'Mittlere Kenntnisse',
    },
    footer: {
      heading: 'Hast du ein Projekt im Kopf?',
      subheading: 'Kontaktiere mich gerne über das Formular unten oder direkt.',
      nameLabel: 'Vollständiger Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Max Mustermann',
      emailPlaceholder: 'max@example.com',
      messagePlaceholder: 'Hallo Anton...',
      send: 'Nachricht senden',
      direct: 'Direkt',
      socials: 'Social Media',
      pages: 'Seiten',
    },
    references: {
      heading: 'Referenzen',
    },
    projects: {
      heading: 'Projekte',
      catSoftware: 'Softwareentwicklung',
      catCloud: 'Cloud & DevOps',
      catData: 'Data Science',
      subtitleReact: 'React-Anwendung',
      subtitleGo: 'Go-Anwendung',
      inProgress: 'In Bearbeitung',
      workInProgress: 'In Arbeit',
      showMore: 'Mehr anzeigen',
      showLess: 'Weniger anzeigen',
    },
    reactBurger: {
      description:
        'Eine Full-Stack-SPA zur Burger-Bestellung, entwickelt mit React – mit Drag-and-Drop-Zutatenauswahl, Echtzeit-Bestellverfolgung und JWT-gesicherten Konten.',
      featuresHeading: 'Hauptfunktionen',
      features: {
        dragDrop: {
          title: 'Drag & Drop',
          description:
            'Stelle einen Burger zusammen, indem du Zutaten direkt in den Konstruktor ziehst. React DnD verwaltet Drag-Quellen, Drop-Ziele und die Live-Neuanordnung, sodass sich das Zusammenstellen und Umsortieren natürlich und reaktionsschnell anfühlt.',
        },
        state: {
          title: 'State & Lokalisierung',
          description:
            'Der globale State wird mit Redux und @reduxjs/toolkit zentralisiert, was Warenkorb, Zutaten und Bestellablauf vorhersehbar hält, während die React Context API In-App-Übersetzungen für eine vollständig mehrsprachige Oberfläche bereitstellt.',
        },
        testing: {
          title: 'Testing',
          description:
            'Eine zweischichtige Testsuite hält Änderungen sicher: Cypress steuert End-to-End-Abläufe über die echte UI, während Jest Units und Reducer abdeckt – gemeinsam schützen sie bei jedem Commit vor Regressionen.',
        },
        auth: {
          title: 'Authentifizierung',
          description:
            'Registrierung und Anmeldung werden mit JSON Web Tokens abgesichert. Tokens werden sicher gespeichert und an geschützte Anfragen angehängt, mit abgesicherten Routen, die nicht authentifizierte Nutzer von privaten Seiten wegleiten.',
        },
        liveData: {
          title: 'Live-Daten',
          description:
            'Eine dauerhafte WebSocket-Verbindung streamt den öffentlichen Bestell-Feed und die persönliche Bestellhistorie des Nutzers in Echtzeit, sodass sich Status sofort aktualisieren – ohne manuelles Neuladen oder Polling.',
        },
        deploy: {
          title: 'CD / Deployment',
          description:
            'Continuous Delivery liefert die App auf GitHub Pages aus und macht aus jedem Push auf den main-Branch einen automatisierten Build und Deploy für schnelle, wiederholbare Releases.',
        },
      },
    },
    projectFooter: {
      heading: 'Hast du ein Projekt im Kopf?',
      subheading: 'Ich bin für freiberufliche Projekte verfügbar.',
      submit: 'Senden',
      overview: 'Übersicht',
      technologies: 'Technologien',
    },
    hero: {
      subtitle: 'Softwareentwickler',
      description: 'SWE I @ Infoblox',
    },
  },
  fr: {
    nav: {
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      contacts: 'Contact',
    },
    header: {
      home: 'Accueil',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      back: 'Retour',
      backToHome: "Retour à l'accueil",
    },
    education: {
      heading: 'Formation',
      degree: 'BSc avec distinction · Informatique',
      description:
        'Diplômé en informatique de la Simon Fraser University, spécialisé en algorithmes, IA et développement logiciel.',
      gpa: 'GPA 3,57',
      presidents: "President's Honour Roll (4,0+ GPA) : automne 2023",
      deans: "Dean's Honour Roll (3,5+ GPA) : printemps 2025, été 2025, automne 2025",
      campusAlt: 'Campus de la Simon Fraser University',
    },
    languages: {
      heading: 'Langues',
      english: 'Anglais',
      russian: 'Russe',
      french: 'Français',
      bilingual: 'Bilingue',
      intermediate: 'Niveau intermédiaire',
    },
    footer: {
      heading: 'Vous avez un projet en tête ?',
      subheading: "N'hésitez pas à me contacter via le formulaire ci-dessous ou directement.",
      nameLabel: 'Nom complet',
      emailLabel: 'E-mail',
      messageLabel: 'Message',
      namePlaceholder: 'Jean Dupont',
      emailPlaceholder: 'jean@example.com',
      messagePlaceholder: 'Bonjour Anton...',
      send: 'Envoyer le message',
      direct: 'Direct',
      socials: 'Réseaux',
      pages: 'Pages',
    },
    references: {
      heading: 'Références',
    },
    projects: {
      heading: 'Projets',
      catSoftware: 'Développement logiciel',
      catCloud: 'Cloud & DevOps',
      catData: 'Data Science',
      subtitleReact: 'Application React',
      subtitleGo: 'Application Go',
      inProgress: 'En cours',
      workInProgress: 'En cours de réalisation',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
    },
    reactBurger: {
      description:
        'Une SPA full-stack de commande de burgers développée avec React, avec sélection des ingrédients par glisser-déposer, suivi des commandes en temps réel et comptes sécurisés par JWT.',
      featuresHeading: 'Fonctionnalités clés',
      features: {
        dragDrop: {
          title: 'Glisser-déposer',
          description:
            "Composez un burger en glissant les ingrédients directement dans le constructeur. React DnD gère les sources de glissement, les cibles de dépôt et le réordonnancement en direct, ce qui rend la composition et la réorganisation naturelles et réactives.",
        },
        state: {
          title: 'État & localisation',
          description:
            "L'état global est centralisé avec Redux et @reduxjs/toolkit, ce qui rend le panier, les ingrédients et le flux de commande prévisibles, tandis que la React Context API alimente les traductions intégrées pour une interface entièrement multilingue.",
        },
        testing: {
          title: 'Tests',
          description:
            "Une suite de tests à deux niveaux sécurise les changements : Cypress pilote les parcours de bout en bout via l'interface réelle, tandis que Jest couvre les unités et les reducers — ensemble, ils protègent contre les régressions à chaque commit.",
        },
        auth: {
          title: 'Authentification',
          description:
            "L'inscription et la connexion sont sécurisées par des JSON Web Tokens. Les tokens sont stockés de manière sécurisée et joints aux requêtes protégées, avec des routes gardées qui redirigent les utilisateurs non authentifiés hors des pages privées.",
        },
        liveData: {
          title: 'Données en temps réel',
          description:
            "Une connexion WebSocket persistante diffuse le flux public des commandes et l'historique personnel de l'utilisateur en temps réel, de sorte que les statuts se mettent à jour instantanément, sans rafraîchissement manuel ni polling.",
        },
        deploy: {
          title: 'CD / Déploiement',
          description:
            "La livraison continue déploie l'application sur GitHub Pages, transformant chaque push sur la branche main en build et déploiement automatisés pour des releases rapides et reproductibles.",
        },
      },
    },
    projectFooter: {
      heading: 'Vous avez un projet en tête ?',
      subheading: 'Je suis disponible pour des missions en freelance.',
      submit: 'Envoyer',
      overview: 'Aperçu',
      technologies: 'Technologies',
    },
    hero: {
      subtitle: 'Développeur logiciel',
      description: 'SWE I @ Infoblox',
    },
  },
};
