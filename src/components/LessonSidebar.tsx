"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons } from "@/lib/lessons";
import { getCompletedLessons } from "@/lib/progress";

export default function LessonSidebar() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getCompletedLessons());
  }, []);

  return (
    <nav className="space-y-2">
      {lessons.map((lesson) => (
        <Link
          key={lesson.slug}
          href={`/learn/${lesson.slug}`}
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          {completed.includes(lesson.slug) ? "✅" : "⬜"}
          {lesson.title}
        </Link>
      ))}
    </nav>
  );
}
