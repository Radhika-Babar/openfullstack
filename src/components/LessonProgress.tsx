"use client";

export default function CompleteLessonButton({ slug }: { slug: string }) {
  const markCompleted = async () => {
    await fetch("/api/lessons/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
  };

  return (
    <button
      onClick={markCompleted}
      className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
    >
      Mark as Completed ✅
    </button>
  );
}
