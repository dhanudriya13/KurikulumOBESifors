import type { Metadata } from "next";
import { teknikPenilaian } from "@/lib/teknik-penilaian";

export const metadata: Metadata = {
  title: "Teknik Penilaian",
  description:
    "Kelompok teknik penilaian pembelajaran pada Kurikulum 2024: kuis, tes tulis, observasi, tugas kelompok, presentasi, dan tes lisan.",
};

export default function TeknikPenilaianPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Teknik Penilaian
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Kelompok teknik penilaian beserta definisinya pada Kurikulum 2024.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Sumber: Buku Kurikulum Bidang INFOKOM berbasis OBE/KKNI/SKKNI Versi
          2.0 Tahun 2024
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {teknikPenilaian.map((item) => (
          <article
            key={item.id}
            className="flex h-full flex-col rounded-card border border-border bg-surface p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {item.id}
              </span>
              <h2 className="text-lg font-semibold leading-snug text-ink">
                {item.name}
              </h2>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Deskripsi
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink">
                {item.tujuan}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
