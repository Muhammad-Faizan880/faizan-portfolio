import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Palette,
  Cpu,
  CheckCircle2,
  Terminal,
  ArrowRight,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltContainer } from './MotionHelper';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-olive" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-olive" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-olive" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-olive" />;
      default:
        return <Code2 className="w-5 h-5 text-olive" />;
    }
  };

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-sage relative bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
         
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
            Battle-tested technical stack &amp; <span className="text-olive">engineering standards.</span>
          </h2>
         
        </div>

     

        {/* Interactive Domain Navigator (Affordance-driven selector) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer group ${
                  isActive
                    ? 'bg-white border-olive shadow-md ring-2 ring-olive/20 -translate-y-0.5'
                    : 'bg-white/70 border-sage hover:bg-white hover:border-olive/50 hover:-translate-y-0.5 hover:shadow-xs'
                }`}
              >
                {/* Floating Hover Tooltip */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                  <div className="bg-charcoal text-offwhite text-xs font-mono px-3 py-1.5 rounded-xl shadow-xl border border-sage/20 flex items-center gap-1.5">
                    {isActive ? (
                      <>
                        <span>Currently viewing this domain</span>
                      </>
                    ) : (
                      <>
                        <span>Click to view {cat.category}</span>
                      </>
                    )}
                  </div>
                  {/* Tooltip Caret */}
                  <div className="w-2 h-2 bg-charcoal rotate-45 mx-auto -mt-1 border-r border-b border-sage/20" />
                </div>

                {/* Visual active bottom anchor bar */}
                {isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-olive rounded-b-2xl" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-olive-light' : 'bg-offwhite group-hover:bg-olive-light/60'}`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  {isActive ? (
                    <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-olive text-white flex items-center gap-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="text-xs font-mono font-bold text-muted group-hover:text-olive transition-colors">
                      
                    </span>
                  )}  
                </div>

                <div>
                  <h3 className="text-sm font-bold text-charcoal group-hover:text-olive transition-colors">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>

                  {/* Clear affordance indicator */}
                  <div className="pt-2.5 mt-2 border-t border-sage/60 flex items-center justify-between text-xs font-mono">
                    <span className={isActive ? 'font-bold text-olive' : 'text-muted'}>
                      {cat.skills.length} skills
                    </span>
                    {isActive ? (
                      <span className="font-semibold text-olive flex items-center gap-1">
                        Viewing below ↓
                      </span>
                    ) : (
                      <span className="text-muted group-hover:text-olive flex items-center gap-1 transition-colors">
                        Click to inspect <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detail Showcase with 3D Tilt Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Competencies (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Dynamic Context Header connecting tabs with list */}
            <div className="flex items-center justify-between pb-3 border-b border-sage">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-olive-light border border-sage flex items-center justify-center">
                  {getCategoryIcon(activeCategory.icon)}
                </div>
                <div>
                  
                  <h3 className="text-sm sm:text-base font-bold text-charcoal leading-tight">
                    {activeCategory.category} Breakdown
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-muted bg-white px-2.5 py-1 rounded-lg border border-sage hidden sm:inline-block">
                4 Commercial Competencies
              </span>
            </div>

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
                    className="p-5 rounded-2xl bg-white border border-sage hover:border-olive shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-olive group-hover:scale-125 transition-transform" />
                        <h4 className="text-base font-bold text-charcoal">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-olive-light text-olive border border-sage">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted pl-4 leading-relaxed">
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
              <div className="bg-white border border-sage rounded-3xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-sage">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-olive" />
                    <span className="text-xs font-mono font-bold text-charcoal">
                      ImplementationSpec.ts
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-olive bg-olive-light px-2 py-0.5 rounded">
                    Strict Quality
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-charcoal text-offwhite font-mono text-xs leading-relaxed overflow-x-auto space-y-1.5">
                  <p className="text-sage/60">// Domain Architecture</p>
                  <p>
                    <span className="text-olive">interface</span>{' '}
                    <span className="text-offwhite font-bold">Standard</span> {'{'}
                  </p>
                  <p className="pl-4">
                    domain: <span className="text-olive">"{activeCategory.category}"</span>,
                  </p>
                  <p className="pl-4">
                    typeSafety: <span className="text-olive font-bold">100</span>,
                  </p>
                  <p className="pl-4">
                    accessibility: <span className="text-olive">"WCAG 2.1 AA"</span>,
                  </p>
                  <p className="pl-4">
                    responsive: <span className="text-olive">"320px - 4K"</span>,
                  </p>
                  <p>{'};'}</p>
                </div>

                <div className="space-y-2 pt-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-olive" />
                    <span>Zero layout shifts on dynamic data hydration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-olive" />
                    <span>Memoized callbacks and optimized re-render boundaries</span>
                  </div>
                </div>
              </div>
            </TiltContainer>
          </div>
        </div>

      </div>
    </section>
  );
};
