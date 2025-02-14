import { Link } from "react-router-dom";
import { useEffect } from "react";
import Test from "../icons/Test";
import Teach from "../icons/Teach";
import Video from "../icons/Video";
import LinkHeader from "./LinkHeader";
import LogoIcon from "../icons/LogoIcon";
export default function Header() {
  useEffect(() => {}, []);
  return (
    <header className="flex top-0 w-full z-50 pt-2">
      <nav className="flex justify-between items-center gap-2 w-11/12 py-4 mx-auto px-4 rounded-xl">
        <Link to="/" className="hover:scale-105 transition drop-shadow-2xl">
          <LogoIcon size="size-12" cc="#ff3131" cg="#0c2337" />
        </Link>
        <ul className="flex gap-4 text-lg text-black">
          <LinkHeader title="Cursos" available={true}>
            <Video w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Resumenes" available={false}>
            <Test w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Clases" available={false}>
            <Teach w="24" h="24" />
          </LinkHeader>
          {/* <li className="rounded-md hover:scale-105 transition shadow-sm hover:shadow-lg">
            <span className="flex justify-center items-center gap-4 px-4 py-2">
              <a href="" className="flex items-center gap-2 ">
                <Twich h="24" />
                Iniciar Sesion
              </a> 
             <InfoUser
                avatar="https://avatars.githubusercontent.com/u/86240202?v=4&size=64"
                nombre="Jaiiirot"
              /> 
            </span>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
