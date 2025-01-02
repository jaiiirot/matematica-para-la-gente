import { course } from "../mock/data.ts";

export default function Course() {
  const querynumber: number =
    parseInt(
      new URLSearchParams(window.location.search).get("class") || "0",
      10
    ) - 1;
  return (
    <>
      <img
        src={course[querynumber].front}
        alt=""
        className="w-full h-80 object-cover rounded-3xl"
      />

      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg max-w-2xl w-full">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-semibold text-gray-800">
              Juan Ignacio Silva
            </h1>
            <p className="text-sm text-gray-500">
              Creador de contenido educativo | Ingeniero Industrial
            </p>
          </div>
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-lg font-medium text-gray-800">Acerca de</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Soy Ingeniero Industrial con más de 10 años de experiencia como
                profesor de Matemática a nivel universitario. He creado
                proyectos educativos que combinan innovación y cercanía,
                ayudando a estudiantes a entender y aplicar conceptos complejos
                de manera sencilla.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-800">Experiencia</h2>
              <ul className="text-sm text-gray-600 space-y-4">
                <li>
                  <strong>Profesor de Matemáticas</strong> (Autónomo, Oct. 2017
                  - Actualidad)
                  <p>
                    Clases particulares a estudiantes de Ingeniería en álgebra y
                    cálculo.
                  </p>
                </li>
                <li>
                  <strong>Cofundador</strong> (Gauss Online, Sep. 2019 - Ago.
                  2024)
                  <p>
                    Plataforma educativa de vídeoclases para nivel
                    universitario.
                  </p>
                </li>
                <li>
                  <strong>Propietario</strong> (Academia APT, Sep. 2022 - Abr.
                  2024)
                  <p>
                    Soluciones educativas para estudiantes universitarios de
                    habla hispana en Europa.
                  </p>
                </li>
                <li>
                  <strong>Ayudante de Cátedra</strong>{" "}
                  <p>(UTN Buenos Aires, Mar. 2014 - Mar. 2018)</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-800">Educación</h2>
              <ul className="text-sm text-gray-600 space-y-4">
                <li>
                  <strong>Universidad Tecnológica Nacional</strong> (Ingeniería
                  Industrial, 2010 - 2016)
                </li>
                <li>
                  <strong>Intercambio Cultural</strong> (Perfeccionamiento de
                  inglés, 2015 - 2016)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-800">
                Publicaciones
              </h2>
              <ul className="text-sm text-gray-600 space-y-4">
                <li>
                  <strong>
                    Álgebra Para Todos Tomo I: Geometría Analítica
                  </strong>{" "}
                  (Autopublicado, Mayo 2023)
                  <p>
                    Libro diseñado para estudiantes de primer año de Ingeniería
                    y Ciencias.
                  </p>
                </li>
                <li>
                  <strong>Canal de Educación en YouTube</strong> (Creado en Ene.
                  2018)
                  <p>
                    Clases gratuitas de matemáticas para estudiantes de la UTN y
                    otros.
                  </p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-800">Idiomas</h2>
              <p className="text-sm text-gray-600">
                Español (Nativo), Inglés (Avanzado)
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
