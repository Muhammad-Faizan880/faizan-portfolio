import React, { useState } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Tv,
  CheckCircle2
} from 'lucide-react';

export const FrontendQualityShowcase: React.FC = () => {
  const [activeBreakpoint, setActiveBreakpoint] = useState<'mobile' | 'tablet' | 'desktop' | 'ultrawide'>('desktop');

  const breakpoints = [
    { id: 'mobile', label: 'Mobile (320px–767px)', icon: Smartphone, width: '375px', desc: 'Touch ergonomics, fluid clamp() typography, zero side-scrolling' },
    { id: 'tablet', label: 'Tablet (768px–1023px)', icon: Tablet, width: '768px', desc: 'Adaptive 2-column flex, optimized tap targets, balanced density' },
    { id: 'desktop', label: 'Desktop (1024px–1439px)', icon: Monitor, width: '1024px', desc: 'Multi-column grids, rich hover micro-interactions, subtle motion' },
    { id: 'ultrawide', label: 'Ultra-Wide (1440px+)', icon: Tv, width: '1440px', desc: 'Constrained container bounding, crisp high-DPI asset clarity' },
  ] as const;

  const currentBp = breakpoints.find((b) => b.id === activeBreakpoint) || breakpoints[2];

  return (
    <section className="py-20 border-t border-[#E5E6DC] bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-xs font-semibold text-[#687548] mb-3 uppercase tracking-wider">
            Quality Assurance & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252820]">
            Engineered to excel across every screen and audit.
          </h2>
          <p className="mt-3 text-base text-[#5E6455]">
            As a frontend engineer with 3 years of commercial experience, responsive precision and zero-defect rendering are non-negotiable.
          </p>
        </div>

        {/* Interactive Responsive Breakpoints Bar */}
        <div className="bg-[#F8F8F4] border border-[#E5E6DC] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#E5E6DC] gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#252820]">
                Responsive Testing Matrix
              </p>
              <p className="text-xs text-[#5E6455] mt-0.5">
                Simulate how layout primitives adapt across standard device viewports.
              </p>
            </div>

            {/* Breakpoint Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {breakpoints.map((bp) => {
                const Icon = bp.icon;
                const isActive = activeBreakpoint === bp.id;
                return (
                  <button
                    key={bp.id}
                    type="button"
                    onClick={() => setActiveBreakpoint(bp.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#687548] text-[#F8F8F4] shadow-xs'
                        : 'bg-[#FFFFFF] border border-[#E5E6DC] text-[#252820] hover:bg-[#F0F3E8]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{bp.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Breakpoint Detail Inspector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E6DC] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#252820]">Target Range</span>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#F0F3E8] text-[#687548]">
                    {currentBp.width}
                  </span>
                </div>
                <p className="text-xs text-[#5E6455] leading-relaxed">
                  {currentBp.desc}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#252820]">
                  <CheckCircle2 className="w-4 h-4 text-[#687548]" />
                  <span>Fluid CSS clamp() typography scaling</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#252820]">
                  <CheckCircle2 className="w-4 h-4 text-[#687548]" />
                  <span>Zero horizontal scrollbar overflows guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#252820]">
                  <CheckCircle2 className="w-4 h-4 text-[#687548]" />
                  <span>Touch-accessible minimum target sizes (&ge; 44px)</span>
                </div>
              </div>
            </div>

            {/* Breakpoint Visual Frame */}
            <div className="md:col-span-7 bg-[#FFFFFF] border border-[#E5E6DC] rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E6DC] text-xs font-mono text-[#5E6455]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#687548]" />
                  <span>Viewport Preview</span>
                </div>
                <span>CSS Grid & Flex Engine</span>
              </div>

              {/* Dynamic simulator viewport */}
              <div className="mt-4 p-4 rounded-xl bg-[#F8F8F4] border border-[#E5E6DC] flex flex-col justify-center min-h-[160px]">
                <div
                  className={`mx-auto bg-[#FFFFFF] border border-[#E5E6DC] rounded-lg p-3 transition-all duration-300 w-full ${
                    activeBreakpoint === 'mobile'
                      ? 'max-w-[280px]'
                      : activeBreakpoint === 'tablet'
                      ? 'max-w-[420px]'
                      : 'max-w-full'
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E6DC] text-[10px] text-[#5E6455]">
                    <span className="font-bold text-[#252820]">Navigation Surface</span>
                    <span className="text-[#687548]">Live Grid</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-10 bg-[#F0F3E8] rounded border border-[#E5E6DC] flex items-center justify-center text-[10px] font-mono text-[#687548]">
                      Col 1
                    </div>
                    <div className="h-10 bg-[#F0F3E8] rounded border border-[#E5E6DC] flex items-center justify-center text-[10px] font-mono text-[#687548]">
                      Col 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

