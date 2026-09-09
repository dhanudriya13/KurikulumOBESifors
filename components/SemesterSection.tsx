import type { Course } from "@/types/curriculum";
import { getCplsForCourse, slugify } from "@/lib/curriculum";
import CourseMetadata from "@/components/CourseMetadata";
import CPLBadge from "@/components/CPLBadge";
import Link from "next/link";

export default function SemesterSection({
  semester,
  courses,
}: {
  semester: number;
  courses: Course[];
}) {
  return (
    <section aria-labelledby={`semester-${semester}`}>
      <h2
        id={`semester-${semester}`}
        className="mb-4 border-b border-border pb-2 text-xl font-bold text-ink"
      >
        Semester {semester}
      </h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <li key={course.id}>
            <div className="flex h-full flex-col gap-2 rounded-card border border-border bg-surface p-4 transition-colors hover:border-primary/40">
              <Link
                href={`/courses/${slugify(course.name)}`}
                className="focus-ring rounded-sm font-semibold text-ink transition-colors hover:text-primary"
              >
                {course.name}
              </Link>
              <CourseMetadata sks={course.sks} semester={course.semester} />
              <span className="flex flex-wrap gap-1.5">
                {getCplsForCourse(course.id).map((cpl) => (
                  <CPLBadge key={cpl.id} cplId={cpl.id} code={cpl.code} />
                ))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
