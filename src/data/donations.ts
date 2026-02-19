export type DonationOption = {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  anchor: string;
};

export const donationOptions: DonationOption[] = [
  {
    id: "funds",
    title: "Fund a Classroom Seat",
    summary:
      "Support teaching materials, basic connectivity, power, and maintenance so each session can run reliably.",
    image: "/img/donation1.jpeg",
    imageAlt: "ALC classroom session with learners practicing typing",
    anchor: "funds"
  },
  {
    id: "laptops",
    title: "Donate a Laptop",
    summary:
      "We accept good-quality recycled laptops. Devices are securely wiped and prepared for learning sessions.",
    image: "/img/carousel2.jpeg",
    imageAlt: "Recycled laptops prepared for learners",
    anchor: "laptops"
  },
  {
    id: "classroom",
    title: "Equip a Classroom",
    summary:
      "Provide practical essentials like extension cords, printer ink, USB drives, and simple repairs.",
    image: "/img/donation3.jpeg",
    imageAlt: "Classroom supplies used in computer classes",
    anchor: "classroom"
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
