import type { Metadata } from "next";
import TeknikPenilaianCard from "@/components/TeknikPenilaianCard";
import { teknikPenilaian } from "@/lib/teknik-penilaian";

export const metadata: Metadata = {
  title: "Teknik Penilaian",
  description:
    "11 teknik penilaian pada Kurikulum 2024 beserta definisi, fokus penilaian, capaian yang sesuai, bentuk kegiatan, instrumen, dan ciri pembeda.",
};

export default function TeknikPenilaianPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Teknik Penilaian
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Sebelas teknik penilaian beserta definisi, fokus penilaian, capaian
          yang sesuai, bentuk kegiatan, instrumen, dan ciri pembeda pada
          Kurikulum 2024.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Sumber: Buku Kurikulum Bidang INFOKOM berbasis OBE/KKNI/SKKNI Versi
          2.0 Tahun 2024.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {teknikPenilaian.map((item) => (
          <TeknikPenilaianCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
