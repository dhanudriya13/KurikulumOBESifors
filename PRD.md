Absolutely. Based on the uploaded **Kurikulum 2024** document, I would design this as a **Curriculum/CPL Lookup System** rather than simply a document viewer.

The source document contains three especially useful datasets: the mapping between CPL and courses, the course-by-semester structure, and the CPL indicators for each course. For example, *Sistem Digital* is 3 SKS, offered in semester 1, and mapped to CPL 2.  

Below is a PRD you can hand directly to a code agent.

---

# Product Requirements Document

## Digital Curriculum & CPL Lookup System

**Document Version:** 1.0
**Product Type:** Web-based information system
**Primary Purpose:** Search and display relationships between Mata Kuliah, SKS, Semester, CPL, and Rumusan CPL.

---

# 1. Product Overview

The system is a web application that allows users to quickly search the university curriculum and understand the relationship between:

**Mata Kuliah → SKS → Semester → CPL → Rumusan CPL**

For example, when a user searches:

> **Sistem Digital**

the system should display:

```text
Sistem Digital

SKS
3

Semester
1

CPL
CPL 2

Rumusan CPL
Mampu menerapkan konsep dasar logika, struktur diskrit,
statistika, dan berbagai model bahasa pemrograman
untuk memecahkan berbagai permasalahan komputasi.
```

The source curriculum identifies *Sistem Digital* as a 3-SKS course in semester 1 and maps it to CPL 2.  

---

# 2. Problem Statement

The current curriculum information is stored in document/table form.

Users may need to answer questions such as:

* What CPL does a particular course support?
* How many SKS is a course?
* In which semester is it offered?
* What is the formulation of the corresponding CPL?
* Which courses support a particular CPL?
* What courses are offered in a particular semester?
* What is the relationship between courses and CPLs?

Searching through a PDF or spreadsheet is inconvenient.

The application should transform the curriculum into a **searchable and interconnected information system**.

---

# 3. Target Users

### Primary Users

**Students**

* Search course information.
* Understand which CPL a course contributes to.
* Explore courses related to a CPL.

**Lecturers**

* Quickly inspect CPL-course mappings.
* Check curriculum structure.
* Use the system during teaching, advising, or curriculum discussions.

**Program/Department Administrators**

* Maintain curriculum information.
* Verify course-CPL relationships.

### Secondary Users

**Curriculum/Accreditation Team**

* Quickly retrieve CPL mappings.
* Analyze curriculum coverage.

---

# 4. MVP Scope

The first version should focus on **search and visualization**, not complicated administration.

### MVP features

1. Search courses
2. Search CPLs
3. Course detail page
4. CPL detail page
5. Course → CPL relationship
6. CPL → Course relationship
7. Semester information
8. SKS information
9. Responsive UI
10. Curriculum overview

---

# 5. Core User Stories

### US-01 — Search Course

> As a user, I want to search for a course by name so that I can quickly find its curriculum information.

Example:

```text
Search: Sistem Digital
```

Result:

```text
Sistem Digital

3 SKS
Semester 1
CPL 2
```

---

### US-02 — View Course Details

> As a user, I want to see detailed information about a course so that I understand its curriculum relationship.

Course detail should show:

```text
Sistem Digital

Semester
1

SKS
3

CPL
CPL 2

Rumusan CPL
Mampu menerapkan konsep dasar logika, struktur diskrit,
statistika, dan berbagai model bahasa pemrograman
untuk memecahkan berbagai permasalahan komputasi.
```

---

### US-03 — Search CPL

Users should be able to search:

```text
CPL 2
```

and receive:

```text
CPL 2

Mampu menerapkan konsep dasar logika, struktur diskrit,
statistika, dan berbagai model bahasa pemrograman
untuk memecahkan berbagai permasalahan komputasi.

Courses

• Matematika Teknik
• Sistem Digital
• Pemrograman Dasar
• Sistem Operasi
• Statistik dan Probabilitas
• Matematika Diskrit
• Algoritma dan Struktur Data
• Pemrograman Berorientasi Objek
```

These course mappings are explicitly listed in the source document. 

---

# 6. Information Architecture

Recommended structure:

