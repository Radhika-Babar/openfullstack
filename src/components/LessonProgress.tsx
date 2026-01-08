"use client";

import { useEffect } from "react";

export default function LessonProgress({ slug }: { slug: string }) {
  useEffect(() => {
    const markCompleted = async () => {
      await fetch("/api/lessons/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
    };

    markCompleted();
  }, [slug]);

  return null;
}
