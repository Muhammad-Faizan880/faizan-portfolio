import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layers,
  Palette,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltContainer } from './MotionHelper';
import { InteractiveAuthSimulator } from './InteractiveAuthSimulator';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string, isWhite = false) => {
    const cls = `w-5 h-5 ${isWhite ? 'text-white' : 'text-olive'}`;
    switch (iconName) {
      case 'code':
        return <Code2 className={cls} />;
      case 'layers':
        return <Layers className={cls} />;
      case 'palette':
        return <Palette className={cls} />;
      case 'cpu':
        return <Cpu className={cls} />;
      case 'shield':
        return <ShieldCheck className={cls} />;
      default:
        return <Code2 className={cls} />;
    }
  };

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-sage relative isolate overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
              Battle-tested technical stack &amp; <span className="text-olive">engineering standards.</span>
            </h2>
          </div>

          {/* Interactive Click Hint Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-light border border-olive/30 text-xs font-mono font-semibold text-olive-dark shadow-2xs self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
            <span>Click any category to view details</span>
          </div>
        </div>

        {/* Interactive Domain Navigator (Affordance-driven selector) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10" role="tablist" aria-label="Technical skill domains">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer group active:scale-[0.98] select-none ${
                  isActive
                    ? 'bg-olive-50/70 border-olive shadow-md ring-2 ring-olive/25 -translate-y-1'
                    : 'bg-white border-sage hover:bg-olive-light/30 hover:border-olive/60 hover:-translate-y-1 hover:shadow-xs'
                }`}
              >
                {/* Visual active bottom anchor bar */}
                {isActive && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-1.5 bg-olive rounded-full" />
                )}

                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-olive text-white shadow-xs'
                        : 'bg-offwhite text-olive border border-sage/60 group-hover:bg-olive-light group-hover:border-olive/40'
                    }`}
                  >
                    {getCategoryIcon(cat.icon, isActive)}
                  </div>

                  {isActive ? (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-olive text-offwhite flex items-center gap-1.5 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-offwhite animate-pulse" />
                      Active Tab
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold text-charcoal bg-offwhite border border-sage group-hover:bg-olive group-hover:text-offwhite group-hover:border-olive transition-all flex items-center gap-1">
                      <span>Select</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}  
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-mono font-bold text-olive/80">0{idx + 1} //</span>
                    <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal group-hover:text-olive'}`}>
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2 min-h-[32px]">
                    {cat.description}
                  </p>

                  {/* Clear affordance indicator */}
                  <div className="pt-3 mt-3 border-t border-sage/60 flex items-center justify-between text-xs font-mono">
                    <span className={isActive ? 'font-bold text-olive' : 'text-muted'}>
                      {cat.skills.length} skills
                    </span>

                    {isActive ? (
                      <span className="px-2 py-0.5 rounded-md bg-olive/15 text-olive-dark font-bold text-[11px] flex items-center gap-1">
                        Viewing below ↓
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-offwhite border border-sage text-muted group-hover:text-olive group-hover:border-olive/40 transition-colors text-[11px] flex items-center gap-1">
                        Click to view
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

          {/* Right Column: Interactive Architecture Lab (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <TiltContainer maxTilt={4} className="w-full">
              <InteractiveAuthSimulator />
            </TiltContainer>
          </div>
        </div>

      </div>
    </section>
  );
};
