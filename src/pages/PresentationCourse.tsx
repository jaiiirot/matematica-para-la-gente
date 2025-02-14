import { useParams, NavLink } from "react-router-dom";
import { course } from "../mock/data.ts";
import CardCreators from "../components/card/CardCreators.tsx";
// import LogoNombre from "../components/icons/LogoNombre.tsx";
// import CardVideosCourse from "../components/card/CardVideosCourse.tsx";
export default function PresentationCourse() {
  const { urltitle } = useParams();
  // const querynumber: number =
  //   parseInt(new URLSearchParams(window.location.search).get("class")) - 1;
  console.log(urltitle);
  const content = course[2];
  return (
    <>
      <section className="m-auto w-11/12 ">
        <div className="flex gap-4 items-center w-10/12 mx-auto flex-col md:flex-row">
          <img src={content.front} alt="" className="h-max object-cover" />
          <div className="flex flex-col gap-4 justify-evenly">
            <h2 className="text-xl sm:text-3xl font-bold">{content.title}</h2>
            <span className="text-xs sm:text-base">
              <p>Un curso de:</p>
              <p>
                {content.canal.name} - {content.class.length} Videos
              </p>
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base sm:text-lg font-normal">
            {content.description}
          </p>
        </div>
      </section>
      <section className="mt-8 m-auto w-11/12 flex gap-8 relative flex-col md:flex-row">
        <article className="w-full md:w-6/12">
          <span className="flex items-center">
            <h2 className="font-bold pr-6 text-xl sm:text-3xl">Videos</h2>
            <span className="h-px flex-1 bg-black"></span>
          </span>
          <ul className="w-full m-auto">
            {content.class.map((item, i) => (
              <li>
                <NavLink
                  to={`/cursos/${urltitle}/${item.url}&num=${i + 1}`}
                  key={item.id}
                  className="p-2 hover:bg-[#0c233719] hover:scale-105 text-gray-600 hover:text-gray-900 hover:font-bold transition rounded-md flex items-center gap-2"
                >
                  <p className="line-clamp-2 text-xs md:text-sm">
                    <span>{`${i + 1} - `}</span> {item.title}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </article>
        <article className="sticky top-0 right-0 w-full  md:w-6/12">
          <span className="flex items-center">
            <h2 className="font-bold pr-6 text-xl sm:text-3xl ">
              Sobre el profesor
            </h2>
            <span className="h-px flex-1 bg-black"></span>
          </span>
          <CardCreators id={content.canal.id} />
        </article>
      </section>
    </>
  );
}
