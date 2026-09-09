import rawData from "@/data/curriculum.json";
import type {
  Course,
  CPL,
  CurriculumData,
} from "@/types/curriculum";

const data = rawData as CurriculumData;

/** Normalize a course name into a URL-safe slug. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCurriculumData(): CurriculumData {
  return data;
}

export function getCourses(): Course[] {
  return data.courses;
}

export function getCpls(): CPL[] {
  return data.cpls;
}

export function getCourseById(id: string): Course | undefined {
  return data.courses.find((c) => c.id === id);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return data.courses.find((c) => slugify(c.name) === slug);
}

export function getCplById(id: string): CPL | undefined {
  return data.cpls.find((c) => c.id === id);
}

export function getCplByCode(code: string): CPL | undefined {
  return data.cpls.find((c) => c.code.toLowerCase() === code.toLowerCase());
}

export function getCplsForCourse(courseId: string): CPL[] {
  const course = getCourseById(courseId);
  if (!course) return [];
  return course.cplIds
    .map((id) => getCplById(id))
    .filter((c): c is CPL => Boolean(c));
}

export function getCoursesForCpl(cplId: string): Course[] {
  return data.courses.filter((c) => c.cplIds.includes(cplId));
}

export function getCoursesBySemester(semester: number): Course[] {
  return data.courses.filter((c) => c.semester === semester);
}

export function getSemesters(): number[] {
  const semesters = new Set(data.courses.map((c) => c.semester));
  return Array.from(semesters).sort((a, b) => a - b);
}

export function getSksOptions(): number[] {
  const values = new Set(data.courses.map((c) => c.sks));
  return Array.from(values).sort((a, b) => a - b);
}

export function getTotalSks(): number {
  return data.courses.reduce((sum, c) => sum + c.sks, 0);
}
