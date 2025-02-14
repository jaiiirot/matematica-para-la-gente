import { Link } from "react-router-dom";
import LogoNombre from "../components/icons/LogoNombre";

export default function Error() {
  return (
    <>
      <section className="w-10/12 mx-auto my-2">
        <div className="flex flex-col items-center gap-16">
          <LogoNombre size="h-16 lg:h-24" color="#0c2337" />
          <h1 className="hidden">Matematica para la gente</h1>
        </div>
      </section>
      <section className="relative overflow-hidden  flex items-center justify-center">
        <div className="mx-auto px-6 md:px-12 flex items-center">
          <div className="w-full md:w-8/12 lg:w-6/12 flex flex-col items-center text-center relative mx-auto">
            <h2 className="font-extrabold text-4xl md:text-5xl mb-6">
              ¡Ups! Página no encontrada
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Lo siento, la página que estás buscando no está disponible.
              ¿Quizás te interese explorar nuestra página de inicio o usar el
              buscador para encontrar lo que necesitas?
            </p>
            <p className="font-extrabold text-9xl  mb-12 animate-bounce">404</p>
            <Link
              to={"/"}
              className="px-8 py-3 bg-[#ff3131] text-white font-semibold rounded-lg hover:bg-[#fe4d4d] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
