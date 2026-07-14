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
    location: string;
    relocation: string;
    downloadResume: string;
  };
experience: {
    heading: string;
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
    ifs: {
      company: string;
      role: string;
      duration: string;
      about: string;
      description1: string;
      description2: string;
      description3: string;
    };

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
    };

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
    };
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
    sending: string;
    success: string;
    error: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorTitle: string;
    errorBody: string;
    tryAgain: string;
    direct: string;
    socials: string;
    pages: string;
  };
rights: {
    allRightsReserved: string;
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
  tooltips: {
    frontendFramework: string;
    jsTranspiler: string;
    webStyling: string;
    e2eTesting: string;
    backendLanguage: string;
    templateEngine: string;
    webMarkup: string;
    unitTesting: string;
    webScripting: string;
    relationalDatabase: string;
    reactFramework: string;
    stateManagement: string;
    jsRuntime: string;
    cssProcessor: string;
    databaseORM: string;
    uiLibrary: string;
    mobileFramework: string;
    systemsLanguage: string;
    reactiveProgramming: string;
    cssPreprocessor: string;
    queryLanguage: string;
    embeddedDatabase: string;
    typedJavaScript: string;
    configAutomation: string;
    cloudPlatform: string;
    containerization: string;
    ciCDPipelines: string;
    metricsVisualization: string;
    k8sPackaging: string;
    ciCDAutomation: string;
    containerOrchestration: string;
    artifactRepository: string;
    metricsMonitoring: string;
    codeQuality: string;
    infrastructureAsCode: string;
    bigDataProcessing: string;
    gradientBoosting: string;
    cloudNotebooks: string;
    interactiveNotebooks: string;
    neuralNetworkAPI: string;
    dataVisualization: string;
    numericalComputing: string;
    dataAnalysis: string;
    dataLanguage: string;
    deepLearning: string;
    mlLibrary: string;
    scientificComputing: string;
    mlFramework: string;
  }
  };
  projectFooter: {
    heading: string;
    subheading: string;
    submit: string;
    overview: string;
    technologies: string;
  };
};

//  = non-breaking space (was &nbsp; in the original Hero markup).
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
experience: {
      heading: 'EXPERIENCE',
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
      ifs: {
        company: 'IFS Copperleaf · Internship',
        role: 'Software Developer Intern',
        duration: 'May 2024 - Dec 2024',
        about: 'IFS Copperleaf is an enterprise SaaS company providing AI-driven asset investment planning and decision analytics for critical infrastructure.',
        description1: "Contributed to the development of a scalable design system using Angular and TypeScript, building reusable components to improve UI consistency across the company's applications.",
        description2: "Assisted in implementing state management solutions using NgRx and integrated RxJS for reactive programming to handle asynchronous operations and streamline data-fetching workflows.",
        description3: "Supported fullstack development for a mission-critical visual regression testing platform using Prisma with NestJS and PostgreSQL in a Docker environment, refining SQL migration scripts and leveraging pgAdmin for effective database management."
      },

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
      },

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
      }
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
      sending: 'Sending…',
      success: 'Thanks! Your message has been sent.',
      error: 'Something went wrong. Please try again or email me directly.',
      successTitle: 'Message sent!',
      successBody: "Thanks for reaching out. I'll get back to you soon.",
      sendAnother: 'Send another message',
      errorTitle: 'Something went wrong',
      errorBody: 'Please try again or contact me directly at',
      tryAgain: 'Try again',
      direct: 'Direct',
      socials: 'Socials',
      pages: 'Pages',
    },
