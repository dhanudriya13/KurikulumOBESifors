"use client";

import { useDeferredValue, useState } from "react";
import SearchBar from "@/components/SearchBar";
import CourseCard from "@/components/CourseCard";
import CPLCard from "@/components/CPLCard";
import { searchCurriculum } from "@/lib/search";

const popularSearches = [
  "Sistem Digital",
  "Pemrograman Dasar",
  "CPL 2",
  "User Experience Design",
];

export default function HomeSearch() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const hasQuery = query.trim().length > 0;
  const q = deferredQuery.trim();
  const results = searchCurriculum(q);
  const total = results.courses.length + results.cpls.length;
  const showSkeleton = hasQuery && q.length === 0;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Kurikulum <span className="text-primary">2024</span>
      </h1>
      <p className="mt-4 text-xl font-bold text-ink sm:text-2xl">
        Explore Mata Kuliah &amp; CPL
      </p>
      <p className="mt-3 text-base leading-relaxed text-muted">
        Cari mata kuliah, CPL, SKS, semester, dan rumusan capaian
        pembelajaran.
      </p>

      <div className="mt-8">
        <SearchBar value={query} onChange={setQuery} autoFocus />
      </div>

      {!hasQuery && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-muted">Popular Searches</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="focus-ring rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {hasQuery && (
        <section className="mt-10 animate-fade-in" aria-live="polite">
          {showSkeleton ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 animate-pulse rounded-card border border-border bg-surface"
                />
              ))}
            </div>
          ) : total > 0 ? (
            <>
              <p className="text-sm font-medium text-muted">
                {total} hasil untuk &quot;{q}&quot;
              </p>
              <div className="mt-4 space-y-8">
                {results.cpls.length > 0 && (
                  <div>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
                      CPL
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                      {results.cpls.map((cpl) => (
                        <CPLCard key={cpl.id} cpl={cpl} />
                      ))}
                    </div>
                  </div>
                )}
                {results.courses.length > 0 && (
                  <div>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
                      Mata Kuliah
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {results.courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="rounded-card border border-border bg-surface p-10 text-center">
              <p className="text-lg font-semibold text-ink">Tidak ditemukan</p>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                Kami tidak menemukan mata kuliah atau CPL yang sesuai dengan
                pencarian:
              </p>
              <p className="mt-3 font-semibold text-ink">&quot;{q}&quot;</p>
              <p className="mt-3 text-sm text-muted">
                Coba gunakan kata kunci lain.
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
