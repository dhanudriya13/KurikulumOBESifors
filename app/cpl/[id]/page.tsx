import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCplById, getCpls, getCoursesForCpl } from "@/lib/curriculum";
import CourseCard from "@/components/CourseCard";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getCpls().map((cpl) => ({ id: cpl.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cpl = getCplById(id);
  if (!cpl) return { title: "CPL Tidak Ditemukan" };
  return {
    title: cpl.code,
    description: `Rumusan ${cpl.code} dan mata kuliah terkait pada Kurikulum 2024.`,
  };
}

export default async function CplDetailPage({ params }: Props) {
  const { id } = await params;
  const cpl = getCplById(id);

  if (!cpl) notFound();

  const courses = getCoursesForCpl(cpl.id);

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/cpl"
        className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-medium text-muted hover:text-ink"
      >
        <span aria-hidden="true">←</span> Kembali
      </Link>

      <header className="mt-6 max-w-3xl">
        <span className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-semibold text-primary">
          {cpl.code}
        </span>
        {cpl.category && (
          <span className="ml-2 rounded-md bg-background px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted">
            {cpl.category}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {cpl.code}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          {cpl.formulation}
        </p>
      </header>

      <section className="mt-12" aria-labelledby="courses-heading">
        <h2 id="courses-heading" className="text-xl font-bold text-ink">
          Mata Kuliah Terkait
        </h2>
        <p className="mt-1 text-sm font-medium text-muted">
          {courses.length} Mata Kuliah
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
