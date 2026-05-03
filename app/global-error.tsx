"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body className="bg-[#0f1419] text-[#f0f4f8] p-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-xl font-bold mb-4">Ein Fehler ist aufgetreten</h1>
          <button
            type="button"
            onClick={() => reset()}
            className="border border-[#c9a227] px-6 py-2 text-[#c9a227] hover:bg-[#c9a227]/10"
          >
            Seite neu laden
          </button>
        </div>
      </body>
    </html>
  );
}
