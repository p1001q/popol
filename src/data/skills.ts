export type SkillLevel = 1 | 2 | 3;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Language',
    skills: [
      { name: 'JavaScript', level: 3 },
      { name: 'TypeScript', level: 2 },
      { name: 'HTML/CSS', level: 3 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
      { name: 'Next.js', level: 2 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 2 },
      { name: 'NestJS', level: 1 },
      { name: 'Python', level: 2 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 2 },
      { name: 'MongoDB', level: 2 },
      { name: 'Redis', level: 1 },
    ],
  },
  {
    category: 'Deploy',
    skills: [
      { name: 'AWS', level: 1 },
      { name: 'Vercel', level: 3 },
      { name: 'Docker', level: 1 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'Figma', level: 2 },
      { name: 'Vite', level: 3 },
    ],
  },
];
