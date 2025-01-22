// import GitHubStart from "../components/GitHubStart";
import CardCourse from "../components/card/CardCourseCol.tsx";
import ReactPlayerVideo from "../components/course/ReactPlayerVideo.tsx";
import { course } from "../mock/data.ts";
// import { TypeCardCourse} from "../types.js";

export default function Home() {
  return (
    <>
      <section className="w-10/12 m-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative m-auto w-11/12 h-full overflow-hidden">
        <div className="relative w-full h-[500px]">
          <span className="absolute z-10 w-full h-full"></span>
          <ReactPlayerVideo url="B1J6Ou4q8vE" controls={false} loop={true} />
        </div>
      </section>
      {/* <section className="w-10/12 m-auto">
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
      </section> */}
      <section className="w-11/12 mt-24 m-auto">
        <h2 className="text-base font-bold">Cursos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {course.map((item) => (
            <li>
              <CardCourse
                key={item.id}
                id={item.id}
                front={item.front}
                title={item.title}
                urltitle={item.urltitle}
                description={item.description}
                canal={item.canal}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
