"use client";

import { useEffect } from "react";

export default function LessonProgress({
  lessonId,
}: {
  lessonId: string;
}) {
  useEffect(() => {
    fetch("/api/lessons/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
    });
  }, [lessonId]);

  return null;
}
