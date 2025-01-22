// import InfoUser from "./InfoUser";
import { Link } from "react-router-dom";
import Test from "../icons/Test";
import Logo from "../icons/Logo";
import Teach from "../icons/Teach";
import { useEffect } from "react";
import Video from "../icons/Video";
import LinkHeader from "./LinkHeader";
import Book from "../icons/Book";
// import Twich from "../icons/Twitch";
export default function Header() {
  useEffect(() => {}, []);
  return (
    <header className="flex fixed top-0 w-full z-50 pt-2 backdrop-blur-xl">
      <nav className="flex justify-between items-center gap-2 w-11/12 py-4 mx-auto px-4 rounded-xl shadow-2xl  bg-white backdrop-blur-lg">
        <Link to="/" className="hover:scale-105 transition drop-shadow-2xl">
          <Logo color="#0c2337" height="56" />
        </Link>
        <ul className="flex gap-4 text-lg">
          <LinkHeader title="Cursos" available={true}>
            <Video w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Parciales" available={false}>
            <Test w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Materias" available={false}>
            <Book w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Creadores" available={true}>
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
