import CarouselCourse from "../components/carousel/CarouselCourse.tsx";
import LogoNombre from "../components/icons/LogoNombre.tsx";
import SearchCourse from "../components/submits/SearchCourse.tsx";

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
      <section className="w-11/12 my-6 m-auto">
        <h2 className="mb-4 text-3xl font-bold">Analisis Matematico</h2>
        <CarouselCourse />
      </section>
      <section className="w-11/12 my-6 m-auto">
        <h2 className="mb-4 text-3xl font-bold">Algebra</h2>
        <CarouselCourse />
      </section>
      <section className="w-11/12 my-6 m-auto">
        <h2 className="mb-4 text-3xl font-bold">Quimica y Fisica</h2>
        <CarouselCourse />
      </section>
    </>
  );
}
