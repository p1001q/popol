import { useActiveSection } from '../hooks/useActiveSection';

const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
];

export default function Header() {
  const activeSection = useActiveSection([
    'home', 'about', 'skills', 'projects', 'experience', 'contact',
  ]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-ivory/80 backdrop-blur-md py-4 shadow-sm border-b border-bg-navy/5">
      <div className="container-custom flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-bg-navy">SUYEON.P</div>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={`nav-link text-sm font-bold text-text-dark/70 hover:text-bg-navy transition-colors${
                activeSection === item.href ? ' active' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="btn-resume">Resume</button>
      </div>
    </header>
  );
}
