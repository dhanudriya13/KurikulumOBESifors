import type { Metadata } from "next";
import { getCoursesBySemester, getSemesters } from "@/lib/curriculum";
import SemesterSection from "@/components/SemesterSection";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Struktur Kurikulum 2024 per semester beserta SKS dan CPL.",
};

export default function CurriculumPage() {
  const semesters = getSemesters();

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-ink">
          Kurikulum 2024
        </h1>
        <p className="mt-2 text-muted">
          Mata kuliah per semester beserta SKS dan hubungannya dengan CPL.
        </p>
      </header>

      <div className="space-y-12">
        {semesters.map((semester) => (
          <SemesterSection
            key={semester}
            semester={semester}
            courses={getCoursesBySemester(semester)}
          />
        ))}
      </div>
    </div>
  );
}