```text
Home
│
├── Search
│
├── Courses
│   ├── Course List
│   └── Course Detail
│
├── CPL
│   ├── CPL List
│   └── CPL Detail
│
├── Curriculum
│   ├── Semester 1
│   ├── Semester 2
│   ├── Semester 3
│   ├── Semester 4
│   ├── Semester 5
│   ├── Semester 6
│   ├── Semester 7
│   └── Semester 8
│
└── About
```

---

# 7. Homepage

The homepage should be extremely simple.

## Hero

```text
Kurikulum 2024

Explore Mata Kuliah & CPL

Cari mata kuliah, CPL, SKS, semester,
dan rumusan capaian pembelajaran.

[ 🔍 Cari mata kuliah atau CPL... ]
```

Under the search box:

```text
Popular Searches

Sistem Digital
Pemrograman Dasar
CPL 2
User Experience Design
```

---

# 8. Search Experience

The search bar is the primary interaction.

### Search input

Placeholder:

> `Cari mata kuliah atau CPL...`

Search should support:

* Exact course name
* Partial course name
* CPL number
* CPL keyword
* Course keyword

Examples:

```text
Sistem Digital
```

```text
Sistem
```

```text
CPL 2
```

```text
pemrograman
```

---

# 9. Search Results

Use card-based results.

Example:

```text
┌───────────────────────────────────────────┐
│ Sistem Digital                            │
│                                           │
│ Semester 1        3 SKS                   │
│                                           │
│ CPL 2                                      │
│ Mampu menerapkan konsep dasar logika,     │
│ struktur diskrit, statistika, dan ...     │
│                                           │
│                         Lihat Detail →     │
└───────────────────────────────────────────┘
```

For multiple results:

```text
Search Results
8 courses found

[Sistem Digital]
[Pemrograman Dasar]
[Sistem Operasi]
...
```

---

# 10. Course Detail Page

URL structure:

```text
/courses/sistem-digital
```

Page:

```text
← Kembali

Sistem Digital

┌────────────┐
│ 3          │
│ SKS        │
└────────────┘

┌────────────┐
│ Semester 1 │
└────────────┘

CPL

┌──────────────────────────────────────────┐
│ CPL 2                                     │
│                                           │
│ Mampu menerapkan konsep dasar logika,    │
│ struktur diskrit, statistika, dan        │
│ berbagai model bahasa pemrograman        │
│ untuk memecahkan berbagai permasalahan   │
│ komputasi.                                │
└──────────────────────────────────────────┘
```

If a course has multiple CPLs, display multiple CPL cards.

For example, *Statistik dan Probabilitas* is associated with both CPL 2 and CPL 3 in the curriculum table. 

---

# 11. CPL Detail Page

URL:

```text
/cpl/2
```

Display:

```text
CPL 2

Rumusan CPL

Mampu menerapkan konsep dasar logika, struktur diskrit,
statistika, dan berbagai model bahasa pemrograman
untuk memecahkan berbagai permasalahan komputasi.

Mata Kuliah Terkait

8 Mata Kuliah

┌────────────────────────────┐
│ Matematika Teknik          │
│ 3 SKS · Semester 1        │
└────────────────────────────┘

┌────────────────────────────┐
│ Sistem Digital             │
│ 3 SKS · Semester 1        │
└────────────────────────────┘

...
```

---

# 12. Curriculum Page

Create an overview by semester.

```text
Kurikulum 2024

Semester 1
────────────────────────

Bahasa Inggris             2 SKS
Pendidikan Pancasila       2 SKS
Matematika Teknik          3 SKS
Sistem Digital             3 SKS
Pemrograman Dasar          3 SKS
Sistem Operasi             3 SKS
Statistik dan Probabilitas 3 SKS
```

The source document identifies these courses and their semester/SKS values. 

Then:

```text
Semester 2
Semester 3
Semester 4
...
```

---

# 13. Data Model

The application should use a relational structure.

## Course

```typescript
Course {
  id: string
  code: string | null
  name: string
  semester: number
  sks: number
  cplIds: string[]
}
```

## CPL

```typescript
CPL {
  id: string
  code: string
  category: string | null
  formulation: string
}
```

Example:

```json
{
  "id": "cpl-2",
  "code": "CPL 2",
  "formulation": "Mampu menerapkan konsep dasar logika, struktur diskrit, statistika, dan berbagai model bahasa pemrograman untuk memecahkan berbagai permasalahan komputasi."
}
```

