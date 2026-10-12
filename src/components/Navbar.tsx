import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EEF3E6]/90 backdrop-blur-md border-b border-[#D5DEC8] py-2.5 shadow-xs'
          : 'bg-[#EEF3E6]/60 backdrop-blur-xs py-3 border-b border-[#D5DEC8]/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#687548] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#687548] flex items-center justify-center text-[#F8F8F4] font-bold text-lg font-mono transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#687548]/20 border border-[#8FA858]/40">
              MF
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-[#222A16] flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-2 h-2 rounded-full bg-[#687548] animate-pulse" />
              </span>
              <span className="text-xs text-[#6F7B5E] font-medium font-mono">
                Frontend Engineer (3 YOE)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-[#D5DEC8] px-3 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#687548] text-[#FFFFFF] shadow-sm font-semibold'
                      : 'text-[#5E684F] hover:text-[#222A16] hover:bg-[#E8F0DC]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Availability Pill & Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EED8] border border-[#CCD8BC] text-[11px] font-mono text-[#4A5731]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#687548] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#687548]" />
              </span>
              Available for Work
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#687548] text-[#FFFFFF] hover:bg-[#58643C] transition-all duration-200 shadow-sm shadow-[#687548]/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-[#8FA858]/30"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-[#D5DEC8] bg-white text-[#222A16] hover:bg-[#E8F0DC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#687548]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bg-[#F4F7EE]/98 backdrop-blur-lg border-b border-[#D5DEC8] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-6 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#D5DEC8] text-xs text-[#4A5731] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#687548]" />
              <span>3 Years Frontend Experience • Open to Opportunities</span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#687548] text-[#FFFFFF]'
                      : 'text-[#5E684F] hover:bg-[#E8F0DC] hover:text-[#222A16]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D5DEC8] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-sm font-bold bg-[#687548] text-[#FFFFFF] shadow-md flex items-center justify-center gap-2 border border-[#8FA858]/50"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
