import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  if (!query) return NextResponse.json([]);

  const lessons = await prisma.lesson.findMany({
    where: {
      title: {
        contains: query,
        //mode: "insensitive",
      },
      status: "PUBLISHED",
    },
    orderBy: { order: "asc" },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  return NextResponse.json(lessons);
}
