export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "stack", href: "#skills" },
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
] as const;

export const PROJECTS = [
  {
    name: "Odyhook",
    domain: "odyhook.dev",
    href: "https://odyhook.dev/",
    body: "A smart webhook proxy. Ingests events from upstream providers, logs every payload forever, fans out to multiple destinations with automatic retries, and lets you replay any event with one click. AI-compiled filters and JS transforms run in a QuickJS sandbox before forwarding.",
    stack: "Next.js · Prisma · Postgres · QuickJS",
  },
  {
    name: "Nitpilot",
    domain: "nitpilot.dev",
    href: "https://nitpilot.dev/",
    body: "Your own AI agent reviews your teammates' pull requests, and theirs reviews yours. Runs Claude Code on your own machine, posts inline reviews in your name, and when both sides are on it the agents work the PR out between them — pinging a human only for the decisions.",
    stack: "React · Hono · Prisma · Postgres · WebSockets",
  },
] as const;

export const ROLES = [
  "fast trading interfaces",
  "real-time data tools",
  "AI agents & custom skills",
  "side projects that ship",
] as const;

export const EXPERIENCE = [
  {
    years: "2025 — now",
    company: "JPMorganChase",
    title: "Software Engineer II · Greece",
    bullets: [
      "Built highly interactive React + TypeScript apps for traders to inspect ETF baskets, edit constituents, monitor live pricing and risk, validate trade inputs, and submit baskets into pricing & valuation engines.",
      "Shipped composition editors, pricing workflows, basket management tools, and charting features powering real-time analytics and trading decisions.",
      "Partnered with backend engineers to define and integrate the services behind low-latency market data, pricing, and risk calculations.",
      "Built desk-specific UI extensions, persisted user-state management, validation frameworks, and comprehensive automated test coverage — keeping the platform performant and tailored to each desk's workflow.",
      "Drove AI-driven engineering initiatives across the equities ETF business — AI agents, reusable skills, and workflow automation to accelerate delivery and streamline trading & ops processes.",
    ],
  },
  {
    years: "2023 — 2025",
    company: "OKTO",
    title: "Front-end developer",
    bullets: [
      "Built and maintained secure, high-performance web applications in React + TypeScript, with a focus on reusable, responsive UI components.",
      "Partnered with backend, product and design in an Agile setting to ship features that move business metrics.",
      "Managed app state with Redux and Context API, keeping behavior predictable across pages.",
      "Improved frontend performance with lazy loading and memoization — cut initial load time and bumped responsiveness.",
      "Mentored on React + TS best practices by senior engineers; lifted code quality and team velocity.",
    ],
  },
  {
    years: "2020 — 2023",
    company: "Sportion",
    title: "Junior web developer",
    bullets: [
      "Built fully responsive pages from scratch, in close collaboration with the design team.",
      "Maintained, improved and revamped existing landing pages.",
      "Designed and shipped mobile-first features.",
      "Browser testing and debugging across the matrix.",
      "Fetched and handled data from APIs.",
    ],
  },
  {
    years: "2019 — 2020",
    company: "Freelance",
    title: "Junior web developer",
    bullets: [
      "Took on small freelance projects while learning the craft. The work that started it.",
    ],
  },
] as const;

export const SKILLS = [
  { name: "TypeScript", level: "primary" },
  { name: "React", level: "primary" },
  { name: "Next.js", level: "primary" },
  { name: "Node · Hono", level: "primary" },
  { name: "Postgres · Prisma", level: "primary" },
  { name: "WebSockets", level: "primary" },
  { name: "AI agents · Claude Code", level: "primary" },
  { name: "Redux · Context", level: "familiar" },
  { name: "HTML · CSS", level: "familiar" },
  { name: "PHP", level: "familiar" },
  { name: "WordPress", level: "familiar" },
] as const;

export const SERVICES = [
  {
    n: "01",
    title: "Custom web development",
    body: "Tailored websites and apps from scratch in modern React / TypeScript. Sensible architecture, no over-engineering.",
  },
  {
    n: "02",
    title: "Responsive design",
    body: "Layouts that hold up from mobile to ultrawide — built mobile-first with real device testing, not just media queries.",
  },
  {
    n: "03",
    title: "Single-page applications",
    body: "Dynamic, interactive SPAs in React. State you can reason about and components you can actually reuse.",
  },
  {
    n: "04",
    title: "Performance optimization",
    body: "Code splitting, lazy loading, image strategy, render profiling — measurable wins on real Lighthouse scores.",
  },
  {
    n: "05",
    title: "API integration",
    body: "Wiring front-ends to REST / GraphQL / third-party APIs with proper error states, retries, and type safety.",
  },
  {
    n: "06",
    title: "Workflow & automation",
    body: "Where my evenings go right now: AI agents, custom skills, and tooling that takes the rote work off the team's plate.",
  },
] as const;
