import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "OpenFullStack",
  description:
    "Learn how real-world full stack applications are built, implemented, and structured.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Providers>
          {/* Header */}
          <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-6 py-4 flex items-center gap-6">
              <Link href="/" className="text-xl font-bold">
                OpenFullStack
              </Link>

              <div className="flex gap-4 text-sm font-medium text-gray-600">
                <Link href="/learn">Learn</Link>
                <Link href="/projects">Projects</Link>
              </div>
            </nav>
          </header>

          {/* Main */}
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t bg-white">
            <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} OpenFullStack
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}