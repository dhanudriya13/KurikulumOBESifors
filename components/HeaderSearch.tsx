"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { searchCurriculum } from "@/lib/search";
import { getCplsForCourse, slugify } from "@/lib/curriculum";

export default function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);

  // Open with Ctrl/Cmd + K.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setQuery("");
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when navigating away.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const q = deferredQuery.trim();
  const results = searchCurriculum(q);
  const total = results.courses.length + results.cpls.length;

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusables = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setQuery("");
          setOpen(true);
        }}
        aria-label="Cari mata kuliah atau CPL"
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-medium text-muted transition-colors hover:border-primary/40 hover:text-primary"
      >
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
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden sm:inline">Cari</span>
        <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-semibold text-muted lg:inline">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 p-4 pt-[10vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Pencarian kurikulum"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            onKeyDown={handleKeyDown}
            className="flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-card border border-border bg-surface shadow-xl"
          >
            <div className="flex items-center gap-3 border-b border-border p-4">
              <div className="flex-1">
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  size="md"
                  autoFocus
                />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup pencarian"
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-muted hover:text-ink"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-4">
              {!q && (
                <p className="py-6 text-center text-sm text-muted">
                  Ketik untuk mencari mata kuliah atau CPL.
                </p>
              )}

              {q && total === 0 && (
                <div className="py-8 text-center">
                  <p className="text-base font-semibold text-ink">
                    Tidak ditemukan
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Tidak ada hasil untuk &quot;{q}&quot;. Coba kata kunci lain.
                  </p>
                </div>
              )}

              {q && results.cpls.length > 0 && (
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    CPL
                  </p>
                  <ul className="space-y-1">
                    {results.cpls.map((cpl) => (
                      <li key={cpl.id}>
                        <Link
                          href={`/cpl/${cpl.id}`}
                          onClick={() => setOpen(false)}
                          className="focus-ring flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-background"
                        >
                          <span className="mt-0.5 shrink-0 rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-xs font-semibold text-primary">
                            {cpl.code}
                          </span>
                          <span className="line-clamp-2 text-sm leading-relaxed text-ink">
                            {cpl.formulation}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {q && results.courses.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Mata Kuliah
                  </p>
                  <ul className="space-y-1">
                    {results.courses.map((course) => (
                      <li key={course.id}>
                        <Link
                          href={`/courses/${slugify(course.name)}`}
                          onClick={() => setOpen(false)}
                          className="focus-ring flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-background"
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold text-ink">
                              {course.name}
                            </span>
                            <span className="block text-xs text-muted">
                              {course.sks} SKS · Semester {course.semester}
                            </span>
                          </span>
                          <span className="flex shrink-0 flex-wrap justify-end gap-1">
                            {getCplsForCourse(course.id).map((cpl) => (
                              <span
                                key={cpl.id}
                                className="rounded-md border border-primary/20 bg-primary/5 px-1.5 py-0.5 text-[10px] font-semibold text-primary"
                              >
                                {cpl.code}
                              </span>
                            ))}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
