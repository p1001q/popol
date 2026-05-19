export interface Project {
  id: string;
  title: string;
  date: string;
  badge: 'Team' | 'Solo';
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 'umc-9',
    title: 'UMC 9기 웹 파트 프로젝트',
    date: '2023.09 - 2023.12',
    badge: 'Team',
    shortDescription:
      '디테일한 사용자 경험을 위한 웹 서비스 개발 프로젝트입니다.',
    description:
      'React와 TypeScript를 기반으로 복잡한 상태 관리를 효율적으로 처리하였으며, 사용자 피드백을 반영한 UI 개선 작업을 수행했습니다.',
    tags: ['#React', '#TypeScript', '#TailwindCSS', '#Vercel'],
    image: 'https://via.placeholder.com/800x600',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    id: 'portfolio',
    title: '나만의 색깔을 담은 포트폴리오',
    date: '2026.02.08 - 2026.03.15',
    badge: 'Solo',
    shortDescription:
      '나만의 색깔을 담은 반응형 포트폴리오 사이트 제작 프로젝트입니다.',
    description:
      '나만의 색깔을 담은 반응형 포트폴리오 사이트 제작 프로젝트입니다. 피그마 사용과 리액트 학습, 그외 라이브러리 학습, AI와 플러그인 활용을 위해 제작되었습니다. 스크롤 스냅과 인터랙티브한 애니메이션을 통해 생동감 있는 사용자 경험을 제공합니다.',
    tags: ['#React', '#TailwindCSS', '#Figma', '#TypeScript'],
    image: 'https://via.placeholder.com/800x600',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];
