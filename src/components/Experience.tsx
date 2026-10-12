import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#E5E6DC] relative bg-[#F8F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-xs font-bold text-[#687548] mb-3 uppercase tracking-wider font-mono">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#252820] leading-tight">
            3 years of commercial software engineering.
          </h2>
          <p className="mt-3 text-base text-[#5E6455] leading-relaxed">
            Verified timeline of commercial frontend positions, enterprise SaaS contributions, and product milestones.
          </p>
        </div>

        {/* Timeline Stage */}
        <div className="relative border-l-2 border-[#E5E6DC] ml-4 md:ml-36 pl-6 md:pl-12 space-y-10">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                {/* Glowing Indicator Dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-6 w-4 h-4 rounded-full bg-[#FFFFFF] border-4 border-[#687548] shadow-xs group-hover:scale-125 transition-transform" />

                {/* Desktop Timestamp to the left */}
                <div className="md:absolute md:-left-44 md:top-6 text-xs font-mono font-bold text-[#5E6455] mb-2 md:mb-0 w-32 text-left md:text-right">
                  {exp.period.split('—')[0].trim()}
                </div>

                {/* Experience Card with Expandable Deliverables */}
                <div className="bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#687548] transition-all duration-300">
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E6DC]"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#687548] uppercase tracking-wider">
                          {exp.company}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-[#252820] font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#252820] tracking-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E6455]">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] font-medium text-[#252820]">
                          <Calendar className="w-3.5 h-3.5 text-[#687548]" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC]">
                          <MapPin className="w-3.5 h-3.5 text-[#5E6455]" />
                          {exp.location}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="p-1.5 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] text-[#252820] hover:bg-[#687548] hover:text-[#F8F8F4] transition-colors cursor-pointer"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#5E6455] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expandable Key Deliverables */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-4 border-t border-[#E5E6DC] space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820]">
                            Verified Deliverables & Metrics:
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.highlights.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5E6455] leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Pills */}
                  <div className="mt-6 pt-4 border-t border-[#E5E6DC] flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-bold text-[#252820] mr-2">
                      Stack:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#F8F8F4] text-[#252820] border border-[#E5E6DC]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Degree Foundation */}
        <div className="mt-16 bg-[#FFFFFF] border border-[#E5E6DC] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-[#687548]" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#687548]">
                  Academic Foundation
                </span>
                <h4 className="text-lg font-bold text-[#252820]">
                  Bachelor of Science in Computer Science (BSCS)
                </h4>
                <p className="text-xs text-[#5E6455] mt-0.5">
                  PMAS Arid Agriculture University, Rawalpindi • 2018 – 2022
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E6455]">
              <span className="px-3.5 py-1.5 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] font-medium text-[#252820]">
                Data Structures & Algorithms
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] font-medium text-[#252820]">
                Software Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
