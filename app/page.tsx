import HomeSearch from "@/components/HomeSearch";
import { getCourses, getCpls, getTotalSks } from "@/lib/curriculum";

export default function HomePage() {
  const courseCount = getCourses().length;
  const cplCount = getCpls().length;
  const totalSks = getTotalSks();

  return (
    <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <HomeSearch />

      <section
        className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-3 gap-4"
        aria-label="Ringkasan kurikulum"
      >
        <div className="rounded-card border border-border bg-surface p-5 text-center">
          <p className="text-2xl font-bold text-primary">{courseCount}</p>
          <p className="mt-1 text-sm text-muted">Mata Kuliah</p>
        </div>
        <div className="rounded-card border border-border bg-surface p-5 text-center">
          <p className="text-2xl font-bold text-primary">{cplCount}</p>
          <p className="mt-1 text-sm text-muted">CPL</p>
        </div>
        <div className="rounded-card border border-border bg-surface p-5 text-center">
          <p className="text-2xl font-bold text-primary">{totalSks}</p>
          <p className="mt-1 text-sm text-muted">Total SKS</p>
        </div>
      </section>
    </div>
  );
}
