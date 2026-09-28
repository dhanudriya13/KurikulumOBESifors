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
import { getCourseLearning } from "@/lib/course-learning";

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
  const learning = getCourseLearning(course, cpls);

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

      <section className="mt-10" aria-labelledby="learning-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Course blueprint
            </p>
            <h2 id="learning-heading" className="mt-2 text-2xl font-bold text-ink">
              Capaian dan pembelajaran
            </h2>
            <p className="mt-1 text-sm text-muted">
              Learning outcomes, assessment, and methods
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6">
          <article className="rounded-card border border-border bg-surface p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Nama / Name
            </p>
            <h3 className="mt-3 text-xl font-bold text-ink">{learning.name.id}</h3>
            <p className="mt-1 text-sm text-muted">{learning.name.en}</p>
          </article>

          <article className="rounded-card border border-border bg-surface p-5 md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              CPL / PLO
            </p>
            <div className="mt-3 space-y-4">
              {cpls.map((cpl) => (
                <div key={cpl.id}>
                  <p className="text-base font-semibold text-ink">{cpl.code}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{cpl.formulation}</p>
                </div>
              ))}
              <p className="text-sm leading-relaxed text-muted">{learning.cpl.en}</p>
            </div>
          </article>

          <article className="rounded-card border border-border bg-surface p-5 md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              CPMK / Course Learning Outcome
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <p className="text-base leading-relaxed text-ink">{learning.cpmk.id}</p>
              <p className="text-sm leading-relaxed text-muted">{learning.cpmk.en}</p>
            </div>
          </article>

          <article className="rounded-card border border-border bg-surface p-5 md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Sub-CPMK / Sub-Learning Outcomes
            </p>
            <p className="mt-2 text-xs text-muted">
              Bobot penilaian / Assessment weight: 100%
            </p>
            <ol className="mt-4 space-y-4">
              {learning.subCpmk.map((item, index) => (
                <li key={item.id} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm leading-relaxed text-ink">{item.id}</p>
                      <span className="shrink-0 rounded-full bg-primary/15 px-2 py-1 text-xs font-bold text-primary">
                        {item.weight}%
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.en}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-card border border-border bg-surface p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Teknik Penilaian / Assessment
            </p>
            <ul className="mt-4 space-y-3">
              {learning.assessment.map((item) => (
                <li key={item.id} className="border-l-2 border-primary/30 pl-3">
                  <p className="text-sm text-ink">{item.id}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.en}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-card border border-border bg-surface p-5 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Metode Pembelajaran / Learning Methods
            </p>
            <ul className="mt-4 space-y-3">
              {learning.method.map((item) => (
                <li key={item.id} className="border-l-2 border-primary/30 pl-3">
                  <p className="text-sm text-ink">{item.id}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.en}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

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
