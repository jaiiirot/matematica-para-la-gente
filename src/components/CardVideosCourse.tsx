import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  front: string;
  title: string;
  urltitle: string;
  description: string;
  canal: {
    avatar: string;
    name: string;
    plataform: string;
  };
  class: {
    id: string;
    title: string;
    url: string;
  }[];
}

export default function CardVideosCourse({
  data,
  urltitle,
}: {
  data: Props;
  urltitle: string;
}) {
  const styleActive: string =
    "p-2 hover:bg-[#0c233719] transition text-xs rounded-md font-medium flex items-center gap-2";

  return (
    <div className="dark w-96 flex flex-col gap-2 border border-gray-200 rounded-3xl p-4">
      <div>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <h5 className="text-xs">{data.canal.name} - {data.class.length} videos</h5>
      </div>
      <div className="overflow-y-auto h-96">
        <span className="flex flex-col gap">
          {data.class.map((item, i) => {
            return (
              <NavLink
                to={`/curso/${urltitle}/${item.url}?num=${i+1}`}
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? `bg-[#0c233719] ${styleActive}`
                    : styleActive
                }
              >
                <span className="text-[#858585] ">{`#${i + 1}`}</span>
                <p className="line-clamp-2">{item.title}</p>
              </NavLink>
            );
          })}
        </span>
      </div>
    </div>
  );
}
