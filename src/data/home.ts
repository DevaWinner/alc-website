export const heroSlides = [
  {
    eyebrow: "Bringing Hope to Chuuk",
    title: "Empowering the Next Generation to Rise Above Poverty",
    summary:
      "Chuuk is geographically isolated and under-resourced, with limited pathways to opportunity. Accelerated Learning Center is a grassroots, community-powered nonprofit helping youth and young adults build practical skills and hope.",
    primaryCta: { href: "/programs", label: "See Mission & Programs" },
    secondaryCta: { href: "/donate", label: "Donate Now" },
    image: "/img/carousel1.jpeg",
    imageAlt: "ALC learners practicing in a classroom"
  },
  {
    eyebrow: "Creating Hope Out of Isolation",
    title: "Building skills and bridging gaps",
    summary:
      "ALC equips teens and adults in Chuuk with computer literacy, discipline, and mentoring so learners can communicate, solve problems, and build stronger futures for themselves and their communities.",
    primaryCta: { href: "/programs#pathways", label: "Explore Work Pathways" },
    secondaryCta: { href: "/partners", label: "Partner With ALC" },
    image: "/img/carousel2.jpeg",
    imageAlt: "Mentor guiding a learner through practical tasks"
  }
] as const;

export const homeStats = [
  { value: "3", label: "Top Challenges Addressed", icon: "target" },
  { value: "4+", label: "Core Growth Tracks", icon: "bookOpen" },
  { value: "1", label: "State Recognition", icon: "building" },
  { value: "100%", label: "Mission for Youth Advancement", icon: "heart" }
] as const;

export const valuePoints = [
  "Weak education systems leave many youth unprepared for modern careers",
  "High unemployment and limited local job pathways affect young adults most",
  "Geographic isolation limits technology access, training, and mentoring",
  "ALC delivers practical instruction, discipline, and coaching that rebuilds opportunity"
] as const;

export const missionCallout =
  "Our mission is straightforward: equip youth and young adults with essential skills, discipline, and confidence to transform their futures.";

export const audiencePaths = [
  {
    id: "learner",
    eyebrow: "For Learners",
    title: "Start where you are",
    summary:
      "Even with limited prior preparation, you can build practical digital and life skills with step-by-step support.",
    points: [
      "Hands-on instruction in digital literacy, discipline, and growth",
      "Mentoring to stay motivated and overcome obstacles",
      "Practical pathways to education, work, and enterprise"
    ],
    cta: { href: "/programs", label: "Enroll in Programs" }
  },
  {
    id: "donor",
    eyebrow: "For Donors",
    title: "Make direct, visible impact",
    summary:
      "Your support directly helps marginalized learners access instruction, equipment, and mentoring in Chuuk.",
    points: [
      "Help pay for instructors where local teaching capacity is limited",
      "Donate money for laptops so new classrooms can open",
      "Support mentoring and leadership programs for long-term growth"
    ],
    cta: { href: "/donate", label: "Support a Learner" }
  }
] as const;

export const homeOutcomes = [
  {
    metric: "Digital",
    title: "Essential computer skills",
    detail:
      "Learners build confidence in Microsoft Word, PowerPoint, Excel, internet use, and email."
  },
  {
    metric: "Mindset",
    title: "Discipline and growth habits",
    detail: "Daily habits, time management, goal setting, resilience, and motivation are reinforced."
  },
  {
    metric: "Mentoring",
    title: "Guided pathways forward",
    detail:
      "Each learner receives encouragement and coaching toward education, work, and purpose."
  }
] as const;

export const donorImpactHighlights = [
  "There are limited instructors in Chuuk with computer-teaching capacity",
  "Laptop funding is needed to expand classroom access to more youth",
  "Consistent donor support keeps mission programs running without interruption"
] as const;
