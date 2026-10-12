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
  Monitor,
  Smartphone,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
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

  const handleSelectIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

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
    <section id="projects" className="py-24 md:py-32 border-t border-[#E5E6DC] relative bg-[#F8F8F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-xs font-bold text-[#687548] mb-3 uppercase tracking-wider font-mono">
              Production Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252820] leading-tight">
              Selected works engineered for performance.
            </h2>
            <p className="mt-3 text-base text-[#5E6455] leading-relaxed">
              Explore production applications built with scalable component architectures, fluid UX flows, and verified business outcomes.
            </p>
          </div>

          {/* Slider Controls & Counter */}
          <div className="flex items-center gap-4 self-start md:self-end">
            {/* Slide Index Counter */}
            <div className="font-mono text-sm font-bold text-[#252820] px-4 py-2.5 rounded-2xl bg-[#FFFFFF] border border-[#E5E6DC] shadow-xs flex items-center gap-2">
              <span className="text-[#687548]">0{currentIndex + 1}</span>
              <span className="text-[#E5E6DC]">/</span>
              <span className="text-[#5E6455]">0{total}</span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E5E6DC] text-[#252820] hover:bg-[#687548] hover:text-[#F8F8F4] hover:border-[#687548] transition-all duration-200 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous project slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-12 h-12 rounded-2xl bg-[#687548] text-[#F8F8F4] hover:bg-[#525E37] transition-all duration-200 flex items-center justify-center shadow-md active:scale-95 cursor-pointer"
                aria-label="Next project slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
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
              className="bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Visual Mockup Showcase (7 cols) */}
              <div className="lg:col-span-7 bg-[#F8F8F4] p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#E5E6DC] flex flex-col justify-between relative group">
                {/* Stage Header Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E6DC] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E6DC] text-xs font-bold text-[#252820]">
                      {currentProject.category}
                    </span>
                    {currentProject.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#687548] text-[#F8F8F4] text-[11px] font-bold">
                        Featured Case Study
                      </span>
                    )}
                  </div>

                  {/* Responsive Viewport Toggle */}
                  <div className="flex items-center gap-1 p-1 bg-[#FFFFFF] border border-[#E5E6DC] rounded-xl text-xs">
                    <button
                      type="button"
                      onClick={() => setPreviewMode('desktop')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        previewMode === 'desktop'
                          ? 'bg-[#687548] text-[#F8F8F4]'
                          : 'text-[#5E6455] hover:text-[#252820]'
                      }`}
                      title="Desktop Preview"
                    >
                      <Monitor className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewMode('mobile')}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        previewMode === 'mobile'
                          ? 'bg-[#687548] text-[#F8F8F4]'
                          : 'text-[#5E6455] hover:text-[#252820]'
                      }`}
                      title="Mobile Viewport"
                    >
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* The Interactive Preview Canvas */}
                <div className="my-auto py-2 flex items-center justify-center">
                  <div
                    className={`transition-all duration-300 rounded-2xl border border-[#E5E6DC] bg-[#FFFFFF] shadow-sm overflow-hidden w-full ${
                      previewMode === 'mobile'
                        ? 'max-w-[340px] h-[360px]'
                        : 'max-w-full h-[360px]'
                    }`}
                  >
                    <ProjectCardPreview projectId={currentProject.id} />
                  </div>
                </div>

                {/* Inspect Case Study Button Trigger */}
                <div className="pt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E6DC] text-xs font-bold text-[#252820] hover:bg-[#F0F3E8] hover:border-[#687548] transition-colors shadow-2xs cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#687548]" />
                    <span>Deep Architecture Inspection</span>
                  </button>

                  <span className="text-xs font-mono text-[#5E6455]">
                    LCP &lt; 0.9s Verified
                  </span>
                </div>
              </div>

              {/* Right Column: Case Details & Engineering Deliverables (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC] mb-4">
                    <span className="text-xs font-mono font-bold text-[#687548] uppercase tracking-wider">
                      Project Details
                    </span>
                    <span className="text-xs font-mono text-[#5E6455]">
                      Slide 0{currentIndex + 1} of 0{total}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252820] tracking-tight">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#687548] mt-1">
                    {currentProject.subtitle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#5E6455] leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Measurable Deliverables */}
                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820]">
                      Key Measurable Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {currentProject.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#252820] font-medium leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack Badges */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E6455] mb-2">
                      Architecture & Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F0F3E8] border border-[#E5E6DC] text-[#252820]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#E5E6DC] flex flex-wrap items-center gap-3">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-[#687548] text-[#F8F8F4] hover:bg-[#525E37] transition-all shadow-xs"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold bg-[#F8F8F4] border border-[#E5E6DC] text-[#252820] hover:bg-[#F0F3E8] transition-colors cursor-pointer"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#687548]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector Strip: Direct Clickable Tabs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleSelectIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#687548] shadow-md ring-2 ring-[#687548]/10'
                    : 'bg-[#FFFFFF]/60 border-[#E5E6DC] hover:bg-[#FFFFFF] hover:border-[#687548]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#687548]' : 'text-[#5E6455]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#687548]' : 'bg-[#E5E6DC]'
                    }`}
                  />
                </div>
                <p className="text-sm font-bold text-[#252820] truncate">
                  {proj.title}
                </p>
                <p className="text-[11px] text-[#5E6455] truncate mt-0.5">
                  {proj.subtitle}
                </p>
              </button>
            );
          })}
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