rights: {
      allRightsReserved: 'All Rights Reserved.',
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
    },
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
    tooltips: {
      frontendFramework: "Frontend framework",
      jsTranspiler: "JS transpiler",
      webStyling: "Web styling",
      e2eTesting: "E2E testing",
      backendLanguage: "Backend language",
      templateEngine: "Template engine",
      webMarkup: "Web markup",
      unitTesting: "Unit testing",
      webScripting: "Web scripting",
      relationalDatabase: "Relational database",
      reactFramework: "React framework",
      stateManagement: "State management",
      jsRuntime: "JS runtime",
      cssProcessor: "CSS processor",
      databaseORM: "Database ORM",
      uiLibrary: "UI library",
      mobileFramework: "Mobile framework",
      systemsLanguage: "Systems language",
      reactiveProgramming: "Reactive programming",
      cssPreprocessor: "CSS preprocessor",
      queryLanguage: "Query language",
      embeddedDatabase: "Embedded database",
      typedJavaScript: "Typed JavaScript",
      configAutomation: "Config automation",
      cloudPlatform: "Cloud platform",
      containerization: "Containerization",
      ciCDPipelines: "CI/CD pipelines",
      metricsVisualization: "Metrics visualization",
      k8sPackaging: "K8s packaging",
      ciCDAutomation: "CI/CD automation",
      containerOrchestration: "Container orchestration",
      artifactRepository: "Artifact repository",
      metricsMonitoring: "Metrics monitoring",
      codeQuality: "Code quality",
      infrastructureAsCode: "Infrastructure as code",
      bigDataProcessing: "Big data processing",
      gradientBoosting: "Gradient boosting",
      cloudNotebooks: "Cloud notebooks",
      interactiveNotebooks: "Interactive notebooks",
      neuralNetworkAPI: "Neural network API",
      dataVisualization: "Data visualization",
      numericalComputing: "Numerical computing",
      dataAnalysis: "Data analysis",
      dataLanguage: "Data language",
      deepLearning: "Deep learning",
      mlLibrary: "ML library",
      scientificComputing: "Scientific computing",
      mlFramework: "ML framework",
    }
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
      location: 'Vancouver, BC  🇨🇦',
      relocation: 'Open to relocation  🇺🇸 / 🇨🇭 / 🇨🇦',
      downloadResume: 'Download Resume',
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
experience: {
      heading: 'ERFAHRUNG',
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
      ifs: {
        company: 'IFS Copperleaf · Praktikum',
        role: 'Praktikant Softwareentwicklung',
        duration: 'Mai 2024 - Dez 2024',
        about: 'IFS Copperleaf ist ein Enterprise-SaaS-Unternehmen, das KI-gestützte Asset-Investmentplanung und Entscheidungsanalyse für kritische Infrastrukturen anbietet.',
        description1: "Mitentwicklung eines skalierbaren Design-Systems auf Basis von Angular und TypeScript durch Aufbau wiederverwendbarer Komponenten zur Verbesserung der UI-Konsistenz in den Anwendungen des Unternehmens.",
        description2: "Unterstützung bei der Implementierung von State-Management-Lösungen mit NgRx sowie Integration von RxJS für reaktive Programmierung, um asynchrone Operationen zu handhaben und Datenabruf-Workflows zu optimieren.",
        description3: "Unterstützung der Fullstack-Entwicklung einer geschäftskritischen Plattform für visuelle Regressionstests mit Prisma, NestJS und PostgreSQL in einer Docker-Umgebung; Verfeinerung von SQL-Migrationsskripten und Nutzung von pgAdmin für effizientes Datenbankmanagement."
      },

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
      },

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
      }
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
      sending: 'Wird gesendet…',
      success: 'Danke! Deine Nachricht wurde gesendet.',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe mir direkt.',
      successTitle: 'Nachricht gesendet!',
      successBody: 'Danke für deine Nachricht. Ich melde mich bald bei dir.',
      sendAnother: 'Weitere Nachricht senden',
      errorTitle: 'Etwas ist schiefgelaufen',
      errorBody: 'Bitte versuche es erneut oder kontaktiere mich direkt unter',
      tryAgain: 'Erneut versuchen',
      direct: 'Direkt',
      socials: 'Social Media',
      pages: 'Seiten',
    },
