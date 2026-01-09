export type Lesson = {
  slug: string;
  title: string;
  description: string;
  category: "foundations" | "frontend" | "backend";
  level: "beginner" | "intermediate" | "advanced";
  order: number;
  status: "published" | "coming-soon";
};

const lessonData: Lesson[] = [
  {
    slug: "web-basics",
    title: "How the Web Works",
    description: "Understand how browsers, servers, and the internet work",
    category: "foundations",
    level: "beginner",
    order: 1,
    status: "published",
  },
  {
    slug: "internet-http",
    title: "Internet & HTTP",
    description: "Learn HTTP, requests, responses, and status codes",
    category: "foundations",
    level: "beginner",
    order: 2,
    status: "coming-soon",
  },
  {
    slug: "html-basics",
    title: "HTML Basics",
    description: "Learn how to structure web pages using HTML",
    category: "frontend",
    level: "beginner",
    order: 3,
    status: "published",
  },
  {
    slug: "javascript-basics",
    title: "JavaScript Basics",
    description: "Learn core JavaScript concepts",
    category: "frontend",
    level: "beginner",
    order: 4,
    status: "coming-soon",
  },
  {
    slug: "nodejs-basics",
    title: "Node.js Basics",
    description: "Intro to backend development with Node.js",
    category: "backend",
    level: "beginner",
    order: 5,
    status: "coming-soon",
  },
];

export const lessons = lessonData.sort(
  (a, b) => a.order - b.order
);
