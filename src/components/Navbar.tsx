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
          ? 'bg-olive-100/90 backdrop-blur-md border-b border-olive-300 py-2.5 shadow-xs'
          : 'bg-olive-100/60 backdrop-blur-xs py-3 border-b border-olive-300/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-600 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-olive-600 flex items-center justify-center text-white font-bold text-lg font-mono transition-transform duration-300 group-hover:scale-105 shadow-md shadow-olive-600/20 border border-olive-500/40">
              MF
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-olive-900 flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="inline-block w-2 h-2 rounded-full bg-olive-600 animate-pulse" />
              </span>
              <span className="text-xs text-olive-700 font-medium font-mono">
                Frontend Engineer (3 YOE)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md border border-olive-300 px-3 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-olive-600 text-white shadow-sm font-semibold'
                      : 'text-olive-700 hover:text-olive-950 hover:bg-olive-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Availability Pill & Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive-100 border border-olive-300 text-xs font-mono text-olive-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-600 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-600" />
              </span>
              Available for Work
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-olive-600 text-white hover:bg-olive-700 transition-all duration-200 shadow-sm shadow-olive-600/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-olive-500/30"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-olive-300 bg-white text-olive-950 hover:bg-olive-100 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-600"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-olive-50/98 backdrop-blur-lg border-b border-olive-300 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-6 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-olive-300 text-xs text-olive-800 font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-olive-600" />
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
                      ? 'bg-olive-600 text-white'
                      : 'text-olive-700 hover:bg-olive-100 hover:text-olive-950'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-olive-300 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-sm font-bold bg-olive-600 text-white shadow-md flex items-center justify-center gap-2 border border-olive-500/50"
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