---

# 14. Relationship Model

Do **not** store the CPL formulation repeatedly inside every course.

Instead:

```text
Course
   │
   │ many-to-many
   ▼
CourseCPL
   │
   ▼
CPL
```

For example:

```text
Sistem Digital
      │
      ▼
   CourseCPL
      │
      ▼
    CPL 2
      │
      ▼
Rumusan CPL 2
```

This makes the system easier to maintain.

---

# 15. Recommended Database Schema

```sql
CREATE TABLE cpl (
    id INTEGER PRIMARY KEY,
    code VARCHAR(20) NOT NULL,
    formulation TEXT NOT NULL
);

CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    semester INTEGER NOT NULL,
    sks INTEGER NOT NULL
);

CREATE TABLE course_cpl (
    course_id INTEGER NOT NULL,
    cpl_id INTEGER NOT NULL,
    PRIMARY KEY (course_id, cpl_id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (cpl_id) REFERENCES cpl(id)
);
```

If the curriculum has course codes later, add:

```sql
code VARCHAR(50)
```

to the course table.

---

# 16. Initial Dataset

The code agent should seed the database using the uploaded **Kurikulum 2024** document.

Important mappings include:

```text
Sistem Digital
Semester: 1
SKS: 3
CPL: CPL 2
```

CPL 2 formulation:

> Mampu menerapkan konsep dasar logika, struktur diskrit, statistika, dan berbagai model bahasa pemrograman untuk memecahkan berbagai permasalahan komputasi. 

Other examples:

```text
Matematika Teknik
3 SKS
Semester 1
CPL 2

Pemrograman Dasar
3 SKS
Semester 1
CPL 2

Sistem Operasi
3 SKS
Semester 1
CPL 2

Statistik dan Probabilitas
3 SKS
Semester 1
CPL 2, CPL 3
```

The complete course list and CPL relationships should be taken from the source document rather than manually inferred. 

---

# 17. Search Algorithm

For MVP, use simple full-text/fuzzy search.

Search priority:

### Priority 1 — Exact course name

```text
"Sistem Digital"
```

### Priority 2 — Partial match

```text
"Sistem"
```

### Priority 3 — CPL code

```text
"CPL 2"
```

### Priority 4 — CPL formulation

For example:

```text
"pemrograman"
```

could return CPL 2 and related courses.

---

# 18. Filters

Search results should support:

### Semester

```text
All
1
2
3
4
5
6
7
8
```

### CPL

```text
All CPL
CPL 1
CPL 2
CPL 3
...
CPL 8
```

### SKS

```text
All
2 SKS
3 SKS
4 SKS
20 SKS
```

---

# 19. Course ↔ CPL Navigation

This is an important feature.

When viewing:

**Sistem Digital**

clicking:

> CPL 2

should navigate to:

```text
/cpl/2
```

Then users can see all courses associated with CPL 2.

Likewise, when viewing CPL 2:

> Sistem Digital

should link back to:

```text
/courses/sistem-digital
```

This creates a two-way knowledge structure.

---

# 20. UI Design Guideline

## Design Philosophy

The interface should feel like:

**Academic + Modern + Minimal + Search-focused**

Avoid making it look like an old university administration system.

---

# 21. Visual Style

### Overall style

* Minimal
* Clean
* Professional
* Academic
* Modern
* High readability
* Lots of whitespace
* Subtle borders
* Minimal shadows

Avoid:

* Heavy gradients
* Excessive animations
* Glassmorphism everywhere
* Excessive colors
* Dense tables as the primary interface

---

# 22. Color System

Recommended neutral palette:

```text
Background
#F8FAFC

Surface
#FFFFFF

Primary
#2563EB

Primary Dark
#1D4ED8

Text
#0F172A

Secondary Text
#64748B

Border
#E2E8F0

Success
#16A34A

Warning
#D97706
```

The primary color should mainly be used for:

* Buttons
* Links
* Active filters
* Search focus
* CPL badges

---

# 23. Typography

Recommended:

**Inter**

Hierarchy:

```text
H1
36–48px
Font weight: 700

H2
28–32px
Font weight: 700

H3
20–24px
Font weight: 600

Body
16px
Line height: 1.6

Small
14px
```

For long CPL formulations, prioritize readability:

```text
16–18px
line-height: 1.7
```

