export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack / SaaS' | 'Frontend & UI' | 'E-Commerce / Funnels' | 'Mobile & Web';
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageAlt: string;
  accentColor: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    note: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Fizan",
  role: "Frontend Engineer",
  experienceYears: 3,
  headline: "Crafting responsive, high-performance web applications with obsessive attention to UI craft.",
  bio: "Frontend Engineer with 3 years of professional experience specializing in React, Next.js, TypeScript, REST APIs, WebSockets, and Stripe payment architectures. I transform complex requirements into fluid, accessible, and resilient digital experiences.",
  location: "Lahore, Pakistan (Available for Global Remote)",
  email: "muhammadfizan713@gmail.com",
  phone: "+92 308 5170759",
  linkedin: "https://www.linkedin.com/in/muhammad-faizan-797599243/",
  github: "https://github.com/",
  availability: "Available for Full-time Roles & High-Impact Contracts",
  timezoneNotice: "Flexible overlap with US (EST/PST), UK (GMT), and European (CET) working hours."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Core & Languages",
    icon: "code",
    description: "Foundational web standards and type safety",
    skills: [
      { name: "TypeScript", level: "Advanced", note: "Strict typing, generics, component interfaces, utility types" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "Closures, async/await, event loop, functional programming" },
      { name: "HTML5 & Semantic Markup", level: "Expert", note: "WAI-ARIA accessibility, SEO structure, microdata" },
      { name: "CSS3 / Modern CSS", level: "Expert", note: "CSS Grid, Flexbox, custom properties, container queries" }
    ]
  },
  {
    category: "Frameworks & Ecosystem",
    icon: "layers",
    description: "Component systems, rendering strategies, and state",
    skills: [
      { name: "React.js", level: "Advanced", note: "Custom hooks, performance optimization, compound components" },
      { name: "Next.js", level: "Advanced", note: "App Router, SSR/SSG/ISR, Server Actions, Route Handlers" },
      { name: "Redux Toolkit ", level: "Advanced", note: "Normalized state, selectors, predictable data flow" },
      { name: "Vite & Tooling", level: "Advanced", note: "Fast HMR, module bundling, modern build pipelines" }
    ]
  },
  {
    category: "Styling & Motion",
    icon: "palette",
    description: "Design system execution and fluid interaction",
    skills: [
      { name: "Tailwind CSS v4", level: "Expert", note: "CSS-first configuration, @theme variables, zero-runtime" },
      { name: "Framer Motion", level: "Advanced", note: "Layout animations, gesture feedback, spring physics" },
      { name: "Responsive UI", level: "Expert", note: "Fluid typography clamp(), 320px to 4K responsive layouts" },
      { name: "Component Systems", level: "Advanced", note: "Atomic design, tokens, reusable UI library patterns" }
    ]
  },
  {
    category: "Auth, APIs & Security",
    icon: "shield",
    description: "JWT authentication, protected route guards, REST APIs, and Stripe",
    skills: [
      { name: "JWT Auth & Interceptors", level: "Expert", note: "Access & refresh token lifecycles, Axios request/response interceptors, silent token refresh" },
      { name: "Protected Routes & RBAC", level: "Expert", note: "Declarative route guards (<RequireAuth />), role permissions, session persistence, zero flash" },
      { name: "REST APIs & WebSockets", level: "Advanced", note: "Axios, React Query / TanStack, bidirectional socket streaming, live telemetry, error handling" },
      { name: "Stripe & Checkout Systems", level: "Advanced", note: "Stripe Elements, recurring subscription billing, customer portal, webhook payment events" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "betterweb-ai",
    title: "Betterweb.ai",
    subtitle: "AI Automation & Monetization SaaS Platform",
    category: "Full Stack / SaaS",
    description: "A production SaaS platform delivering customizable AI automation widgets with real-time WebSocket state streaming, Stripe subscription monetization, and high-conversion client onboarding.",
    challenge: "Engineering an intuitive dashboard capable of embedding dynamic AI assistant widgets into third-party sites with sub-second initialization and zero layout shift.",
    solution: "Architected a lightweight client embed script and built the main web portal using Next.js App Router, Tailwind CSS, real-time WebSocket channels, and Stripe billing pipelines.",
    metrics: [
      "Sub-200ms widget initialization time on client websites",
      "Real-time WebSocket event triggers for instant AI response telemetry",
      "Stripe customer portal & recurring subscription flow"
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "WebSockets", "Stripe"],
    liveUrl: "https://betterweb.ai",
    githubUrl: "https://github.com/",
    featured: true,
    imageAlt: "Betterweb.ai - The AI team that does the work. Platform Showcase",
    accentColor: "#0d9488",
    imageUrl: "/projects/betterweb-ai.jpg"
  },
  {
    id: "ease-md",
    title: "Ease MD",
    subtitle: "Telehealth Patient Intake & Diagnostic Funnel",
    category: "Frontend & UI",
    description: "A conversion-focused telehealth intake web application designed to guide patients through seamless medical questionnaires and doctor scheduling.",
    challenge: "Complex branching conditional logic with over 20 dynamic questionnaire paths while maintaining rapid completion rates and accessible input controls.",
    solution: "Constructed a compound multi-step form state engine in React, implementing animated transitions between assessment steps, input validations, and automatic state preservation.",
    metrics: [
      "+28% boost in patient questionnaire completion rate",
      "100% accessible keyboard navigation across all quiz inputs",
      "Zero bundle bloat using modular UI components"
    ],
    tags: ["React.js", "Next.js", "Tailwind CSS", "Component Architecture", "REST APIs"],
    liveUrl: "https://easemd.com",
    githubUrl: "https://github.com/",
    featured: true,
    imageAlt: "Ease MD Telehealth Interface Preview",
    accentColor: "#525E37",
    imageUrl: "/projects/ease-md.jpg"
  },
  {
    id: "a-retro-tale",
    title: "A Retro Tale",
    subtitle: "Luxury Vintage Marketplace & Appraisal Portal",
    category: "E-Commerce / Funnels",
    description: "A Scandinavian luxury vintage resale platform enabling customers to browse authenticated pre-owned designer pieces, complete Stripe checkouts, and submit items for appraisal.",
    challenge: "Handling rich multi-image galleries, facet filtering across dozens of luxury brands, and high-DPI image zooms without degrading mobile responsiveness.",
    solution: "Developed an e-commerce storefront utilizing responsive grid layouts, custom image zoom modals, and synchronized URL query parameters for persistent filtering.",
    metrics: [
      "Stripe payment gateway integration for secure luxury checkout",
      "Fast client-side facet filtering across 500+ items",
      "Redux Toolkit state management with offline cart resilience"
    ],
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Stripe"],
    liveUrl: "https://aretrotale.com",
    githubUrl: "https://github.com/",
    featured: true,
    imageAlt: "A Retro Tale Luxury Vintage Interface Preview",
    accentColor: "#687548",
    imageUrl: "/projects/a-retro-tale.jpg"
  },
  {
    id: "darvesta",
    title: "Darvesta",
    subtitle: "Real Estate Discovery & Property Portal",
    category: "Mobile & Web",
    description: "Interactive real estate portal featuring geospatial property discovery, bookmarking, and responsive mortgage calculators.",
    challenge: "Synchronizing dynamic map viewport coordinates with property listing cards while keeping mobile touch interactions buttery smooth.",
    solution: "Designed a twin-view layout (interactive map + card feed) with debounced viewport bounds queries and responsive bottom-sheet filter controls.",
    metrics: [
      "Smooth 60 FPS mobile gesture handling and bottom-sheet drawers",
      "Full responsive breakpoint support from 320px to wide desktop",
      "Clean TypeScript interfaces across all property entities"
    ],
    tags: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Mapbox GL"],
    liveUrl: "https://darvesta.com",
    githubUrl: "https://github.com/",
    featured: false,
    imageAlt: "Darvesta Property Portal Preview",
    accentColor: "#525E37",
    imageUrl: "/projects/darvesta.jpg"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "codendcoffee",
    role: "Full Stack / Frontend Engineer",
    company: "CodeNdCoffee",
    period: "Jan 2024 — Present",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description: "Leading frontend engineering initiatives for client and SaaS products, building scalable component design systems and integrating performant backend services.",
    highlights: [
      "Engineered responsive, pixel-perfect user interfaces across multiple web products using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Architected REST APIs and integrated real-time WebSocket communication channels for low-latency live client dashboards.",
      "Implemented secure Stripe checkout flows, recurring subscription management, and webhook billing listeners.",
      "Established an internal reusable UI component library, cutting cross-team sprint delivery cycles by 25%."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "WebSockets", "Stripe", "Redux Toolkit", "Git"]
  },
  {
    id: "spadasoft",
    role: "Software Engineer (Frontend)",
    company: "SpadaSoft",
    period: "Jul 2022 — Dec 2023",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    description: "Developed user-facing web applications from Figma prototypes, focusing on responsiveness, cross-browser consistency, and API integrations.",
    highlights: [
      "Constructed modular component architectures from scratch, decreasing frontend turnaround time by 30%.",
      "Integrated REST APIs with robust error handling, optimistic UI updates, and loading skeletons.",
      "Optimized Core Web Vitals (LCP, FID, CLS) using image optimization, code-splitting, and dynamic imports.",
      "Diagnosed and resolved 50+ cross-browser rendering inconsistencies across Safari, Chrome, and Firefox."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Axios", "Git", "Figma"]
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "Component-Driven Architecture",
    description: "I build maintainable, atomic components with single-responsibility principles, explicit TypeScript interfaces, and zero unnecessary re-renders."
  },
  {
    number: "02",
    title: "Obsessive Performance & Web Vitals",
    description: "Speed is a feature. Every asset is optimized, bundles are aggressively code-split, and layouts are calibrated for sub-second Largest Contentful Paint (LCP)."
  },
  {
    number: "03",
    title: "Pixel Fidelity & Fluid Motion",
    description: "Bridging the gap between Figma designs and production code with proportional spacing, responsive clamp() typography, and subtle micro-interactions."
  },
  {
    number: "04",
    title: "Accessibility as a Foundation",
    description: "Semantic HTML5, ARIA labels, focus rings, and high contrast ratios aren't afterthoughts; they are built in from the very first line of code."
  }
];

