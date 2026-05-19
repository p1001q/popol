import { useState, Fragment } from 'react';
import { projects, type Project } from '../data/projects';
import ProjectModal from './ProjectModal';

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

function ProjectCard({ project, reversed, onDetail }: {
  project: Project;
  reversed: boolean;
  onDetail: () => void;
}) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
      {/* Text */}
      <div className="w-full lg:w-1/2">
        <div className={`mb-6 ${reversed ? 'flex justify-end' : ''}`}>
          <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bg-navy text-text-light">
            {project.badge}
          </span>
        </div>
        <div className={reversed ? 'text-right' : ''}>
          <h4 className="text-3xl font-bold mb-4 text-bg-navy">{project.title}</h4>
          <p className="text-sm text-text-dark/40 mb-6 font-medium">{project.date}</p>
          <p className="text-text-dark/70 mb-6 leading-snug text-sm">{project.shortDescription}</p>
          <div className={`flex flex-wrap gap-2 mb-8 ${reversed ? 'justify-end' : ''}`}>
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold px-3 py-1.5 bg-gray-100 text-text-dark/60 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <div className={`flex items-center gap-4 ${reversed ? 'justify-end' : ''}`}>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-text-dark/40 hover:bg-gray-300 transition-colors">
              <LinkIcon />
            </button>
            <button
              onClick={onDetail}
              className="px-6 py-2 rounded-md bg-gray-200 text-text-dark/40 text-xs font-bold hover:bg-gray-300 transition-colors"
            >
              상세보기
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="aspect-[4/3] bg-gray-200 rounded-[4px] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding-sm bg-surface-ivory text-text-dark relative z-30">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent-red mb-4">Projects</h2>
          <h3 className="text-4xl font-bold text-bg-navy">주요 프로젝트</h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <Fragment key={project.id}>
              <ProjectCard
                project={project}
                reversed={index % 2 !== 0}
                onDetail={() => setSelected(project)}
              />
            </Fragment>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
