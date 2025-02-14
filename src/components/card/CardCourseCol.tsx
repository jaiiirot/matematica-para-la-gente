import { Link } from "react-router-dom";
import Video from "../icons/Video";
import Youtube from "../icons/Youtube";
import Twich from "../icons/Twitch";
interface Props {
  id?: number;
  front?: string;
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
  return (
    <Link
      to={`/cursos/${urltitle}?class=${id}`}
      className="relative rounded-2xl overflow-hidden shadow-md border-gray-700 hover:shadow-lg hover:outline hover:outline-gray-200 hover:outline-1 bg-white h-max"
    >
      <img src={front} className="w-full object-cover" alt="" />
      <div className="p-4 flex flex-col gap-4">
        <div className="">
          <h5 className="mb-2 font-bold">{title}</h5>
          <p className="mb-3 text-xs font-normal line-clamp-2">{description}</p>
        </div>
        <div className="flex flex-col justify-between gap-1 text-xs">
          <div className="flex items-center gap-2">
            <img
              src={canal.avatar}
              alt={`avatar de ${canal.name}`}
              className="rounded-full size-8"
            />
            <p className="text-xs">{canal.name}</p>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-4">
              <a href="">
                <Youtube h="16" />
              </a>
              <a href="">
                <Twich h="16" />
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-center gap-1 bg-white  text-[#0c2337e3] rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition"
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
