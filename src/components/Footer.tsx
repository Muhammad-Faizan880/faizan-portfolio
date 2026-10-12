import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-sage py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Senior Frontend Developer (3 Years Professional Experience)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs font-medium text-muted">
            <a href="#about" className="hover:text-olive transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-olive transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-olive transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-olive transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-olive transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-offwhite border border-sage text-charcoal hover:bg-olive hover:text-offwhite transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS v4.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-olive" />
              Strict Olive & Sage Color Architecture
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

