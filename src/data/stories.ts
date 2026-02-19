export type Story = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  dateLabel: string;
};

export const stories: Story[] = [
  {
    title: "First Email, Same-Day Reply",
    summary:
      "A new learner completed Class 2 and sent a first email to family overseas. Confidence jumped immediately.",
    image: "/img/gallery2.jpeg",
    imageAlt: "Learner practicing email",
    dateLabel: "August 2025"
  },
  {
    title: "Word Skills for Community Reports",
    summary:
      "Graduates of Class 3 now create formatted reports and letters for church and neighborhood activities.",
    image: "/img/gallery3.jpeg",
    imageAlt: "Word processing class",
    dateLabel: "September 2025"
  },
  {
    title: "Excel for Small Budget Tracking",
    summary:
      "Class 5 learners are using spreadsheets to manage event costs and track contributions with transparency.",
    image: "/img/gallery5.jpeg",
    imageAlt: "Excel practice session",
    dateLabel: "October 2025"
  }
];
