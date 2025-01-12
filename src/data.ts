import { Project, Education, Achievement, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'Smart task management system with ML-based priority suggestions',
    technologies: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    category: 'AI/ML',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
  },
  // Add more projects as needed
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'Adani University',
    degree: 'B.Tech in Computer Science Engineering',
    year: '2023-2027',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
  },
  {
    id: 2,
    institution: 'Muktajivan English School',
    degree: '12th Grade',
    year: '2022-2023',
    description: 'Science stream',
  },
  {
    id: 3,
    institution: 'Nelson English School',
    degree: '10th Grade',
    year: '2021-2022',
    description: '',
  },
  // Add more education entries
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'First Place - International Hackathon',
    date: '2023',
    description: 'Won first place for developing an innovative healthcare solution',
    category: 'Competition',
  },
  // Add more achievements
];

export const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    category: 'Frontend',
  },
  // Add more skills
];