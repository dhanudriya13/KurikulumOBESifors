import type { Metadata } from "next";
import CourseExplorer from "@/components/CourseExplorer";

export const metadata: Metadata = {
  title: "Courses",
  description: "Jelajahi daftar mata kuliah Kurikulum 2024 beserta SKS, semester, dan CPL.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink">Courses</h1>
        <p className="mt-2 text-muted">
          Telusuri mata kuliah berdasarkan nama, semester, CPL, dan SKS.
        </p>
      </header>

      <CourseExplorer />
    </div>
  );
}
