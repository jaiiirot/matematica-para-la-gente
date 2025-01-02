// import GitHubStart from "../components/GitHubStart";
import CardCourse from "../components/CardCourse";
import { course } from "../mock/data.ts";
// import { TypeCardCourse} from "../types.js";

export default function Home() {
  return (
    <>
      <section className="w-10/12 m-auto">
        <section>
          <h1 className="text-3xl font-bold">Cursos</h1>
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
      </section>
      <section>

      </section>
    </>
  );
}