---

# 24. Navigation

Desktop:

```text
┌─────────────────────────────────────────────────────┐
│ KURIKULUM       Courses   CPL   Curriculum   About │
└─────────────────────────────────────────────────────┘
```

Logo/title:

```text
Kurikulum 2024
```

Mobile:

```text
Kurikulum 2024                    ☰
```

---

# 25. Cards

Course cards should use:

```text
border: 1px solid #E2E8F0
border-radius: 12px
padding: 20px
```

Example:

```text
Sistem Digital

3 SKS   ·   Semester 1

[CPL 2]

Mampu menerapkan konsep dasar logika,
struktur diskrit, statistika, dan...
```

---

# 26. CPL Badge

Use a compact badge:

```text
┌─────────┐
│ CPL 2   │
└─────────┘
```

If multiple:

```text
[CPL 2] [CPL 3]
```

The badge should be clickable.

---

# 27. Responsive Design

Must work on:

### Desktop

> 1200px+

### Tablet

> 768–1199px

### Mobile

> <768px

On mobile:

```text
Search
↓
Filters
↓
Results
```

Cards become single-column.

---

# 28. Accessibility

The system should follow basic WCAG principles.

Requirements:

* Keyboard-accessible search
* Visible focus states
* Proper semantic headings
* Sufficient text/background contrast
* Buttons must have accessible labels
* Do not rely solely on color
* Responsive text
* Screen-reader-friendly navigation

---

# 29. Loading States

Search should have a skeleton state:

```text
┌────────────────────────────┐
│ █████████████████          │
│ ███████                    │
│ ████████████               │
└────────────────────────────┘
```

Avoid a blank screen while loading.

---

# 30. Empty State

If no result:

```text
Tidak ditemukan

Kami tidak menemukan mata kuliah atau CPL
yang sesuai dengan pencarian:

"Sistem Akuntansi"

Coba gunakan kata kunci lain.
```

---

# 31. Error State

If database/API fails:

```text
Terjadi kesalahan

Data kurikulum tidak dapat dimuat.
Silakan coba lagi.

[ Coba Lagi ]
```

---

# 32. Suggested Tech Stack

For a modern implementation:

### Frontend

**Next.js + TypeScript**

### Styling

**Tailwind CSS**

### UI

**shadcn/ui**

### Database

For a small academic system:

**Supabase / PostgreSQL**

Alternative:

```text
SQLite
```

if the application is initially completely static.

### Deployment

Possible architecture:

```text
Next.js
   │
   ├── Vercel
   │
   └── Supabase
          │
          └── PostgreSQL
```

For the initial version, this is more than sufficient for the 50-course curriculum dataset. The source contains 50 numbered course entries. 

---

# 33. Admin System — Phase 2

Do **not** make administration part of the MVP unless necessary.

Phase 2 can add:

```text
/admin

Dashboard

Courses
CPL
Course-CPL Mapping

Import Curriculum
Export Data
```

Admin could CRUD:

```text
Course
- Name
- Code
- Semester
- SKS

CPL
- Code
- Formulation

Mapping
- Course
- CPL
```

---

# 34. Future Features

The data model should allow future expansion.

### Future Feature 1 — Search by CPL

Already included.

### Future Feature 2 — Curriculum Matrix

A visual matrix:

| Course         | CPL 1 | CPL 2 | CPL 3 | CPL 4 |
| -------------- | ----: | ----: | ----: | ----: |
| Sistem Digital |       |     ✓ |       |       |
| Statistik      |       |     ✓ |     ✓ |       |
| UX Design      |     ✓ |       |       |       |

The source itself provides this matrix structure for CPL 1–8. 

### Future Feature 3 — Curriculum Analytics

For example:

```text
Total Courses
50

Total SKS
...

CPL Coverage
CPL 1    █████████
CPL 2    ███████
CPL 3    █████
...
```

### Future Feature 4 — Course Dependency

Eventually:

```text
Matematika Teknik
       ↓
Sistem Digital
       ↓
Pemrograman Dasar
       ↓
Algoritma & Struktur Data
```

This should only be implemented if prerequisite data becomes available; the current document does not establish prerequisite relationships.

### Future Feature 5 — Export

Allow users/admins to export:

```text
PDF
Excel
CSV
```

---

