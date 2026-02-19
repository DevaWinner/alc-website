export const iconNames = [
  "menu",
  "arrowRight",
  "chevronRight",
  "phone",
  "mail",
  "mapPin",
  "users",
  "heart",
  "bookOpen",
  "briefcase",
  "graduationCap",
  "target",
  "laptop",
  "calendar",
  "messageSquare",
  "building",
  "shieldCheck",
  "clock",
  "sparkles"
] as const;

export type IconName = (typeof iconNames)[number];
