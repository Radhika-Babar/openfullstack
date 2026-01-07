"use client";

import { useEffect } from "react";
import { markLessonCompleted } from "@/lib/progress";

export default function LessonProgress({ slug }: { slug: string }) {
  useEffect(() => {
    markLessonCompleted(slug);
  }, [slug]);

  return null;
}
