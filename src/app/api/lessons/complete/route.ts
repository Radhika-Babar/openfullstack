// src/app/api/lessons/complete/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await req.json();

  await prisma.lessonProgress.upsert({
    where: {
      userId_slug: {
        userId: session.user.id,
        slug,
      },
    },
    update: {},
    create: {
      userId: session.user.id,
      slug,
      completed: true,
    },
  });

  return NextResponse.json({ success: true });
}
