import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Tentang Kurikulum 2024 Explorer.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink">About</h1>
      </header>

      <div className="space-y-6 text-base leading-relaxed text-ink">
        <p>
          <strong>Kurikulum 2024 Explorer</strong> adalah sistem informasi
          kurikulum yang memudahkan pencarian dan penelusuran hubungan antara
          mata kuliah, SKS, semester, dan Capaian Pembelajaran Lulusan (CPL).
        </p>

        <p>
          Sistem ini menyajikan data kurikulum dalam bentuk yang mudah
          ditelusuri, sehingga mahasiswa, dosen, maupun pengelola program studi
          dapat dengan cepat menjawab pertanyaan seperti:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-muted">
          <li>CPL apa yang didukung oleh sebuah mata kuliah?</li>
          <li>Berapa SKS dan di semester berapa mata kuliah ditawarkan?</li>
          <li>Bagaimana rumusan dari suatu CPL?</li>
          <li>Mata kuliah mana saja yang mendukung suatu CPL?</li>
        </ul>

        <p>
          Data pada sistem ini bersumber dari dokumen Panduan Kurikulum 2024
          program studi Sistem Informasi.
        </p>
      </div>
    </div>
  );
}
