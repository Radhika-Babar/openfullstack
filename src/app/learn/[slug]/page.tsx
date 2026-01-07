import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LessonPage({ params }: PageProps) {
  const { slug } = await params; // ✅ REQUIRED IN NEW NEXT.JS

  const filePath = path.join(
    process.cwd(),
    "content",
    "foundations",
    `${slug}.mdx`
  );

  const fileContent = await fs.readFile(filePath, "utf8");
  const { content } = matter(fileContent);

  return (
    <article className="prose max-w-3xl mx-auto">
      <MDXRemote source={content} />
    </article>
  );
}
