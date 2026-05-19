import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { type Project } from '../data/projects';
import { useLenis } from '../context/LenisContext';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      lenis?.start();
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, lenis]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white w-full max-w-4xl rounded-[32px] shadow-2xl overflow-hidden relative animate-modal-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-text-dark/40 hover:bg-gray-200 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[4/3] bg-gray-100">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-10 flex flex-col">
            <div className="mb-6">
              <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-bg-navy text-text-light">
                {project.badge}
              </span>
            </div>
            <h4 className="text-3xl font-bold mb-4 text-bg-navy">{project.title}</h4>
            <p className="text-sm text-text-dark/40 mb-6 font-medium">{project.date}</p>
            <div className="flex-grow">
              <p className="text-text-dark/70 leading-relaxed mb-8">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-bold px-3 py-1.5 bg-gray-100 text-text-dark/60 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 rounded-[14px] bg-bg-navy text-text-light font-bold text-sm text-center hover:brightness-110 transition-all"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 rounded-[14px] bg-primary-yellow text-text-dark font-bold text-sm text-center hover:brightness-105 transition-all"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
