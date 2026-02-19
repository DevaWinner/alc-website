export type Testimonial = {
  name: string;
  program: string;
  quote: string;
  image: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Learner, Chuuk",
    program: "Class 2: Email & Cloud",
    quote:
      "I sent my first email and got a reply the same day. Now I can attach files and find them in cloud folders.",
    image: "/img/testimonial-1.jpg",
    imageAlt: "ALC learner sending their first email"
  },
  {
    name: "Adult learner",
    program: "Class 3: Microsoft Word",
    quote:
      "I can format a page, add headings and images, and print a clean document. The step-by-step teaching helped me a lot.",
    image: "/img/testimonial-2.jpg",
    imageAlt: "Learners working on a Word document"
  },
  {
    name: "Community member",
    program: "Class 5: Excel Basics",
    quote:
      "Excel used to scare me. Now I can make a simple table, add totals, and track a small budget with confidence.",
    image: "/img/testimonial-3.jpg",
    imageAlt: "Instructor guiding a learner through Excel"
  }
];
