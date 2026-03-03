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
		image: "/img/co-founders.jpg",
		imageAlt: "Accelerated Learning Center co-founder portrait",
		variant: "portrait",
	},
	{
		title: "Board of Directors",
		detail: "All directors in one landscape photo",
		image: "/img/board-of-directors.jpg",
		imageAlt: "Accelerated Learning Center Board of Directors group photo",
		variant: "landscape",
	},
];

export const programCoordinators: TeamMember[] = [
	{
		name: "Julia Jeffs",
		role: "Pohnpei Coordinator",
		bio: "Coordinates local learner onboarding, class flow, and program follow-through in Pohnpei.",
		image: "/img/julia-jeffs.jpeg",
	},
	{
		name: "David Thompson",
		role: "Kosrae Coordinator",
		bio: "Coordinates program logistics, communication, and learner support across Kosrae cohorts.",
		image: "/img/david-thompson.jpeg",
	},
];

export const advisoryMentors: TeamMember[] = [
	{
		name: "Bradley Kakazu",
		role: "Advisory and Mentor",
		image: "/img/bradley-kakazu.jpeg",
	},
	{
		name: "Ethan Kim",
		role: "Advisory and Mentor",
		image: "/img/ethan-kim.jpeg",
	},
	{
		name: "Jacob Taylor",
		role: "Advisory and Mentor",
		image: "/img/jacob-taylor.jpeg",
	},
];
