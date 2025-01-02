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

export interface TypeCanal {
  avatar: string;
  name: string;
  plataform: string;
}

export interface TypeCardCourse {
  id: number;
  front: string;
  title: string;
  description: string;
  canal: TypeCanal;
  class: TypeClass[];
}