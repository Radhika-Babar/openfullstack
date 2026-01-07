export type Lesson = {
  slug: string;
  title: string;
  description: string;
  category: "foundations" | "frontend" | "backend";
  level: "beginner" | "intermediate" | "advanced";
  order: number;
};

const lessonData: Lesson[] = [
 {
  slug: "web-basics",
  title: "How the Web Works",
  description: "...",
  level: "beginner",
  category: "foundations",
  order: 1,
}
  // add more lessons later
];

// ✅ SORT ONCE, EXPORT CLEAN DATA
export const lessons = lessonData.sort(
  (a, b) => a.order - b.order
);
