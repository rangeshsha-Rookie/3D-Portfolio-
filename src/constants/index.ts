import {
  Code,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  LineChart,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: Layout,
  },
  {
    title: "Backend Developer",
    icon: Server,
  },
  {
    title: "Data Analyst",
    icon: LineChart,
  },
  {
    title: "AI/ML Enthusiast",
    icon: Cpu,
  },
];

export const technologies = [
  {
    name: "Python",
    icon: Terminal,
  },
  {
    name: "JavaScript",
    icon: Code,
  },
  {
    name: "React JS",
    icon: Layout,
  },
  {
    name: "Java",
    icon: Server,
  },
  {
    name: "SQL",
    icon: Database,
  },
];

export const experiences = [
  {
    title: "Accountant Assistant",
    company_name: "Sanjoy Enterprises Scrap Dealer",
    icon: Briefcase,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Managed financial records for 800+ transactions across five months using Excel, maintaining 100% accuracy in bookkeeping operations while reducing monthly reconciliation time by 25% through systematic data organization.",
      "Created 150+ professional bills and comprehensive quotations using MS Word, streamlining the invoicing process and reducing average document preparation time from 30 to 15 minutes per item.",
      "Conducted weekly account reconciliations processing approximately 40 transactions per session to maintain data accuracy and facilitate smooth financial operations.",
      "Developed custom Excel-based tracking systems for inventory management handling 200+ unique material categories and automated monthly account summaries, demonstrating practical application of data organization and business intelligence skills.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Engineering in Computer Engineering",
    institution: "Shree L. R. Tiwari College of Engineering, Maharashtra, India",
    icon: GraduationCap,
    iconBg: "#E6DEDD",
    date: "September 2025 - 2029",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "S.S. High School and Jr. College",
    icon: GraduationCap,
    iconBg: "#383E56",
    date: "June 2024 - March 2025",
  },
  {
    title: "Diploma in Graphics & Automation",
    institution: "Training in C Programming, Advanced Excel, Photoshop, CorelDRAW",
    icon: Award,
    iconBg: "#E6DEDD",
    date: "Completed",
  },
];

export const certifications = [
  {
    title: "JPMorgan Chase & Co. Software Engineering Virtual Experience",
    issuer: "Forage",
    date: "2024",
    image: "https://picsum.photos/seed/jpmc/800/600",
  },
  {
    title: "JARVIS 2025 Hackathon - Runner Up",
    issuer: "JARVIS",
    date: "2025",
    image: "https://picsum.photos/seed/hackathon/800/600",
  },
  {
    title: "Diploma in Graphics & Automation",
    issuer: "Training Institute",
    date: "Completed",
    image: "https://picsum.photos/seed/diploma/800/600",
  }
];

export const projects = [
  {
    name: "AUTC - Universal Companion Neural Agent Orchestrator",
    description:
      "Developed neural-linked interface that automatically routes tasks to specialized AI agents powered by Gemini 2.5 Flash API, achieving sub-second task routing latency while coordinating up to 5 concurrent agents.",
    tags: [
      {
        name: "Gemini API",
        color: "text-blue-500",
      },
      {
        name: "Microservices",
        color: "text-green-500",
      },
      {
        name: "AI/ML",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/neural/800/600",
    source_code_link: "https://github.com/rangeshsha-Rookie/AUTC-Universal-Companion-Neural-Agent-Orchestrator",
  },
  {
    name: "DailyDost - Habit & Health Tracking",
    description:
      "Developed full-stack web application featuring 10 distinct habit tracking modules and comprehensive health monitoring capabilities, serving 20+ beta users during the 24-hour hackathon demonstration period.",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "Full-Stack",
        color: "text-green-500",
      },
      {
        name: "Hackathon",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/health/800/600",
    source_code_link: "https://github.com/rangeshsha-Rookie",
  },
  {
    name: "Forage-Midas - JPMC Software Engineering",
    description:
      "Completed enterprise-level Java project focusing on financial technology solutions, working with real-world codebases exceeding 5,000 lines and implementing industry-standard design patterns.",
    tags: [
      {
        name: "Java",
        color: "text-blue-500",
      },
      {
        name: "Enterprise",
        color: "text-green-500",
      },
      {
        name: "Testing",
        color: "text-pink-500",
      },
    ],
    image: "https://picsum.photos/seed/finance/800/600",
    source_code_link: "https://github.com/rangeshsha-Rookie",
  },
];
