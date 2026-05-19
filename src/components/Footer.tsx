export default function Footer() {
  return (
    <footer className="py-12 bg-surface-ivory border-t border-bg-navy/5">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-tighter text-bg-navy mb-2">SUYEON.P</p>
          <p className="text-sm text-text-dark/40">© 2026 Park Suyeon. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#about" className="text-xs font-bold uppercase tracking-widest text-text-dark/40 hover:text-bg-navy">About</a>
          <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-text-dark/40 hover:text-bg-navy">Projects</a>
          <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-text-dark/40 hover:text-bg-navy">Experience</a>
        </div>
      </div>
    </footer>
  );
}
