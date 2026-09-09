import { memo } from "react";
import Link from "next/link";
import type { Course } from "@/types/curriculum";
import { getCplsForCourse, slugify } from "@/lib/curriculum";
import CourseMetadata from "@/components/CourseMetadata";
import CPLBadge from "@/components/CPLBadge";

function preview(text: string, length = 110): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}…`;
}

function CourseCard({ course }: { course: Course }) {
  const cpls = getCplsForCourse(course.id);
  const firstCpl = cpls[0];

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">
          <Link
            href={`/courses/${slugify(course.name)}`}
            className="focus-ring rounded-sm hover:text-primary"
          >
            {course.name}
          </Link>
        </h3>
        {course.code && (
          <span className="shrink-0 rounded-md bg-background px-2 py-1 text-xs font-medium text-muted">
            {course.code}
          </span>
        )}
      </div>

      <div className="mt-2">
        <CourseMetadata sks={course.sks} semester={course.semester} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {cpls.map((cpl) => (
          <CPLBadge key={cpl.id} cplId={cpl.id} code={cpl.code} />
        ))}
      </div>

      {firstCpl && (
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {preview(firstCpl.formulation)}
        </p>
      )}

      <div className="mt-auto pt-4">
        <Link
          href={`/courses/${slugify(course.name)}`}
          className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Lihat Detail
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default memo(CourseCard);
