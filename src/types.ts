export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'Web' | 'Mobile' | 'AI/ML' | 'Other';
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}