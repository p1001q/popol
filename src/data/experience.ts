export type ExperienceType = 'Education' | 'Club';
export type ExperienceAlign = 'left' | 'right';

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  period: string;
  title: string;
  organization: string;
  details: string[];
  align: ExperienceAlign;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'skuniv',
    type: 'Education',
    period: '2022.03 - 2027.02',
    title: '소프트웨어 전공',
    organization: '서경대학교',
    details: ['웹 프로그래밍 및 알고리즘 심화 학습'],
    align: 'left',
  },
  {
    id: 'umc-9',
    type: 'Club',
    period: '2025.09 - 2026.02',
    title: 'UMC 9기',
    organization: '대학생 연합 IT 동아리',
    details: ['프론트엔드 파트 수료', '실무 기반의 프로젝트 협업 경험'],
    align: 'right',
  },
  {
    id: 'umc-10',
    type: 'Club',
    period: '2026.03 - 2026.07',
    title: 'UMC 10기',
    organization: '대학생 연합 IT 동아리',
    details: [
      '프론트엔드 파트장',
      '백엔드 파트 수료',
      '실무 기반의 프로젝트 협업 경험',
    ],
    align: 'left',
  },
];
