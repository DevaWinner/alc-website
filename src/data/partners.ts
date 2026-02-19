import type { IconName } from "@/lib/icons";

export type PartnerCategory = {
  category: string;
  details: string;
  icon: IconName;
};

export const partnerCategories: PartnerCategory[] = [
  {
    category: "Community & Church Groups",
    details: "Coordinate learner referrals, hosting support, and outreach to families.",
    icon: "users"
  },
  {
    category: "Schools & Youth Programs",
    details: "Connect learners to digital literacy pathways and continuing education opportunities.",
    icon: "bookOpen"
  },
  {
    category: "Businesses & Employers",
    details: "Offer mentorship, internships, and practical project exposure for graduates.",
    icon: "briefcase"
  },
  {
    category: "Donors & Equipment Sponsors",
    details: "Support class operations through funds, laptops, and essential classroom materials.",
    icon: "heart"
  }
];

export const featuredPartners = [
  "Chuuk community leaders",
  "Local church support teams",
  "FMG project mentors",
  "Remote donors and laptop sponsors"
] as const;