# 35. Important Data Integrity Rules

The code agent **must not invent curriculum data**.

Use the uploaded document as the authoritative source for the initial dataset.

Important distinction:

### Course data

```text
Sistem Digital
Semester 1
3 SKS
```

### CPL data

```text
CPL 2
Mampu menerapkan konsep dasar...
```

### Relationship

```text
Sistem Digital → CPL 2
```

These should be stored separately.

If information isn't available in the source, use:

```text
Not available
```

rather than making assumptions.

---

# 36. Acceptance Criteria

## Search

* [ ] User can search by course name.
* [ ] User can search by partial course name.
* [ ] User can search by CPL.
* [ ] Search results appear without requiring a page reload.
* [ ] Empty search results have a clear empty state.

## Course

* [ ] Course name is displayed.
* [ ] SKS is displayed.
* [ ] Semester is displayed.
* [ ] Related CPL is displayed.
* [ ] CPL formulation is displayed.
* [ ] CPL is clickable.

## CPL

* [ ] CPL code is displayed.
* [ ] CPL formulation is displayed.
* [ ] Related courses are displayed.
* [ ] Courses are clickable.

## Curriculum

* [ ] Courses can be grouped by semester.
* [ ] SKS is displayed.
* [ ] CPL relationship is displayed.

## Responsive

* [ ] Desktop works.
* [ ] Tablet works.
* [ ] Mobile works.

---

# 37. Example End-to-End Flow

User opens:

```text
/
```

Sees:

```text
Kurikulum 2024

Explore Mata Kuliah & CPL

[ 🔍 Cari mata kuliah atau CPL... ]
```

User types:

```text
Sistem Digital
```

Application returns:

```text
1 result

Sistem Digital
3 SKS · Semester 1

CPL 2

Mampu menerapkan konsep dasar logika,
struktur diskrit, statistika, dan berbagai
model bahasa pemrograman...
```

User clicks the result.

URL:

```text
/courses/sistem-digital
```

Detail:

```text
Sistem Digital

3 SKS
Semester 1

CPL 2

Mampu menerapkan konsep dasar logika,
struktur diskrit, statistika, dan berbagai
model bahasa pemrograman untuk memecahkan
berbagai permasalahan komputasi.

[ Lihat CPL 2 → ]
```

User clicks CPL 2.

URL:

```text
/cpl/2
```

Result:

```text
CPL 2

Mampu menerapkan konsep dasar logika,
struktur diskrit, statistika, dan berbagai
model bahasa pemrograman untuk memecahkan
berbagai permasalahan komputasi.

Mata Kuliah Terkait

Matematika Teknik
Sistem Digital
Pemrograman Dasar
Sistem Operasi
Statistik dan Probabilitas
Matematika Diskrit
Algoritma dan Struktur Data
Pemrograman Berorientasi Objek
```

---

# 38. Recommended Project Structure

For a Next.js implementation:

```text
app/
├── page.tsx
├── courses/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── cpl/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
├── curriculum/
│   └── page.tsx
└── about/
    └── page.tsx

components/
├── SearchBar.tsx
├── CourseCard.tsx
├── CPLCard.tsx
├── CourseMetadata.tsx
├── CPLBadge.tsx
├── SemesterSection.tsx
├── Header.tsx
└── Footer.tsx

lib/
├── db.ts
├── search.ts
└── curriculum.ts

types/
└── curriculum.ts

data/
└── curriculum.json
```

---

# 39. Code Agent Prompt

You can give the following directly to your coding agent:

Build a modern responsive web application called **Kurikulum 2024 Explorer**.

## Objective

Create a searchable curriculum information system that allows users to search for Mata Kuliah and CPL and explore their relationships.

The primary user flow is:

Search → Mata Kuliah → SKS/Semester → CPL → Rumusan CPL

Example:

Search for "Sistem Digital".

The application should display:

* Mata Kuliah: Sistem Digital
* SKS: 3
* Semester: 1
* CPL: CPL 2
* Rumusan CPL:

"Mampu menerapkan konsep dasar logika, struktur diskrit, statistika, dan berbagai model bahasa pemrograman untuk memecahkan berbagai permasalahan komputasi."

## Source of Truth

Use the provided Kurikulum 2024 document as the authoritative source for the initial dataset.

Do not invent missing curriculum information.

