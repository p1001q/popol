import { skillCategories, type SkillLevel } from '../data/skills';

function SkillBar({ level }: { level: SkillLevel }) {
  return (
    <div className="skill-bar-container w-24">
      {([1, 2, 3] as const).map((i) => (
        <div
          key={i}
          className={`skill-bar-segment${i <= level ? ` active-${level}` : ''}`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding-sm bg-surface-ivory text-text-dark relative z-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red mb-4">Skills</h2>
          <h3 className="text-4xl font-bold mb-6 text-bg-navy">기술적 전문성</h3>
          <p className="text-text-dark/60 leading-relaxed">
            사용자 경험을 최우선으로 생각하며, 최신 기술 트렌드를 학습하고 프로젝트에 적용하는 것을 즐깁니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-8 rounded-[24px] bg-white border-navy-thin transition-transform hover:-translate-y-1"
            >
              <h4 className="text-xl font-bold mb-8 text-accent-blue border-b border-accent-blue/10 pb-4">
                {cat.category}
              </h4>
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