rights: {
      allRightsReserved: 'Alle Rechte vorbehalten.',
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
      tech: {
        stack: {
          react: 'Bibliothèque d\'interface utilisateur',
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
    },
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
    tooltips: {
      frontendFramework: "Frontend-Framework",
      jsTranspiler: "JS-Transpiler",
      webStyling: "Web-Styling",
      e2eTesting: "E2E-Testing",
      backendLanguage: "Backend-Sprache",
      templateEngine: "Template-Engine",
      webMarkup: "Web-Markup",
      unitTesting: "Unit-Testing",
      webScripting: "Web-Skripting",
      relationalDatabase: "Relationale Datenbank",
      reactFramework: "React-Framework",
      stateManagement: "State-Management",
      jsRuntime: "JS-Laufzeitumgebung",
      cssProcessor: "CSS-Prozessor",
      databaseORM: "Datenbank-ORM",
      uiLibrary: "UI-Bibliothek",
      mobileFramework: "Mobile-Framework",
      systemsLanguage: "Systemsprache",
      reactiveProgramming: "Reaktive Programmierung",
      cssPreprocessor: "CSS-Präprozessor",
      queryLanguage: "Abfragesprache",
      embeddedDatabase: "Eingebettete Datenbank",
      typedJavaScript: "Typisiertes JavaScript",
      configAutomation: "Konfigurationsautomatisierung",
      cloudPlatform: "Cloud-Plattform",
      containerization: "Containerisierung",
      ciCDPipelines: "CI/CD-Pipelines",
      metricsVisualization: "Metrik-Visualisierung",
      k8sPackaging: "K8s-Paketierung",
      ciCDAutomation: "CI/CD-Automatisierung",
      containerOrchestration: "Container-Orchestrierung",
      artifactRepository: "Artefakt-Repository",
      metricsMonitoring: "Metrik-Überwachung",
      codeQuality: "Code-Qualität",
      infrastructureAsCode: "Infrastruktur als Code",
      bigDataProcessing: "Big-Data-Verarbeitung",
      gradientBoosting: "Gradient Boosting",
      cloudNotebooks: "Cloud-Notebooks",
      interactiveNotebooks: "Interaktive Notebooks",
      neuralNetworkAPI: "Neuronale Netz-API",
      dataVisualization: "Datenvisualisierung",
      numericalComputing: "Numerisches Rechnen",
      dataAnalysis: "Datenanalyse",
      dataLanguage: "Datensprache",
      deepLearning: "Deep Learning",
      mlLibrary: "ML-Bibliothek",
      scientificComputing: "Wissenschaftliches Rechnen",
      mlFramework: "ML-Framework",
    }
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
      location: 'Vancouver, BC  🇨🇦',
      relocation: 'Umzugsbereit  🇺🇸 / 🇨🇭 / 🇨🇦',
      downloadResume: 'Lebenslauf herunterladen',
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
experience: {
      heading: 'EXPÉRIENCE',
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
      ifs: {
        company: 'IFS Copperleaf · Stage',
        role: 'Stagiaire en développement logiciel',
        duration: 'Mai 2024 - Déc 2024',
        about: "IFS Copperleaf est une entreprise SaaS fournissant une planification des investissements en actifs basée sur l'IA et des analyses décisionnelles pour les infrastructures critiques.",
        description1: "Contribué au développement d’un design system évolutif utilisant Angular et TypeScript, en créant des composants réutilisables afin d’améliorer la cohérence de l’interface utilisateur dans les applications de l’entreprise.",
        description2: "Aidé à la mise en place de solutions de gestion d’état avec NgRx et intégré RxJS pour la programmation réactive afin de gérer les opérations asynchrones et simplifier les flux de récupération des données.",
        description3: "Soutenu le développement full-stack d’une plateforme critique de tests de régression visuelle en utilisant Prisma avec NestJS et PostgreSQL dans un environnement Docker, en améliorant les scripts de migration SQL et en utilisant pgAdmin pour une gestion efficace des bases de données."
      },

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
      },

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
      }
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
      sending: 'Envoi…',
      success: 'Merci ! Votre message a été envoyé.',
      error: "Une erreur s'est produite. Veuillez réessayer ou m'écrire directement.",
      successTitle: 'Message envoyé !',
      successBody: 'Merci de votre message. Je vous répondrai bientôt.',
      sendAnother: 'Envoyer un autre message',
      errorTitle: "Une erreur s'est produite",
      errorBody: 'Veuillez réessayer ou me contacter directement à',
      tryAgain: 'Réessayer',
      direct: 'Direct',
      socials: 'Réseaux',
      pages: 'Pages',
    },
