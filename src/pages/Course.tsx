import CardCourse from "../components/card/CardCourseCol.tsx";
import LogoNombre from "../components/icons/LogoNombre.tsx";
import SearchCourse from "../components/submits/SearchCourse.tsx";
import { course } from "../mock/data.ts";

export default function Course() {
  return (
    <>
      <section className="w-10/12 mx-auto my-2">
        <div className="flex flex-col items-center gap-16">
          <LogoNombre size="h-16 lg:h-24" color="#0c2337" />
          <h1 className="hidden">Matematica para la gente</h1>
        </div>
      </section>
      <SearchCourse />
      <section className="w-11/12 m-auto">
        <h2 className="text-4xl font-bold mb-4">Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {course.map((item) => (
            <CardCourse
              key={item.id}
              id={item.id}
              front={item.front}
              title={item.title}
              urltitle={item.urltitle}
              description={item.description}
              canal={item.canal}
            />
          ))}
        </div>
      </section>
    </>
  );
}
