export interface MetodePembelajaran {
  id: number;
  name: string;
  description: string[];
  langkah?: string[];
}

export const metodePembelajaran: MetodePembelajaran[] = [
  {
    id: 1,
    name: "Project-Based Learning",
    description: [
      "Pembelajaran Berbasis Proyek (Project-Based Learning) adalah metode pembelajaran yang menggunakan proyek/kegiatan sebagai media. Peserta didik melakukan eksplorasi, penilaian, interpretasi, sintesis, dan informasi untuk menghasilkan berbagai bentuk hasil belajar. Pembelajaran Berbasis Proyek merupakan metode belajar yang menggunakan masalah sebagai langkah awal dalam mengumpulkan dan mengintegrasikan pengetahuan baru berdasarkan pengalamannya dalam beraktifitas secara nyata (Kemendikbud, 2013).",
      "Project-Based Learning atau pembelajaran berbasis proyek merupakan model pembelajaran yang berpusat pada siswa untuk melakukan suatu investigasi yang mendalam terhadap suatu topik. Siswa secara konstruktif melakukan pendalaman pembelajaran dengan pendekatan berbasis riset terhadap permasalahan dan pertanyaan yang berbobot, nyata, dan relevan (Grant, 2002).",
      "Langkah-langkah Project-Based Learning yang dikembangkan oleh The George Lucas Educational Foundation (2005) terdiri dari:",
    ],
    langkah: [
      "Penentuan Pertanyaan Mendasar (Start With the Essential Question)",
      "Mendesain Perencanaan Proyek (Design a Plan for the Project)",
      "Menyusun Jadwal (Create a Schedule)",
      "Memonitor siswa dan kemajuan proyek (Monitor the Students and the Progress of the Project)",
      "Menguji Hasil (Assess the Outcome)",
      "Mengevaluasi Pengalaman (Evaluate the Experience)",
    ],
  },
  {
    id: 2,
    name: "Problem-Based Learning / Case-Based Learning",
    description: [
      "Problem-Based Learning adalah metodologi pembelajaran yang mendorong mahasiswa untuk bertanggung jawab atas pembelajaran mahasiswa sendiri untuk mengembangkan keterampilan dengan pengetahuan yang relevan. Direktorat Jenderal Pendidikan Tinggi juga memberikan definisi Problem-Based Learning sebagai berikut. Problem-Based Learning adalah belajar dengan memanfaatkan masalah dan mahasiswa harus melakukan pencarian/penggalian informasi (inquiry) untuk dapat memecahkan masalah tersebut.",
      "Pada umumnya, terdapat empat langkah yang perlu dilakukan mahasiswa dalam Problem-Based Learning, yaitu:",
    ],
    langkah: [
      "Menerima masalah yang relevan dengan salah satu/beberapa kompetensi yang dituntut mata kuliah, dari dosennya;",
      "Melakukan pencarian data dan informasi yang relevan untuk memecahkan masalah;",
      "Menata data dan mengaitkan data dengan masalah; dan",
      "Menganalisis strategi pemecahan masalah.",
    ],
  },
  {
    id: 3,
    name: "Collaborative Learning",
    description: [
      "Collaborative Learning adalah metode pembelajaran yang menekankan kerja sama antara siswa untuk mencapai tujuan belajar bersama. Dalam pendekatan ini, siswa bekerja dalam kelompok kecil untuk menyelesaikan tugas, proyek, atau memecahkan masalah, di mana setiap anggota kelompok berperan aktif dalam proses belajar. Kolaborasi ini memungkinkan siswa untuk saling berbagi pengetahuan, ide, dan keterampilan, sehingga mereka dapat belajar dari pengalaman dan perspektif satu sama lain. Melalui diskusi, proyek kelompok, atau debat, siswa diajak untuk mengembangkan kemampuan komunikasi, negosiasi, serta pemecahan masalah bersama. Salah satu keunggulan dari Collaborative Learning adalah siswa diajak untuk lebih bertanggung jawab atas proses dan hasil belajarnya sendiri sekaligus meningkatkan keterampilan interpersonal dan kolaboratif yang penting dalam kehidupan nyata.",
    ],
  },
  {
    id: 4,
    name: "Experiential Learning",
    description: [
      "Experiential Learning adalah pendekatan pembelajaran yang menekankan pentingnya belajar dari pengalaman langsung. Didasarkan pada teori yang dikembangkan oleh David Kolb (1984), Experiential Learning mengacu pada siklus pembelajaran yang terdiri dari empat tahap: pengalaman konkret (Concrete Experience), refleksi aktif terhadap pengalaman (Reflective Observation), konseptualisasi abstrak (Abstract Conceptualization), dan pengujian aktif (Active Experimentation). Melalui pengalaman langsung, seperti kunjungan lapangan, magang, simulasi, atau studi kasus, siswa diajak untuk memahami teori dalam konteks dunia nyata dan menerapkannya secara praktis. Pendekatan ini tidak hanya meningkatkan keterampilan kognitif siswa, tetapi juga memperkaya pengalaman emosional dan sosial mereka, karena mereka langsung berhadapan dengan situasi atau masalah yang relevan dengan dunia nyata. Experiential Learning membantu siswa untuk mengembangkan keterampilan berpikir kritis, pengambilan keputusan, dan pemecahan masalah, serta memungkinkan mereka untuk lebih memahami hubungan antara teori dan praktik.",
    ],
  },
];
