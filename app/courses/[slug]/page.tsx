import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCourseBySlug,
  getCplsForCourse,
  getCourses,
  slugify,
} from "@/lib/curriculum";
import CPLBadge from "@/components/CPLBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCourses().map((course) => ({ slug: slugify(course.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Mata Kuliah Tidak Ditemukan" };
  return {
    title: course.name,
    description: `${course.name} — ${course.sks} SKS, Semester ${course.semester}, Kurikulum 2024.`,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  const cpls = getCplsForCourse(course.id);

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/courses"
        className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-medium text-muted hover:text-ink"
      >
        <span aria-hidden="true">←</span> Kembali
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {course.name}
        </h1>
        {course.code && (
          <p className="mt-1 text-sm font-medium text-muted">{course.code}</p>
        )}
      </header>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="rounded-card border border-border bg-surface px-6 py-4 text-center">
          <p className="text-2xl font-bold text-ink">{course.sks}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            SKS
          </p>
        </div>
        <div className="rounded-card border border-border bg-surface px-6 py-4 text-center">
          <p className="text-2xl font-bold text-ink">Semester {course.semester}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Semester
          </p>
        </div>
      </div>

      <section className="mt-10" aria-labelledby="cpl-heading">
        <h2
          id="cpl-heading"
          className="text-xl font-bold text-ink"
        >
          CPL
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {cpls.map((cpl) => (
            <article
              key={cpl.id}
              className="rounded-card border border-border bg-surface p-5"
            >
              <CPLBadge cplId={cpl.id} code={cpl.code} />
              {cpl.category && (
                <span className="ml-2 rounded-md bg-background px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {cpl.category}
                </span>
              )}
              <p className="mt-3 text-base leading-relaxed text-ink">
                {cpl.formulation}
              </p>
              <Link
                href={`/cpl/${cpl.id}`}
                className="focus-ring mt-4 inline-flex items-center gap-1 rounded-md text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Lihat {cpl.code}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
