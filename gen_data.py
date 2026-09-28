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

# (name, code, semester, sks, [cpl numbers as strings])
# Codes from extra/course_code.md (Kode Mata Kuliah Kurikulum 2024).
# Lintas Prodi courses carry no formal code ("-" in the source sheet -> None).
courses = [
    ("Bahasa Inggris", "SIFS124101", 1, 2, ["4"]),
    ("Pendidikan Pancasila", "SIFS124102", 1, 2, ["4"]),
    ("Matematika Teknik", "SIFS124103", 1, 3, ["2"]),
    ("Sistem Digital", "SIFS124104", 1, 3, ["2"]),
    ("Pemrograman Dasar", "SIFS124105", 1, 3, ["2"]),
    ("Sistem Operasi", "SIFS124106", 1, 3, ["2"]),
    ("Statistik dan Probabilitas", "SIFS124107", 1, 3, ["2", "3"]),
    ("Pendidikan Agama Hindu", "SIFS124201", 2, 2, ["4"]),
    ("Pendidikan Agama Islam", "SIFS124202", 2, 2, ["4"]),
    ("Pendidikan Agama Kristen Protestan", "SIFS124203", 2, 2, ["4"]),
    ("Pendidikan Agama Kristen Katolik", "SIFS124204", 2, 2, ["4"]),
    ("Pendidikan Agama Buddha", "SIFS124205", 2, 2, ["4"]),
    ("Pendidikan Agama Konghucu", "SIFS124206", 2, 2, ["4"]),
    ("Bahasa Indonesia", "SIFS124207", 2, 2, ["4"]),
    ("Matematika Diskrit", "SIFS124208", 2, 3, ["2"]),
    ("Jaringan Komputer", "SIFS124209", 2, 3, ["1"]),
    ("Algoritma dan Struktur Data", "SIFS124210", 2, 3, ["2", "7"]),
    ("Rekayasa Perangkat Lunak", "SIFS124211", 2, 3, ["1"]),
    ("Perancangan Basis Data", "SIFS124212", 2, 3, ["1"]),
    ("Pendidikan Kewarganegaraan", "SIFS124301", 3, 2, ["4"]),
    ("Manajemen Basis Data", "SIFS124302", 3, 3, ["1", "8"]),
    ("Pemrograman Berorientasi Objek", "SIFS124303", 3, 3, ["2", "7"]),
    ("User Experience Design", "SIFS124304", 3, 3, ["1", "6"]),
    ("Pemrograman Web", "SIFS124305", 3, 3, ["7"]),
    ("Jaringan Enterprise", "SIFS124306", 3, 3, ["1"]),
    ("Sistem Informasi Enterprise", "SIFS124307", 3, 3, ["1", "3"]),
    ("THK", "SIFS124401", 4, 2, ["4"]),
    ("Green Information System", "SIFS124402", 4, 3, ["8"]),
    ("Pemrograman Mobile", "SIFS124403", 4, 3, ["7"]),
    ("Manajemen Proses Bisnis", "SIFS124404", 4, 3, ["3"]),
    ("Pemrograman Web Berbasis Framework", "SIFS124405", 4, 3, ["7"]),
    ("Manajemen Investasi SI/TI", "SIFS124406", 4, 3, ["8"]),
    ("Keamanan Sistem Informasi", "SIFS124407", 4, 3, ["1", "7"]),
    ("Lintas Prodi 1", None, 5, 3, ["5"]),
    ("Lintas Prodi 2", None, 5, 3, ["5"]),
    ("Lintas Prodi 3", None, 5, 3, ["5"]),
    ("Lintas Prodi 4", None, 5, 3, ["5"]),
    ("Tata Kelola dan Audit TI", "SIFS124501", 5, 3, ["8"]),
    ("Manajemen Layanan TI", "SIFS124502", 5, 3, ["8"]),
    ("Digital Innovation dan Entrepreneurship", "SIFS124503", 5, 3, ["5"]),
    ("Metode Penelitian SI", "SIFS124601", 6, 3, ["6"]),
    ("Seminar Proposal", "SIFS124602", 6, 2, ["6"]),
    ("Testing dan Implementasi SI", "SIFS124603", 6, 3, ["1", "8"]),
    ("Data Mining", "SIFS124604", 6, 3, ["3", "7"]),
    ("Manajemen Proyek TI", "SIFS124605", 6, 3, ["3"]),
    ("Arsitektur Enterprise", "SIFS124606", 6, 3, ["8"]),
    ("Perencanaan Strategik SI/TI", "SIFS124607", 6, 3, ["8"]),
    ("Sistem Pendukung Keputusan", "SIFS124608", 6, 3, ["3", "7"]),
    ("Business Intelligence", "SIFS124609", 6, 3, ["3", "7"]),
    ("Standar Keamanan Sistem Informasi", "SIFS124610", 6, 3, ["7", "8"]),
    ("Security Operation Center", "SIFS124611", 6, 3, ["1"]),
    ("Magang", "SIFS124701", 7, 20, ["1", "5"]),
    ("Seminar Hasil Penelitian", "SIFS124801", 8, 4, ["6"]),
    ("Ujian Skripsi", "SIFS124802", 8, 4, ["6"]),
    ("Etika Bisnis dan Profesi SI", "SIFS124803", 8, 2, ["6"]),
]

cpl_objs = [{"id": c, "code": code, "category": cat, "formulation": f} for c, code, cat, f in cpls]

course_objs = []
course_cpl = []
for i, (name, code, sem, sks, cpl_nums) in enumerate(courses, start=1):
    cid = str(i)
    course_objs.append({
        "id": cid,
        "code": code,
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
