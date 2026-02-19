import type { IconName } from "@/lib/icons";

export type Program = {
  id: string;
  title: string;
  summary: string;
  duration: string;
  level: string;
  icon: IconName;
};

export const programs: Program[] = [
  {
    id: "digital-literacy",
    title: "Computer & Digital Literacy",
    summary:
      "Microsoft Word, PowerPoint, Excel, basic computer operation, internet navigation, email, cybersecurity, and responsible tech use.",
    duration: "Core track",
    level: "Mission focus",
    icon: "laptop"
  },
  {
    id: "growth-mindset",
    title: "Self-Discipline & Growth Mindset",
    summary:
      "Daily habits for success, time management, goal setting, resilience, motivation, and confidence building.",
    duration: "Core track",
    level: "Mission focus",
    icon: "target"
  },
  {
    id: "mentoring-coaching",
    title: "Mentoring & Coaching",
    summary:
      "Each learner is paired with a mentor to set goals, overcome obstacles, stay motivated, and explore education and career opportunities.",
    duration: "Ongoing",
    level: "Mission focus",
    icon: "users"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Small Business Training",
    summary:
      "Launch micro-businesses with limited capital, and learn budgeting, marketing, and customer service fundamentals.",
    duration: "Applied",
    level: "Mission focus",
    icon: "briefcase"
  },
  {
    id: "launching-leaders",
    title: "Launching Leaders",
    summary:
      "A leadership and self-improvement program focused on growth mindset, values, time management, and a six-step formula for success.",
    duration: "Cohort program",
    level: "Leadership track",
    icon: "graduationCap"
  }
];

export const learningOutcomes = [
  "Use core digital tools (Word, PowerPoint, Excel, email, internet) with confidence",
  "Develop discipline, resilience, and practical habits for long-term success",
  "Set personal and academic goals and follow structured mentoring guidance",
  "Explore education, work, and entrepreneurship opportunities with direction",
  "Build confidence to transform personal and community futures"
] as const;

export const classSchedule = [
  {
    track: "Core Mission Cohorts",
    time: "By intake calendar",
    notes: "Foundational digital literacy and personal-growth instruction for youth and young adults."
  },
  {
    track: "Launching Leaders Sessions",
    time: "By program schedule",
    notes: "Structured self-improvement and leadership development modules."
  },
  {
    track: "Mentoring Track",
    time: "Ongoing",
    notes: "Personalized coaching based on learner goals, interests, and readiness."
  }
] as const;

export const programStats = [
  { value: "4+", label: "Core Mission Tracks", icon: "bookOpen" },
  { value: "3", label: "Top Challenges Addressed", icon: "target" },
  { value: "1", label: "State Recognition", icon: "building" },
  { value: "100%", label: "Youth & Young-Adult Focus", icon: "heart" }
] as const;

export const programValueCards = [
  {
    title: "Mission-first and straightforward",
    detail:
      "Equip youth and young adults with essential skills, discipline, and confidence to transform their futures."
  },
  {
    title: "Built for Chuuk realities",
    detail:
      "Programs are designed for geographic isolation, under-resourced schooling, and limited opportunity environments."
  },
  {
    title: "Community-powered support",
    detail:
      "ALC complements church and community efforts to build practical pathways for youth advancement."
  }
] as const;

export const enrollmentSteps = [
  {
    title: "Message ALC",
    detail: "Contact by WhatsApp/SMS or email to confirm availability and preferred schedule."
  },
  {
    title: "Choose your track",
    detail: "Select weekday or Saturday classes based on your routine and learning pace."
  },
  {
    title: "Start practical sessions",
    detail: "Join hands-on classes with mentor support, then transition into pathway labs if ready."
  }
] as const;

export const supporterNotes = [
  "There are limited instructors in Chuuk capable of teaching computer skills",
  "Laptop funding is needed to open additional classrooms across Chuuk",
  "Mission support strengthens mentoring and leadership pathways for long-term change"
] as const;

export const programDonorProofBlocks = [
  {
    metric: "Instructor",
    title: "Help pay for an instructor",
    detail:
      "There are limited people in Chuuk capable of teaching computer skills, and ALC needs more teachers."
  },
  {
    metric: "Laptop",
    title: "Donate money for a laptop",
    detail:
      "We need more laptops to open new classrooms in Chuuk and reach more learners."
  },
  {
    metric: "Classroom",
    title: "Equip a classroom",
    detail:
      "Support essential classroom needs so instruction remains stable and practical."
  }
] as const;

export const donorUrgencyLine =
  "Learner demand is growing while instructor and equipment capacity remains limited. Give now to expand access.";
