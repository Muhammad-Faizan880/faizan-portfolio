import React from 'react';
import {
  Code2,
  Layers,
  Palette,
  Cpu,
  Sparkles,
  Zap,
  Globe2,
  Terminal,
  ShieldCheck,
  FileCode2,
  GitBranch,
  Workflow
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const TechMarquee: React.FC = () => {
  const techStack: TechItem[] = [
    { name: 'React.js', category: 'Library', icon: <Code2 className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Next.js 15', category: 'Full-Stack', icon: <Globe2 className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'TypeScript', category: 'Language', icon: <Terminal className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Tailwind CSS v4', category: 'Styling', icon: <Palette className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Redux Toolkit', category: 'State', icon: <Layers className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'REST APIs', category: 'Backend', icon: <Cpu className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Framer Motion', category: 'Animation', icon: <Sparkles className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Core Web Vitals', category: 'Speed', icon: <Zap className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Component Systems', category: 'Architecture', icon: <Workflow className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Vite & Tooling', category: 'Bundler', icon: <FileCode2 className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <GitBranch className="w-4 h-4 text-[#A3C663]" /> },
    { name: 'WCAG 2.1 AA', category: 'Accessibility', icon: <ShieldCheck className="w-4 h-4 text-[#A3C663]" /> },
  ];

  // Duplicate items for continuous infinite marquee
  const marqueeItems = [...techStack, ...techStack];

  return (
    <div id="tech-marquee" className="relative w-full py-8 border-y border-[#222B18] bg-[#090B07] overflow-hidden select-none">
      {/* Left and Right Fade Masks for Smooth Infinite Look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#090B07] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#090B07] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#12170E] border border-[#27331A] hover:border-[#8FA858] hover:bg-[#182012] transition-colors shrink-0 shadow-xs group cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-[#1A2214] border border-[#314022] group-hover:border-[#8FA858]/60 flex items-center justify-center transition-colors">
                {tech.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#F8F8F4] tracking-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-[#7D8F66] font-mono">
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
