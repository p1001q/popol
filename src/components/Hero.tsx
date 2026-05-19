export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center py-20 relative z-0 bg-surface-ivory"
    >
      <div className="container-custom text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.45] mb-10 break-keep text-bg-navy">
            사용자 경험을 디테일하게 고민하는 <br />
            <span className="text-accent-blue">프론트엔드 개발자</span>, <br />
            <span className="text-accent-red">박수연</span>입니다.
          </h1>
          <p className="text-lg md:text-xl text-text-dark/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            학부 과정 속에서 구조적으로 문제를 해결하고, <br />
            사용자에게 더 친절한 인터페이스를 만들기 위해 탐구하는 개발자입니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-project-hero">
              <span>Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
