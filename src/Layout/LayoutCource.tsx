import { Outlet, useParams } from "react-router-dom";
import { course } from "../mock/data.ts";
import { NavLink } from "react-router-dom";
export default function LayoutCource() {
  const { urltitle } = useParams();
  // const querynumber: number = parseInt(new URLSearchParams(window.location.search).get("class") || "0", 10) - 1;
  const styleActive: string =
    "p-2 hover:bg-[#0c233719] hover:scale-105 transition text-xs rounded-md font-medium";
  return (
    <>
      <section className="flex gap-4 my-4">
        <div className="w-6/12 flex flex-col gap-2">
          <Outlet />
        </div>
        <div className="w-6/12 flex flex-col gap-2">
          <h2 className="font-bold">
            {" "}
            <h2 className="text-3xl font-bold">+ {course[1].title}</h2>
          </h2>
          <div className="overflow-y-auto h-96">
            <span className="w-10/12 mx-auto flex flex-col gap-2">
              {course[1].class.map((item, i) => {
                return (
                  <NavLink
                    to={`/curso/${urltitle}/${item.url}`}
                    key={item.id}
                    className={({ isActive }) =>
                      isActive
                        ? `bg-[#0c233719] scale-105 ${styleActive}`
                        : styleActive
                    }
                  >
                    <p className="line-clamp-1">
                      {" "}
                      <span className="text-[#858585] ">{`#${i + 1}`} - </span>
                      {item.title}
                    </p>
                  </NavLink>
                );
              })}
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-6">
          <div className="text-center">
            <img
              src="https://example.com/damian-pedraza.jpg"
              alt="Damián Pedraza"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">Damián Pedraza</h1>
            <p className="text-sm text-gray-500">
              Ingeniero, Educador y Divulgador
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Historia</h2>
            <p className="text-gray-700 mt-2">
              Damián Pedraza es un ingeniero apasionado por la enseñanza.
              Comenzó su camino educativo creando contenido en redes sociales
              para simplificar conceptos complejos en matemáticas, cálculo y
              física. Su enfoque fresco y dinámico ha ayudado a miles de
              estudiantes a mejorar su comprensión de temas científicos y
              técnicos.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Logros</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Más de 1,300,000 seguidores en redes sociales.</li>
              <li>
                Creador de más de 500 videos educativos en matemáticas y física
                aplicada.
              </li>
              <li>
                Conferencista invitado en múltiples eventos de tecnología y
                educación.
              </li>
              <li>
                Colaborador con instituciones académicas para promover el
                aprendizaje digital.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Contribuciones
            </h2>
            <p className="text-gray-700">
              A través de sus videos, Damián ha empoderado a estudiantes de todo
              el mundo a superar barreras de aprendizaje. Ha creado recursos
              innovadores y accesibles para hacer que la ciencia y la ingeniería
              sean más inclusivas.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-6">
          <div className="text-center">
            <img
              src="https://example.com/juan-ignacio-silva.jpg"
              alt="Juan Ignacio Silva"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              Juan Ignacio Silva
            </h1>
            <p className="text-sm text-gray-500">
              Ingeniero, Educador e Innovador
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Historia</h2>
            <p className="text-gray-700 mt-2">
              Juan Ignacio Silva es un ingeniero apasionado por la innovación y
              la educación. Su misión es transformar la manera en que las
              personas aprenden matemáticas y ciencias aplicadas, utilizando
              métodos modernos y accesibles para la enseñanza.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Logros</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Más de 800,000 seguidores en redes sociales.</li>
              <li>
                Creador de una plataforma educativa con recursos para
                estudiantes de ingeniería.
              </li>
              <li>
                Reconocido como líder en la enseñanza interactiva de matemáticas
                y física.
              </li>
              <li>
                Ha sido mentor para cientos de jóvenes profesionales en
                tecnología y ciencias.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Contribuciones
            </h2>
            <p className="text-gray-700">
              Juan ha colaborado con equipos interdisciplinarios para
              desarrollar herramientas educativas que combinan tecnología y
              pedagogía. Su enfoque innovador inspira a estudiantes a alcanzar
              su máximo potencial académico.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}




// Si deseas solicitar una estructura similar para otra persona, aquí tienes un prompt que puedes usar o adaptar según el caso:

// Prompt para generar el código:

// Quiero que desarrolles un componente en React con TypeScript, siguiendo el diseño y formato de un perfil estilizado con TailwindCSS, que contenga la información completa de una persona. La información debe estar estructurada de la siguiente manera:

// Encabezado: Una imagen circular de perfil, nombre completo, y un subtítulo breve que describa quién es.
// Historia: Una descripción detallada de su trayectoria o historia personal/profesional.
// Logros: Una lista de sus principales logros.
// Contribuciones: Una explicación de cómo esta persona ha contribuido a su campo o a la comunidad.
// Incluye estilos de TailwindCSS para que sea visualmente atractivo, y organiza todo dentro de un contenedor con un diseño limpio y moderno.

// Quiero el código completo en TSX, y si es necesario, sugiéreme dónde reemplazar imágenes o datos específicos.

// Información de la persona:

// Nombre completo: [Nombre de la persona].
// Breve descripción: [Por ejemplo: Ingeniero, Educador y Líder Innovador].
// Historia: [Describe la trayectoria profesional y personal de esta persona].
// Logros: [Lista de 4 o más logros importantes].
// Contribuciones: [Cómo ha impactado a su campo o comunidad].
// Asegúrate de que sea un perfil separado y único, no mezcles información de otras personas.

// Puedes usar este prompt como base para describir la nueva persona y obtener un código ajustado a lo que necesitas. Si tienes una nueva persona en mente, envíame los datos, ¡y puedo generarlo para ti! 🚀