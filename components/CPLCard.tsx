import { memo } from "react";
import Link from "next/link";
import type { CPL } from "@/types/curriculum";
import { getCoursesForCpl } from "@/lib/curriculum";

function CPLCard({ cpl }: { cpl: CPL }) {
  const count = getCoursesForCpl(cpl.id).length;

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary">
          {cpl.code}
        </span>
        <span className="text-sm font-medium text-muted">
          {count} Mata Kuliah
        </span>
      </div>

      {cpl.category && (
        <span className="mt-3 w-fit rounded-md bg-background px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted">
          {cpl.category}
        </span>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">
        {cpl.formulation}
      </p>

      <div className="mt-4">
        <Link
          href={`/cpl/${cpl.id}`}
          className="focus-ring inline-flex items-center gap-1 rounded-md text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Lihat Detail
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default memo(CPLCard);
