import { ReactNode } from "react";
import LessonSidebar from "@/components/LessonSidebar";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-6">
        <h2 className="text-lg font-bold mb-4">Learning Path</h2>
        <LessonSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}