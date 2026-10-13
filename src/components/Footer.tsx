import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-sage pt-12 pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sage">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-olive flex items-center justify-center text-offwhite font-bold text-sm font-mono shadow-xs">
              MF
            </div>
            <div>
              <p className="text-sm font-bold text-charcoal">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-muted">
                 Frontend Developer (3 Years Professional Experience)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs font-medium text-muted">
            <a href="#about" className="text-olive-700 hover:text-olive-950 hover:bg-olive-100 p-2 rounded-full transition-colors">
              About
            </a>
            <a href="#skills" className="text-olive-700 hover:text-olive-950 hover:bg-olive-100 p-2 rounded-full transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-olive-700 hover:text-olive-950 hover:bg-olive-100 p-2 rounded-full transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-olive-700 hover:text-olive-950 hover:bg-olive-100 p-2 rounded-full transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-olive-700 hover:text-olive-950 hover:bg-olive-100 p-2 rounded-full transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-offwhite border border-sage text-charcoal hover:bg-olive hover:text-offwhite transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex justify-center items-center mx-auto gap-4 text-xs text-muted">
          <p>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS v4.
          </p>
        </div>
      </div>

      {/* 500px Centered Smooth Ambient Gradient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-36 flex items-end justify-center select-none z-0">
        <div
          className="w-full h-44 rounded-t-full opacity-65 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse 900px 180px at 50% 100%, rgba(192, 230, 117, 0.75) 0%, rgba(151, 184, 99, 0.55) 35%, rgba(104, 117, 72, 0.25) 70%, transparent 100%)',
          }}
        />
      </div>
    </footer>
  );
};

