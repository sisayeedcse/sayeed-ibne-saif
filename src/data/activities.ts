export type Activity = {
  slug: string;
  title: string;
  organization: string;
  period?: string;
  location?: string;
  summary: string;
  detail: string;
  outcome?: string;
  tags: string[];
  photos?: { src: string; position?: string }[];
  link?: string;
  linkText?: string;
};

export const activities: Activity[] = [
  {
    slug: "iconeect-2026",
    title: "Volunteer — iCONEECT 2026 & iCONCLAVE 2026",
    organization: "IEEE · Premier University",
    period: "2026",
    summary:
      "Coordinated physical and virtual sessions and the iCONCLAVE competitions across a two-day national conference.",
    detail:
      "Volunteering at the IEEE iCONEECT 2026 & iCONCLAVE 2026 conferences meant owning concrete sessions rather than general support: coordinating Physical Session 02 and 06 on day one, Virtual Session 08, and the iCONCLAVE competitions on day two — keeping speakers, rooms and schedules in sync as the program ran.",
    outcome:
      "Hands-on exposure to how research conferences are actually run — sessions management, speaker logistics, and close contact with research work in AI/ML and emerging technologies.",
    tags: ["Volunteering", "IEEE", "Conference", "AI/ML", "Research"],
    photos: [
      { src: "/activities/iconeect-team.jpg", position: "center 62%" },
      { src: "/activities/iconeect-award.png" },
    ],
  },
  {
    slug: "ict-fair-runner-up",
    title: "Runner-up — 3rd Chattogram ICT Fair 2025",
    organization: "ISPB Chattogram Chapter",
    period: "Jan 15–17, 2025",
    location: "GEC Convention Center, Chattogram",
    summary:
      "Runner-up in the tech competition at a three-day regional ICT fair with company booths, seminars and science exhibits.",
    detail:
      "The 3rd Chattogram ICT Fair 2025 brought tech companies, youth-focused seminars and science exhibits to GEC Convention Center. Competing in the tech competition against teams from across the region, the team took the runner-up position — judged on working software, problem selection and presentation.",
    outcome:
      "Regional runner-up recognition, plus direct contact with the local industry ecosystem the fair convenes.",
    tags: ["Competition", "Runner-up", "Achievement"],
    photos: [
      { src: "/activities/ict-fair-podium.jpg", position: "center 40%" },
      { src: "/activities/ict-fair-prize.jpg", position: "center 42%" },
    ],
  },
  {
    slug: "appquest-2025",
    title: "5th of 42 teams — AppQuest 2025 Hackathon",
    organization: "AppLink & Banglalink",
    period: "Dec 13, 2025",
    location: "Banglalink HQ, Dhaka",
    summary:
      "Top-5 finish with 'MaidMatch', a domestic help management platform, among 42 teams.",
    detail:
      "AppQuest 2025 drew 42 teams to Banglalink headquarters. Our team built MaidMatch — a platform for managing domestic help engagements with verification and booking flows — and presented it to the judging panel, finishing 5th overall.",
    outcome:
      "A top-5 national hackathon result demonstrating how to scope, build and defend a product idea under time pressure.",
    tags: ["Hackathon", "Top 5", "Startup", "Team"],
    photos: [
      { src: "/activities/appquest.jpg", position: "center 30%" },
    ],
    link: "https://github.com/sisayeedcse/MaidMatch-App",
    linkText: "View GitHub repo",
  },
  {
    slug: "televerse-1-0",
    title: "Top 30 Finalist — Televerse 1.0 Hackathon",
    organization: "CUET ETE",
    period: "2025",
    summary:
      "Finalist in an 8-hour hackathon building a full microservice-based project — Docker, CI/CD and DevOps under pressure.",
    detail:
      "Televerse 1.0, hosted by CUET ETE, gave teams eight hours to build and present a full project. We committed to a microservices architecture rather than a monolith: containerized services, a CI pipeline and a deployment story — precision that put the project in the top 30 from all over Bangladesh.",
    outcome:
      "Practical DevOps experience under hackathon pressure — Docker, CI/CD and service decomposition with one shot at correctness.",
    tags: ["Hackathon", "Microservices", "DevOps", "Finalist"],
    photos: [
      { src: "/activities/televerse.jpg", position: "center 28%" },
    ],
    link: "https://github.com/sisayeedcse/CareForAll_MicroService",
    linkText: "View GitHub repo",
  },
  {
    slug: "ieee-aiml-bootcamp",
    title: "Organizer & participant — IEEE AI/ML Bootcamp",
    organization: "IEEE Computer Society · Premier University",
    period: "2025",
    summary:
      "Helped organize and participated in an intensive AI/ML bootcamp — foundations through applied workshops.",
    detail:
      "The AI/ML bootcamp ran as a multi-week program covering foundational machine learning through applied workshop and project sessions. Organizing meant curating the syllabus, arranging facilitators and coordinating logistics; participating meant completing the track end to end.",
    outcome:
      "Both sides of technical education — building a program and proving the material — for an IEEE-sanctioned bootcamp.",
    tags: ["AI/ML", "Bootcamp", "Organization", "IEEE"],
    photos: [{ src: "/activities/bootcamp.png", position: "center 45%" }],
  },
  {
    slug: "ieee-webinars-workshops",
    title: "IEEE technical webinars & workshops",
    organization: "IEEE Computer Society · Premier University",
    period: "2025–2026",
    summary:
      "Active organizer and participant across IEEE technical-education events for software development and emerging technologies.",
    detail:
      "Across the 2025–2026 sessions, the chapter ran a steady calendar of technical webinars and workshops — software development practices, emerging technologies and industry speakers. My involvement covered speaker coordination, announcements and reporting, alongside regular participation.",
    outcome:
      "Consistent program-running experience for an IEEE student chapter's technical track.",
    tags: ["Webinars", "Workshops", "Community", "IEEE"],
    photos: [{ src: "/activities/webinar.png", position: "center 60%" }],
  },
  {
    slug: "student-tech-initiatives",
    title: "Student technology initiatives",
    organization: "IEEE Computer Society · Premier University",
    period: "2025–2026",
    summary:
      "Coordinated student-led technology education programs building technical skills and community.",
    detail:
      "Beyond the official calendar, the chapter coordinated student-led initiatives — peer-taught technical sessions, collaboration with other engineering communities, and programs designed to connect students with professional engineering bodies.",
    outcome:
      "A student-community track record that led directly to the 2026 Chairperson role.",
    tags: ["Leadership", "Collaboration", "Student Programs"],
    photos: [{ src: "/activities/workshop.png", position: "center 40%" }],
  },
];

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug);
}

export function activityIndex(slug: string) {
  return activities.findIndex((a) => a.slug === slug);
}
