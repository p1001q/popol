import { useState } from 'react';
import profileImg from '../assets/profile.jpg';

const COMPETENCIES = [
  'UI 디테일을 살리는 집요함',
  '사용자 친화적 설계 고민',
  'API 연동 경험',
  'Git Flow 기반 협업 경험',
  '기한 내 지속 개선 태도',
];

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      className="section-padding-about bg-surface-ivory text-text-dark relative z-10"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left info card */}
          <div className="lg:col-span-5 p-8 bg-white rounded-[24px]">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-8 leading-[1.35]">
              기본에 충실하며 <br />
              사용자의 시선으로 <br />
              <span className="text-accent-blue">코드를 씁니다.</span>
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/5 flex items-center justify-center text-accent-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-dark/50 uppercase font-bold tracking-wider">Location</p>
                  <p className="font-medium text-sm">경기도 의정부시</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/5 flex items-center justify-center text-accent-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-dark/50 uppercase font-bold tracking-wider">Email</p>
                  <p className="font-medium text-sm">qrwrer123@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/p1001q" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-[14px] bg-accent-blue text-text-light group-hover:brightness-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-dark/40">GitHub</span>
              </a>
              <a href="https://velog.io/@p1001q/posts" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-3 rounded-[14px] bg-accent-blue text-text-light group-hover:brightness-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-dark/40">Velog</span>
              </a>
            </div>
          </div>

          {/* Right: photo + text with hover animation */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[520px] flex items-start">
              {/* Photo (background) */}
              <div
                className="absolute right-[-40px] top-0 w-[300px] aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg border border-text-dark/5 z-0 cursor-pointer"
                style={{
                  transform: hovered ? 'scale(1.02) rotate(2deg)' : 'scale(1) rotate(0deg)',
                  transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
              {/* Text box (foreground) */}
              <div
                className="relative z-10 w-full max-w-[520px] mt-10 bg-white p-8 rounded-[24px] shadow-2xl border-navy-thin"
                style={{
                  transform: hovered ? 'translateX(-100px)' : 'translateX(0)',
                  transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <p className="text-lg leading-relaxed mb-8 text-text-dark/80">
                  안녕하세요, 프론트엔드 개발자 박수연입니다. 저는 단순히 화면을 그리는 것을 넘어,
                  사용자가 웹 서비스를 이용하며 느끼는 모든 순간의 경험을 최적화하는 것에 가치를 둡니다.
                  학부 과정 동안 다양한 프로젝트를 수행하며 복잡한 문제를 구조적으로 해결하는 능력을 길러왔습니다.
                </p>
                <h4 className="font-bold mb-4 text-bg-navy">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  {COMPETENCIES.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2 rounded-full bg-gray-100 text-text-dark/60 text-xs font-bold border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
