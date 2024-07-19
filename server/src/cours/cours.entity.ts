export enum CoursStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class Cours {
  id: string;
  title: string;
  description: string;
  status: CoursStatus;
}

// const courses = new Courses();
