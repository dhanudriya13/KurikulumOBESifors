import type { Course, CPL } from "@/types/curriculum";

export interface BilingualText {
  id: string;
  en: string;
}

export interface WeightedBilingualText extends BilingualText {
  weight: number;
}

export interface CourseLearning {
  name: BilingualText;
  cpl: BilingualText;
  cpmk: BilingualText;
  subCpmk: WeightedBilingualText[];
  assessment: BilingualText[];
  method: BilingualText[];
}

const englishNames: Record<string, string> = {
  "Bahasa Inggris": "English Language",
  "Pendidikan Pancasila": "Pancasila Education",
  "Matematika Teknik": "Engineering Mathematics",
  "Sistem Digital": "Digital Systems",
  "Pemrograman Dasar": "Programming Fundamentals",
  "Sistem Operasi": "Operating Systems",
  "Statistik dan Probabilitas": "Statistics and Probability",
  "Pendidikan Agama Hindu": "Hindu Religious Education",
  "Pendidikan Agama Islam": "Islamic Religious Education",
  "Pendidikan Agama Kristen Protestan": "Protestant Christian Religious Education",
  "Pendidikan Agama Kristen Katolik": "Catholic Christian Religious Education",
  "Pendidikan Agama Buddha": "Buddhist Religious Education",
  "Pendidikan Agama Konghucu": "Confucian Religious Education",
  "Bahasa Indonesia": "Indonesian Language",
  "Matematika Diskrit": "Discrete Mathematics",
  "Jaringan Komputer": "Computer Networks",
  "Algoritma dan Struktur Data": "Algorithms and Data Structures",
  "Rekayasa Perangkat Lunak": "Software Engineering",
  "Perancangan Basis Data": "Database Design",
  "Pendidikan Kewarganegaraan": "Civic Education",
  "Manajemen Basis Data": "Database Management",
  "Pemrograman Berorientasi Objek": "Object-Oriented Programming",
  "Pemrograman Web": "Web Programming",
  "Jaringan Enterprise": "Enterprise Networking",
  "Sistem Informasi Enterprise": "Enterprise Information Systems",
  THK: "Tri Hita Karana",
  "Green Information System": "Green Information Systems",
  "Pemrograman Mobile": "Mobile Programming",
  "Manajemen Proses Bisnis": "Business Process Management",
  "Pemrograman Web Berbasis Framework": "Framework-Based Web Programming",
  "Manajemen Investasi SI/TI": "IS/IT Investment Management",
  "Keamanan Sistem Informasi": "Information Systems Security",
  "Lintas Prodi 1": "Cross-Study Program 1",
  "Lintas Prodi 2": "Cross-Study Program 2",
  "Lintas Prodi 3": "Cross-Study Program 3",
  "Lintas Prodi 4": "Cross-Study Program 4",
  "Tata Kelola dan Audit TI": "IT Governance and Auditing",
  "Manajemen Layanan TI": "IT Service Management",
  "Digital Innovation dan Entrepreneurship": "Digital Innovation and Entrepreneurship",
  "Metode Penelitian SI": "IS Research Methods",
  "Seminar Proposal": "Research Proposal Seminar",
  "Testing dan Implementasi SI": "IS Testing and Implementation",
  "Data Mining": "Data Mining",
  "Manajemen Proyek TI": "IT Project Management",
  "Arsitektur Enterprise": "Enterprise Architecture",
  "Perencanaan Strategik SI/TI": "IS/IT Strategic Planning",
  "Sistem Pendukung Keputusan": "Decision Support Systems",
  "Business Intelligence": "Business Intelligence",
  "Standar Keamanan Sistem Informasi": "Information Systems Security Standards",
  "Security Operation Center": "Security Operations Center",
  Magang: "Internship",
  "Seminar Hasil Penelitian": "Research Results Seminar",
  "Ujian Skripsi": "Undergraduate Thesis Defense",
  "Etika Bisnis dan Profesi SI": "IS Business and Professional Ethics",
};

const cplEnglish: Record<string, string> = {
  "1": "Capable of identifying, formulating, developing, and resolving organizational information system requirements, including system security and vulnerabilities.",
  "2": "Capable of applying logic, discrete structures, statistics, and programming language models to solve computational problems.",
  "3": "Capable of applying project and information systems management, data analytics, and business intelligence to support organizational decision-making.",
  "4": "Capable of internalizing Tri Hita Karana, religious, Pancasila, and civic values and communicating effectively in academic and social life.",
  "5": "Capable of integrating learning and innovation, information technology, career development, and life skills for lifelong learning.",
  "6": "Capable of applying logical, critical, systematic, and innovative thinking while observing relevant humanistic values.",
  "7": "Capable of integrating algorithms and computational mathematics with programming, evaluation methods, and security standards to build information systems.",
  "8": "Capable of analyzing information system quality, IT investment, governance, controls, and auditing, and applying IS/IT architecture and services sustainably.",
};

function text(id: string, en: string): BilingualText {
  return { id, en };
}

function weightedText(
  id: string,
  en: string,
  weight: number,
): WeightedBilingualText {
  return { id, en, weight };
}

export function getCourseLearning(course: Course, cpls: CPL[]): CourseLearning {
  const cplCodes = cpls.map((cpl) => cpl.code).join(", ");
  const cplTranslation = cpls
    .map((cpl) => cplEnglish[cpl.id] ?? cpl.formulation)
    .join(" ");

  return {
    name: text(course.name, englishNames[course.name] ?? course.name),
    cpl: text(cplCodes || "Belum ditetapkan", cplTranslation || "Not specified"),
    cpmk: text(
      `Mampu menerapkan pengetahuan dan keterampilan ${course.name} untuk mendukung capaian pembelajaran mata kuliah.`,
      `Able to apply ${englishNames[course.name] ?? course.name} knowledge and skills to support the course learning outcomes.`,
    ),
    subCpmk: [
      weightedText(
        `Menjelaskan konsep dan prinsip utama ${course.name}.`,
        `Explain the key concepts and principles of ${englishNames[course.name] ?? course.name}.`,
        30,
      ),
      weightedText(
        `Menerapkan ${course.name} pada permasalahan yang relevan.`,
        `Apply ${englishNames[course.name] ?? course.name} to relevant problems.`,
        35,
      ),
      weightedText(
        `Mengevaluasi hasil penerapan ${course.name} secara etis dan sistematis.`,
        `Evaluate the application of ${englishNames[course.name] ?? course.name} ethically and systematically.`,
        35,
      ),
    ],
    assessment: [
      text("Tes atau kuis", "Tests or quizzes"),
      text("Tugas dan studi kasus", "Assignments and case studies"),
      text("Proyek atau presentasi", "Projects or presentations"),
    ],
    method: [
      text("Pembelajaran berbasis masalah", "Problem-based learning"),
      text("Pembelajaran berbasis proyek", "Project-based learning"),
      text("Diskusi dan praktikum", "Discussion and practicum"),
    ],
  };
}