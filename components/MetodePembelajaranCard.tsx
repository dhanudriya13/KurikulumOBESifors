"use client";

import { useState } from "react";
import type { MetodePembelajaran } from "@/lib/metode-pembelajaran";

export default function MetodePembelajaranCard({
  item,
}: {
  item: MetodePembelajaran;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
          {item.id}
        </span>
        <h2 className="text-lg font-semibold leading-snug text-ink">
          {item.name}
        </h2>
      </div>

      {!open ? (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-justify text-pretty text-ink">
          {item.description[0]}
        </p>
      ) : (
        <div className="animate-fade-in mt-4 space-y-3">
          {item.description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-justify text-pretty text-ink"
            >
              {paragraph}
            </p>
          ))}

          {item.langkah && item.langkah.length > 0 && (
            <ol className="list-[lower-alpha] space-y-1.5 pl-5 text-sm leading-relaxed text-ink">
              {item.langkah.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="focus-ring mt-4 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
      >
        {open ? "Tutup" : "Baca Selengkapnya"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </article>
  );
}
