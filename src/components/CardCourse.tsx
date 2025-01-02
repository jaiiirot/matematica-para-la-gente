import { Link } from "react-router-dom";
import Youtube from "./icons/Youtube";
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
  return (
    <Link
      viewTransition
      to={`/curso/${urltitle}?class=${id}`}
      className="flex flex-col w-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition hover:scale-105"
    >
      <img
        className="w-full h-32 object-cover pointer-events-none"
        src={front}
        alt={description}
      />
      <div className="flex flex-col h-full justify-between p-3 gap-2 pointer-events-none">
        <span className="flex flex-col gap-1">
          <h2 className="font-bold text-sm line-clamp-1">{title}</h2>
          <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        </span>
        <div className="flex justify-between items-center gap-1">
          <div className="flex items-center text-[10px]">
            <img
              src={canal.avatar}
              alt={`avatar de ${canal.name}`}
              className="rounded-full size-5"
            />
            <p>
              <span className="text-gray-600"> de </span>
              {canal.name}
            </p>
          </div>
          <div>
            <Youtube h="12" />
          </div>
        </div>
      </div>
    </Link>
  );
}
