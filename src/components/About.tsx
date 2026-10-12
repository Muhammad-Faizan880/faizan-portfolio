import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#E5E6DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F3E8] border border-[#E5E6DC] text-xs font-semibold text-[#687548] mb-3 uppercase tracking-wider">
            About & Engineering Stance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#252820] leading-tight">
            Frontend engineering focused on durability, precision, and speed.
          </h2>
          <p className="mt-4 text-base text-[#5E6455] leading-relaxed">
            With 3 years of professional frontend development experience, I bridge the gap between design vision and technical execution. I treat code as a long-term asset: structured, documented, and easy for teams to extend.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Story Card */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E6DC] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-[#252820] tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#687548]" />
              The 3-Year Trajectory
            </h3>

            <p className="text-sm text-[#5E6455] leading-relaxed">
              Throughout 3 years of daily production commits, I've had the privilege of architecting responsive client portals, high-conversion acquisition funnels, and enterprise SaaS dashboards.
            </p>

            <p className="text-sm text-[#5E6455] leading-relaxed">
              My engineering approach is grounded in the fundamentals: semantic HTML for accessible screen reader navigation, modern CSS for fluid zero-CLS layouts, and clean TypeScript for bulletproof component contracts.
            </p>

            <div className="pt-4 border-t border-[#E5E6DC] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#252820]">
                Core Competencies
              </h4>
              <ul className="space-y-2 text-xs text-[#5E6455]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                  <span>Translating complex Figma wireframes into pixel-perfect, accessible React code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                  <span>Configuring modern styling pipelines with Tailwind CSS v4 and zero-runtime CSS tokens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                  <span>Managing predictable client state using Redux Toolkit, Context API, and optimistic mutations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#687548] shrink-0 mt-0.5" />
                  <span>Eliminating layout shifts (CLS &lt; 0.02) and reducing JavaScript execution overhead.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F3E8] border border-[#E5E6DC] flex items-center justify-between text-xs">
              <span className="text-[#5E6455]">Current Timezone:</span>
              <span className="font-semibold text-[#252820]">PKT (UTC+5) • Flexible Worldwide</span>
            </div>
          </div>

          {/* Right: The Four Pillars of Quality */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#FFFFFF] border border-[#E5E6DC] rounded-2xl p-6 transition-all duration-300 hover:border-[#687548] hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#687548] px-2.5 py-1 rounded bg-[#F0F3E8] border border-[#E5E6DC]">
                    {pillar.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#E5E6DC] group-hover:bg-[#687548] transition-colors" />
                </div>
                <h4 className="text-base font-bold text-[#252820] mb-2 tracking-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#5E6455] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Quick highlight banner spanning columns */}
            <div className="sm:col-span-2 bg-[#252820] text-[#F8F8F4] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#F8F8F4] mb-1">
                  Ready to elevate your frontend codebase?
                </h4>
                <p className="text-xs text-[#E5E6DC]/80">
                  Reliable delivery, clear asynchronous communication, and modern engineering practices.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#687548] text-[#F8F8F4] hover:bg-[#525E37] transition-colors"
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

