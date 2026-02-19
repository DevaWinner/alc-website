import type { IconName } from "@/lib/icons";

export type DonationOption = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  anchor: string;
  icon: IconName;
};

export const donationOptions: DonationOption[] = [
  {
    id: "funds",
    title: "Help Pay for an Instructor",
    summary:
      "There are limited people in Chuuk capable of teaching computer skills, and ALC needs more teachers.",
    image: "/img/donation1.webp",
    imageAlt: "ALC classroom session with learners practicing typing",
    anchor: "funds",
    icon: "users"
  },
  {
    id: "laptops",
    title: "Donate Money for a Laptop",
    summary:
      "We need more laptops to open new classrooms in Chuuk and expand learner access.",
    image: "/img/carousel2.webp",
    imageAlt: "Recycled laptops prepared for learners",
    anchor: "laptops",
    icon: "laptop"
  },
  {
    id: "classroom",
    title: "Equip a Classroom",
    summary:
      "Provide practical essentials like extension cords, printer ink, USB drives, and simple repairs.",
    image: "/img/donation3.webp",
    imageAlt: "Classroom supplies used in computer classes",
    anchor: "classroom",
    icon: "building"
  }
];

export const donationImpact = [
  "$25 helps cover one learner's class materials",
  "$150 supports a laptop tune-up and accessories",
  "$500 helps run a full beginner class cycle"
] as const;

export const donationProofBlocks = [
  {
    metric: "$25",
    title: "Protect one learner seat",
    detail:
      "Helps cover materials, power/connectivity, and practical support for one learner in a class cycle."
  },
  {
    metric: "$150",
    title: "Keep one laptop class-ready",
    detail:
      "Supports tune-up, accessories, and setup so lessons continue without technical interruption."
  },
  {
    metric: "$500",
    title: "Back one full beginner cohort",
    detail:
      "Helps fund core delivery support for a complete class run serving multiple first-time learners."
  }
] as const;

export const donationUrgentNeeds = [
  "Learner-seat sponsorship before the next intake begins",
  "Laptop readiness support to reduce class downtime",
  "Consumables and classroom essentials for uninterrupted sessions"
] as const;

export const donationFlow = [
  {
    step: "Choose your giving path",
    detail: "Select funds, laptops, or classroom equipment based on your capacity."
  },
  {
    step: "Confirm details with ALC",
    detail: "We coordinate simple next steps by message so your support is processed quickly."
  },
  {
    step: "See direct delivery impact",
    detail:
      "Your contribution is routed into learner access, working tools, and consistent class delivery."
  }
] as const;

export const donationTrustPoints = [
  "Donations are tied to concrete class-delivery needs",
  "Support is directed to learner access, equipment, and continuity",
  "ALC keeps giving pathways simple and practical for local execution"
] as const;
