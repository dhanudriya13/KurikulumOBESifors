export interface TeknikPenilaian {
  id: number;
  name: string;
  tujuan: string;
  contoh: string[];
}

export const teknikPenilaian: TeknikPenilaian[] = [
  {
    id: 1,
    name: "Tes",
    tujuan:
      "Mengukur tingkat penguasaan mahasiswa terhadap pengetahuan, konsep, prinsip, prosedur, dan kemampuan menerapkan pengetahuan dalam menyelesaikan permasalahan.",
    contoh: [
      "Tes pilihan ganda",
      "Tes uraian",
      "Tes hitungan",
      "UTS/UAS tertulis",
      "Tes praktik",
      "Tes berbasis studi kasus",
    ],
  },
  {
    id: 2,
    name: "Kuis",
    tujuan:
      "Mengevaluasi pemahaman mahasiswa secara cepat dan berkala terhadap materi yang baru dipelajari serta memberikan umpan balik terhadap proses pembelajaran.",
    contoh: [
      "Kuis tertulis setelah satu topik",
      "Kuis daring melalui LMS",
      "Kuis praktikum",
      "Kuis singkat berbasis soal pilihan ganda/uraian",
    ],
  },
  {
    id: 3,
    name: "Penugasan",
    tujuan:
      "Mengukur kemampuan mahasiswa dalam memahami, mengolah, menganalisis, dan mengomunikasikan materi melalui penyelesaian tugas secara mandiri maupun kelompok.",
    contoh: [
      "Penyusunan makalah",
      "Review artikel",
      "Tugas analisis",
      "Tugas perancangan",
      "Penyelesaian latihan",
      "Tugas praktikum",
    ],
  },
  {
    id: 4,
    name: "Unjuk Kerja / Kinerja / Praktik",
    tujuan:
      "Mengukur kemampuan mahasiswa dalam menerapkan pengetahuan dan keterampilan secara langsung melalui aktivitas atau demonstrasi kinerja tertentu.",
    contoh: [
      "Praktikum di laboratorium",
      "Demonstrasi penggunaan perangkat lunak",
      "Konfigurasi jaringan",
      "Presentasi hasil praktik",
      "Coding langsung",
      "Performance assessment",
    ],
  },
  {
    id: 5,
    name: "Penilaian Produk",
    tujuan:
      "Mengevaluasi kemampuan mahasiswa dalam menghasilkan artefak atau produk berdasarkan kriteria kualitas dan spesifikasi yang telah ditentukan.",
    contoh: [
      "Pembuatan aplikasi",
      "Prototype",
      "Desain antarmuka",
      "Dashboard",
      "Diagram UML",
      "Mind map",
      "Rancangan arsitektur",
      "Laporan analisis",
      "Produk digital lainnya",
    ],
  },
  {
    id: 6,
    name: "Penilaian Proyek",
    tujuan:
      "Mengukur kemampuan mahasiswa dalam merencanakan, melaksanakan, mengelola, dan menyelesaikan suatu pekerjaan kompleks dalam periode tertentu serta menghasilkan keluaran yang terukur.",
    contoh: [
      "Proyek pengembangan sistem",
      "Proyek pemrograman",
      "Proyek analisis proses bisnis",
      "Proyek perancangan basis data",
      "Proyek kelompok",
      "Capstone project",
    ],
  },
  {
    id: 7,
    name: "Penilaian Berbasis Kasus",
    tujuan:
      "Mengukur kemampuan mahasiswa dalam mengidentifikasi masalah, menganalisis situasi, menggunakan konsep yang relevan, serta menyusun alternatif solusi atau keputusan berdasarkan suatu kasus.",
    contoh: [
      "Analisis studi kasus organisasi",
      "Analisis skenario keamanan TI",
      "Troubleshooting kasus jaringan",
      "Audit kasus TI",
      "Analisis kebutuhan sistem",
      "Case-based examination",
    ],
  },
  {
    id: 8,
    name: "Presentasi / Argumentasi",
    tujuan:
      "Mengukur kemampuan mahasiswa dalam mengomunikasikan gagasan, hasil analisis, atau solusi secara sistematis serta mempertahankan argumentasi berdasarkan bukti dan konsep yang relevan.",
    contoh: [
      "Presentasi individu/kelompok",
      "Pitching ide bisnis",
      "Presentasi proyek",
      "Seminar hasil",
      "Debat akademik",
      "Sesi tanya-jawab dan pembelaan hasil analisis",
    ],
  },
];
