import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { FrontendQualityShowcase } from './components/FrontendQualityShowcase';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F4] text-[#252820] font-sans antialiased selection:bg-[#687548]/20 selection:text-[#252820] overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FrontendQualityShowcase />
        <Experience />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
};

export default App;
