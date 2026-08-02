import { CategoryKey } from "@/app/data/categories";

interface Skill {
  /** Public URL of the logo SVG. Served as a plain <img> so the ~340 kB of
   *  inlined SVG markup stays out of the JS bundle and loads lazily. */
  icon: string;
  /**
   * Optional light-mode override. Some logos are near-white and disappear on the
   * light background, so we swap in a dark-colored variant served from /public.
   */
  lightIcon?: string;
  /** Hide this skill entirely in light mode (e.g. logo has no usable light variant). */
  hideInLight?: boolean;
  name: string;
  description: string;
}

interface Category {
  /** Matches a key in CATEGORY_META, which supplies the tab icon and label. */
  key: CategoryKey;
  skills: Skill[];
}

/**
 * A handful of skills appear under two categories on purpose — Python and the
 * container stack genuinely belong to both the services and the infrastructure
 * story, and a reader scanning a single tab shouldn't have to infer them.
 */
const skillsData: Category[] = [
  {
    key: "backend",
    skills: [
      { icon: "/icons/data_science/c.svg",           name: "C",             description: "systemsLanguage"       },
      { icon: "/icons/data_science/cpp.svg",         name: "C++",           description: "systemsLanguage"       },
      { icon: "/icons/cloud/docker.svg",             name: "Docker",        description: "containerization"      },
      { icon: "/icons/web/go.svg",                   name: "Go",            description: "backendLanguage"       },
      { icon: "/icons/web/kafka.svg",                name: "Kafka",         description: "eventStreaming",        lightIcon: "/icons/web/kafka-light.svg" },
      { icon: "/icons/cloud/k8s.svg",                name: "Kubernetes",    description: "containerOrchestration"},
      { icon: "/icons/web/mysql.svg",                name: "MySQL",         description: "relationalDatabase"    },
      { icon: "/icons/web/nestjs.svg",               name: "NestJS",        description: "nodeFramework"         },
      { icon: "/icons/web/nodejs.svg",               name: "Node.js",       description: "jsRuntime",             lightIcon: "/icons/web/nodejs-light.svg" },
      { icon: "/icons/web/postgresql.svg",           name: "PostgreSQL",    description: "relationalDatabase"    },
      { icon: "/icons/web/prisma.svg",               name: "Prisma",        description: "databaseORM"           },
      { icon: "/icons/data_science/python.svg",      name: "Python",        description: "dataLanguage"          },
      { icon: "/icons/web/rust.svg",                 name: "Rust",          description: "systemsLanguage",       lightIcon: "/icons/web/rust-light.png" },
      { icon: "/icons/web/sql-database.svg",         name: "SQL",           description: "queryLanguage"         },
      { icon: "/icons/data_science/sqlite.svg",      name: "SQLite",        description: "embeddedDatabase"      },
    ],
  },
  {
    key: "frontend",
    skills: [
      { icon: "/icons/web/angular.svg",      name: "Angular",       description: "frontendFramework"    },
      { icon: "/icons/web/babel.svg",        name: "Babel",         description: "jsTranspiler"         },
      { icon: "/icons/web/css3.svg",         name: "CSS3",          description: "webStyling"           },
      { icon: "/icons/web/cypress.svg",      name: "Cypress",       description: "e2eTesting",           lightIcon: "/icons/web/cypress-light.svg" },
      { icon: "/icons/web/handlebarsjs.svg", name: "Handlebars",    description: "templateEngine",       lightIcon: "/icons/web/handlebars-light.png" },
      { icon: "/icons/web/html5.svg",        name: "HTML5",         description: "webMarkup"            },
      { icon: "/icons/web/jest.svg",         name: "Jest",          description: "unitTesting"          },
      { icon: "/icons/web/js.svg",           name: "JavaScript",    description: "webScripting"         },
      { icon: "/icons/web/nextjs.svg",       name: "Next.js",       description: "reactFramework"       },
      { icon: "/icons/web/ngrx.svg",         name: "NgRx",          description: "stateManagement"      },
      { icon: "/icons/web/nodejs.svg",       name: "Node.js",       description: "jsRuntime",            lightIcon: "/icons/web/nodejs-light.svg" },
      { icon: "/icons/web/postcss.svg",      name: "PostCSS",       description: "cssProcessor"         },
      { icon: "/icons/web/react.svg",        name: "React",         description: "uiLibrary",            lightIcon: "/icons/web/react-light.svg" },
      { icon: "/icons/web/react-native.svg", name: "React Native",  description: "mobileFramework"      },
      { icon: "/icons/web/redux.svg",        name: "Redux",         description: "stateManagement"      },
      { icon: "/icons/web/rxjs.svg",         name: "RxJS",          description: "reactiveProgramming"  },
      { icon: "/icons/web/sass.svg",         name: "Sass",          description: "cssPreprocessor"      },
      { icon: "/icons/web/typescript.svg",   name: "TypeScript",    description: "typedJavaScript"      },
    ],
  },
  {
    key: "mlInfra",
    skills: [
      { icon: "/icons/cloud/ansible.svg",             name: "Ansible",         description: "configAutomation"      },
      { icon: "/icons/data_science/apache.svg",       name: "Apache Spark",    description: "bigDataProcessing",     lightIcon: "/icons/data_science/apache-light.svg" },
      { icon: "/icons/cloud/aws.svg",                 name: "AWS",             description: "cloudPlatform",         lightIcon: "/icons/cloud/aws-light.svg" },
      { icon: "/icons/cloud/azure-1.svg",             name: "Azure",           description: "cloudPlatform"         },
      { icon: "/icons/data_science/catboost.svg",     name: "CatBoost",        description: "gradientBoosting"      },
      { icon: "/icons/data_science/databricks.svg",   name: "Databricks",      description: "dataPlatform"          },
      { icon: "/icons/cloud/docker.svg",              name: "Docker",          description: "containerization"      },
      { icon: "/icons/cloud/github-actions.svg",      name: "GitHub Actions",  description: "ciCDPipelines",         hideInLight: true },
      { icon: "/icons/cloud/google_cloud.svg",        name: "Google Cloud",    description: "cloudPlatform",         lightIcon: "/icons/cloud/google_cloud-light.svg" },
      { icon: "/icons/data_science/google_colab.svg", name: "Google Colab",    description: "cloudNotebooks"        },
      { icon: "/icons/cloud/grafana.svg",             name: "Grafana",         description: "metricsVisualization",  lightIcon: "/icons/cloud/grafana-light.svg" },
      { icon: "/icons/cloud/helm.svg",                name: "Helm",            description: "k8sPackaging"          },
      { icon: "/icons/cloud/jenkins.svg",             name: "Jenkins",         description: "ciCDAutomation"        },
      { icon: "/icons/data_science/jupyter.svg",      name: "Jupyter",         description: "interactiveNotebooks",  lightIcon: "/icons/data_science/jupyter-light.svg" },
      { icon: "/icons/data_science/keras.svg",        name: "Keras",           description: "neuralNetworkAPI"      },
      { icon: "/icons/cloud/k8s.svg",                 name: "Kubernetes",      description: "containerOrchestration"},
      { icon: "/icons/data_science/matplotlib.svg",   name: "Matplotlib",      description: "dataVisualization"     },
      { icon: "/icons/cloud/nexus.svg",               name: "Nexus",           description: "artifactRepository"    },
      { icon: "/icons/data_science/numpy.svg",        name: "NumPy",           description: "numericalComputing"    },
      { icon: "/icons/data_science/pandas.svg",       name: "Pandas",          description: "dataAnalysis",          lightIcon: "/icons/data_science/pandas-light.svg" },
      { icon: "/icons/cloud/prometheusio.svg",        name: "Prometheus",      description: "metricsMonitoring"     },
      { icon: "/icons/data_science/python.svg",       name: "Python",          description: "dataLanguage"          },
      { icon: "/icons/data_science/pytorch.svg",      name: "PyTorch",         description: "deepLearning",          lightIcon: "/icons/data_science/pytorch-light.svg" },
      { icon: "/icons/data_science/scikit_learn.svg", name: "Scikit-learn",    description: "mlLibrary",             lightIcon: "/icons/data_science/scikit_learn-light.svg" },
      { icon: "/icons/data_science/scipy.svg",        name: "SciPy",           description: "scientificComputing"   },
      { icon: "/icons/cloud/sonarqube.svg",           name: "SonarQube",       description: "codeQuality",           lightIcon: "/icons/cloud/sonarqube-light.svg" },
      { icon: "/icons/data_science/tensorflow.svg",   name: "TensorFlow",      description: "mlFramework"           },
      { icon: "/icons/cloud/terraform.svg",           name: "Terraform",       description: "infrastructureAsCode"  },
    ],
  },
];

export default skillsData;
