export type TeamMember = {
	name: string;
	role: string;
	bio?: string;
	image: string;
};

export type LeadershipFeature = {
	title: string;
	detail: string;
	image: string;
	imageAlt: string;
	variant: "portrait" | "landscape";
};

export const leadershipFeatures: LeadershipFeature[] = [
	{
		title: "Accelerated Learning Center Co-Founders",
		detail: "David Rupper and Doug Gilmore",
		image: "/img/co-founders.webp",
		imageAlt: "Accelerated Learning Center co-founder portrait",
		variant: "portrait",
	},
	{
		title: "Board of Directors",
		detail:
			"Standing from left to right: JT Nonumwar,  Kathy Sound, Memory Weita Lean, Atkin Buliche.",
		image: "/img/board-of-directors.webp",
		imageAlt:
			"Accelerated Learning Center Board of Directors group photo, standing from left to right: JT Nonumwar,  Kathy Sound, Memory Weita Lean, Atkin Buliche.",
		variant: "landscape",
	},
];

export const programCoordinators: TeamMember[] = [
	{
		name: "Julia Jeffs",
		role: "Pohnpei Coordinator",
		bio: "Coordinates local learner onboarding, class flow, and program follow-through in Pohnpei.",
		image: "/img/julia-jeffs.webp",
	},
	{
		name: "David Thompson",
		role: "Kosrae Coordinator",
		bio: "Coordinates program logistics, communication, and learner support across Kosrae cohorts.",
		image: "/img/david-thompson.webp",
	},
];

export const advisoryMentors: TeamMember[] = [
	{
		name: "Bradley Kakazu",
		role: "Advisory and Mentor",
		image: "/img/bradley-kakazu.webp",
	},
	{
		name: "Ethan Kim",
		role: "Advisory and Mentor",
		image: "/img/ethan-kim.webp",
	},
	{
		name: "Jacob Taylor",
		role: "Advisory and Mentor",
		image: "/img/jacob-taylor.webp",
	},
];
