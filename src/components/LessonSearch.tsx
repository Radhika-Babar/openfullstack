"use client";

import { useState } from "react";
import Link from "next/link";

export default function LessonSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  async function handleSearch(value: string) {
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?q=${value}`);
    const data = await res.json();
    setResults(data);
  }

  return (
    <div className="mt-4">
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search lessons..."
        className="w-full border px-3 py-2 rounded"
      />

      {results.length > 0 && (
        <ul className="mt-2 space-y-1">
          {results.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="text-blue-600 hover:underline"
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
