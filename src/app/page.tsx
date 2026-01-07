export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Learn Full Stack Development
          <span className="block text-blue-600">
            The Way It’s Used in the Real World
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Most tutorials teach syntax. This platform teaches you
          how to design, build, and implement full stack applications
          the way professional developers do.
        </p>
      </section>
      {/* Why This Platform */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">
            You Know Syntax, Not Implementation
          </h3>
          <p className="text-gray-600 text-sm">
            Most learners can write code but struggle to understand
            where it fits in a real application.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">
            Real Projects Are Missing
          </h3>
          <p className="text-gray-600 text-sm">
            Tutorials rarely explain architecture, decisions, or
            real-world tradeoffs.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-blue-600">
            Industry Thinking Matters
          </h3>
          <p className="text-gray-600 text-sm">
            Companies expect you to understand flows, not just files.
          </p>
        </div>
      </section>
      {/* What You Will Learn */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          What You Will Learn
        </h2>

        <ul className="max-w-3xl mx-auto space-y-4 text-gray-700">
          <li>✔ How frontend, backend, and database work together</li>
          <li>✔ When to use APIs, authentication, and state</li>
          <li>✔ How real-world projects are structured</li>
          <li>✔ How to debug and think like a professional developer</li>
        </ul>
      </section>
      {/* Call To Action */}
      <section className="text-center">
        <a
          href="/learn"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Start Learning
        </a>
      </section>
    </div>
  );
}