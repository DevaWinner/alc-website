export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Boris Johnson",
    role: "Founder & Program Lead",
    bio: "Coordinates curriculum, instructor mentoring, and community partnerships in Chuuk.",
    image: "/img/classrom-2.jpeg"
  },
  {
    name: "Donald Pakura",
    role: "Project Manager",
    bio: "Leads operations, learner onboarding, and partner communication for class delivery.",
    image: "/img/classrom-3.jpeg"
  },
  {
    name: "Alexander Bell",
    role: "Volunteer Mentor",
    bio: "Supports practical labs and learner confidence-building across all class levels.",
    image: "/img/classrom-4.jpeg"
  }
];
