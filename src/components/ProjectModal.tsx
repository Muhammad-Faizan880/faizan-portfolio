import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const [modalTab, setModalTab] = useState<'screenshot' | 'interactive'>('screenshot');
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white border border-sage rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-sage flex items-start justify-between bg-offwhite rounded-t-3xl sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-olive-light border border-sage text-olive">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono text-muted">
                  • Featured Engineering Case Study
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-charcoal tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-muted mt-0.5">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border border-sage bg-white text-charcoal hover:bg-olive-light transition-colors focus:outline-none focus:ring-2 focus:ring-olive"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Visual Showcase / Live Mockup */}
          <div className="border border-sage rounded-2xl overflow-hidden shadow-xs bg-offwhite flex flex-col">
            {/* Browser Header Bar */}
            <div className="bg-white px-3.5 py-2 border-b border-sage flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              </div>

              <div className="flex items-center gap-1 p-0.5 bg-offwhite border border-sage rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setModalTab('screenshot')}
                  className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    modalTab === 'screenshot'
                      ? 'bg-olive text-white'
                      : 'text-muted hover:text-charcoal'
                  }`}
                >
                  Thumbnail
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab('interactive')}
                  className={`px-2.5 py-0.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    modalTab === 'interactive'
                      ? 'bg-olive text-white'
                      : 'text-muted hover:text-charcoal'
                  }`}
                >
                  Interactive UI
                </button>
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-olive hover:underline font-mono flex items-center gap-1"
                >
                  <span>Launch</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs font-mono text-muted">Verified</span>
              )}
            </div>

            {/* Image / Mockup Canvas */}
            <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-offwhite">
              {modalTab === 'screenshot' && project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <ProjectCardPreview projectId={project.id} />
              )}
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-offwhite border border-sage space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-olive-dark" />
                The Engineering Challenge
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-olive-light border border-sage space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-olive" />
                The Frontend Solution
              </h4>
              <p className="text-xs text-charcoal leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Measurable Outcomes */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Measurable Performance & Architecture Outcomes
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sage text-xs font-medium text-charcoal"
                >
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
              Technologies & Architecture Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-offwhite border border-sage text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-sage bg-offwhite rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted">
            Need similar frontend architecture for your team?
          </p>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-olive text-offwhite hover:bg-olive-dark transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium bg-white border border-sage text-charcoal hover:bg-olive-light transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

