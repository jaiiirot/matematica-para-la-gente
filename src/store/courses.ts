import { create } from "zustand";
import { TypeCourse } from "../types";
// https://www.youtube.com/watch?v=p2wF2wRjcN0&t=110s
interface State {
  course: TypeCourse[];
  currentCourse: number;
  fetchCourse: (id: number) => Promise<void>;
}

export const useCourseStore = create<State>((set) => {
  return {
    course: [],
    currentCourse: 0,
    fetchCourse: async (id: number) => {
      const res = await fetch("https://localhost:5173/data.json");
      const json = await res.json();
      const course = json.find((e: TypeCourse) => e.id == id);
      set({ course });
    },
  };
});
