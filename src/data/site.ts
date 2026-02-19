export type NavItem = {
	href: string;
	label: string;
};

export type SocialLink = {
	href: string;
	label: string;
};

export const siteConfig = {
	name: "Accelerated Learning Center (ALC)",
	shortName: "Accelerated Learning Center",
	mobileShortName: "Accelerated LC",
	tagline: "Bringing Hope to Chuuk",
	description:
		"ALC is a grassroots, community-powered nonprofit in Chuuk equipping youth and young adults with essential digital skills, discipline, and confidence.",
	location: "Weno, Chuuk State, FSM",
	recognitionDate: "July 18, 2025",
	contact: {
		phoneLabel: "WhatsApp / SMS",
		phone: "+1 814 619 5491",
		phoneHref: "tel:+18146195491",
		email: "drupper@gmail.com",
		emailHref: "mailto:drupper@gmail.com",
	},
} as const;

export const navigation: NavItem[] = [
	{ href: "/", label: "Home" },
	{ href: "/programs", label: "Mission" },
	{ href: "/donate", label: "Donate" },
	{ href: "/impact", label: "Impact" },
	{ href: "/partners", label: "People & Partners" },
	{ href: "/contact", label: "Contact" },
];

export const footerLinks: NavItem[] = [
	{ href: "/programs", label: "Mission & Programs" },
	{ href: "/impact", label: "Impact Stories" },
	{ href: "/partners", label: "People & Partners" },
	{ href: "/donate", label: "Donate" },
	{ href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
	{ href: "https://twitter.com/[your-handle]", label: "Twitter" },
	{ href: "https://facebook.com/[your-handle]", label: "Facebook" },
	{ href: "https://youtube.com/[your-channel]", label: "YouTube" },
	{ href: "https://www.linkedin.com/company/[your-handle]", label: "LinkedIn" },
];

export const officeHours = [
	{ day: "Monday - Friday", hours: "09:00 am - 05:00 pm" },
	{ day: "Saturday", hours: "10:00 am - 01:00 pm" },
	{ day: "Sunday", hours: "Closed" },
] as const;

export const footerGallery = [
	{ src: "/img/gallery1.webp", alt: "Learners practicing typing" },
	{ src: "/img/gallery2.webp", alt: "Instructor assisting learner" },
	{ src: "/img/gallery3.webp", alt: "Word document class" },
	{ src: "/img/gallery4.webp", alt: "Cloud file organization" },
	{ src: "/img/gallery5.webp", alt: "PowerPoint practice" },
] as const;
