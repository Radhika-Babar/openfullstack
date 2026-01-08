// src/components/LessonSidebar.tsx
import Link from "next/link";
import { lessons } from "@/lib/lessons";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LessonSearch from "@/components/LessonSearch";
import AuthButton from "@/components/AuthButton";

export default async function LessonSidebar() {
  const session = await getServerSession(authOptions);

  let completedSlugs: string[] = [];

  // ✅ Fetch progress ONLY if logged in
  if (session?.user?.id) {
    const completedLessons = await prisma.lessonProgress.findMany({
      where: {
        userId: session.user.id,
        completed: true,
      },
    });

    completedSlugs = completedLessons.map((l) => l.slug);
  }

  return (
    <aside className="w-64 border-r p-6">
      {/* Auth button */}
      <AuthButton />

      {/* Search */}
      <LessonSearch />

      <h2 className="text-lg font-bold mt-4 mb-2">Learning Path</h2>

      <nav className="space-y-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/learn/${lesson.slug}`}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <span>
              {completedSlugs.includes(lesson.slug) ? "✅" : "⬜"}
            </span>
            {lesson.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}