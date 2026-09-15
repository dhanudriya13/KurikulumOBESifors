export interface TeknikPenilaian {
  id: number;
  name: string;
  definisi: string;
  fokusPenilaian: string;
  capaian: string[];
  bentukKegiatan: string[];
  instrumen: string[];
  ciriPembeda: string;
}

export const teknikPenilaian: TeknikPenilaian[] = [
  {
    id: 1,
    name: "Kuis",
    definisi:
      "Penilaian singkat yang diberikan untuk mengukur tingkat penguasaan mahasiswa terhadap konsep, prinsip, istilah, prosedur dasar, serta materi tertentu dalam cakupan yang relatif terbatas.",
    fokusPenilaian:
      "Penguasaan pengetahuan dan pemahaman awal mahasiswa setelah mempelajari satu topik tertentu.",
    capaian: [
      "mengidentifikasi",
      "menjelaskan",
      "membedakan",
      "mengklasifikasikan",
      "menghitung",
      "menerapkan konsep sederhana",
    ],
    bentukKegiatan: [
      "soal pilihan ganda",
      "isian singkat",
      "benar-salah",
      "mencocokkan",
      "jawaban pendek",
    ],
    instrumen: ["kisi-kisi", "soal", "kunci jawaban", "pedoman penskoran"],
    ciriPembeda:
      "Berdurasi relatif singkat, cakupan materi terbatas, serta berfungsi memberikan gambaran cepat mengenai tingkat pemahaman mahasiswa.",
  },
  {
    id: 2,
    name: "Tugas",
    definisi:
      "Penilaian terhadap pekerjaan yang diberikan kepada mahasiswa untuk diselesaikan dalam jangka waktu tertentu sebagai bukti kemampuan menerapkan pengetahuan dan keterampilan sesuai capaian pembelajaran.",
    fokusPenilaian:
      "Kemampuan menerapkan konsep, menyelesaikan permasalahan, mengolah informasi, menganalisis data, menyusun argumentasi, serta menghasilkan pekerjaan tertentu.",
    capaian: [
      "menerapkan",
      "menganalisis",
      "membandingkan",
      "menginterpretasikan",
      "mengevaluasi",
      "merancang",
    ],
    bentukKegiatan: [
      "esai",
      "penyelesaian soal",
      "telaah artikel",
      "analisis data",
      "coding",
      "pemetaan konsep",
      "perancangan sederhana",
      "lembar kerja",
    ],
    instrumen: ["petunjuk tugas", "rubrik", "pedoman penskoran"],
    ciriPembeda:
      "Mahasiswa memperoleh pekerjaan spesifik dengan hasil yang harus dikumpulkan dalam batas waktu tertentu. Tugas dapat dikerjakan secara individual maupun kelompok.",
  },
  {
    id: 3,
    name: "Tes Tulis",
    definisi:
      "Penilaian terstruktur yang meminta mahasiswa memberikan respons tertulis terhadap seperangkat pertanyaan dalam kondisi, waktu, serta aturan pelaksanaan yang telah ditentukan.",
    fokusPenilaian:
      "Penguasaan pengetahuan, pemahaman konsep, kemampuan penerapan, penalaran, analisis, evaluasi, serta pemecahan masalah secara individual.",
    capaian: [
      "menjelaskan",
      "menerapkan",
      "menghitung",
      "menganalisis",
      "mengevaluasi",
      "memecahkan masalah",
    ],
    bentukKegiatan: [
      "pilihan ganda",
      "jawaban singkat",
      "esai",
      "perhitungan",
      "analisis permasalahan",
      "soal pemecahan masalah",
    ],
    instrumen: [
      "kisi-kisi tes",
      "soal",
      "kunci jawaban",
      "pedoman penskoran",
      "rubrik esai",
    ],
    ciriPembeda:
      "Dilaksanakan dalam situasi pengujian yang terstruktur dengan waktu pengerjaan serta ketentuan penilaian yang seragam.",
  },
  {
    id: 4,
    name: "Tes Lisan",
    definisi:
      "Penilaian melalui proses tanya jawab langsung antara dosen dan mahasiswa untuk memperoleh bukti mengenai tingkat penguasaan, penalaran, serta kedalaman pemahaman mahasiswa.",
    fokusPenilaian:
      "Penguasaan konsep, ketepatan penjelasan, logika berpikir, kemampuan memberikan argumentasi, serta kemampuan mempertahankan jawaban.",
    capaian: [
      "menjelaskan",
      "menginterpretasikan",
      "memberikan alasan",
      "menganalisis",
      "mengevaluasi",
      "mempertahankan argumentasi",
    ],
    bentukKegiatan: [
      "ujian lisan",
      "viva",
      "wawancara akademik",
      "tanya jawab terstruktur",
    ],
    instrumen: [
      "daftar pertanyaan",
      "kisi-kisi pertanyaan",
      "rubrik penilaian",
      "pedoman penskoran",
    ],
    ciriPembeda:
      "Penguji dapat menggali kedalaman pemahaman mahasiswa secara langsung melalui pertanyaan lanjutan yang relevan.",
  },
  {
    id: 5,
    name: "Observasi Kinerja",
    definisi:
      "Penilaian melalui pengamatan langsung terhadap kemampuan mahasiswa ketika melakukan tindakan, prosedur, praktik, demonstrasi, serta aktivitas profesional tertentu.",
    fokusPenilaian:
      "Kualitas proses, ketepatan prosedur, keterampilan teknis, penggunaan alat, keselamatan kerja, efisiensi, ketelitian, serta sikap selama pelaksanaan kegiatan.",
    capaian: [
      "melakukan",
      "mendemonstrasikan",
      "mengoperasikan",
      "mempraktikkan",
      "melaksanakan",
      "menggunakan",
    ],
    bentukKegiatan: [
      "praktikum",
      "microteaching",
      "demonstrasi",
      "simulasi",
      "penggunaan perangkat lunak",
      "penggunaan peralatan laboratorium",
      "praktik lapangan",
    ],
    instrumen: [
      "lembar observasi",
      "checklist kinerja",
      "rating scale",
      "rubrik kinerja",
    ],
    ciriPembeda:
      "Yang dinilai terutama adalah bagaimana mahasiswa melakukan suatu aktivitas, bukan semata-mata hasil akhirnya. Teknik ini mencakup konsep unjuk kerja.",
  },
  {
    id: 6,
    name: "Presentasi",
    definisi:
      "Penilaian terhadap kemampuan mahasiswa dalam mengorganisasi, menyampaikan, menjelaskan, serta mempertahankan gagasan dan hasil pekerjaan secara lisan di hadapan audiens.",
    fokusPenilaian:
      "Penguasaan materi, sistematika penyampaian, kejelasan komunikasi, kualitas argumentasi, penggunaan bukti, kualitas media, pengelolaan waktu, serta kemampuan menjawab pertanyaan.",
    capaian: [
      "menjelaskan",
      "mengomunikasikan",
      "memaparkan",
      "mempertahankan",
      "meyakinkan",
      "menyimpulkan",
    ],
    bentukKegiatan: [
      "presentasi tugas",
      "seminar hasil",
      "pemaparan proyek",
      "presentasi analisis kasus",
      "presentasi rancangan",
    ],
    instrumen: [
      "rubrik presentasi",
      "lembar penilaian",
      "pedoman pemberian skor",
    ],
    ciriPembeda:
      "Fokus utama berada pada kemampuan mengomunikasikan dan mempertahankan substansi di hadapan audiens.",
  },
  {
    id: 7,
    name: "Studi Kasus",
    definisi:
      "Penilaian yang menempatkan mahasiswa pada suatu situasi kontekstual untuk mengukur kemampuan mengidentifikasi permasalahan, menganalisis informasi, menggunakan konsep yang relevan, mengevaluasi alternatif, serta merumuskan keputusan dan rekomendasi.",
    fokusPenilaian:
      "Kemampuan berpikir kritis, analisis sebab-akibat, pemanfaatan bukti, pengambilan keputusan, argumentasi, serta pemecahan masalah kontekstual.",
    capaian: [
      "mengidentifikasi",
      "menganalisis",
      "membandingkan",
      "mengevaluasi",
      "memutuskan",
      "merekomendasikan",
    ],
    bentukKegiatan: [
      "analisis kasus organisasi",
      "kasus bisnis",
      "kasus teknologi",
      "kasus pendidikan",
      "kasus kesehatan",
      "kasus sosial",
    ],
    instrumen: [
      "skenario kasus",
      "pertanyaan pemantik",
      "data pendukung",
      "rubrik analisis kasus",
    ],
    ciriPembeda:
      "Mahasiswa tidak sekadar menjawab pertanyaan, tetapi harus menganalisis suatu situasi kontekstual yang memiliki permasalahan tertentu dan menghasilkan keputusan yang dapat dipertanggungjawabkan.",
  },
  {
    id: 8,
    name: "Laporan",
    definisi:
      "Penilaian terhadap kemampuan mahasiswa mendokumentasikan proses, data, hasil, analisis, pembahasan, serta kesimpulan suatu kegiatan secara sistematis sesuai kaidah akademik dan profesional.",
    fokusPenilaian:
      "Kelengkapan struktur, ketepatan metode, kualitas data, ketepatan analisis, kedalaman pembahasan, konsistensi kesimpulan, kualitas sumber, serta ketepatan penulisan ilmiah.",
    capaian: [
      "mendokumentasikan",
      "menganalisis",
      "menginterpretasikan",
      "membahas",
      "menyimpulkan",
      "melaporkan",
    ],
    bentukKegiatan: [
      "laporan praktikum",
      "laporan observasi",
      "laporan penelitian",
      "laporan lapangan",
      "laporan proyek",
      "laporan hasil analisis",
    ],
    instrumen: [
      "sistematika laporan",
      "panduan penulisan",
      "rubrik laporan",
    ],
    ciriPembeda:
      "Bukti utama yang dinilai berbentuk dokumen sistematis yang merepresentasikan proses dan hasil kegiatan.",
  },
  {
    id: 9,
    name: "Proyek",
    definisi:
      "Penilaian terhadap kemampuan mahasiswa dalam merencanakan, mengelola, melaksanakan, memantau, serta menyelesaikan serangkaian kegiatan untuk menghasilkan solusi, karya, sistem, maupun luaran tertentu dalam periode tertentu.",
    fokusPenilaian:
      "Perencanaan, penerapan metode, manajemen pelaksanaan, pemecahan masalah, kolaborasi, kreativitas, pengujian, refleksi, serta keberhasilan mencapai tujuan proyek.",
    capaian: [
      "merancang",
      "mengembangkan",
      "mengintegrasikan",
      "mengimplementasikan",
      "menguji",
      "mengevaluasi",
      "menghasilkan",
    ],
    bentukKegiatan: [
      "pengembangan aplikasi",
      "penelitian mini",
      "pengembangan media",
      "penyusunan sistem",
      "perancangan layanan",
      "pengembangan prototype",
    ],
    instrumen: [
      "panduan proyek",
      "milestone",
      "logbook",
      "rubrik proses",
      "rubrik hasil proyek",
    ],
    ciriPembeda:
      "Terdiri atas serangkaian tahapan yang berlangsung dalam periode tertentu, mulai dari perencanaan sampai penyelesaian luaran.",
  },
  {
    id: 10,
    name: "Portofolio",
    definisi:
      "Penilaian terhadap kumpulan bukti karya mahasiswa yang dikumpulkan secara terencana dalam periode tertentu untuk menunjukkan pencapaian sekaligus perkembangan kompetensi.",
    fokusPenilaian:
      "Kualitas karya, perkembangan kemampuan, konsistensi pencapaian, kualitas revisi, kemampuan refleksi, serta keterkaitan setiap bukti dengan CPMK.",
    capaian: [
      "mengembangkan",
      "memperbaiki",
      "merefleksikan",
      "mengintegrasikan",
      "menunjukkan perkembangan kompetensi",
    ],
    bentukKegiatan: [
      "kumpulan tugas",
      "hasil revisi",
      "desain",
      "source code",
      "hasil analisis",
      "laporan",
      "dokumentasi kegiatan",
      "refleksi pembelajaran",
      "produk",
    ],
    instrumen: [
      "panduan portofolio",
      "daftar bukti yang dipersyaratkan",
      "rubrik portofolio",
      "lembar refleksi",
    ],
    ciriPembeda:
      "Penilaian didasarkan pada kumpulan bukti yang menunjukkan perkembangan mahasiswa dari waktu ke waktu, bukan satu hasil pada satu waktu tertentu.",
  },
  {
    id: 11,
    name: "Penilaian Produk",
    definisi:
      "Penilaian terhadap kualitas artefak, karya, media, sistem, prototype, maupun hasil nyata yang dihasilkan mahasiswa berdasarkan spesifikasi serta kriteria mutu yang telah ditetapkan.",
    fokusPenilaian:
      "Kualitas hasil akhir, fungsi, ketepatan spesifikasi, relevansi dengan kebutuhan, kualitas desain, kreativitas, usability, reliabilitas, estetika, serta kelayakan penerapan sesuai karakteristik bidang ilmu.",
    capaian: [
      "menghasilkan",
      "membuat",
      "membangun",
      "mengembangkan",
      "merancang",
      "menciptakan",
    ],
    bentukKegiatan: [
      "aplikasi",
      "website",
      "dashboard",
      "prototype",
      "media pembelajaran",
      "model",
      "poster ilmiah",
      "perangkat",
      "karya desain",
    ],
    instrumen: [
      "spesifikasi produk",
      "kriteria mutu",
      "rubrik produk",
      "checklist pengujian",
    ],
    ciriPembeda:
      "Fokus utama berada pada kualitas artefak akhir yang dihasilkan mahasiswa, bukan proses pengerjaannya.",
  },
];
