// src/components/LessonSidebar.tsx
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LessonSearch from "@/components/LessonSearch";
import AuthButton from "@/components/AuthButton";

export default async function LessonSidebar() {
  const session = await getServerSession(authOptions);

  // 1️⃣ Fetch all published lessons
 const lessons = await prisma.lesson.findMany({
  where: { status: "PUBLISHED" },
  orderBy: { order: "asc" },
});

  // 2️⃣ Fetch completed lessons (if logged in)
  let completedLessonIds: string[] = [];

  if (session?.user?.id) {
    const completed = await prisma.lessonProgress.findMany({
      where: {
        userId: session.user.id,
        completed: true,
      },
      select: {
        lessonId: true,
      },
    });

   completedLessonIds = completed.map((p) => p.lessonId);
  }

  return (
    <aside className="w-64 border-r p-6">
      {/* Auth */}
      <AuthButton />

      {/* Search */}
      <LessonSearch />

      <h2 className="text-lg font-bold mt-4 mb-2">Learning Path</h2>

      <nav className="space-y-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/learn/${lesson.slug}`}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <span>
              {completedLessonIds.includes(lesson.id) ? "✅" : "⬜"}
            </span>
            {lesson.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}