rights: {
      allRightsReserved: 'Tous droits réservés.',
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
      tech: {
        stack: {
          react: 'Bibliothèque d\'interface utilisateur',
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
    },
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
      heroEyebrow: 'Projet d\'analyse de données',
      keyFindings: 'Résultats clés',
      findings: {
        correlation: {
          title: 'Analyse de corrélation',
          description: 'Identification de fortes corrélations entre des facteurs démographiques spécifiques et le risque de défaut de crédit.'
        },
        creditHistory: {
          title: 'Impact de l\'historique de crédit',
          description: 'Les données de crédit historiques ont été le prédicteur le plus significatif de la performance future du prêt.'
        },
        conclusion: {
          title: 'Conclusion',
          description: 'Les informations ont guidé le développement d\'un modèle de notation de crédit plus précis.'
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
    tooltips: {
      frontendFramework: "Framework Frontend",
      jsTranspiler: "Transpileur JS",
      webStyling: "Style Web",
      e2eTesting: "Tests E2E",
      backendLanguage: "Langage Backend",
      templateEngine: "Moteur de templates",
      webMarkup: "Balisage Web",
      unitTesting: "Tests unitaires",
      webScripting: "Scripting Web",
      relationalDatabase: "Base de données relationnelle",
      reactFramework: "Framework React",
      stateManagement: "Gestion d'état",
      jsRuntime: "Environnement d'exécution JS",
      cssProcessor: "Processeur CSS",
      databaseORM: "ORM de base de données",
      uiLibrary: "Bibliothèque UI",
      mobileFramework: "Framework mobile",
      systemsLanguage: "Langage système",
      reactiveProgramming: "Programmation réactive",
      cssPreprocessor: "Préprocesseur CSS",
      queryLanguage: "Langage de requête",
      embeddedDatabase: "Base de données embarquée",
      typedJavaScript: "JavaScript typé",
      configAutomation: "Automatisation de la configuration",
      cloudPlatform: "Plateforme cloud",
      containerization: "Conteneurisation",
      ciCDPipelines: "Pipelines CI/CD",
      metricsVisualization: "Visualisation de métriques",
      k8sPackaging: "Package K8s",
      ciCDAutomation: "Automatisation CI/CD",
      containerOrchestration: "Orchestration de conteneurs",
      artifactRepository: "Référentiel d'artefacts",
      metricsMonitoring: "Surveillance des métriques",
      codeQuality: "Qualité du code",
      infrastructureAsCode: "Infrastructure en tant que code",
      bigDataProcessing: "Traitement de métadonnées",
      gradientBoosting: "Gradient boosting",
      cloudNotebooks: "Notebooks cloud",
      interactiveNotebooks: "Notebooks interactifs",
      neuralNetworkAPI: "API de réseaux de neurones",
      dataVisualization: "Visualisation de données",
      numericalComputing: "Calcul numérique",
      dataAnalysis: "Analyse de données",
      dataLanguage: "Langage de données",
      deepLearning: "Apprentissage profond",
      mlLibrary: "Bibliothèque ML",
      scientificComputing: "Calcul scientifique",
      mlFramework: "Framework ML",
    }
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
      location: 'Vancouver, BC  🇨🇦',
      relocation: 'Ouvert à la relocalisation  🇺🇸 / 🇨🇭 / 🇨🇦',
      downloadResume: 'Télécharger le CV',
      description: 'SWE I @ Infoblox',
    },
  },
};
