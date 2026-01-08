import { lessons } from "./lessons";

export function searchLessons(query: string) {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return lessons.filter(
    (lesson) =>
      lesson.title.toLowerCase().includes(q) ||
      lesson.description.toLowerCase().includes(q)
  );
}