import { prisma } from "@/lib/prisma";

export async function searchLessons(query: string) {
  if (!query) return [];

  return prisma.lesson.findMany({
    where: {
      title: {
        contains: query,
        //mode: "insensitive",
      },
      status: "published",
    },
    orderBy: { order: "asc" },
  });
}