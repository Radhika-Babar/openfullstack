import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import LessonProgress from "@/components/LessonProgress";
import { getLessonBySlug } from "@/lib/lesson-db";
import { authOptions } from "@/lib/auth";

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  const lesson = await getLessonBySlug(params.slug);
  if (!lesson) throw new Error("Lesson not found");

  let content = `# ${lesson.title}\n\nLesson content coming soon 🚧`;

  const filePath = path.join(
    process.cwd(),
    "content",
    lesson.category,
    `${lesson.slug}.mdx`
  );

  try {
    const file = await fs.readFile(filePath, "utf8");
    content = matter(file).content;
  } catch {}

  return (
    <article className="prose max-w-3xl">
      <LessonProgress slug={lesson.slug} />
      <MDXRemote source={content} />
    </article>
  );
}
