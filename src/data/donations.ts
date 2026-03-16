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
			"There are limited people in Micronesia capable of teaching computer skills, and ALC needs more teachers.",
		image: "/img/donation1.webp",
		imageAlt: "ALC classroom session with learners practicing typing",
		anchor: "funds",
		icon: "users",
	},
	{
		id: "laptops",
		title: "Donate Money for a Laptop",
		summary:
			"We need more laptops to open new classrooms in Micronesia and expand learner access.",
		image: "/img/carousel2.webp",
		imageAlt: "Recycled laptops prepared for learners",
		anchor: "laptops",
		icon: "laptop",
	},
	{
		id: "classroom",
		title: "Equip a Classroom",
		summary:
			"Provide practical essentials like extension cords, printer ink, USB drives, and simple repairs.",
		image: "/img/donation3.webp",
		imageAlt: "Classroom supplies used in computer classes",
		anchor: "classroom",
		icon: "building",
	},
];

export const donationImpact = [
	"$25 Sponsor a Teacher for a Class",
	"$180 Pay for the cost of Microsoft Office for a new laptop",
	"$500 Pay for a new laptop so we can expand our classrooms",
] as const;

export const donationProofBlocks = [
	{
		metric: "$25",
		title: "Sponsor a Teacher for a Class",
		detail:
			"Skilled teachers are difficult to find. Please sponsor a teacher for a class",
	},
	{
		metric: "$180",
		title: "Pay for the cost of Microsoft Office for a new laptop",
		detail:
			"Covers the cost of essential productivity software for a new laptop to ensure learners are classroom-ready.",
	},
	{
		metric: "$500",
		title: "Pay for a new laptop so we can expand our classrooms",
		detail:
			"Covers the cost of expanding our classrooms to reach more learners in need of digital skills.",
	},
] as const;

export const donationFlow = [
	{
		step: "Choose your giving path",
		detail:
			"Select funds, laptops, or classroom equipment based on your capacity.",
	},
	{
		step: "Confirm details with ALC",
		detail:
			"We coordinate simple next steps by message so your support is processed quickly.",
	},
	{
		step: "See direct delivery impact",
		detail:
			"Your contribution is routed into learner access, working tools, and consistent class delivery.",
	},
] as const;

export const donationTrustPoints = [
	"Donations are tied to concrete class-delivery needs",
	"Support is directed to learner access, equipment, and continuity",
	"ALC keeps giving pathways simple and practical for local execution",
] as const;
