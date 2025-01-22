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
  classes?: { id: string; title: string; url: string }[];
  canal: { avatar: string; name: string };
}

export default function CardCourseRow({
    id,
    front,
    title,
    urltitle,
    description,
    canal,
    classes
  }: Props) {
  return (

    <Link to={`/cursos/${urltitle}?class=${id}`} className="m-auto w-11/12 flex gap-4 items-center">
      {/* <div className=""> */}
      <img
        src={front}
        alt=""
        className="h-max object-cover rounded-3xl"
      />
      {/* </div> */}
      <div className="flex flex-col gap-4 justify-evenly">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg font-normal">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={canal.avatar}
            alt={`avatar de ${canal.name}`}
            className="rounded-full size-16"
          />
          <span>
            <p>Profesor</p>
            <p>
              {canal.name} - {classes.length} Videos
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
}
