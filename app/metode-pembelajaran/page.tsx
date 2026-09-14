import type { Metadata } from "next";
import MetodePembelajaranCard from "@/components/MetodePembelajaranCard";
import { metodePembelajaran } from "@/lib/metode-pembelajaran";

export const metadata: Metadata = {
  title: "Metode Pembelajaran",
  description:
    "Metode pembelajaran pada Kurikulum 2024: project-based learning, problem-based learning, collaborative learning, dan experiential learning.",
};

export default function MetodePembelajaranPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Metode Pembelajaran
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Metode pembelajaran beserta definisinya pada Kurikulum 2024.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Sumber: Buku Kurikulum Bidang INFOKOM berbasis OBE/KKNI/SKKNI Versi
          2.0 Tahun 2024.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {metodePembelajaran.map((item) => (
          <MetodePembelajaranCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
