import { useParams, NavLink } from "react-router-dom";
import { course } from "../mock/data.ts";
import CardCreators from "../components/card/CardCreators.tsx";
// import CardVideosCourse from "../components/card/CardVideosCourse.tsx";
export default function LayoutCource() {
  const { urltitle } = useParams();
  // const querynumber: number =
  //   parseInt(new URLSearchParams(window.location.search).get("class")) - 1;
  console.log(urltitle);
  const content = course[0];
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
