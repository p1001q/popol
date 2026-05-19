import { Fragment } from 'react';
import { experiences, type ExperienceItem } from '../data/experience';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GraduationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

function ExpItem({ exp }: { exp: ExperienceItem }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`exp-item exp-${exp.align} relative flex flex-col md:flex-row items-center${isVisible ? ' show' : ''}`}
    >
      <div className="exp-icon absolute w-12 h-12 rounded-full bg-surface-ivory border-4 border-accent-blue flex items-center justify-center z-10 hidden md:flex">
        <GraduationIcon />
      </div>
      <div className={`exp-content w-full md:w-[45%] ${exp.align === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <div className="p-8 rounded-[24px] bg-white border-navy-thin">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-blue px-3 py-1 rounded-full bg-accent-blue/5">
              {exp.type}
            </span>
            <span className="text-sm text-text-dark/40 font-medium">{exp.period}</span>
          </div>
          <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
          <p className="text-text-dark/60 font-medium mb-4">{exp.organization}</p>
          <ul className="space-y-2">
            {exp.details.map((detail) => (
              <li key={detail} className="text-sm text-text-dark/50 flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-accent-blue/30 mt-2 shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding-sm bg-surface-ivory text-text-dark relative z-40">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red mb-4">Experience</h2>
          <h3 className="text-4xl font-bold">성장 기록</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-blue/20 -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            {experiences.map((exp) => (
              <Fragment key={exp.id}>
                <ExpItem exp={exp} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
