export type ProjectStatus = "completed" | "in-progress" | "planned";
export type ProjectCategory = "web" | "mobile" | "software" | "cloud" | "systems" | "coming-next";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  tech: string[];
  image?: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  year: string;
  role: string;
  writeup: {
    challenge: string;
    approach: string;
    result: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "glowbee-skincare",
    title: "Glowbee Skincare",
    subtitle: "Client e-commerce platform",
    category: "web",
    status: "completed",
    year: "2023–2026",
    role: "Sole developer & site manager",
    description:
      "A complete e-commerce platform developed for a skincare brand — product management, conversion-focused pages and ongoing operations.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS", "JavaScript"],
    image: "/projects/glowbee.png",
    links: {
      live: "https://glowbeeskincare.com",
    },
    featured: true,
    writeup: {
      challenge:
        "A growing local skincare brand needed more than a social-media presence — it needed a store it controlled end to end: inventory, promotions, checkout and a brand-consistent shopping experience that worked just as well on a phone as a desktop.",
      approach:
        "Built the storefront on WordPress and WooCommerce for sustainability for a non-technical team, with full product management and a responsive, conversion-focused layout. Ownership then continued across SEO, Google Analytics instrumentation, page-speed tuning and merchandising support.",
      result:
        "The store ran as the brand's primary sales channel for over three years of continuous development, with product listings, promotions and site configuration managed in-house by the client.",
    },
  },
  {
    slug: "ieee-pusb-website",
    title: "IEEE PU SB Organization Website",
    subtitle: "Organizational presence — frontend",
    category: "web",
    status: "completed",
    year: "2025",
    role: "Additional Webmaster, IEEE PU SB",
    description:
      "Official organizational website for the IEEE Premier University Student Branch, designed and built for the 2025 session.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Frontend Design"],
    image: "/projects/ieeepusb.png",
    links: {
      live: "https://ieeepusb.org",
    },
    writeup: {
      challenge:
        "The student branch needed a credible public face: a place where events, the board, and the branch's identity live — maintained by students who rotate out every year.",
      approach:
        "Designed and developed the frontend as Additional Webmaster, keeping the markup lean and Tailwind-based so future boards can extend it without a framework learning curve.",
      result:
        "Shipped as the official site of the branch, standing alongside my 2025 tenure as Additional Webmaster and later Chairperson.",
    },
  },
  {
    slug: "gadgetexa-labs",
    title: "Gadgetexa Labs",
    subtitle: "Web tools & tech blog",
    category: "web",
    status: "completed",
    year: "2024",
    role: "Solo builder",
    description:
      "A self-built platform offering practical online utilities for PC users alongside technology writing, developed from scratch in Laravel.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    image: "/projects/gadgetexa.png",
    links: {
      live: "https://labs.gadgetexa.com",
    },
    writeup: {
      challenge:
        "Small utilities — converters, checkers, calculators — are usually scattered across ad-heavy sites. The question was whether a single well-built site could host them cleanly and earn recurring traffic.",
      approach:
        "Built the platform from scratch on Laravel with utility tools implemented as server-side services, plus a lightweight publishing workflow for the adjoining tech blog.",
      result:
        "A production Laravel deployment serving tools and articles under one roof — later useful as a reference for structuring multi-tool monoliths.",
    },
  },
  {
    slug: "amazing-laundry-pos",
    title: "Amazing Laundry System",
    subtitle: "Client POS & management dashboard",
    category: "software",
    status: "completed",
    year: "2024",
    role: "Full-stack developer (client project)",
    description:
      "A laundry management system and POS dashboard for a Qatar-based client — order tracking, customer records and financial reporting.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "POS"],
    image: "/projects/amazinglaundry.png",
    links: {
      live: "https://amazinglaundryapp.com/",
    },
    featured: true,
    writeup: {
      challenge:
        "The business ran orders, customers and money across paper, spreadsheets and memory. It needed a single system a counter-desk operator could run daily, across currencies and shifts.",
      approach:
        "Designed the data model around orders and customers first, then built a POS flow tuned for speed at the counter, backed by admin reporting — all delivered as a custom Laravel application.",
      result:
        "Deployed in production for the Qatar-based client, consolidating order intake, customer management and financial reporting into one dashboard.",
    },
  },
  {
    slug: "jibika-platform",
    title: "Jibika",
    subtitle: "Livelihood & micro-capital platform",
    category: "web",
    status: "completed",
    year: "2025",
    role: "Full-stack developer",
    description:
      "A platform connecting verified livelihood needs with small-scale capital — worker profiles, capital deployment tracking and asset delivery management, with AI-assisted matching.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"],
    image: "/projects/jibika.png",
    links: {
      live: "https://jibika.vercel.app/",
    },
    featured: true,
    writeup: {
      challenge:
        "Small-scale livelihood finance fails on verification: who is the worker, what exactly is needed, where does the capital go. The platform had to make trust auditable, not assumed.",
      approach:
        "Modelled the flow as worker profiles → verified needs → capital deployment → asset delivery, each stage tracked in the system. Built with Next.js and TypeScript on Vercel, using AI assistance for matching and verification flows.",
      result:
        "A working end-to-end platform demonstrating that micro-capital rounds can be structured, tracked and audited online.",
    },
  },
  {
    slug: "inex-tracker",
    title: "InEx Tracker",
    subtitle: "Personal finance manager",
    category: "software",
    status: "completed",
    year: "2024",
    role: "Solo builder (production tool)",
    description:
      "An income and expense tracker managing finances across multiple accounts — real-time dashboard, 6-month trends, balances and monthly cost estimation.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Chart.js"],
    image: "/projects/inex-tracker.png",
    writeup: {
      challenge:
        "Money was split across bKash, Upay and Payoneer accounts with no single view of balance, burn rate or trend — reconciling by memory each month.",
      approach:
        "Built a Laravel tracker with accounts as first-class entities: transactions roll up into per-account balances, a 6-month income vs. expense chart, and monthly cost estimation, all charted with Chart.js.",
      result:
        "A self-hosted finance dashboard replacing spreadsheet reconciliation — in continuous personal use.",
    },
  },
  {
    slug: "smartcool",
    title: "SmartCool",
    subtitle: "Multi-room AC energy-efficiency suite",
    category: "software",
    status: "completed",
    year: "2025",
    role: "Full-stack developer",
    description:
      "A smart multi-room air-conditioning energy platform — live room monitoring, occupancy detection, automated control, cost savings and CO2e analytics.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/smartcool.png",
    links: {
      live: "https://smartcool.vercel.app/",
      github: "https://github.com/sisayeedcse/SmartCool",
    },
    writeup: {
      challenge:
        "Buildings cool rooms nobody is in. Detecting occupancy, automating control, and proving the savings — with real-time power and cumulative CO2e numbers — is what turns that waste into a manageable metric.",
      approach:
        "Built the monitoring and control suite as a Next.js application: live per-room state, occupancy and motion inputs driving automated AC policies, with real-time power, cost-savings and cumulative emission analytics surfaced on the dashboard.",
      result:
        "Open-sourced on GitHub and deployed on Vercel — a reference build for occupancy-driven climate control and energy analytics.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectIndex(slug: string) {
  return projects.findIndex((p) => p.slug === slug);
}
