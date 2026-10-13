import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Clock,
  Columns2,
  SlidersHorizontal,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

type SelectedItem = 'codendcoffee' | 'spadasoft' | 'education';

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<SelectedItem>('codendcoffee');
  const [viewMode, setViewMode] = useState<'console' | 'grid'>('console');

  const activeExp = EXPERIENCES.find((e) => e.id === selectedId);

  return (
    <section id="experience" className="py-14 sm:py-20 border-t border-sage relative isolate overflow-hidden bg-offwhite">
          <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background: `
          radial-gradient(
            ellipse 950px 450px at 5% 15%,
            rgba(192, 230, 117, 0.16),
            transparent 70%
          ),
          radial-gradient(
            ellipse 700px 500px at 95% 75%,
            rgba(151, 184, 99, 0.13),
            transparent 72%
          ),
          linear-gradient(
            135deg,
            rgba(248, 250, 239, 0.65),
            rgba(255, 255, 255, 0.25)
          )
        `,
      }}
    />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header & Metrics Toolbar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6  pb-6">
          <div>
           
            <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
              3 years of commercial <span className="text-olive">software engineering.</span>
            </h2>
            
          </div>

        
        </div>
  {/* Quick Metrics Bar & View Switcher */}
          <div className="flex  items-center justify-end mb-4 gap-1 ">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-sage text-xs font-mono">
              <span className="font-bold text-olive">3+ Yrs</span>
              <span className="text-muted">•</span>
              <span className="font-bold text-charcoal">2 Roles</span>
              <span className="text-muted">•</span>
              <span className="font-bold text-olive">+35% Speed</span>
            </div>

            {/* Layout Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-white border border-sage rounded-xl text-xs">
              <button
                type="button"
                onClick={() => setViewMode('console')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'console'
                    ? 'bg-olive text-offwhite shadow-xs'
                    : 'text-muted hover:text-charcoal'
                }`}
                title="Interactive Console View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Console</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-olive text-offwhite shadow-xs'
                    : 'text-muted hover:text-charcoal'
                }`}
                title="Side-by-Side Dual Grid"
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span>Dual Grid</span>
              </button>
            </div>
          </div>
        {/* View Mode 1: Interactive Modern Tech Console (High Density, Zero Clutter) */}
        {viewMode === 'console' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Column: Interactive Role Rail (4 cols) */}
            <div className="lg:col-span-4 space-y-2.5">
              {/* Role 1: CodeNdCoffee */}
              <button
                type="button"
                onClick={() => setSelectedId('codendcoffee')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                  selectedId === 'codendcoffee'
                    ? 'bg-white border-olive shadow-sm ring-1 ring-olive/20'
                    : 'bg-white/70 border-sage hover:bg-white hover:border-olive/50'
                }`}
              >
                {/* Floating Hover Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                  <div className="bg-charcoal text-offwhite text-xs font-mono px-3 py-1.5 rounded-xl shadow-xl border border-sage/20 flex items-center gap-1.5">
                    {selectedId === 'codendcoffee' ? (
                      <span>Currently viewing CodeNdCoffee</span>
                    ) : (
                      <span>Click to view CodeNdCoffee</span>
                    )}
                  </div>
                  {/* Tooltip Caret */}
                  <div className="w-2 h-2 bg-charcoal rotate-45 mx-auto -mt-1 border-r border-b border-sage/20" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                    CodeNdCoffee
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Role
                  </span>
                </div>
                <h3 className="text-sm font-bold text-charcoal">
                  Full Stack / Frontend Developer
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted mt-2 font-mono">
                  <span>Jan 2024 — Present</span>
                  <span>•</span>
                  <span>Remote / Hybrid</span>
                </div>
              </button>

              {/* Role 2: SpadaSoft */}
              <button
                type="button"
                onClick={() => setSelectedId('spadasoft')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                  selectedId === 'spadasoft'
                    ? 'bg-white border-olive shadow-sm ring-1 ring-olive/20'
                    : 'bg-white/70 border-sage hover:bg-white hover:border-olive/50'
                }`}
              >
                {/* Floating Hover Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                  <div className="bg-charcoal text-offwhite text-xs font-mono px-3 py-1.5 rounded-xl shadow-xl border border-sage/20 flex items-center gap-1.5">
                    {selectedId === 'spadasoft' ? (
                      <span>Currently viewing SpadaSoft</span>
                    ) : (
                      <span>Click to view SpadaSoft</span>
                    )}
                  </div>
                  {/* Tooltip Caret */}
                  <div className="w-2 h-2 bg-charcoal rotate-45 mx-auto -mt-1 border-r border-b border-sage/20" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                    SpadaSoft
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-offwhite border border-sage text-xs font-medium text-muted">
                    1.5 Yrs Tenure
                  </span>
                </div>
                <h3 className="text-sm font-bold text-charcoal">
                  Software Engineer (Frontend)
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted mt-2 font-mono">
                  <span>Jul 2022 — Dec 2023</span>
                  <span>•</span>
                  <span>Lahore, Pakistan</span>
                </div>
              </button>

              {/* Milestone 3: Academic Foundation */}
              <button
                type="button"
                onClick={() => setSelectedId('education')}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                  selectedId === 'education'
                    ? 'bg-white border-olive shadow-sm ring-1 ring-olive/20'
                    : 'bg-white/70 border-sage hover:bg-white hover:border-olive/50'
                }`}
              >
                {/* Floating Hover Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                  <div className="bg-charcoal text-offwhite text-xs font-mono px-3 py-1.5 rounded-xl shadow-xl border border-sage/20 flex items-center gap-1.5">
                    {selectedId === 'education' ? (
                      <span>Currently viewing BSCS Degree</span>
                    ) : (
                      <span>Click to view BSCS Degree</span>
                    )}
                  </div>
                  {/* Tooltip Caret */}
                  <div className="w-2 h-2 bg-charcoal rotate-45 mx-auto -mt-1 border-r border-b border-sage/20" />
                </div>

                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                    PMAS Arid University
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-olive-light border border-sage text-xs font-bold text-olive">
                    4-Year BSCS
                  </span>
                </div>
                <h3 className="text-sm font-bold text-charcoal">
                  BS Computer Science Degree
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted mt-2 font-mono">
                  <span>2018 – 2022</span>
                  <span>•</span>
                  <span>Rawalpindi, PK</span>
                </div>
              </button>
            </div>

            {/* Right Column: Active Role / Milestone Dossier (8 cols) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {selectedId !== 'education' && activeExp ? (
                  <motion.div
                    key={activeExp.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white border border-sage rounded-2xl p-5 sm:p-7 shadow-xs"
                  >
                    {/* Role Header Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sage">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                            {activeExp.company}
                          </span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-olive-light border border-sage text-charcoal font-medium">
                            {activeExp.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal tracking-tight">
                          {activeExp.role}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-offwhite border border-sage font-medium text-charcoal font-mono">
                          <Clock className="w-3.5 h-3.5 text-olive" />
                          {activeExp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-offwhite border border-sage font-medium text-charcoal">
                          <MapPin className="w-3.5 h-3.5 text-muted" />
                          {activeExp.location}
                        </span>
                      </div>
                    </div>

                    {/* Mission Summary */}
                    <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                      {activeExp.description}
                    </p>

                    {/* Deliverables Grid */}
                    <div className="mt-5 pt-4 border-t border-sage">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-olive" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                          Verified Engineering Deliverables:
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeExp.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-offwhite border border-sage flex items-start gap-2.5 text-xs text-charcoal leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Ecosystem Chips */}
                    <div className="mt-5 pt-4 border-t border-sage flex flex-wrap gap-1.5 items-center">
                      <span className="text-xs font-bold text-charcoal mr-2">
                        Stack:
                      </span>
                      {activeExp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-olive-light text-charcoal border border-sage"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white border border-sage rounded-2xl p-5 sm:p-7 shadow-xs"
                  >
                    <div className="flex items-center gap-4 pb-4 border-b border-sage">
                      <div className="w-12 h-12 rounded-xl bg-olive-light border border-sage flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 text-olive" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                          Academic Foundation
                        </span>
                        <h3 className="text-xl font-extrabold text-charcoal">
                          Bachelor of Science in Computer Science (BSCS)
                        </h3>
                        <p className="text-xs text-muted font-mono mt-0.5">
                          PMAS Arid Agriculture University, Rawalpindi • 2018 – 2022
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-4">
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        Comprehensive four-year computer science curriculum grounding advanced algorithmic problem solving, software engineering lifecycle, and systems design.
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-2.5">
                          Core Academic Pillars:
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {[
                            'Software Architecture & Design',
                            'Database Management Systems',
                            'Web Engineering & Protocols',
                          ].map((pill) => (
                            <div
                              key={pill}
                              className="p-2.5 rounded-xl bg-offwhite border border-sage text-xs font-medium text-charcoal text-center"
                            >
                              {pill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* View Mode 2: Modern Side-by-Side Dual Grid (Both Roles Simultaneously Visible) */}
        {viewMode === 'grid' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {EXPERIENCES.map((exp) => {
                const isCurrent = exp.period.toLowerCase().includes('present');
                return (
                  <div
                    key={exp.id}
                    className="bg-white border border-sage rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-sage mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-olive-light border border-sage text-xs font-mono font-bold text-olive">
                            {exp.company}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Active Role
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-muted">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-charcoal">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 pt-3 border-t border-sage/60 space-y-2">
                        {exp.highlights.slice(0, 3).map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-charcoal"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-4 pt-3 border-t border-sage flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-xs font-medium bg-olive-light text-charcoal border border-sage"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compact Education Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sage shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-olive-light border border-sage flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-olive" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Bachelor of Science in Computer Science (BSCS)
                  </h4>
                  <p className="text-xs text-muted font-mono">
                    PMAS Arid Agriculture University, Rawalpindi • 2018 – 2022
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-offwhite border border-sage text-charcoal font-medium">
                  Algorithms
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-offwhite border border-sage text-charcoal font-medium">
                  Architecture
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-offwhite border border-sage text-charcoal font-medium">
                  System Design
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

