"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="text-sm text-red-600 hover:underline"
      >
        Sign out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="text-sm text-blue-600 hover:underline"
    >
      Sign in with GitHub
    </button>
  );
}