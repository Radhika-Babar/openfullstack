import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LearnPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Learning Path</h1>

      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li
            key={lesson.slug}
            className="border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <Link href={`/learn/${lesson.slug}`}>
              <h2 className="text-xl font-semibold">
                {lesson.title}
              </h2>
              <p className="text-gray-600">
                {lesson.description}
              </p>
              <span className="text-sm text-blue-600">
                Level: {lesson.level}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}