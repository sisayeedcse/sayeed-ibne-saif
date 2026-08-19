export type Activity = {
  id: string;
  title: string;
  organization: string;
  period?: string;
  description: string;
  tags: string[];
  image?: string;
  imagePosition?: string;
};

export const activities: Activity[] = [
  {
    id: "ieee-aiml-bootcamp",
    title: "IEEE AI/ML Bootcamp",
    organization: "IEEE Computer Society · Premier University",
    period: "2026",
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
];
