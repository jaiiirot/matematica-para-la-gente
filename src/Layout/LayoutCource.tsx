import { useParams, NavLink } from "react-router-dom";
import { course } from "../mock/data.ts";
import CardCreators from "../components/card/CardCreators.tsx";
// import CardVideosCourse from "../components/card/CardVideosCourse.tsx";
export default function LayoutCource() {
  const { urltitle } = useParams();
  // const querynumber: number =
  //   parseInt(new URLSearchParams(window.location.search).get("class")) - 1;
  console.log(urltitle);
  const content = course[1];
  return (
    <>
      <section className="m-auto w-11/12 flex gap-4 items-center">
        {/* <div className=""> */}
        <img
          src={content.front}
          alt=""
          className="h-max object-cover rounded-3xl"
        />
        {/* </div> */}
        <div className="flex flex-col gap-4 justify-evenly">
          <div>
            <h2 className="text-3xl font-bold">{content.title}</h2>
            <p className="text-lg font-normal">{content.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={content.canal.avatar}
              alt={`avatar de ${content.canal.name}`}
              className="rounded-full size-16"
            />
            <span>
              <p>Un curso de:</p>
              <p>
                {content.canal.name} - {content.class.length} Videos
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="mt-8 m-auto w-11/12">
        <span className="flex items-center">
          <h2 className="text-3xl font-bold pr-6">Videos</h2>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <ul className="w-8/12 m-auto">
          {content.class.map((item, i) => (
            <li>
              <NavLink
                to={`/cursos/${urltitle}/${item.url}&num=${i + 1}`}
                key={item.id}
                className="p-2 hover:bg-[#0c233719] hover:scale-105 transition rounded-md font-medium flex items-center gap-2"
              >
                <span className="rounded-full bg-black text-white size-5 text-center">{`${
                  i + 1
                }`}</span>
                <p className="line-clamp-2">{item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8 m-auto w-11/12">
      <span className="flex items-center">
          <h2 className="text-3xl font-bold pr-6">Sobre el profesor</h2>
          <span className="h-px flex-1 bg-black"></span>
        </span>
      <CardCreators id={content.canal.id} />
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
