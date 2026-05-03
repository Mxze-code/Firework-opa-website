"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6">
      <h2 className="font-heading text-xl font-bold text-[#f0f4f8]">
        Etwas ist schiefgelaufen
      </h2>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-4 border border-[#c9a227] px-6 py-2 text-sm text-[#c9a227] hover:bg-[#c9a227]/10 transition"
      >
        Erneut versuchen
      </button>
    </div>
  );
}
