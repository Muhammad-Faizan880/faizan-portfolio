import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E6DC] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E6DC]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#687548] flex items-center justify-center text-[#F8F8F4] font-bold text-sm font-mono shadow-xs">
              MF
            </div>
            <div>
              <p className="text-sm font-bold text-[#252820]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[#5E6455]">
                Senior Frontend Developer (3 Years Professional Experience)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs font-medium text-[#5E6455]">
            <a href="#about" className="hover:text-[#687548] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#687548] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#687548] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#687548] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#687548] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#F8F8F4] border border-[#E5E6DC] text-[#252820] hover:bg-[#687548] hover:text-[#F8F8F4] transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E6455]">
          <p>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS v4.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#687548]" />
              Strict Olive & Sage Color Architecture
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

