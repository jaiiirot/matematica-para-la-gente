import { Outlet, useParams } from "react-router-dom";
import { course } from "../mock/data.ts";
import CardCreators from "../components/CardCreators.tsx";
import CardVideosCourse from "../components/CardVideosCourse.tsx";
export default function LayoutCource() {
  const { urltitle } = useParams();
  // const querynumber: number = parseInt(new URLSearchParams(window.location.search).get("class") || "0", 10) - 1;

  return (
    <>
      <section className="flex gap-2 mt-20 mb-4 w-10/12">
        <div className="w-full flex flex-col gap-2">
          <Outlet />
        </div>
        <div className="w-min flex flex-col gap-2">
          <CardVideosCourse data={course[1]} urltitle={urltitle || ""} />
          <CardCreators id={course[1].canal.id} />
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
