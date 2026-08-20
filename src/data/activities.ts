export type Activity = {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  tags: string[];
  image?: string;
  image2?: string;
  imagePosition?: string;
  link?: string;
  linkText?: string;
};

export const activities: Activity[] = [
  {
    id: "ieee-aiml-bootcamp",
    title: "IEEE AI/ML Bootcamp",
    organization: "IEEE Computer Society · Premier University",
    period: "2025",
    description:
      "Participated in and helped organize an intensive AI/ML bootcamp covering foundational to applied machine learning concepts, workshops and project sessions.",
    tags: ["AI/ML", "Bootcamp", "Organization", "Technical Education"],
    image: "/activities/bootcamp.png",
    imagePosition: "95% 30%",
  },
  {
    id: "ieee-technical-webinars",
    title: "IEEE Technical Webinars & Workshops",
    organization: "IEEE Computer Society · Premier University",
    description:
      "Active participant and organizer for IEEE technical education events covering software development, emerging technologies and industry practices.",
    tags: ["Webinars", "Workshops", "Technical Programs", "Community"],
    image: "/activities/webinar.png",
    imagePosition: "85% center",
  },
  {
    id: "ieee-student-initiatives",
    title: "Student Technology Initiatives",
    organization: "IEEE Computer Society · Premier University",
    description:
      "Coordinated student-led technology education programs designed to build technical skills and connect students with professional engineering communities.",
    tags: ["Leadership", "Collaboration", "Technology Education", "Student Programs"],
    image: "/activities/workshop.png",
    imagePosition: "95% 20%",
  },
  {
    id: "ict-fair-runner-up",
    title: "Runner-up, 3rd Chattogram ICT Fair 2025",
    organization: "ISPB Chattogram Chapter",
    period: "Jan 15 - Jan 17, 2025",
    description:
      "Secured the runner-up position in the tech competition at the 3rd Chattogram ICT Fair 2025 held at GEC Convention Center. The three-day event featured renowned tech companies, youth-focused seminars, and science exhibits.",
    tags: ["Competition", "Runner-up", "Tech Fair", "Achievement"],
    image: "https://res.cloudinary.com/dknflcbt1/image/upload/v1787242550/podiumGEC_aqbfry.jpg",
    image2: "https://res.cloudinary.com/dknflcbt1/image/upload/v1787242550/PRIZEGECFair_env2e8.jpg",
    imagePosition: "center 20%",
  },
  {
    id: "appquest-2025",
    title: "5th Place, AppQuest 2025 Hackathon",
    organization: "AppLink & Banglalink",
    period: "Dec 13, 2025",
    description:
      "Secured 5th position among 42 teams with 'MaidMatch', a domestic help management platform aimed at solving real-world problems. The hackathon was held at Banglalink HQ in Dhaka.",
    tags: ["Hackathon", "Top 5", "Startup", "Tech Innovation"],
    image: "https://res.cloudinary.com/dknflcbt1/image/upload/v1787243417/applink_hackathon_wklfeh.jpg",
    link: "https://github.com/sisayeedcse/MaidMatch-App",
    linkText: "View GitHub Repo",
  },
  {
    id: "televerse-1-0",
    title: "Top 30 Finalist, Televerse 1.0 Hackathon",
    organization: "CUET ETE",
    description:
      "Competed in an intense 8-hour hackathon, building and presenting a full microservice-based project. Reached the top 30 finalists from all over Bangladesh, gaining hands-on experience in Docker, CI/CD, and DevOps under pressure.",
    tags: ["Hackathon", "Microservices", "DevOps", "Finalist"],
    image: "https://res.cloudinary.com/dknflcbt1/image/upload/v1787243508/televerseHackathon_urlxf7.jpg",
    link: "https://github.com/sisayeedcse/CareForAll_MicroService",
    linkText: "View GitHub Repo",
    imagePosition: "center 30%",
  }
];
