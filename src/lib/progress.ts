const STORAGE_KEY = "openfullstack_progress";

export function getCompletedLessons(): string[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function markLessonCompleted(slug: string) {
  if (typeof window === "undefined") return;

  const completed = getCompletedLessons();
  if (!completed.includes(slug)) {
    completed.push(slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }
}