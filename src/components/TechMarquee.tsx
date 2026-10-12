import React from 'react';
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  TailwindLogo,
  JavascriptLogo,
  ReduxLogo,
  FramerMotionLogo,
  ViteLogo,
  Html5Logo,
  Css3Logo,
  NodejsLogo,
  GitLogo,
  GithubLogo,
  FigmaLogo,
  RestApiLogo,
} from './TechLogos';

export interface TechItem {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const TECH_STACK_ITEMS: TechItem[] = [
  { name: 'React', category: 'Library', logo: <ReactLogo className="w-5 h-5 shrink-0" /> },
  { name: 'Next.js', category: 'Framework', logo: <NextjsLogo className="w-5 h-5 shrink-0" /> },
  { name: 'TypeScript', category: 'Language', logo: <TypescriptLogo className="w-5 h-5 shrink-0 rounded-sm" /> },
  { name: 'Tailwind CSS v4', category: 'Styling', logo: <TailwindLogo className="w-5 h-5 shrink-0" /> },
  { name: 'JavaScript', category: 'ESNext', logo: <JavascriptLogo className="w-5 h-5 shrink-0 rounded-sm" /> },
  { name: 'Redux Toolkit', category: 'State', logo: <ReduxLogo className="w-5 h-5 shrink-0" /> },
  { name: 'Framer Motion', category: 'Animation', logo: <FramerMotionLogo className="w-5 h-5 shrink-0" /> },
  { name: 'Vite', category: 'Bundler', logo: <ViteLogo className="w-5 h-5 shrink-0" /> },
  { name: 'HTML5', category: 'Markup', logo: <Html5Logo className="w-5 h-5 shrink-0" /> },
  { name: 'CSS3', category: 'Layout & FX', logo: <Css3Logo className="w-5 h-5 shrink-0" /> },
  { name: 'Node.js', category: 'Runtime', logo: <NodejsLogo className="w-5 h-5 shrink-0" /> },
  { name: 'REST APIs', category: 'Integration', logo: <RestApiLogo className="w-5 h-5 shrink-0" /> },
  { name: 'Git', category: 'VCS', logo: <GitLogo className="w-5 h-5 shrink-0" /> },
  { name: 'GitHub', category: 'Collaboration', logo: <GithubLogo className="w-5 h-5 shrink-0" /> },
  { name: 'Figma', category: 'UI/UX Design', logo: <FigmaLogo className="w-5 h-5 shrink-0" /> },
];

export const TechMarquee: React.FC = () => {
  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeItems = [...TECH_STACK_ITEMS, ...TECH_STACK_ITEMS];

  return (
    <div
      id="tech-marquee"
      className="relative w-full py-2.5 sm:py-3 border-y border-olive-300 bg-olive-100/90 backdrop-blur-md overflow-hidden select-none"
    >
      {/* Smooth Edge Fade Masks in Light Olive Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-olive-100 via-olive-100/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-olive-100 via-olive-100/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden w-full">
        <div className="animate-marquee flex items-center gap-2.5 sm:gap-3.5 will-change-transform">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/40 border border-olive-300 hover:border-olive-600 hover:bg-white hover:shadow-md transition-all duration-200 shrink-0 group cursor-default"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-olive-50 border border-olive-200 group-hover:border-olive-600/40 flex items-center justify-center transition-colors">
                {tech.logo}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-olive-950 tracking-tight group-hover:text-olive-600 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-xs text-olive-700/80 font-mono whitespace-nowrap">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
