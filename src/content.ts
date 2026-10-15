export const profile = {
  name: "Murlidhar S G",
  role: "Software Engineer",
  location: "Bengaluru, Karnataka",
  email: "srimuruli5@gmail.com",
  phoneDisplay: "+91 91136 40647",
  phoneHref: "tel:+919113640647",
  linkedin: "https://www.linkedin.com/in/murlidhar-s-g",
  github: "https://github.com/Murli1498",
  summary:
    "Software engineer with nearly four years building React, Next.js, and TypeScript applications. I shipped full-stack features for an e-learning platform on Node.js, Express, and MongoDB, and I now build dashboards, tables, and in-browser analytics for a self-service BI product.",
};

export const current = {
  title: "Software Engineer, Analyttica Datalab",
  meta: "October 2025 — Present · Bengaluru",
  blurb:
    "Building a self-service BI platform: dashboard authoring, virtualized tables, and analytics that run in the browser with DuckDB WASM. The work has improved user productivity by about 30%.",
};

export const work = [
  {
    index: "01",
    title: "Self-service BI platform",
    place: "Analyttica Datalab",
    when: "Oct 2025 — Present",
    stack: ["React", "Next.js", "TypeScript", "Zustand", "TanStack", "DuckDB WASM", "Apache ECharts"],
    summary:
      "A product for authoring dashboards and analytical workflows. Shared React components cover charts, tables, filters, layouts, and configuration, and heavy analysis runs in the browser.",
    points: [
      "Designed 30 reusable components for charts, tables, filters, slicers, layouts, and configuration panels, shared across the dashboard and chart builder.",
      "Built tables with TanStack Table and TanStack Virtual that page rows in batches of 50 and cache 12 pages around the viewport, so only the visible window renders.",
      "Shipped drag-and-drop layouts, drill-down and drill-through, crosstabs, slicers, and what-if analysis, plus sharing, guest and embedded access, bookmarks, and PNG, PDF, and PPTX export.",
      "Ran client-side analytics with DuckDB WASM, Apache Arrow, Arquero, and Parquet, and drew charts with Apache ECharts and Plotly.js. Route-based code splitting cut initial load time by about 30%.",
      "Wrote 50+ Vitest and React Testing Library files and extended Playwright coverage used by Bitbucket Pipelines merge gates.",
    ],
  },
  {
    index: "02",
    title: "E-learning platform",
    place: "Analyttica Datalab",
    when: "May 2023 — Sep 2025",
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Nx", "Module Federation"],
    summary:
      "Full-stack course delivery: React and Next.js on the front, Node.js, Express, and MongoDB on the back, later split so frontends could ship independently.",
    points: [
      "Designed REST APIs for content delivery, authentication, and course progress, and used MongoDB aggregation pipelines for analytics dashboards.",
      "Moved a monolithic frontend to micro-frontends in an Nx monorepo with Module Federation. Independent deploys raised team efficiency by 25%, and the maintainability work cut development cost by 15%.",
      "Cut page load times by 30% through code splitting, MongoDB query tuning, and FCP and TTI work, and improved SEO rankings by 20%. Integrated payment gateways and third-party APIs.",
    ],
  },
  {
    index: "03",
    title: "FashionCube",
    place: "Personal project",
    when: "E-commerce",
    href: "https://github.com/Murli1498/FashionCube",
    stack: ["React", "TypeScript", "Redux", "Lerna", "Sass"],
    summary:
      "A storefront in a Lerna monorepo, structured so catalog, cart, and shared UI could be developed once and reused across applications.",
    points: [
      "Built a design system of common components, layouts, and styling rules with SCSS and Styled Components.",
      "Shipped product listing, product details, category navigation, recommendations, cart management, and authentication-ready modules.",
    ],
  },
  {
    index: "04",
    title: "Pricing Engine",
    place: "Product work",
    when: "Pricing intelligence",
    stack: ["React", "Redux", "REST", "Bootstrap"],
    summary:
      "A pricing desk that tracks 1,000+ parts across competitor sites and turns that into comparisons, gaps, and recommendations.",
    points: [
      "Automated price discovery and market-gap monitoring instead of manual checks.",
      "Held dashboard state in Redux across 27 reusable components and REST APIs, cutting data-fetch latency by 15%.",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Analyttica Datalab",
    place: "Bengaluru, Karnataka",
    dates: "Oct 2025 — Present",
    points: [
      "Architect React, Next.js, and TypeScript applications with Vite and React Router for dashboard creation, visualization, and analytics workflows.",
      "Separate client, server, cached, and UI state with Zustand and TanStack Query, and render charts with Apache ECharts and Plotly.js.",
      "Build interactive dashboards: drag-and-drop layouts, resizable cells, drill-down and drill-through, crosstabs, slicers, Top/Bottom N, time grain, and multi-level filtering.",
      "Run browser analytics with DuckDB WASM, Apache Arrow, Arquero, and Parquet. Sharing, guest and embedded access, bookmarks, and PNG, PDF, and PPTX export ship with the product, along with what-if scenario planning.",
      "Improved initial load by about 30% with route-based code splitting, lazy loading, memoization, and rendering work. UI uses Shadcn, Radix, Tailwind, and Material UI, with light, dark, and multi-theme support.",
      "Put unit tests, Playwright, ESLint, and the TypeScript build on every pull request in Bitbucket Pipelines. The pipeline requires a Jira ticket and blocks the merge until those checks pass.",
      "Use Claude Code and Cursor to extend the Python FastAPI backend — routers, schemas, services, and the SQL compiler — with pytest coverage, and mentor juniors through onboarding and interviews.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Analyttica Datalab",
    place: "Bengaluru, Karnataka",
    dates: "May 2023 — Sep 2025",
    points: [
      "Built and maintained full-stack features for an e-learning platform with React and Next.js, and Node.js, Express, and MongoDB.",
      "Designed REST APIs for dynamic content, authentication, and course progress, and shaped MongoDB schemas with aggregation pipelines for analytics dashboards.",
      "Migrated the frontend from a monolith to micro-frontends using an Nx monorepo and Module Federation, enabling independent deployments.",
      "Tuned frontend load (code splitting, FCP, TTI) and MongoDB queries. Tested with Jest and React Testing Library, and validated APIs with Postman and Chrome DevTools.",
    ],
  },
  {
    role: "UI Developer Intern",
    org: "Analyttica Datalab",
    place: "Bengaluru, Karnataka",
    dates: "Jan 2023 — May 2023",
    points: [
      "Trained in React.js, Redux Toolkit, Material UI, Docker, and the Nx framework with D3.",
      "Contributed to the LEAPS application with reusable UI components and responsive Material UI layouts.",
      "Found and fixed bugs across frontend and backend, cutting bug reports by 30%.",
    ],
  },
  {
    role: "Process Executive - Voice",
    org: "Cognizant Technology Solutions",
    place: "Gurgaon, Haryana",
    dates: "Jan 2021 — Sep 2022",
    points: [
      "Ran defined operational workflows for a global technology client under a confidentiality agreement. Client and process details cannot be disclosed.",
      "Met accuracy and turnaround targets on time-bound case reviews, escalated exceptions, and took part in quality audits and shift handovers.",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  {
    label: "Frontend",
    items: "React.js, Next.js, TypeScript, JavaScript (ES6+), Zustand, TanStack Query, Redux Toolkit, React Router, Vite",
  },
  {
    label: "UI",
    items: "Material UI, Shadcn UI, Radix UI, Tailwind CSS, Styled Components, SCSS, responsive layout, WCAG",
  },
  {
    label: "Data & visualization",
    items: "Apache ECharts, Plotly.js, TanStack Table, TanStack Virtual, DuckDB WASM, Apache Arrow, Arquero, D3",
  },
  {
    label: "Architecture",
    items: "Component architecture, shared libraries, Nx monorepos, micro-frontends, Module Federation",
  },
  {
    label: "Backend",
    items: "Node.js, Express.js, MongoDB, Python, FastAPI, REST APIs",
  },
  {
    label: "Testing & delivery",
    items: "Vitest, Jest, React Testing Library, Playwright, pytest, ESLint, Bitbucket Pipelines, Git, GitHub, Bitbucket",
  },
  {
    label: "Tools",
    items: "Jira, Postman, Chrome DevTools, Docker, Webpack, Babel, npm, Cursor, Claude Code",
  },
];

export const education = {
  degree: "Bachelor of Engineering, Information Science and Engineering",
  school: "Gogte Institute of Technology, Belagavi",
  dates: "Aug 2016 — Sep 2020",
  detail: "CGPA 7.31 / 10.00",
};
