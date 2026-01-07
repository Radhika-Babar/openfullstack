export type Lesson = {
  slug: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
};

export const lessons: Lesson[] = [
  {
    slug: "web-basics",
    title: "How the Web Works",
    description: "Understand how browsers, servers, and requests actually work",
    level: "beginner",
  },
];