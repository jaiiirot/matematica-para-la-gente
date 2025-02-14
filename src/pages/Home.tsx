// import GitHubStart from "../components/GitHubStart";
import CardCourse from "../components/card/CardCourseCol.tsx";
import LogoNombre from "../components/icons/LogoNombre.tsx";
import SearchCourse from "../components/submits/SearchCourse.tsx";
// import ReactPlayerVideo from "../components/course/ReactPlayerVideo.tsx";
// import Logo from "../components/icons/LogoComplete.tsx";
import { course } from "../mock/data.ts";
// import { TypeCardCourse} from "../types.js";

export default function Home() {
  return (
    <>
      <section className="w-10/12 mx-auto my-2">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <LogoNombre size="h-16 lg:h-24 drop-shadow-2xl" color="#0c2337" />
          <div className="w-11/12 sm:w-8/12">
            <h2 className="text-center text-xs drop-shadow-2xl sm:text-base md:text-base">
              {`Matematica para la Gente nacio de la idea de Damián Pedraza (El
              traductor de Ingenieria), La idea de la web es poder enseñar
              matematica para que todos puedan aprender de una manera facil y
              sencilla, y muy pronto profesores o gente podra agendar link de clases gratuitas y resumenes gratuitos`}
            </h2>
          </div>
        </div>
      </section>
      <SearchCourse />
      <section className="w-11/12 mt-24 m-auto">
        <h2 className="text-base font-bold">Cursos</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </ul>
      </section>
    </>
  );
}
