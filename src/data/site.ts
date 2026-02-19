export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Accelerated Learning Centers (ALC)",
  shortName: "Accelerated",
  tagline: "Building skills and bridging gaps",
  description:
    "ALC equips teens and adults in Chuuk with practical computer literacy and work pathways through patient, hands-on instruction.",
  location: "Weno, Chuuk State, FSM",
  recognitionDate: "July 18, 2025",
  contact: {
    phoneLabel: "WhatsApp / SMS",
    phone: "+691 [XXX] [XXXX]",
    phoneHref: "tel:+6910000000",
    email: "info@[your-domain]",
    emailHref: "mailto:info@[your-domain]"
  }
} as const;

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "People & Partners" },
  { href: "/contact", label: "Contact" }
];

export const footerLinks: NavItem[] = [
  { href: "/programs", label: "Programs & Enroll" },
  { href: "/impact", label: "Impact Stories" },
  { href: "/partners", label: "People & Partners" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export const socialLinks: SocialLink[] = [
  { href: "https://twitter.com/[your-handle]", label: "Twitter" },
  { href: "https://facebook.com/[your-handle]", label: "Facebook" },
  { href: "https://youtube.com/[your-channel]", label: "YouTube" },
  { href: "https://www.linkedin.com/company/[your-handle]", label: "LinkedIn" }
];

export const officeHours = [
  { day: "Monday - Friday", hours: "09:00 am - 05:00 pm" },
  { day: "Saturday", hours: "10:00 am - 01:00 pm" },
  { day: "Sunday", hours: "Closed" }
] as const;

export const footerGallery = [
  { src: "/img/gallery1.jpeg", alt: "Learners practicing typing" },
  { src: "/img/gallery2.jpeg", alt: "Instructor assisting learner" },
  { src: "/img/gallery3.jpeg", alt: "Word document class" },
  { src: "/img/gallery4.jpeg", alt: "Cloud file organization" },
  { src: "/img/gallery5.jpeg", alt: "PowerPoint practice" },
  { src: "/img/gallery-6.jpg", alt: "Excel basics session" }
] as const;
