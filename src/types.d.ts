export interface TypeInfoUser {
    avatar: string;
    nombre: string;
}

export interface TypeClass{
    id: string;
    title: string;
    url: string;
}

export interface TypeCourse {
  id: number;
  front: string;
  title: string;
  description: string;
}

export interface TypeCreator {
  id: string;
  avatar: string;
  name: string;
  description: string;
  platform: string[];
  history: string;
  achievements: string[];
  contributions: string;
}
