import type { IconName } from "@/lib/icons";

type ContactCard = {
  title: string;
  value: string;
  href: string;
  icon: IconName;
};

export const contactCards: ContactCard[] = [
  {
    title: "WhatsApp / SMS",
    value: "+1 814 619 5491",
    href: "tel:+18146195491",
    icon: "phone"
  },
  {
    title: "Email",
    value: "drupper@gmail.com",
    href: "mailto:drupper@gmail.com",
    icon: "mail"
  },
  {
    title: "Address",
    value: "Weno, Chuuk State, FSM",
    href: "https://maps.google.com",
    icon: "mapPin"
  }
];

export const contactIntro =
  "Questions about mission programs, enrollment, donations, or partnerships? Reach out and we will respond with clear next steps as quickly as possible.";

export const contactResponsePromises = [
  {
    metric: "Same day",
    title: "Priority reply window",
    detail: "Most WhatsApp/SMS messages are reviewed and answered within the day."
  },
  {
    metric: "Clear steps",
    title: "Actionable follow-up",
    detail: "We reply with practical next steps for enrollment, giving, or partnership requests."
  },
  {
    metric: "One thread",
    title: "Simple coordination",
    detail: "A single message channel is used to keep communication easy and trackable."
  }
] as const;

export const contactQuickTips = [
  "State whether you are a learner, donor, partner, or volunteer",
  "Include your preferred schedule or support type",
  "Share the fastest way to reach you back"
] as const;

export const contactRequestTypes = [
  {
    title: "Program enrollment",
    detail: "Ask about class schedules, available seats, and onboarding steps."
  },
  {
    title: "Donation & sponsorship",
    detail: "Coordinate funds, laptop pledges, or recurring support options."
  },
  {
    title: "Partnership inquiries",
    detail: "Discuss community, school, church, or employer collaboration opportunities."
  }
] as const;
