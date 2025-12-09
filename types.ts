export interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  courses: string[];
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}