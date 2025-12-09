import { JobExperience, SkillCategory, Education, Project } from './types';
import { Terminal, Database, Cloud, Code2, Globe, Server, Cpu, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Connor Davison",
  title: "Software Engineer",
  location: "Calgary, AB",
  email: "c.davison18@gmail.com",
  phone: "403-968-2395",
  github: "https://github.com/ConDavison1",
  linkedin: "https://www.linkedin.com/in/connor-davison-1a7367279/",
  summary: "Detail-oriented Software Developer with hands-on experience designing and deploying production-grade APIs and microservices. Skilled in building full-stack solutions using Go, C#/.NET, Python, Angular, and React with cloud-native deployments. Demonstrated ability to architect multi-tenant systems, integrate payment platforms (Stripe, Square) and build real-time IoT data pipelines. Proven track record delivering complex features in agile teams."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Golang", "C#", "TypeScript", "JavaScript", "Java", "SQL"]
  },
  {
    category: "Web & Frameworks",
    skills: ["React", "Angular", ".NET 8", "ASP.NET Core", "Node.js", "Flask", "Tailwind CSS", "HTML5"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Docker", "GitHub Actions", "CI/CD Pipelines", "Cloud Run"]
  },
  {
    category: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Neon DB", "Entity Framework Core", "SQLc", "Goose"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git/GitHub/GitLab", "Swagger/OpenAPI", "Stripe API", "Square API", "Trello", "Figma"]
  }
];

export const EXPERIENCE: JobExperience[] = [
  {
    title: "Lead Software Engineer",
    company: "Havenz Tech",
    location: "Calgary, AB",
    period: "April 2025 – Present",
    details: [
      "Design and develop RESTful APIs using .NET 8 and Entity Framework Core for a multi-tenant building management platform.",
      "Built a Building Explorer feature with 21+ API endpoints for managing properties, areas, equipment, real-time metrics, and alerts.",
      "Implemented IoT webhook integrations for ingesting device telemetry with automatic threshold alerting.",
      "Developed role-based access control and document visibility rules across company, department, and project scopes.",
      "Created database migrations and schema reorganization across 8 PostgreSQL schemas (33+ tables).",
      "Deployed backend services to Google Cloud Run with CI/CD pipelines via GitHub Actions."
    ],
    technologies: ["C#", ".NET 8", "PostgreSQL", "GCP", "Docker", "IoT"]
  },
  {
    title: "Back-End Developer",
    company: "Rise Basketball",
    location: "Calgary, AB",
    period: "April 2025 – November 2025",
    details: [
      "Built a sports management platform API using Go with 25+ domain modules including teams, programs, events, memberships, and payments.",
      "Developed Stripe payment integration with subscription management, checkout sessions, webhooks, and customer portal functionality.",
      "Implemented user authentication system with JWT tokens, role-based access control (coaches, staff, customers), and waiver signing.",
      "Created booking and scheduling system for practices, events, games, and haircut appointments.",
      "Integrated HubSpot CRM for customer data synchronization and marketing consent tracking.",
      "Deployed Go API and Python Square microservice to Google Cloud Run with Docker containerization."
    ],
    technologies: ["Go", "Python", "Stripe API", "Square API", "PostgreSQL", "HubSpot", "JWT"]
  },
  {
    title: "Back-End Developer",
    company: "Help Us Defend / 65 Square Non-Profit",
    location: "Calgary, AB",
    period: "October 2023 – March 2024",
    details: [
      "Developed an algorithm using Python to determine login pass/fail results based on AI model confidence levels.",
      "Collaborated with a team using GitLab for code integration, improving project efficiency and code quality.",
      "Ensured system security and integrity by implementing robust backend processes for handling user authentication data."
    ],
    technologies: ["Python", "AI Models", "GitLab", "Security"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Rise Basketball Platform",
    role: "Back-End Developer",
    period: "April 2025 – November 2025",
    description: [
      "Built a comprehensive sports management platform API using Go with 25+ domain modules.",
      "Implemented complex scheduling systems for events, games, and appointments with conflict resolution.",
      "Developed a Stripe payment infrastructure handling subscriptions, one-time payments, and webhooks.",
      "Deployed microservices using Docker and Google Cloud Run."
    ],
    tech: ["Go", "PostgreSQL", "Stripe Connect", "Docker", "GCP", "Redis"],
    link: "https://www.rise-basketball.com/"
  },
  {
    title: "Sales Analytics Dashboard (Capstone)",
    role: "Team Lead & Full Stack Developer",
    period: "September 2024 – April 2025",
    description: [
      "Led the development of a sales analytics dashboard to consolidate data from Salesforce, enabling real-time insights into revenue.",
      "Integrated Salesforce API with a Flask back-end for real-time data retrieval and Neon for efficient data storage.",
      "Designed and implemented the front-end using Angular, ensuring a responsive and user-friendly interface.",
      "Collaborated on UI/UX design using Figma and visualized data with Seaborn."
    ],
    tech: ["Python", "Flask", "Angular", "MongoDB", "Salesforce API", "Seaborn"]
  }
];

export const EDUCATION: Education = {
  degree: "Diploma – Software Development",
  institution: "Southern Alberta Institute of Technology",
  location: "Calgary, Alberta",
  period: "September 2023 – June 2025",
  courses: [
    "Object-Oriented Programming (Java, Python)",
    "Web Development (HTML, CSS, React)",
    "Database Management",
    "Operating Systems"
  ]
};

export const SKILL_ICONS = {
  "Languages": Code2,
  "Web & Frameworks": Globe,
  "Cloud & DevOps": Cloud,
  "Database & Storage": Database,
  "Tools & Platforms": Layers
};