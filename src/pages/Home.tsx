// import GitHubStart from "../components/GitHubStart";
import CardCourse from "../components/CardCourse";
import { course } from "../mock/data.ts";
// import { TypeCardCourse} from "../types.js";

export default function Home() {
  return (
    <>
      <section className="m-auto">
        <h2 className="text-xl font-bold">Categorias</h2>
        <ul className="flex gap-4">
          <li className="rounded-lg border hover:bg-gray-100">
            <a className="px-8 py-4">Matematica</a>
          </li>
          <li className="rounded-lg border hover:bg-gray-100">
            <a className="px-8 py-4">Matematica</a>
          </li>
          <li className="rounded-lg border hover:bg-gray-100">
            <a className="px-8 py-4">Matematica</a>
          </li>
          <li className="rounded-lg border hover:bg-gray-100">
            <a className="px-8 py-4">Matematica</a>
          </li>
          <li className="rounded-lg border hover:bg-gray-100">
            <a className="px-8 py-4">Matematica</a>
          </li>
        </ul>
      </section>
      <section className="m-auto">
        <h2 className="text-xl font-bold">Cursos</h2>
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
      <section></section>
    </>
  );
}
