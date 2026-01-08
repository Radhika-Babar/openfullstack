import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.redirect("/api/auth/signin");

  const { slug } = await req.json();

  // Find or create user
  let user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
  });
  if (!user) {
    user = await prisma.user.create({
      data: { email: session.user?.email! },
    });
  }

  // Mark lesson as completed
  await prisma.lessonProgress.upsert({
    where: { userId_slug: { userId: user.id, slug } },
    update: { completed: true },
    create: { userId: user.id, slug, completed: true },
  });

  return NextResponse.json({ ok: true });
}