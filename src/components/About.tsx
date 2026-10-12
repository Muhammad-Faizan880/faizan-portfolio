import React from 'react';

export const About: React.FC = () => {
  return (
  
<section
  id="about"
  className="relative overflow-hidden border-t border-sage py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Header */}
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
      <div className="lg:col-span-7">
       

        <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.12]">
          Building interfaces that feel{" "}
          <span className="text-olive">effortless.</span>
        </h2>
      </div>

      <div className="lg:col-span-5 flex flex-col justify-end">
        <p className="max-w-lg text-sm sm:text-base text-muted leading-7">
          I'm a frontend developer with 3 years of experience turning
          complex ideas into responsive, accessible, and production-ready
          web experiences.
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-sage bg-white px-3 py-1.5 text-xs font-medium text-charcoal"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Main Layout */}
    <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

      {/* Experience Card */}
      
<div className="lg:col-span-4 group [perspective:1200px]">
  <div
    className="relative min-h-[320px] transition-transform duration-700 ease-in-out
    [transform-style:preserve-3d]
    group-hover:[transform:rotateY(180deg)]
    group-focus-within:[transform:rotateY(180deg)]"
  >
    {/* FRONT SIDE */}
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl
      bg-charcoal p-6 sm:p-8 text-offwhite
      flex flex-col justify-between
      [backface-visibility:hidden]"
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
      <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/10" />

      <div className="relative">
        <p className="text-[10px] uppercase tracking-[0.2em] text-sage">
          Experience
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
            03
          </span>
          <span className="text-sm text-sage">Years+</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          Frontend Engineering
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-offwhite/65">
          Building polished interfaces and scalable web applications.
        </p>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-2 border-t border-white/15 pt-4 text-xs text-sage">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-olive" />
          Available for On-site & Remote Opportunities
        </span>

      
      </div>
    </div>

    {/* BACK SIDE */}
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl
      bg-charcoal text-white
      [transform:rotateY(180deg)]
      [backface-visibility:hidden]"
    >
      <img
        src="/new.jpeg"
        alt="Developer workspace with a laptop and code"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

     

      
    </div>
  </div>
</div>

      {/* Engineering Principles */}
      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">

        <div className="group rounded-2xl border border-sage bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive">
          <span className="font-mono text-xs text-olive">  UI</span>
          <h3 className="mt-2 text-lg font-bold text-charcoal">
            Pixel-Perfect Design
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Turning designs into responsive, accessible interfaces.
          </p>
        </div>

        <div className="group rounded-2xl border border-sage bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive">
          <span className="font-mono text-xs text-olive"> Code</span>
          <h3 className="mt-2 text-lg font-bold text-charcoal">
            Clean Architecture
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Reusable components and maintainable TypeScript.
          </p>
        </div>

        <div className="group rounded-2xl border border-sage bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive">
          <span className="font-mono text-xs text-olive"> Speed</span>
          <h3 className="mt-2 text-lg font-bold text-charcoal">
            Performance First
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Fast-loading pages with a smooth user experience.
          </p>
        </div>

        <div className="group rounded-2xl border border-sage bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive">
          <span className="font-mono text-xs text-olive"> Team</span>
          <h3 className="mt-2 text-lg font-bold text-charcoal">
            Reliable Delivery
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Clear communication and dependable execution.
          </p>
        </div>
      </div>
    </div>

    {/* Compact CTA */}
    <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-sage bg-olive-light/50 px-6 py-5">
      <div>
        <h3 className="text-base font-bold text-charcoal">
          Have a project in mind?
        </h3>
        <p className="mt-1 text-sm text-muted">
          Let's build something meaningful together.
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-xl bg-olive px-5 py-3 text-sm font-semibold text-offwhite transition-all duration-300 hover:bg-olive-dark"
      >
        Let's Talk
        <span aria-hidden="true">↗</span>
      </a>
    </div>

  </div>
</section>

  );
};

