"use client";

import { useState } from "react";
import Link from "next/link";
import { searchLessons } from "@/lib/search";

export default function LessonSearch() {
  const [query, setQuery] = useState("");

  const results = query.length >= 2 ? searchLessons(query) : [];

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search lessons..."
        className="w-full rounded border px-3 py-2 focus:outline-none focus:ring"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <ul className="mt-3 space-y-1">
          {results.map((lesson) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}