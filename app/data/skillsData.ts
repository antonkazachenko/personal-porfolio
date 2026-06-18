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
  GoogleCloudIcon, GoogleColabIcon,
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
  icon: ComponentType;
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
      { icon: AngularIcon,     name: "Angular",       description: "Frontend framework"    },
      { icon: BabelIcon,       name: "Babel",         description: "JS transpiler"         },
      { icon: CSS3Icon,        name: "CSS3",          description: "Web styling"           },
      { icon: CypressIcon,     name: "Cypress",       description: "E2E testing"           },
      { icon: GoIcon,          name: "Go",            description: "Backend language"      },
      { icon: HandlebarsIcon,  name: "Handlebars",    description: "Template engine"       },
      { icon: HTML5Icon,       name: "HTML5",         description: "Web markup"            },
      { icon: JestIcon,        name: "Jest",          description: "Unit testing"          },
      { icon: JSIcon,          name: "JavaScript",    description: "Web scripting"         },
      { icon: MySQLIcon,       name: "MySQL",         description: "Relational database"   },
      { icon: NextJSIcon,      name: "Next.js",       description: "React framework"       },
      { icon: NGRXIcon,        name: "NgRx",          description: "State management"      },
      { icon: NodeJSIcon,      name: "Node.js",       description: "JS runtime"            },
      { icon: PostCSSIcon,     name: "PostCSS",       description: "CSS processor"         },
      { icon: PostgreSQLIcon,  name: "PostgreSQL",    description: "Relational database"   },
      { icon: PrismaIcon,      name: "Prisma",        description: "Database ORM"          },
      { icon: ReactIcon,       name: "React",         description: "UI library"            },
      { icon: ReactNativeIcon, name: "React Native",  description: "Mobile framework"      },
      { icon: ReduxIcon,       name: "Redux",         description: "State management"      },
      { icon: RustIcon,        name: "Rust",          description: "Systems language"      },
      { icon: RXJSIcon,        name: "RxJS",          description: "Reactive programming"  },
      { icon: SassIcon,        name: "Sass",          description: "CSS preprocessor"      },
      { icon: SQLDatabaseIcon, name: "SQL",           description: "Query language"        },
      { icon: SQLiteIcon,      name: "SQLite",        description: "Embedded database"     },
      { icon: TypeScriptIcon,  name: "TypeScript",    description: "Typed JavaScript"      },
    ],
  },
  {
    category: "Cloud & DevOps",
    tabIcon: CloudIcon,
    skills: [
      { icon: AnsibleIcon,        name: "Ansible",         description: "Config automation"      },
      { icon: AWSIcon,            name: "AWS",             description: "Cloud platform"         },
      { icon: Azure1Icon,         name: "Azure",           description: "Cloud platform"         },
      { icon: GitHubActionsIcon,  name: "GitHub Actions",  description: "CI/CD pipelines"        },
      { icon: GoogleCloudIcon,    name: "Google Cloud",    description: "Cloud platform"         },
      { icon: GrafanaIcon,        name: "Grafana",         description: "Metrics visualization"  },
      { icon: HelmIcon,           name: "Helm",            description: "K8s packaging"          },
      { icon: JenkinsIcon,        name: "Jenkins",         description: "CI/CD automation"       },
      { icon: KubernetesIcon,     name: "Kubernetes",      description: "Container orchestration"},
      { icon: NexusIcon,          name: "Nexus",           description: "Artifact repository"    },
      { icon: PrometheusIcon,     name: "Prometheus",      description: "Metrics monitoring"     },
      { icon: SonarQubeIcon,      name: "SonarQube",       description: "Code quality"           },
      { icon: TerraformIcon,      name: "Terraform",       description: "Infrastructure as code" },
    ],
  },
  {
    category: "Data Science",
    tabIcon: AtomIcon,
    skills: [
      { icon: ApacheIcon,      name: "Apache Spark",  description: "Big data processing"  },
      { icon: CIcon,           name: "C",             description: "Systems language"      },
      { icon: CatBoostIcon,    name: "CatBoost",      description: "Gradient boosting"     },
      { icon: CPPIcon,         name: "C++",           description: "Systems language"      },
      { icon: GoogleColabIcon, name: "Google Colab",  description: "Cloud notebooks"       },
      { icon: JupyterIcon,     name: "Jupyter",       description: "Interactive notebooks" },
      { icon: KerasIcon,       name: "Keras",         description: "Neural network API"    },
      { icon: MatplotlibIcon,  name: "Matplotlib",    description: "Data visualization"    },
      { icon: MySQLIcon,       name: "MySQL",         description: "Relational database"   },
      { icon: NumPyIcon,       name: "NumPy",         description: "Numerical computing"   },
      { icon: PandasIcon,      name: "Pandas",        description: "Data analysis"         },
      { icon: PostgreSQLIcon,  name: "PostgreSQL",    description: "Relational database"   },
      { icon: PythonIcon,      name: "Python",        description: "Data language"         },
      { icon: PyTorchIcon,     name: "PyTorch",       description: "Deep learning"         },
      { icon: ScikitLearnIcon, name: "Scikit-learn",  description: "ML library"            },
      { icon: SciPyIcon,       name: "SciPy",         description: "Scientific computing"  },
      { icon: SQLiteIcon,      name: "SQLite",        description: "Embedded database"     },
      { icon: TensorFlowIcon,  name: "TensorFlow",    description: "ML framework"          },
    ],
  },
];

export default skillsData;
