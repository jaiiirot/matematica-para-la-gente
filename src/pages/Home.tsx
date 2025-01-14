// import GitHubStart from "../components/GitHubStart";
import CardCourse from "../components/CardCourse";
import ReactPlayerVideo from "../components/ReactPlayerVideo.tsx";
import { course } from "../mock/data.ts";
// import { TypeCardCourse} from "../types.js";

export default function Home() {
  return (
    <>
      <section className="relative m-auto w-full h-80 overflow-hidden">
        <span className="absolute z-10 w-full h-full"></span>
        <ReactPlayerVideo url="B1J6Ou4q8vE" controls={false} loop={true}/>
      </section>
      <section className="w-10/12 m-auto">
        <h2 className="text-base font-bold">Categorias</h2>
        <div className="flex items-center gap-1 text-sm">
          <span className="p-1 rounded-md border border-red-500 bg-red-100">
            matematica
          </span>
          <span className="p-1 rounded-md border border-blue-500 bg-blue-100">
            algebra
          </span>
          <span className="p-1 rounded-md border border-green-500 bg-green-100">
            fisica
          </span>
          <span className="p-1 rounded-md border border-violet-500 bg-violet-100">
            quimica
          </span>
        </div>
      </section>
      <section className="w-10/12 m-auto">
        <h2 className="text-base font-bold">Cursos</h2>
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
      <section className="w-10/12 m-auto"></section>
    </>
  );
}
