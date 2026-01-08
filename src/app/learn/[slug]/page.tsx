import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import LessonProgress from "@/components/LessonProgress";
import {
  getLessonBySlug,
  getNextLesson,
  getPreviousLesson,
} from "@/lib/lesson-utils";
import { authOptions } from "@/lib/auth";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params;

  // 🔒 AUTH GUARD (SERVER-SIDE)
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  // ✅ Lesson metadata
  const lesson = getLessonBySlug(slug);
  if (!lesson) {
    throw new Error("Lesson not found");
  }

  const nextLesson = getNextLesson(slug);
  const previousLesson = getPreviousLesson(slug);

  // ✅ Load MDX
  const filePath = path.join(
    process.cwd(),
    "content",
    lesson.category,
    `${slug}.mdx`
  );

  const fileContent = await fs.readFile(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <article className="prose max-w-3xl">
      <LessonProgress slug={slug} />

      <MDXRemote source={content} />

      {/* Navigation */}
      <div className="mt-16 flex justify-between border-t pt-6">
        {previousLesson ? (
          <Link
            href={`/learn/${previousLesson.slug}`}
            className="text-blue-600 hover:underline"
          >
            ← {previousLesson.title}
          </Link>
        ) : (
          <div />
        )}

        {nextLesson && (
          <Link
            href={`/learn/${nextLesson.slug}`}
            className="text-blue-600 hover:underline"
          >
            {nextLesson.title} →
          </Link>
        )}
      </div>
    </article>
  );
}