The document contains 50 courses and their semester, SKS, and CPL mappings.

## Technology

Use:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* PostgreSQL/Supabase if a database is needed

The architecture should allow the application to start with static JSON data and later migrate to PostgreSQL without major frontend changes.

## Pages

Implement:

1. `/`

   * Homepage
   * Large search bar
   * Short description
   * Popular searches

2. `/courses`

   * Course listing
   * Search
   * Filter by semester
   * Filter by CPL
   * Filter by SKS

3. `/courses/[slug]`

   * Course name
   * SKS
   * Semester
   * Related CPL
   * CPL formulation
   * Links to CPL detail

4. `/cpl`

   * List of CPLs

5. `/cpl/[id]`

   * CPL code
   * CPL formulation
   * All related courses
   * Course cards linking back to course details

6. `/curriculum`

   * Display all courses grouped by semester

## Data Model

Use these entities:

Course:

* id
* code
* name
* semester
* sks

CPL:

* id
* code
* formulation

CourseCPL:

* course_id
* cpl_id

Course and CPL have a many-to-many relationship.

Do not duplicate CPL formulations inside course records.

## Search

Search must support:

* Exact course name
* Partial course name
* CPL code
* CPL formulation keywords

Examples:

"Sistem Digital"
"Sistem"
"CPL 2"
"pemrograman"

Search should be case-insensitive.

## UI

Design style:

* Modern
* Minimal
* Academic
* Professional
* Search-focused
* Responsive

Use generous whitespace.

Use cards with subtle borders and rounded corners.

Avoid excessive shadows, gradients, animations, and decorative elements.

Recommended typography:

Inter.

Recommended colors:

Background: #F8FAFC
Surface: #FFFFFF
Primary: #2563EB
Primary Dark: #1D4ED8
Text: #0F172A
Secondary Text: #64748B
Border: #E2E8F0

## Homepage

Hero section:

"Kurikulum 2024"

"Explore Mata Kuliah & CPL"

" Cari mata kuliah, CPL, SKS, semester, dan rumusan capaian pembelajaran."

Large search field:

"Cari mata kuliah atau CPL..."

## Course Card

Display:

Course name

3 SKS · Semester 1

[CPL 2]

Short CPL formulation preview.

Add:

"Lihat Detail →"

## Course Detail

Show:

Course name

SKS

Semester

Related CPL

Full CPL formulation

CPL should be clickable.

## CPL Detail

Show:

CPL code

Full formulation

Number of related courses

Course cards

## Curriculum

Group courses by semester:

Semester 1
Semester 2
...
Semester 8

Each course should display:

Name
SKS
CPL badges

## Responsive Behavior

Desktop:

* Multi-column card layout

Tablet:

* Reduced columns

Mobile:

* Single-column layout
* Full-width search
* Collapsible filters

## Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible labels
* Good color contrast
* Responsive text
* Screen-reader-friendly controls

## Loading

Use skeleton loading states for course/CPL lists.

## Empty State

When no search results exist:

" Tidak ditemukan"

" Kami tidak menemukan mata kuliah atau CPL yang sesuai dengan pencarian Anda."

## Error State

Display:

"Terjadi kesalahan"

"Data kurikulum tidak dapat dimuat."

Button:

"Coba Lagi"

## Important

The first priority is correctness of the curriculum data and the search experience.

Do not build an admin panel yet.

Do not add authentication yet.

Do not add analytics yet.

Do not add prerequisite relationships because they are not provided in the source curriculum document.

Structure the application so these can be added later.

## Future-ready architecture

Keep components reusable and separate:

* SearchBar
* CourseCard
* CPLCard
* CPLBadge
* CourseMetadata
* SemesterSection
* Header
* Footer

Keep curriculum data separate from UI components.

Create TypeScript interfaces for Course, CPL, and CourseCPL.

The final application should feel like a polished academic knowledge explorer rather than an administrative dashboard.

---

## One design decision I strongly recommend

I would **not make the homepage a traditional table**.

The interesting part of your system is the relationship:

**“If I search for a course, what CPL does it contribute to, and what does that CPL mean?”**

So the primary interface should be **search + cards + interconnected detail pages**, while the traditional curriculum matrix can remain as a secondary "Curriculum" view.

That will make the system much more useful than simply converting the PDF into a searchable table.
