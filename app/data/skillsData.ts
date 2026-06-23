import {
  AngularIcon,
  AnsibleIcon, ApacheIcon, AtomIcon,
  AWSIcon,
  Azure1Icon,
  BabelIcon, CatBoostIcon, CIcon,
  CloudIcon, CPPIcon,
  CSS3Icon,
  CypressIcon,
  GitHubActionsIcon,
  GoIcon,
  GoogleCloudIcon, GoogleColabIcon, DockerIcon,
  GrafanaIcon,
  HandlebarsIcon,
  HelmIcon,
  HTML5Icon,
  JenkinsIcon,
  JestIcon,
  JSIcon, JupyterIcon, KerasIcon,
  KubernetesIcon, MatplotlibIcon,
  MySQLIcon,
  NextJSIcon,
  NexusIcon,
  NGRXIcon,
  NodeJSIcon, NumPyIcon, PandasIcon,
  PostCSSIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PrometheusIcon, PythonIcon, PyTorchIcon,
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon,
  RustIcon,
  RXJSIcon,
  SassIcon, ScikitLearnIcon, SciPyIcon,
  SonarQubeIcon,
  SQLDatabaseIcon,
  SQLiteIcon, TensorFlowIcon, TerraformIcon,
  TypeScriptIcon,
  WebIcon
} from "@/public/icons";
import { ComponentType } from "react";

interface Skill {
  icon: ComponentType<{ className?: string }>;
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
  category: string;
  tabIcon: ComponentType;
  skills: Skill[];
}

