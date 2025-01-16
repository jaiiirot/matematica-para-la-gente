import { Link } from "react-router-dom";
import Video from "../icons/Video";
import Youtube from "../icons/Youtube";
interface Props {
  id?: number;
  front: string;
  title: string;
  urltitle?: string;
  description: string;
  canal: { avatar: string; name: string };
}
export default function CardCourse({
  id,
  front,
  title,
  urltitle,
  description,
  canal,
}: Props) {

  const image: string = `border rounded-lg shadow border-gray-700 bg-[url(${front})] transition hover:shadow-lg hover:scale-105 overflow-hidden`;
  return (
    // <Link
    //   viewTransition
    //   to={`/cursos/${urltitle}?class=${id}`}
    //   className="flex flex-col w-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition hover:scale-105"
    // >
    //   <img
    //     className="w-full h-32 object-cover pointer-events-none"
    //     src={front}
    //     alt={description}
    //   />
    //   <div className="flex flex-col h-full justify-between p-3 gap-2 pointer-events-none">
    //     <div className="flex flex-col gap-1">
    //       <h2 className="font-bold text-sm line-clamp-1">{title}</h2>
    //       <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
    //     </div>
    //     <div className="flex items-center gap-1 text-xs">
    //       <span className="p-1 rounded-md border border-red-500 bg-red-100">
    //         matematica
    //       </span>
    //       <span className="p-1 rounded-md border border-blue-500 bg-blue-100">
    //         algebra
    //       </span>
    //       <span className="p-1 rounded-md border border-green-500 bg-green-100">
    //         fisica
    //       </span>
    //       <span className="p-1 rounded-md border border-violet-500 bg-violet-100">
    //         quimica
    //       </span>
    //     </div>
    //     <div className="flex justify-between items-center gap-1">
    //       <div className="flex items-center text-[10px]">
    //         <img
    //           src={canal.avatar}
    //           alt={`avatar de ${canal.name}`}
    //           className="rounded-full size-5"
    //         />
    //         <p> {canal.name}</p>
    //       </div>
    //       <div>
    //         <Youtube h="12" />
    //       </div>
    //     </div>
    //   </div>
    // </Link>

    <Link
      to={`/cursos/${urltitle}?class=${id}`}
      className={image}
    >
      <div className="flex flex-col gap-1 justify-between h-full bg-[#0c2337e3] p-4 ">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
            {title}
          </h5>
          <p className="mb-3 text-base font-normal text-gray-400 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center gap-1  text-sm font-medium text-white">
          <div className="flex items-center">
            <img
              src={canal.avatar}
              alt={`avatar de ${canal.name}`}
              className="rounded-full size-5"
            />
            <p>{canal.name}</p>
          </div>
          <div className="flex items-center gap-1">
            <Youtube h="12" />
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-center"
            >
              <Video w="24" h="24" />
              Empezar
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
