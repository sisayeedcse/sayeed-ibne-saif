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
  image?: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    id: "glowbee",
    title: "Glowbee Skincare",
    subtitle: "E-Commerce Website Development",
    category: "web",
    status: "completed",
    description:
      "A complete e-commerce platform developed for a client using WordPress. Features full product management, responsive design, and an optimized shopping experience.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "CSS", "JavaScript"],
    image: "/projects/glowbee.png",
    links: {
      live: "https://glowbeeskincare.com",
    },
    highlight: true,
  },
  {
    id: "ieeepusb",
    title: "IEEE PU SB Org Website",
    subtitle: "Frontend Design & Development",
    category: "web",
    status: "completed",
    description:
      "Designed and developed the frontend of the official organizational website for IEEE Premier University Student Branch as the Additional Webmaster for the 2025 session.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Frontend Design"],
    image: "/projects/ieeepusb.png",
    links: {
      live: "https://ieeepusb.org",
    },
  },
  {
    id: "gadgetexa",
    title: "Gadgetexa Labs",
    subtitle: "Personal Web Tools & Tech Blog",
    category: "web",
    status: "completed",
    description:
      "A personal project offering online utility tools for PC users and sharing new technology blogs. Developed from scratch using the Laravel framework.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Web Tools"],
    image: "/projects/gadgetexa.png",
    links: {
      live: "https://labs.gadgetexa.com",
    },
  },
  {
    id: "amazing-laundry",
    title: "Amazing Laundry System",
    subtitle: "Custom POS & Management Dashboard",
    category: "software",
    status: "completed",
    description:
      "A complete laundry management system and POS dashboard built for a client based in Qatar. Features order tracking, customer management, and financial reporting.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "POS System"],
    image: "/projects/amazinglaundry.png",
    links: {
      live: "https://amazinglaundryapp.com/",
    },
  }
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "software", label: "Software" },
  { id: "cloud", label: "Cloud" },
  { id: "systems", label: "Systems" },
] as const;
