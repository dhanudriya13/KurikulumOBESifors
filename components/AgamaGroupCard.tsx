"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Course } from "@/types/curriculum";
import { getAgamaCourses, slugify } from "@/lib/curriculum";
import CourseMetadata from "@/components/CourseMetadata";

function AgamaGroupCard() {
  const [open, setOpen] = useState(false);
  const courses = useMemo(() => getAgamaCourses(), []);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <>
      <article className="flex h-full flex-col">
        <div className="relative flex h-full flex-col rounded-card border border-white/60 bg-white/50 p-5 shadow-lg shadow-amber-500/10 backdrop-blur-xl transition-shadow hover:shadow-xl hover:shadow-amber-500/15 sm:p-6">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-card"
            aria-hidden="true"
          >
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-300/50 to-orange-200/30 blur-2xl" />
            <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-gradient-to-tr from-sky-300/40 to-indigo-200/30 blur-2xl" />
          </div>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="focus-ring flex w-full items-start gap-3 rounded-lg text-left"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/80 to-orange-300/70 text-white shadow-md shadow-amber-500/20">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6a4 4 0 0 1-2.7 1H11a4 4 0 0 1-2.7-1C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7Z" />
                <path d="M12 2v18" />
                <path d="M8 22h8" />
              </svg>
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">
                Pendidikan Agama
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">
                {courses.length} mata kuliah · {courses[0]?.sks} SKS
              </p>
            </div>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/30 text-muted transition-colors group-hover:bg-white/50">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </button>

          <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">
            Kelompok MKWU — Pendidikan Agama sesuai keyakinan masing-masing
            mahasiswa.
          </p>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Pendidikan Agama"
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/60 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl animate-fade-in sm:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl"
              aria-hidden="true"
            >
              <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-amber-300/50 to-orange-200/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gradient-to-tr from-sky-300/40 to-indigo-200/30 blur-3xl" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/80 to-orange-300/70 text-white shadow-lg shadow-amber-500/20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6a4 4 0 0 1-2.7 1H11a4 4 0 0 1-2.7-1C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7Z" />
                    <path d="M12 2v18" />
                    <path d="M8 22h8" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-ink">
                    Pendidikan Agama
                  </h2>
                  <p className="text-sm text-muted">
                    {courses.length} mata kuliah · Kelompok MKWU (CPL 4)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/30 text-muted transition-colors hover:bg-white/50 hover:text-ink"
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
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Mata kuliah pendidikan agama sesuai keyakinan masing-masing
              mahasiswa. Mahasiswa memilih satu mata kuliah sesuai agama yang
              dianutnya.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {courses.map((course: Course) => (
                <Link
                  key={course.id}
                  href={`/courses/${slugify(course.name)}`}
                  className="focus-ring flex flex-col gap-1.5 rounded-card border border-white/70 bg-white/50 p-4 backdrop-blur-sm transition-all hover:border-amber-300/60 hover:bg-white/70 hover:shadow-sm"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold leading-snug text-ink transition-colors hover:text-primary">
                      {course.name}
                    </span>
                    {course.code && (
                      <span className="shrink-0 rounded-md bg-white/60 px-1.5 py-0.5 text-[10px] font-medium text-muted">
                        {course.code}
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-muted">
                    {course.sks} SKS · Semester {course.semester}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(AgamaGroupCard);
