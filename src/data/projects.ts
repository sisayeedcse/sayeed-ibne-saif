export type ProjectStatus = "completed" | "in-progress" | "planned";
export type ProjectCategory = "web" | "mobile" | "software" | "cloud" | "systems" | "coming-next";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    id: "classtrack",
    title: "ClassTrack",
    subtitle: "Academic Schedule Management App",
    category: "mobile",
    status: "completed",
    description:
      "Android application for organizing and managing student academic schedules, with PDF and Excel import support for timetables.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "Room Database", "PDF Parsing", "Excel Parsing"],
    links: {
      github: "#", // Replace with actual repo URL
    },
    highlight: true,
  },
  {
    id: "ecommerce-dev",
    title: "E-Commerce Website Development",
    subtitle: "Client Web Projects",
    category: "web",
    status: "completed",
    description:
      "Full-cycle development and maintenance of client-oriented e-commerce websites, covering product management, SEO, and performance.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    links: {},
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    subtitle: "This Website",
    category: "web",
    status: "completed",
    description:
      "Responsive personal portfolio built with Next.js and Tailwind CSS, designed for performance, accessibility and SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    links: {
      github: "#", // Replace with actual repo URL
    },
  },
  // ── Coming Next ────────────────────────────────────────────────
  // These will be populated as projects are completed.
  {
    id: "linux-server-lab",
    title: "Linux Server Lab",
    subtitle: "Systems & Administration",
    category: "coming-next",
    status: "planned",
    description:
      "Hands-on Linux server setup, user management, SSH configuration, systemd services and shell scripting exercises.",
    tech: ["Linux", "Ubuntu", "Bash", "SSH", "systemd"],
  },
  {
    id: "cloud-fundamentals-project",
    title: "Cloud Fundamentals Project",
    subtitle: "AWS / Azure / GCP",
    category: "coming-next",
    status: "planned",
    description:
      "Practical cloud deployment project covering compute, storage, networking and IAM fundamentals.",
    tech: ["Cloud", "Networking", "IAM", "Storage"],
  },
  {
    id: "network-lab",
    title: "Network Configuration Lab",
    subtitle: "Networking & Infrastructure",
    category: "coming-next",
    status: "planned",
    description:
      "Packet Tracer / GNS3 network topology lab covering routing, switching, VLANs and basic security.",
    tech: ["Cisco", "TCP/IP", "Routing", "VLANs", "Network Security"],
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "software", label: "Software" },
  { id: "cloud", label: "Cloud" },
  { id: "systems", label: "Systems" },
] as const;
