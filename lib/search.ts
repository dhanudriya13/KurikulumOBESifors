import type { Course, CPL } from "@/types/curriculum";
import { getCourses, getCpls, getCplsForCourse } from "@/lib/curriculum";

export interface SearchResults {
  courses: Course[];
  cpls: CPL[];
}

/**
 * Case-insensitive curriculum search with a simple priority ordering:
 *   1. exact course name
 *   2. partial course name
 *   3. CPL code (e.g. "CPL 2" or "2")
 *   4. CPL formulation keyword
 */
export function searchCurriculum(query: string): SearchResults {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { courses: [], cpls: [] };
  }

  const courses = getCourses();
  const cpls = getCpls();

  const courseScores = new Map<string, number>();
  const cplScores = new Map<string, number>();

  for (const course of courses) {
    const name = course.name.toLowerCase();
    let score = 0;
    if (name === q) {
      score = 100;
    } else if (name.startsWith(q)) {
      score = 85;
    } else if (name.includes(q)) {
      score = 70;
    } else {
      // Match against related CPL formulations for keyword search.
      const cplText = getCplsForCourse(course.id)
        .map((c) => `${c.code} ${c.formulation}`.toLowerCase())
        .join(" ");
      if (cplText.includes(q)) {
        score = 50;
      }
    }
    if (score > 0) courseScores.set(course.id, score);
  }

  for (const cpl of cpls) {
    const code = cpl.code.toLowerCase();
    const formulation = cpl.formulation.toLowerCase();
    let score = 0;
    if (code === q || q === cpl.id || code.replace(/\s+/g, "") === q.replace(/\s+/g, "")) {
      score = 95;
    } else if (code.includes(q)) {
      score = 80;
    } else if (formulation.includes(q)) {
      score = 55;
    }
    if (score > 0) cplScores.set(cpl.id, score);
  }

  const matchedCourses = courses
    .filter((c) => courseScores.has(c.id))
    .sort((a, b) => (courseScores.get(b.id)! - courseScores.get(a.id)!));

  const matchedCpls = cpls
    .filter((c) => cplScores.has(c.id))
    .sort((a, b) => (cplScores.get(b.id)! - cplScores.get(a.id)!));

  return { courses: matchedCourses, cpls: matchedCpls };
}
