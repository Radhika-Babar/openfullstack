import { ReactNode } from "react";
import Link from "next/link";
import { lessons } from "@/lib/lessons";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6">
        <h2 className="text-lg font-bold mb-4">Learning Path</h2>

        <nav className="space-y-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/learn/${lesson.slug}`}
              className="block text-blue-600 hover:underline"
            >
              {lesson.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}