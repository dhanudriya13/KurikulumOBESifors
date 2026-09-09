export interface CPL {
  id: string;
  code: string;
  category: string | null;
  formulation: string;
}

export interface Course {
  id: string;
  code: string | null;
  name: string;
  semester: number;
  sks: number;
  cplIds: string[];
}

export interface CourseCPL {
  courseId: string;
  cplId: string;
}

export interface CurriculumData {
  cpls: CPL[];
  courses: Course[];
  courseCpl: CourseCPL[];
}
