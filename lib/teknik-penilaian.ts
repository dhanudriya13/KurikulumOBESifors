export interface TeknikPenilaian {
  id: number;
  name: string;
  tujuan: string;
}

export const teknikPenilaian: TeknikPenilaian[] = [
  {
    id: 1,
    name: "Kuis (Quiz)",
    tujuan:
      "Penilaian yang dilakukan berdasarkan partisipasi mahasiswa melalui kuis.",
  },
  {
    id: 2,
    name: "Observasi (Praktik / Tugas)",
    tujuan:
      "Penilaian yang dilakukan melalui pengamatan atau observasi terhadap praktik maupun tugas.",
  },
  {
    id: 3,
    name: "Tugas Kelompok",
    tujuan: "Penilaian berdasarkan tugas yang dikerjakan secara berkelompok.",
  },
  {
    id: 4,
    name: "Presentasi / Unjuk Kerja",
    tujuan:
      "Penilaian berbasis unjuk kerja yang ditunjukkan melalui presentasi.",
  },
  {
    id: 5,
    name: "Tes Lisan",
    tujuan:
      "Penilaian menggunakan tes lisan yang umumnya berkaitan dengan tugas kelompok.",
  },
  {
    id: 6,
    name: "Tes Tulis",
    tujuan: "Penilaian yang dilakukan secara tertulis.",
  },
];
