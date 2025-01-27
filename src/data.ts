import { Project, Education, Achievement, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bicep Curl Counter',
    description: 'A Flask-based web app using OpenCV and MediaPipe to count bicep curls based on elbow angle during exercise. Includes features like counter reset and webcam feed.',
    technologies: ['Python', 'Flask', 'OpenCV', 'MediaPipe'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/vrajesh-sharma/Bicep-Curl-Counter',
    liveUrl: '', // Add the live demo URL if available
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'SarvaBhasha',
    description: 'A language detection web app built using Flask and machine learning to identify languages from user-input text with 94.90% classification accuracy across 22 languages.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'NLP'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/vrajesh-sharma/SarvaBhasha',
    liveUrl: 'https://sarvabhasha.onrender.com/',
    image: 'https://raw.githubusercontent.com/Vrajesh-Sharma/VrajeshSharma/refs/heads/main/src/assets/SarvaBhasha.jpeg',
  },
  {
    id: 3,
    title: 'Gift Assistant',
    description: 'An AI-powered chatbot that suggests personalized gifts based on user preferences, budget, and occasion, enhancing the online gifting experience.',
    technologies: ['Python', 'Flask', 'NLP', 'Gemini API'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/vrajesh-sharma/Gift-Assistant',
    liveUrl: '', // Add the live demo URL if available
    image: 'https://raw.githubusercontent.com/Vrajesh-Sharma/VrajeshSharma/refs/heads/main/src/assets/GiftAssistant.png',
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
    title: 'Amazon ML Challenge 2024',
    date: '2024',
    description: 'Ranked 376th in the prestigious Amazon ML Challenge.',
    category: 'Competition',
  },
  {
    id: 2,
    title: 'HackerRank Gold Medals',
    date: '2024',
    description: 'Earned gold medals in C, C++, and Python on HackerRank.',
    category: 'Medals',
  },
  {
    id: 3,
    title: 'Tic-Tac-Toe 24 at DA-IICT',
    date: '2024',
    description: 'Secured 7th place in this exciting coding competition.',
    category: 'Hackathon',
  },
  {
    id: 4,
    title: 'Python Certification by Google',
    date: '2023',
    description: 'Completed an advanced Python certification course by Google.',
    category: 'Certifications',
  },
  {
    id: 5,
    title: 'AI for India 2.0 by Skill India',
    date: '2023',
    description: 'Earned certification for completing AI for India 2.0 program.',
    category: 'Certifications',
  },
  {
    id: 6,
    title: 'Remote Sensing & GIS by ISRO',
    date: '2021',
    description: 'Certified in Remote Sensing & GIS by ISRO.',
    category: 'Certifications',
  },
  // Add more achievements
];

export const skills: Skill[] = [
  {
    name: 'Python',
    level: 90,
    category: 'Programming',
  },
  {
    name: 'C',
    level: 85,
    category: 'Programming',
  },
  {
    name: 'C++',
    level: 80,
    category: 'Programming',
  },
  {
    name: 'Machine Learning',
    level: 90,
    category: 'AI/ML',
  },
  {
    name: 'Deep Learning',
    level: 85,
    category: 'AI/ML',
  },
  {
    name: 'NLP',
    level: 85,
    category: 'AI/ML',
  },
  {
    name: 'Flask',
    level: 80,
    category: 'Backend',
  },
  {
    name: 'Node.js',
    level: 65,
    category: 'Backend',
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'Database',
  },
  {
    name: 'MySQL',
    level: 85,
    category: 'Database',
  },
  {
    name: 'React',
    level: 70,
    category: 'Frontend',
  },
  {
    name: 'HTML & CSS',
    level: 85,
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    level: 80,
    category: 'Frontend',
  },
  // Add more skills
];
