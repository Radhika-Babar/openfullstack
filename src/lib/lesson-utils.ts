import { lessons } from "./lessons";

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(slug: string) {
  const index = lessons.findIndex((l) => l.slug === slug);
  return index >= 0 ? lessons[index + 1] : null;
}

export function getPreviousLesson(slug: string) {
  const index = lessons.findIndex((l) => l.slug === slug);
  return index > 0 ? lessons[index - 1] : null;
}