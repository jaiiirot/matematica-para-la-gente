import CardCourse from "../components/card/CardCourseCol.tsx";
import { course } from "../mock/data.ts";

export default function Course() {
  return (
    <>
      <section className="w-11/12 m-auto">
        <h2 className="text-4xl font-bold mb-4">Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