const skillsData: Category[] = [
  {
    category: "Software Development",
    tabIcon: WebIcon,
    skills: [
      { icon: AngularIcon,     name: "Angular",       description: "frontendFramework"    },
      { icon: BabelIcon,       name: "Babel",         description: "jsTranspiler"         },
      { icon: CSS3Icon,        name: "CSS3",          description: "webStyling"           },
      { icon: CypressIcon,     name: "Cypress",       description: "e2eTesting",           lightIcon: "/icons/web/cypress-light.svg" },
      { icon: GoIcon,          name: "Go",            description: "backendLanguage"      },
      { icon: HandlebarsIcon,  name: "Handlebars",    description: "templateEngine",       lightIcon: "/icons/web/handlebars-light.png" },
      { icon: HTML5Icon,       name: "HTML5",         description: "webMarkup"            },
      { icon: JestIcon,        name: "Jest",          description: "unitTesting"          },
      { icon: JSIcon,          name: "JavaScript",    description: "webScripting"         },
      { icon: MySQLIcon,       name: "MySQL",         description: "relationalDatabase"   },
      { icon: NextJSIcon,      name: "Next.js",       description: "reactFramework"       },
      { icon: NGRXIcon,        name: "NgRx",          description: "stateManagement"      },
      { icon: NodeJSIcon,      name: "Node.js",       description: "jsRuntime",            lightIcon: "/icons/web/nodejs-light.svg" },
      { icon: PostCSSIcon,     name: "PostCSS",       description: "cssProcessor"         },
      { icon: PostgreSQLIcon,  name: "PostgreSQL",    description: "relationalDatabase"   },
      { icon: PrismaIcon,      name: "Prisma",        description: "databaseORM"          },
      { icon: ReactIcon,       name: "React",         description: "uiLibrary",            lightIcon: "/icons/web/react-light.svg" },
      { icon: ReactNativeIcon, name: "React Native",  description: "mobileFramework"      },
      { icon: ReduxIcon,       name: "Redux",         description: "stateManagement"      },
      { icon: RustIcon,        name: "Rust",          description: "systemsLanguage",      lightIcon: "/icons/web/rust-light.png" },
      { icon: RXJSIcon,        name: "RxJS",          description: "reactiveProgramming"  },
      { icon: SassIcon,        name: "Sass",          description: "cssPreprocessor"      },
      { icon: SQLDatabaseIcon, name: "SQL",           description: "queryLanguage"        },
      { icon: SQLiteIcon,      name: "SQLite",        description: "embeddedDatabase"     },
      { icon: TypeScriptIcon,  name: "TypeScript",    description: "typedJavaScript"      },
    ],
  },
  {
    category: "Cloud & DevOps",
    tabIcon: CloudIcon,
    skills: [
      { icon: AnsibleIcon,        name: "Ansible",         description: "configAutomation"      },
      { icon: AWSIcon,            name: "AWS",             description: "cloudPlatform",         lightIcon: "/icons/cloud/aws-light.svg" },
      { icon: Azure1Icon,         name: "Azure",           description: "cloudPlatform"         },
      { icon: DockerIcon,         name: "Docker",          description: "containerization"       },
      { icon: GitHubActionsIcon,  name: "GitHub Actions",  description: "ciCDPipelines",        hideInLight: true },
      { icon: GoogleCloudIcon,    name: "Google Cloud",    description: "cloudPlatform",         lightIcon: "/icons/cloud/google_cloud-light.svg" },
      { icon: GrafanaIcon,        name: "Grafana",         description: "metricsVisualization",  lightIcon: "/icons/cloud/grafana-light.svg" },
      { icon: HelmIcon,           name: "Helm",            description: "k8sPackaging"          },
      { icon: JenkinsIcon,        name: "Jenkins",         description: "ciCDAutomation"       },
      { icon: KubernetesIcon,     name: "Kubernetes",      description: "containerOrchestration"},
      { icon: NexusIcon,          name: "Nexus",           description: "artifactRepository"    },
      { icon: PrometheusIcon,     name: "Prometheus",      description: "metricsMonitoring"     },
      { icon: SonarQubeIcon,      name: "SonarQube",       description: "codeQuality",           lightIcon: "/icons/cloud/sonarqube-light.svg" },
      { icon: TerraformIcon,      name: "Terraform",       description: "infrastructureAsCode" },
    ],
  },
  {
    category: "Data Science",
    tabIcon: AtomIcon,
    skills: [
      { icon: ApacheIcon,      name: "Apache Spark",  description: "bigDataProcessing",  lightIcon: "/icons/data_science/apache-light.svg" },
      { icon: CIcon,           name: "C",             description: "systemsLanguage"      },
      { icon: CatBoostIcon,    name: "CatBoost",      description: "gradientBoosting"     },
      { icon: CPPIcon,         name: "C++",           description: "systemsLanguage"      },
      { icon: GoogleColabIcon, name: "Google Colab",  description: "cloudNotebooks"       },
      { icon: JupyterIcon,     name: "Jupyter",       description: "interactiveNotebooks", lightIcon: "/icons/data_science/jupyter-light.svg" },
      { icon: KerasIcon,       name: "Keras",         description: "neuralNetworkAPI"    },
      { icon: MatplotlibIcon,  name: "Matplotlib",    description: "dataVisualization"    },
      { icon: MySQLIcon,       name: "MySQL",         description: "relationalDatabase"   },
      { icon: NumPyIcon,       name: "NumPy",         description: "numericalComputing"   },
      { icon: PandasIcon,      name: "Pandas",        description: "dataAnalysis",         lightIcon: "/icons/data_science/pandas-light.svg" },
      { icon: PostgreSQLIcon,  name: "PostgreSQL",    description: "relationalDatabase"   },
      { icon: PythonIcon,      name: "Python",        description: "dataLanguage"         },
      { icon: PyTorchIcon,     name: "PyTorch",       description: "deepLearning",         lightIcon: "/icons/data_science/pytorch-light.svg" },
      { icon: ScikitLearnIcon, name: "Scikit-learn",  description: "mlLibrary",            lightIcon: "/icons/data_science/scikit_learn-light.svg" },
      { icon: SciPyIcon,       name: "SciPy",         description: "scientificComputing"  },
      { icon: SQLiteIcon,      name: "SQLite",        description: "embeddedDatabase"     },
      { icon: TensorFlowIcon,  name: "TensorFlow",    description: "mlFramework"          },
    ],
  },
];

export default skillsData;
