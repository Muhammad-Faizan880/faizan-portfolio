import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  Image as ImageIcon,
  Code2,
  Lock,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewType, setViewType] = useState<'screenshot' | 'interactive'>('screenshot');
  const [isAutoplay, setIsAutoplay] = useState(false);

  const total = PROJECTS.length;
  const currentProject = PROJECTS[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

 

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay handler when enabled
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, handleNext]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 border-t border-sage relative bg-offwhite overflow-hidden isolate">
       {/* Ambient gradient background */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse 950px 450px at 95% 15%,
              rgba(192, 230, 117, 0.16),
              transparent 70%
            ),
            radial-gradient(
              ellipse 700px 500px at 100% 75%,
              rgba(151, 184, 99, 0.13),
              transparent 72%
            ),
            linear-gradient(
              225deg,
              rgba(248, 250, 239, 0.65),
              rgba(255, 255, 255, 0.25)
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <h2 className="max-w-3xl text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.15] sm:leading-[1.12]">
              Selected works engineered for <span className="text-olive">performance.</span>
            </h2>
          </div>

          {/* Slider Controls & Counter */}
          <div className="flex items-center justify-end  gap-3 shrink-0">
           

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-sage text-charcoal hover:bg-olive hover:text-offwhite hover:border-olive transition-all duration-200 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous project slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-sage text-charcoal hover:bg-olive hover:text-offwhite hover:border-olive transition-all duration-200 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next project slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Selector Tab Pills - Shows all projects directly */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {PROJECTS.map((project, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-olive text-offwhite shadow-xs border border-olive'
                    : 'bg-white border border-sage text-charcoal hover:border-olive hover:text-olive'
                }`}
              >
                
                <span>{project.title}</span>
                
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Stage (Interactive Carousel Container) */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoplay(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white border border-sage rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Visual Mockup Showcase (7 cols) */}
              <div className="lg:col-span-7 bg-offwhite p-4 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-sage flex flex-col justify-between relative group">
                {/* Stage Header Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 pb-4 border-b border-sage mb-4 sm:mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white border border-sage text-xs font-bold text-charcoal">
                      {currentProject.category}
                    </span>
                    {currentProject.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-olive text-offwhite text-xs font-bold">
                        Featured Case Study
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* View Type Toggle: Screenshot Thumbnail vs Interactive UI */}
                    <div className="flex items-center gap-1 p-1 bg-white border border-sage rounded-xl text-xs">
                      <button
                        type="button"
                        onClick={() => setViewType('screenshot')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          viewType === 'screenshot'
                            ? 'bg-olive text-offwhite shadow-xs'
                            : 'text-muted hover:text-charcoal'
                        }`}
                        title="View High-Res Project Screenshot Thumbnail"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Thumbnail</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewType('interactive')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          viewType === 'interactive'
                            ? 'bg-olive text-offwhite shadow-xs'
                            : 'text-muted hover:text-charcoal'
                        }`}
                        title="Interactive UI Mockup"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Interactive</span>
                      </button>
                    </div>

                 
                  </div>
                </div>

                {/* The Visual Preview Canvas */}
                <div className="my-auto py-2 flex items-center justify-center min-h-[380px]">
                  {viewType === 'screenshot' ? (
                    /* Desktop Browser Mockup Frame */
                    <div className="w-full rounded-2xl border border-sage bg-white shadow-md overflow-hidden flex flex-col group/browser transition-all duration-300">
                      {/* Browser Chrome Address Bar */}
                      <div className="bg-offwhite border-b border-sage px-3.5 py-2.5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                        </div>

                        <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-white border border-sage/60 flex items-center justify-center gap-1.5 text-xs text-muted font-mono truncate">
                          <Lock className="w-3 h-3 text-olive shrink-0" />
                          <span className="truncate">
                            {currentProject.liveUrl
                              ? currentProject.liveUrl.replace('https://', '')
                              : `${currentProject.id}.com`}
                          </span>
                        </div>

                        <span className="text-xs font-mono uppercase tracking-wider text-muted hidden sm:inline-block">
                          Live UI
                        </span>
                      </div>

                      {/* Screenshot Thumbnail */}
                      <div className="relative aspect-[16/10] sm:h-[350px] w-full overflow-hidden bg-offwhite flex items-center justify-center">
                        {currentProject.imageUrl ? (
                          <img
                            src={currentProject.imageUrl}
                            alt={currentProject.imageAlt || currentProject.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/browser:scale-105"
                          />
                        ) : (
                          <ProjectCardPreview projectId={currentProject.id} />
                        )}

                        {/* Hover Action Overlay */}
                        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px] opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                          <button
                            type="button"
                            onClick={() => setActiveModalProject(currentProject)}
                            className="px-4 py-2 rounded-xl bg-white text-charcoal text-xs font-bold shadow-lg hover:bg-olive hover:text-white transition-all transform translate-y-2 group-hover/browser:translate-y-0 duration-300 flex items-center gap-1.5 cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Specs</span>
                          </button>
                          {currentProject.liveUrl && (
                            <a
                              href={currentProject.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 rounded-xl bg-olive text-offwhite text-xs font-bold shadow-lg hover:bg-olive-dark transition-all transform translate-y-2 group-hover/browser:translate-y-0 duration-300 flex items-center gap-1.5"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Interactive UI Mockup Canvas */
                    <div className="transition-all duration-300 rounded-2xl border border-sage bg-white shadow-sm overflow-hidden w-full max-w-full h-[320px] sm:h-[360px]">
                      <ProjectCardPreview projectId={currentProject.id} />
                    </div>
                  )}
                </div>

                {/* Inspect Case Study Button Trigger */}
                <div className="pt-4 mt-2 border-t border-sage/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-sage text-xs font-bold text-charcoal hover:bg-olive-light hover:border-olive transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
                  >
                    <Eye className="w-4 h-4 text-olive shrink-0" />
                    <span>Deep Architecture Inspection</span>
                  </button>

                  <span className="text-xs font-mono text-muted text-center sm:text-right shrink-0">
                    LCP &lt; 0.9s Verified
                  </span>
                </div>
              </div>

              {/* Right Column: Case Details & Engineering Deliverables (5 cols) */}
              <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-sage mb-4">
                    <span className="text-xs font-mono font-bold text-olive uppercase tracking-wider">
                      Project Details
                    </span>
                   
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-olive mt-1">
                    {currentProject.subtitle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Measurable Deliverables */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Key Measurable Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {currentProject.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-charcoal font-medium leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack Badges */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                      Architecture & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-olive-light border border-sage text-charcoal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-sage flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-olive text-offwhite hover:bg-olive-dark transition-all shadow-xs flex-1 sm:flex-initial"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold bg-offwhite border border-sage text-charcoal hover:bg-olive-light transition-colors cursor-pointer flex-1 sm:flex-initial"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

       
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
