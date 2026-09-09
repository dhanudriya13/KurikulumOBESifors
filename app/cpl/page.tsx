import type { Metadata } from "next";
import { getCpls } from "@/lib/curriculum";
import CPLCard from "@/components/CPLCard";

export const metadata: Metadata = {
  title: "CPL",
  description: "Daftar Capaian Pembelajaran Lulusan (CPL) Kurikulum 2024.",
};

export default function CplPage() {
  const cpls = getCpls();

  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink">
          Capaian Pembelajaran Lulusan
        </h1>
        <p className="mt-2 text-muted">
          Rumusan CPL beserta mata kuliah yang mendukungnya pada Kurikulum 2024.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cpls.map((cpl) => (
          <CPLCard key={cpl.id} cpl={cpl} />
        ))}
      </div>
    </div>
  );
}
