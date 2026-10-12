import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Palette,
  Cpu,
  CheckCircle2,
  Settings2,
  FileCode2,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltContainer } from './MotionHelper';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#687548]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#687548]" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-[#687548]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-[#687548]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#687548]" />;
    }
  };

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#E5E6DC] relative bg-[#F8F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-xs font-bold text-[#687548] mb-3 uppercase tracking-wider font-mono">
            Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252820] leading-tight">
            Battle-tested technical stack & engineering standards.
          </h2>
          <p className="mt-3 text-base text-[#5E6455] leading-relaxed">
            Organized by functional domains with concrete production implementations. Every tool is backed by 3 years of commercial shipping experience.
          </p>
        </div>

        {/* Interactive Domain Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#687548] shadow-md ring-2 ring-[#687548]/10'
                    : 'bg-[#FFFFFF]/70 border-[#E5E6DC] hover:bg-[#FFFFFF] hover:border-[#687548]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-[#F0F3E8]' : 'bg-[#F8F8F4]'}`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#5E6455]">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252820]">
                    {cat.category}
                  </h3>
                  <p className="text-[11px] text-[#5E6455] mt-0.5 truncate">
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detail Showcase with 3D Tilt Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Competencies (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
              >
                {activeCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E6DC] hover:border-[#687548] shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#687548] group-hover:scale-125 transition-transform" />
                        <h4 className="text-base font-bold text-[#252820]">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#F0F3E8] text-[#687548] border border-[#E5E6DC]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5E6455] pl-4 leading-relaxed">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Code Implementation Preview (5 cols) */}
          <div className="lg:col-span-5">
            <TiltContainer maxTilt={8} className="w-full">
              <div className="bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#687548]" />
                    <span className="text-xs font-mono font-bold text-[#252820]">
                      ImplementationSpec.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#687548] bg-[#F0F3E8] px-2 py-0.5 rounded">
                    Strict Quality
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#252820] text-[#F8F8F4] font-mono text-xs leading-relaxed overflow-x-auto space-y-1.5">
                  <p className="text-[#E5E6DC]/60">// Domain Architecture</p>
                  <p>
                    <span className="text-[#687548]">interface</span>{' '}
                    <span className="text-[#F8F8F4] font-bold">Standard</span> {'{'}
                  </p>
                  <p className="pl-4">
                    domain: <span className="text-[#687548]">"{activeCategory.category}"</span>,
                  </p>
                  <p className="pl-4">
                    typeSafety: <span className="text-[#687548] font-bold">100</span>,
                  </p>
                  <p className="pl-4">
                    accessibility: <span className="text-[#687548]">"WCAG 2.1 AA"</span>,
                  </p>
                  <p className="pl-4">
                    responsive: <span className="text-[#687548]">"320px - 4K"</span>,
                  </p>
                  <p>{'};'}</p>
                </div>

                <div className="space-y-2 pt-2 text-xs text-[#5E6455]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#687548]" />
                    <span>Zero layout shifts on dynamic data hydration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#687548]" />
                    <span>Memoized callbacks and optimized re-render boundaries</span>
                  </div>
                </div>
              </div>
            </TiltContainer>
          </div>
        </div>

        {/* Technical Standards Callout */}
        <div className="mt-14 bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-center">
                <FileCode2 className="w-5 h-5 text-[#687548]" />
              </div>
              <h4 className="text-base font-bold text-[#252820]">Tailwind CSS v4 Native</h4>
              <p className="text-xs text-[#5E6455] leading-relaxed">
                Utilizing the latest CSS-first `@theme` syntax and zero-runtime variables for instant styling without configuration bloat.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-center">
                <Settings2 className="w-5 h-5 text-[#687548]" />
              </div>
              <h4 className="text-base font-bold text-[#252820]">Strict TypeScript Typing</h4>
              <p className="text-xs text-[#5E6455] leading-relaxed">
                Comprehensive typing across components, props, hooks, and REST responses to catch errors before code reaches production.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-[#687548]" />
              </div>
              <h4 className="text-base font-bold text-[#252820]">Production Git Workflows</h4>
              <p className="text-xs text-[#5E6455] leading-relaxed">
                Trunk-based branches, semantic commits, code reviews, and remote asynchronous agility across global timezones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
