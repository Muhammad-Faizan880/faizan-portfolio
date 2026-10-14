import React, { memo } from "react";
import {
  ReactLogo,
  NextjsLogo,
  TypescriptLogo,
  TailwindLogo,
  JavascriptLogo,
  ReduxLogo,
  FramerMotionLogo,
  ViteLogo,
  Html5Logo,
  Css3Logo,
  NodejsLogo,
  GitLogo,
  GithubLogo,
  FigmaLogo,
  RestApiLogo,
  WebsocketLogo,
  StripeLogo,
  JwtLogo,
  ShieldLockLogo,
} from "./TechLogos";

export interface TechItem {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const TECH_STACK_ITEMS: TechItem[] = [
  {
    name: "React",
    category: "Library",
    logo: <ReactLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: <NextjsLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: <TypescriptLogo className="w-5 h-5 shrink-0 rounded-sm" />,
  },
  {
    name: "Tailwind CSS v4",
    category: "Styling",
    logo: <TailwindLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "JWT Auth",
    category: "Security",
    logo: <JwtLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Protected Routes",
    category: "Navigation",
    logo: <ShieldLockLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "REST APIs",
    category: "Architecture",
    logo: <RestApiLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "WebSockets",
    category: "Real-Time",
    logo: <WebsocketLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Stripe",
    category: "Payments",
    logo: <StripeLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "JavaScript",
    category: "ESNext",
    logo: <JavascriptLogo className="w-5 h-5 shrink-0 rounded-sm" />,
  },
  {
    name: "Redux Toolkit",
    category: "State",
    logo: <ReduxLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    logo: <FramerMotionLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Vite",
    category: "Bundler",
    logo: <ViteLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "HTML5",
    category: "Markup",
    logo: <Html5Logo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "CSS3",
    category: "Layout & FX",
    logo: <Css3Logo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Node.js",
    category: "Runtime",
    logo: <NodejsLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Git",
    category: "VCS",
    logo: <GitLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "GitHub",
    category: "Collaboration",
    logo: <GithubLogo className="w-5 h-5 shrink-0" />,
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    logo: <FigmaLogo className="w-5 h-5 shrink-0" />,
  },
];

export const TechMarquee: React.FC = memo(() => {
  const renderItem = (tech: TechItem, key: string) => (
    <div
      key={key}
      className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/70 border border-olive-300 hover:border-olive-600 hover:bg-white transition-colors duration-150 shrink-0 group/item cursor-pointer"
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-olive-50 border border-olive-200 group-hover/item:border-olive-600/40 flex items-center justify-center transition-colors">
        {tech.logo}
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-bold text-olive-950 tracking-tight group-hover/item:text-olive-600 transition-colors whitespace-nowrap">
          {tech.name}
        </span>
        <span className="text-xs text-olive-700/80 font-mono whitespace-nowrap">
          {tech.category}
        </span>
      </div>
    </div>
  );

  return (
    <div
      id="tech-marquee"
      className="relative w-full py-2.5 sm:py-3 border-y border-olive-300 bg-olive-100 overflow-hidden select-none group"
      style={{
        ["--gap" as string]: "1rem",
        ["--duration" as string]: "38s",
      }}
    >
      {/* Smooth Edge Fade Masks in Light Olive Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-olive-100 via-olive-100/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-olive-100 via-olive-100/90 to-transparent z-10 pointer-events-none" />

      {/* Zero-Jitter Multi-Track Seamless Train */}
      <div className="flex overflow-hidden w-full gap-[var(--gap)]">
        <div className="animate-marquee items-center">
          {TECH_STACK_ITEMS.map((tech, i) => renderItem(tech, `set1-${tech.name}-${i}`))}
        </div>
        <div className="animate-marquee items-center" aria-hidden="true">
          {TECH_STACK_ITEMS.map((tech, i) => renderItem(tech, `set2-${tech.name}-${i}`))}
        </div>
        <div className="animate-marquee items-center" aria-hidden="true">
          {TECH_STACK_ITEMS.map((tech, i) => renderItem(tech, `set3-${tech.name}-${i}`))}
        </div>
        <div className="animate-marquee items-center" aria-hidden="true">
          {TECH_STACK_ITEMS.map((tech, i) => renderItem(tech, `set4-${tech.name}-${i}`))}
        </div>
      </div>
    </div>
  );
});

TechMarquee.displayName = "TechMarquee";
