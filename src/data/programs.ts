export type Program = {
  id: string;
  title: string;
  summary: string;
  duration: string;
  level: string;
};

export const programs: Program[] = [
  {
    id: "class-1",
    title: "Class 1: Hardware & Typing",
    summary:
      "Get comfortable with a laptop, mouse, keyboard, folders, and accurate typing habits for daily digital tasks.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: "class-2",
    title: "Class 2: Internet, Email & Cloud",
    summary:
      "Search safely, send and receive email, attach files, and store documents in cloud folders you can find later.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: "class-3",
    title: "Class 3: Microsoft Word",
    summary:
      "Create and format clean documents with headings, images, and page layouts for school, church, and community work.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: "class-4",
    title: "Class 4: PowerPoint Presentation Basics",
    summary:
      "Build simple slide decks with clear flow, visuals, and speaking confidence for presentations.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: "class-5",
    title: "Class 5: Excel & Data Management",
    summary:
      "Create practical spreadsheets, use formulas, and track budgets or attendance with confidence.",
    duration: "2 weeks",
    level: "Beginner"
  },
  {
    id: "learner-support",
    title: "Enrollment & Learner Support",
    summary:
      "Low-bandwidth guidance, WhatsApp/SMS enrollment support, and laptop access during sessions when available.",
    duration: "Ongoing",
    level: "All learners"
  }
];

export const learningOutcomes = [
  "Send and reply to email with attachments",
  "Create polished documents and presentations",
  "Build and maintain simple spreadsheets",
  "Organize files and cloud folders confidently",
  "Prepare for paid FMG project pathways"
] as const;

export const classSchedule = [
  {
    track: "Weekday Track",
    time: "Mon-Fri, 5:30 pm - 7:30 pm",
    notes: "Best for working adults and youth after school."
  },
  {
    track: "Saturday Intensive",
    time: "Sat, 10:00 am - 1:00 pm",
    notes: "Focused practical sessions with extra lab support."
  },
  {
    track: "Mentor Lab",
    time: "By arrangement",
    notes: "Practice hours and coaching for learners transitioning into work tasks."
  }
] as const;

export const programStats = [
  { value: "5", label: "Core Skill Modules" },
  { value: "3", label: "Work-Pathway Stages" },
  { value: "15", label: "Laptops in Rotation" },
  { value: "1:1", label: "Mentor-Supported Practice" }
] as const;

export const programValueCards = [
  {
    title: "Beginner-safe learning environment",
    detail:
      "No prior experience required. Lessons are practical, paced, and built around real tasks learners already need."
  },
  {
    title: "Clear progression with outcomes",
    detail:
      "Every class adds a specific capability, from email basics to document creation and spreadsheet confidence."
  },
  {
    title: "Pathway beyond the classroom",
    detail:
      "Graduates can move into mentor labs and FMG-linked projects to build income-ready confidence."
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
  "Donor support keeps laptops available and classes running on schedule",
  "Equipment contributions reduce learning interruptions and maintenance delays",
  "Partnerships expand pathways from basic literacy into paid project opportunities"
] as const;

export const programDonorProofBlocks = [
  {
    metric: "$25",
    title: "Sponsor one learner seat",
    detail:
      "Helps cover class materials, power/connectivity, and guided practice support for a learner."
  },
  {
    metric: "$150",
    title: "Keep one laptop classroom-ready",
    detail:
      "Supports maintenance, accessories, and setup so classes run without technical interruptions."
  },
  {
    metric: "$500",
    title: "Back a full beginner class cycle",
    detail:
      "Helps fund instruction delivery and core operating support for an entire group of new learners."
  }
] as const;

export const donorUrgencyLine =
  "Seats fill quickly and equipment wears out. Giving now keeps the next cohort learning on time.";
