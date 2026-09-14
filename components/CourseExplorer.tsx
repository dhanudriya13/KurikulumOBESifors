"use client";

import { useDeferredValue, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import CourseCard from "@/components/CourseCard";
import {
  getCourses,
  getCpls,
  getSemesters,
  getSksOptions,
} from "@/lib/curriculum";
import { searchCurriculum } from "@/lib/search";

type FilterValue = string;

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: FilterValue; label: string }[];
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(opt.value)}
              className={`focus-ring rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                active
                  ? "border-primary bg-primary text-ink"
                  : "border-border bg-surface text-muted hover:border-primary/40 hover:text-primary"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CourseExplorer() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [semester, setSemester] = useState<FilterValue>("all");
  const [cpl, setCpl] = useState<FilterValue>("all");
  const [sks, setSks] = useState<FilterValue>("all");

  const allCourses = useMemo(() => getCourses(), []);
  const semesters = useMemo(() => getSemesters(), []);
  const sksOptions = useMemo(() => getSksOptions(), []);
  const cpls = useMemo(() => getCpls(), []);

  const courses = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    let list = allCourses;

    if (q) {
      // Prioritize direct name matches; fall back to full search.
      const byName = allCourses.filter((c) => c.name.toLowerCase().includes(q));
      if (byName.length > 0) {
        list = byName;
      } else {
        list = searchCurriculum(q).courses;
      }
    }

    if (semester !== "all") {
      list = list.filter((c) => c.semester === Number(semester));
    }
    if (cpl !== "all") {
      list = list.filter((c) => c.cplIds.includes(cpl));
    }
    if (sks !== "all") {
      list = list.filter((c) => c.sks === Number(sks));
    }
    return list;
  }, [allCourses, deferredQuery, semester, cpl, sks]);

  const semesterOptions = [
    { value: "all", label: "All" },
    ...semesters.map((s) => ({ value: String(s), label: String(s) })),
  ];

  const cplOptions = [
    { value: "all", label: "All CPL" },
    ...cpls.map((c) => ({ value: c.id, label: c.code })),
  ];

  const sksFilterOptions = [
    { value: "all", label: "All" },
    ...sksOptions.map((s) => ({ value: String(s), label: `${s} SKS` })),
  ];

  return (
    <div>
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Cari mata kuliah..."
        size="md"
      />

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <FilterGroup
          label="Semester"
          options={semesterOptions}
          value={semester}
          onChange={setSemester}
        />
        <FilterGroup
          label="CPL"
          options={cplOptions}
          value={cpl}
          onChange={setCpl}
        />
        <FilterGroup
          label="SKS"
          options={sksFilterOptions}
          value={sks}
          onChange={setSks}
        />
      </div>

      <p className="mt-6 text-sm font-medium text-muted" aria-live="polite">
        {courses.length} mata kuliah ditemukan
      </p>

      {courses.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-card border border-border bg-surface p-10 text-center">
          <p className="text-lg font-semibold text-ink">Tidak ditemukan</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            Kami tidak menemukan mata kuliah yang sesuai dengan pencarian dan
            filter Anda.
          </p>
          <p className="mt-3 text-sm text-muted">Coba gunakan kata kunci lain.</p>
        </div>
      )}
    </div>
  );
}
