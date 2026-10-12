import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252820]/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E5E6DC] flex items-start justify-between bg-[#F8F8F4] rounded-t-3xl sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-[#687548]">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[11px] font-mono text-[#5E6455]">
                  • Featured Engineering Case Study
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-[#252820] tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#5E6455] mt-0.5">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border border-[#E5E6DC] bg-[#FFFFFF] text-[#252820] hover:bg-[#F0F3E8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#687548]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Live Mockup Box */}
          <div className="border border-[#E5E6DC] rounded-2xl overflow-hidden shadow-xs h-64 bg-[#F8F8F4]">
            <ProjectCardPreview projectId={project.id} />
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#525E37]" />
                The Engineering Challenge
              </h4>
              <p className="text-xs text-[#5E6455] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#687548]" />
                The Frontend Solution
              </h4>
              <p className="text-xs text-[#252820] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820]">
              Measurable Performance & Architecture Outcomes
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFFFFF] border border-[#E5E6DC] text-xs font-medium text-[#252820]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E6455] mb-2">
              Technologies & Architecture Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F8F8F4] border border-[#E5E6DC] text-[#252820]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#E5E6DC] bg-[#F8F8F4] rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#5E6455]">
            Need similar frontend architecture for your team?
          </p>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#687548] text-[#F8F8F4] hover:bg-[#525E37] transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-[#FFFFFF] border border-[#E5E6DC] text-[#252820] hover:bg-[#F0F3E8] transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

