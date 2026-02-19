export const heroSlides = [
  {
    eyebrow: "Digital literacy with real outcomes",
    title: "Building skills and bridging gaps",
    summary:
      "ALC equips teens and adults in Chuuk with practical skills in email, Word, PowerPoint, and Excel through patient, hands-on instruction.",
    primaryCta: { href: "/programs", label: "See Programs & Enroll" },
    secondaryCta: { href: "/donate", label: "Donate Laptops or Funds" },
    image: "/img/carousel1.jpeg",
    imageAlt: "ALC learners practicing in a classroom"
  },
  {
    eyebrow: "Pathways to paid work",
    title: "From classroom to confidence",
    summary:
      "Skilled members progress into paid Facilities Management Group (FMG) projects across FSM and Guam with mentoring and safety basics.",
    primaryCta: { href: "/programs#pathways", label: "Explore Work Pathways" },
    secondaryCta: { href: "/partners", label: "Partner With ALC" },
    image: "/img/carousel2.jpeg",
    imageAlt: "Mentor guiding a learner through practical tasks"
  }
] as const;

export const homeStats = [
  { value: "15", label: "Laptops in Rotation" },
  { value: "1", label: "State Recognition" },
  { value: "5", label: "Core Classes" },
  { value: "3+", label: "First Emails Sent" }
] as const;

export const valuePoints = [
  "Beginner-friendly and step-by-step instruction",
  "Practical outcomes for daily life and work",
  "Low-bandwidth learning design",
  "Mentoring support into paid projects"
] as const;

export const missionCallout =
  "Approved by Chuuk State on July 18, 2025. Together we help learners email, write, present, and budget with confidence.";

export const audiencePaths = [
  {
    id: "learner",
    eyebrow: "For Learners",
    title: "Start with zero experience",
    summary:
      "Join beginner-friendly classes that move at your pace and build practical confidence week by week.",
    points: [
      "Hands-on guidance in every class",
      "Laptop access during sessions when available",
      "Clear path from basics to work readiness"
    ],
    cta: { href: "/programs", label: "Enroll in Programs" }
  },
  {
    id: "donor",
    eyebrow: "For Donors",
    title: "Make direct, visible impact",
    summary:
      "Your contribution goes straight into class access, equipment, and practical support for new learners.",
    points: [
      "Fund seats and learning materials",
      "Pledge laptops and classroom essentials",
      "Support mentoring into paid work pathways"
    ],
    cta: { href: "/donate", label: "Support a Learner" }
  }
] as const;

export const homeOutcomes = [
  {
    metric: "100%",
    title: "Practical class focus",
    detail:
      "Every session is built around tasks learners can apply immediately in daily life."
  },
  {
    metric: "5",
    title: "Core learning blocks",
    detail: "Typing, email, Word, PowerPoint, and Excel delivered as a clear progression."
  },
  {
    metric: "3",
    title: "Confidence milestones",
    detail:
      "Learners leave able to communicate, create documents, and manage simple data confidently."
  }
] as const;

export const donorImpactHighlights = [
  "A laptop donation can support multiple learners each week",
  "Small monthly giving keeps class cycles consistent",
  "Equipment support reduces downtime and class interruptions"
] as const;
