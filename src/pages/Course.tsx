import CardCourse from "../components/card/CardCourse.tsx";
import { course } from "../mock/data.ts";

export default function Course() {
  // const querynumber: number =
  //   parseInt(
  //     new URLSearchParams(window.location.search).get("class") || "0",
  //     10
  //   ) - 1;
  return (
    <>

    
      <section className="w-10/12 mt-24 m-auto">
        <h2 className="text-base font-bold">Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
