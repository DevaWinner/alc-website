export type Story = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  dateLabel: string;
};

export const stories: Story[] = [
  {
    title: "Launching Leaders: First Cohort Graduation",
    summary:
      "On December 26, 2025, ALC celebrated graduates from the first Launching Leaders class in Chuuk, focused on growth mindset, time management, values, and a six-step success formula.",
    image: "/img/gallery2.webp",
    imageAlt: "Launching Leaders cohort moment",
    dateLabel: "December 26, 2025"
  },
  {
    title: "Remote Teaching in Chuukese",
    summary:
      "Selina Walter delivered the Launching Leaders class remotely from Hawaii in Chuukese, with local logistics coordinated in Chuuk.",
    image: "/img/gallery3.webp",
    imageAlt: "Remote mentor-led classroom support",
    dateLabel: "December 2025"
  },
  {
    title: "Mentoring Program Activated",
    summary:
      "ALC launched mentoring for graduates from computer and Launching Leaders classes, with support tailored to each mentee’s skills, interests, and goals.",
    image: "/img/gallery5.webp",
    imageAlt: "Mentoring and follow-up support",
    dateLabel: "2026 rollout"
  }
];
