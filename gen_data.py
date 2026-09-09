import json

cpls = [
    ("1", "CPL 1", None,
     "Mampu mengidentifikasi, memformulasikan, mengembangkan, dan memecahkan permasalahan kebutuhan sistem informasi suatu organisasi, termasuk aspek keamanan dan kerentanan sistem."),
    ("2", "CPL 2", None,
     "Mampu menerapkan konsep dasar logika, struktur diskrit, statistika, dan berbagai model bahasa pemrograman untuk memecahkan berbagai permasalahan komputasi."),
    ("3", "CPL 3", None,
     "Mampu menerapkan konsep pengelolaan proyek dalam mengembangkan sistem informasi, konsep manajemen sistem informasi, serta teknik analitik data dan intelegensi bisnis yang mampu mendukung pengambilan keputusan organisasi maupun enterprise."),
    ("4", "CPL 4", "MKWU",
     "Mampu menginternalisasi nilai-nilai falsafah tri hita karana, keagamaan, Pancasila, dan kewarganegaraan, serta berkomunikasi secara efektif dalam kehidupan akademik dan bermasyarakat."),
    ("5", "CPL 5", None,
     "Mampu mengintegrasikan kecakapan belajar dan berinovasi, penguasaan teknologi dan informasi, pengembangan karir, dan kecakapan hidup untuk menjadi pembelajar sepanjang hayat."),
    ("6", "CPL 6", None,
     "Mampu menerapkan pemikiran logis, kritis, sistematis, dan inovatif dalam konteks pengembangan atau implementasi ilmu pengetahuan dan teknologi yang memperhatikan dan menerapkan nilai humaniora yang sesuai dengan bidang keahliannya."),
    ("7", "CPL 7", None,
     "Mampu mengintegrasikan konsep algoritmik dan matematika komputasi ke dalam berbagai bahasa pemrograman, disertai penerapan metodologi evaluasi dan standar keamanan, untuk membangun sistem informasi pada platform tertentu yang mampu menggali pengetahuan bermakna sebagai dasar pengambilan keputusan dan solusi bisnis bagi organisasi."),
    ("8", "CPL 8", None,
     "Mampu menganalisis kualitas sistem informasi, teknik investasi teknologi informasi, tata kelola TI, pengendalian, serta auditing yang selaras dengan strategi organisasi, dan menerapkan arsitektur SI/TI, masterplan SI/TI, serta manajemen layanan SI/TI dalam bisnis maupun organisasi mengikuti tren masa depan dan prinsip ramah lingkungan."),
]

# (name, semester, sks, [cpl numbers as strings])
courses = [
    ("Bahasa Inggris", 1, 2, ["4"]),
    ("Pendidikan Pancasila", 1, 2, ["4"]),
    ("Matematika Teknik", 1, 3, ["2"]),
    ("Sistem Digital", 1, 3, ["2"]),
    ("Pemrograman Dasar", 1, 3, ["2"]),
    ("Sistem Operasi", 1, 3, ["2"]),
    ("Statistik dan Probabilitas", 1, 3, ["2", "3"]),
    ("Pendidikan Agama", 2, 2, ["4"]),
    ("Bahasa Indonesia", 2, 2, ["4"]),
    ("Matematika Diskrit", 2, 3, ["2"]),
    ("Jaringan Komputer", 2, 3, ["1"]),
    ("Algoritma dan Struktur Data", 2, 3, ["2", "7"]),
    ("Rekayasa Perangkat Lunak", 2, 3, ["1"]),
    ("Perancangan Basis Data", 2, 3, ["1"]),
    ("Pendidikan Kewarganegaraan", 3, 2, ["4"]),
    ("Manajemen Basis Data", 3, 3, ["1", "8"]),
    ("Pemrograman Berorientasi Objek", 3, 3, ["2", "7"]),
    ("User Experience Design", 3, 3, ["1", "6"]),
    ("Pemrograman Web", 3, 3, ["7"]),
    ("Jaringan Enterprise", 3, 3, ["1"]),
    ("Sistem Informasi Enterprise", 3, 3, ["1", "3"]),
    ("THK", 4, 2, ["4"]),
    ("Green Information System", 4, 3, ["8"]),
    ("Pemrograman Mobile", 4, 3, ["7"]),
    ("Manajemen Proses Bisnis", 4, 3, ["3"]),
    ("Pemrograman Web Berbasis Framework", 4, 3, ["7"]),
    ("Manajemen Investasi SI/TI", 4, 3, ["8"]),
    ("Keamanan Sistem Informasi", 4, 3, ["1", "7"]),
    ("Lintas Prodi 1", 5, 3, ["5"]),
    ("Lintas Prodi 2", 5, 3, ["5"]),
    ("Lintas Prodi 3", 5, 3, ["5"]),
    ("Lintas Prodi 4", 5, 3, ["5"]),
    ("Tata Kelola dan Audit TI", 5, 3, ["8"]),
    ("Manajemen Layanan TI", 5, 3, ["8"]),
    ("Digital Innovation dan Entrepreneurship", 5, 3, ["5"]),
    ("Metode Penelitian SI", 6, 3, ["6"]),
    ("Seminar Proposal", 6, 2, ["6"]),
    ("Testing dan Implementasi SI", 6, 3, ["1", "8"]),
    ("Data Mining", 6, 3, ["3", "7"]),
    ("Manajemen Proyek TI", 6, 3, ["3"]),
    ("Arsitektur Enterprise", 6, 3, ["8"]),
    ("Perencanaan Strategik SI/TI", 6, 3, ["8"]),
    ("Sistem Pendukung Keputusan", 6, 3, ["3", "7"]),
    ("Business Intelligence", 6, 3, ["3", "7"]),
    ("Standar Keamanan Sistem Informasi", 6, 3, ["7", "8"]),
    ("Security Operation Center", 6, 3, ["1"]),
    ("Magang", 7, 20, ["1", "5"]),
    ("Seminar Hasil Penelitian", 8, 4, ["6"]),
    ("Ujian Skripsi", 8, 4, ["6"]),
    ("Etika Bisnis dan Profesi SI", 8, 2, ["6"]),
]

cpl_objs = [{"id": c, "code": code, "category": cat, "formulation": f} for c, code, cat, f in cpls]

course_objs = []
course_cpl = []
for i, (name, sem, sks, cpl_nums) in enumerate(courses, start=1):
    cid = str(i)
    course_objs.append({
        "id": cid,
        "code": None,
        "name": name,
        "semester": sem,
        "sks": sks,
        "cplIds": cpl_nums,
    })
    for c in cpl_nums:
        course_cpl.append({"courseId": cid, "cplId": c})

data = {
    "cpls": cpl_objs,
    "courses": course_objs,
    "courseCpl": course_cpl,
}

with open(r"d:/kurikulumobe/data/curriculum.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("courses:", len(course_objs), "cpls:", len(cpl_objs), "mappings:", len(course_cpl))
