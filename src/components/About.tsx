import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-sage py-16 md:py-24 relative isolate overflow-hidden bg-offwhite"
    >
      {/* Soft ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
          radial-gradient(
            ellipse 950px 450px at 5% 15%,
            rgba(192, 230, 117, 0.16),
            transparent 70%
          ),
          radial-gradient(
            ellipse 700px 500px at 95% 75%,
            rgba(151, 184, 99, 0.13),
            transparent 72%
          ),
          linear-gradient(
            135deg,
            rgba(248, 250, 239, 0.65),
            rgba(255, 255, 255, 0.25)
          )
        `,
        }}
      />
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
              I'm a frontend engineer with 3 years of experience turning
              complex ideas into responsive, accessible, and production-ready
              web experiences.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sage bg-white px-3 py-1.5 text-xs font-medium text-charcoal"
                  >
                    {skill}
                  </span>
                ),
              )}
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
                {/* 3-Year Engineering Growth Sparkline (Exact Olive Theme) */}
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10 flex flex-col items-end pointer-events-none select-none">
                  {/* Soft Ambient Olive Aura for Seamless Mixing */}
                  <div className="absolute -inset-2 bg-olive/35 rounded-2xl blur-xl pointer-events-none" />

                  {/* Micro Metric Badge */}
                  <div className="relative flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                    <span className="text-[10px] font-mono font-bold text-sage">
                      Growth Velocity
                    </span>
                  </div>

                  {/* The Sparkline Curve */}
                  <div className="relative w-28 sm:w-32 h-14">
                    <svg
                      className="w-full h-full overflow-visible drop-shadow-[0_0_12px_rgba(104,117,72,0.65)]"
                      viewBox="0 0 100 48"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id="growthAreaGrad"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#687548"
                            stopOpacity="0.45"
                          />
                          <stop
                            offset="100%"
                            stopColor="#687548"
                            stopOpacity="0.0"
                          />
                        </linearGradient>
                        <linearGradient
                          id="growthStrokeGrad"
                          x1="0%"
                          y1="100%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#525E37" />
                          <stop offset="60%" stopColor="#687548" />
                          <stop offset="100%" stopColor="#8FA858" />
                        </linearGradient>
                      </defs>

                      {/* Dotted Baseline Axis */}
                      <line
                        x1="4"
                        y1="44"
                        x2="96"
                        y2="44"
                        stroke="#687548"
                        strokeOpacity="0.25"
                        strokeDasharray="2 3"
                      />

                      {/* Gradient Area Fill Under Curve */}
                      <path
                        d="M 6 38 C 24 36, 42 26, 56 22 C 72 17, 84 10, 96 4 L 96 44 L 6 44 Z"
                        fill="url(#growthAreaGrad)"
                      />

                      {/* Growth Curve Line */}
                      <path
                        d="M 6 38 C 24 36, 42 26, 56 22 C 72 17, 84 10, 96 4"
                        stroke="url(#growthStrokeGrad)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />

                      {/* Year 1 Node (2022) */}
                      <circle cx="6" cy="38" r="2.5" fill="#CAD6BA" />

                      {/* Year 2 Node (2023) */}
                      <circle cx="56" cy="22" r="2.5" fill="#CAD6BA" />

                      {/* Year 3+ Peak Node (Present) */}
                      <circle
                        cx="96"
                        cy="4"
                        r="3"
                        fill="#687548"
                        stroke="#DFE9D3"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Micro Timeline Ticks */}
                    <div className="flex justify-between w-full text-[9px] font-mono text-white pt-0.5">
                      <span>'22</span>
                      <span>'23</span>
                      <span className="text-white font-bold">'24+</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.2em] font-mono text-white">
                    Experience
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
                      03
                    </span>
                    <span className="text-sm text-white">Years+</span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    Frontend Engineering
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white">
                    Building polished interfaces and scalable web applications.
                  </p>
                </div>

                <div className="relative mt-6 flex items-center justify-between gap-2 border-t border-white/15 pt-4 text-xs text-white">
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
              <span className="font-mono text-xs text-olive"> UI</span>
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
