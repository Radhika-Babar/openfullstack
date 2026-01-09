import { prisma } from "../src/lib/prisma";

async function main() {
  await prisma.lesson.createMany({
    data: [
      {
        slug: "web-basics",
        title: "How the Web Works",
        description: "Understand how the web works",
        category: "foundations",
        level: "beginner",
        order: 1,
        status: "published",
      },
      {
        slug: "html-basics",
        title: "HTML Basics",
        description: "Learn HTML fundamentals",
        category: "frontend",
        level: "beginner",
        order: 2,
        status: "published",
      },
      {
        slug: "nodejs-basics",
        title: "Node.js Basics",
        description: "Intro to backend with Node.js",
        category: "backend",
        level: "beginner",
        order: 3,
        status: "coming-soon",
      },
    ],
  });
}

main();