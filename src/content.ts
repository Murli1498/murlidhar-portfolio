export const profile = {
  name: "Murlidhar S G",
  role: "Frontend Engineer",
  location: "Bengaluru, Karnataka",
  email: "srimuruli5@gmail.com",
  phoneDisplay: "+91 91136 40647",
  phoneHref: "tel:+919113640647",
  linkedin: "https://www.linkedin.com/in/murlidhar-s-g",
  github: "https://github.com/Murli1498",
  summary:
    "I build production web applications in React and TypeScript. Most recently that has been an AI dashboard studio: canvas authoring, a typed chart system, and analytics that run in the browser.",
};

export const work = [
  {
    index: "01",
    title: "LEAPS dashboard studio",
    place: "Analyttica Datalab",
    when: "2023 — Present",
    stack: ["React 19", "TypeScript", "Apache ECharts", "DuckDB WASM", "TanStack Query"],
    summary:
      "A studio for authoring dashboards. The project hub, canvas routing, and dataset preview sit on a typed chart registry covering bar, line, area, pie, KPI, table, scatter, funnel, and heatmap.",
    points: [
      "Moved chart rendering from Plotly to Apache ECharts. Style controls for axes, legends, series, KPI tiles, and tables update the canvas without a full redraw.",
      "Dataset preview and in-browser analytics run on DuckDB WASM and Arquero. TanStack Query drops cached previews when a dataset is uploaded, renamed, or deleted.",
      "Code-split the canvas so charts, DuckDB, spreadsheet parsing, and the rich-text editor load only when a dashboard opens. Studio panels no longer re-render on every keystroke. Lighthouse scores improved by 20%.",
      "Shipped project search, conversation history, and an in-canvas Copilot. Prompts and replies stream over WebSockets, with reconnect and Redux-backed conversation updates.",
    ],
  },
  {
    index: "02",
    title: "FashionCube",
    place: "Personal project",
    when: "E-commerce",
    href: "https://github.com/Murli1498/FashionCube",
    stack: ["React", "TypeScript", "Redux", "Lerna", "Sass"],
    summary:
      "A storefront in a Lerna monorepo, structured so catalog, cart, and shared UI could be developed once and reused across applications.",
    points: [
      "Built the design system: common components, layouts, and styling rules.",
      "Shipped product listing, product details, category navigation, recommendations, cart management, and authentication-ready modules.",
    ],
  },
  {
    index: "03",
    title: "Pricing Engine",
    place: "Product work",
    when: "Pricing intelligence",
    stack: ["React", "Redux Toolkit", "REST", "Bootstrap"],
    summary:
      "A pricing desk that tracks 1,000+ parts across competitor sites and turns that into comparisons, gaps, and recommendations.",
    points: [
      "Automated price discovery and market-gap monitoring instead of manual checks.",
      "Connected REST APIs and held dashboard state in Redux Toolkit so competitor comparisons stayed in sync with the latest pull.",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Analyttica Datalab",
    place: "Bengaluru, Karnataka",
    dates: "May 2023 — Present",
    points: [
      "Built the LEAPS dashboard studio in React 19 and TypeScript, including the project hub, canvas, and a typed chart registry.",
      "Migrated charts from Plotly to Apache ECharts and wired Style-tab controls so visual settings render without a full redraw.",
      "Served in-browser analytics with DuckDB WASM and Arquero, and used TanStack Query to invalidate dataset previews after upload, rename, and delete.",
      "Code-split the canvas and stopped studio panels from re-rendering on every keystroke. Lighthouse performance improved by 20%.",
      "Integrated the in-canvas Copilot over WebSockets, including socket lifecycle, automatic reconnect, and Redux-backed conversation updates.",
      "Designed a master data module with full CRUD for asset tag management, and a pricing engine that automated calculations and business-rule evaluation.",
    ],
  },
  {
    role: "UI Developer Intern",
    org: "Analyttica Datalab",
    place: "Bengaluru, Karnataka",
    dates: "Jan 2023 — May 2023",
    points: [
      "Trained in React.js, Redux Toolkit, Material UI, Docker, and the Nx framework with D3.",
      "Built reusable UI components and responsive layouts in the LEAPS application.",
      "Worked with QA to reproduce reported issues and ship fixes with senior engineers.",
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
    label: "Languages",
    items: "JavaScript (ES6+), TypeScript, Node.js, HTML5, CSS3",
  },
  {
    label: "Frameworks",
    items: "React.js, Next.js, Vite, TanStack Query, Zustand, Redux Toolkit, React Router, React Hook Form, Zod",
  },
  {
    label: "UI",
    items: "Tailwind CSS, Radix UI, Material UI, Bootstrap, React-Bootstrap",
  },
  {
    label: "Data & visualization",
    items: "Apache ECharts, Plotly, DuckDB WASM, Arquero, TanStack Table, D3, React Grid Layout",
  },
  {
    label: "Architecture",
    items: "Component-driven development, micro-frontends, modular monorepos (Lerna, Nx)",
  },
  {
    label: "Testing",
    items: "Vitest, Testing Library, Playwright, ESLint",
  },
  {
    label: "Tools",
    items: "Git, GitHub, Bitbucket, Jira, Docker, Webpack, npm, Postman, VS Code, Cursor",
  },
];

export const education = {
  degree: "Bachelor of Engineering, Information Science and Engineering",
  school: "Gogte Institute of Technology, Belagavi",
  dates: "Aug 2016 — Sep 2020",
  detail: "CGPA 7.31 / 10.00",
};
