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

export default function CardVideosCourse({data, urltitle}:{data: Props, urltitle: string}) {  
  const styleActive: string =
    "p-2 hover:bg-[#0c233719] hover:scale-105 transition text-xs rounded-md font-medium";

  return (
    <>
      <h2 className="font-bold">
        <h2 className="text-3xl font-bold">+ {data.title}</h2>
      </h2>
      <div className="overflow-y-auto h-96">
        <span className="w-10/12 mx-auto flex flex-col gap-2">
          {data.class.map((item, i) => {
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
                  <span className="text-[#858585] ">{`#${i + 1}`} - </span>
                  {item.title}
                </p>
              </NavLink>
            );
          })}
        </span>
      </div>
    </>
  );
}
