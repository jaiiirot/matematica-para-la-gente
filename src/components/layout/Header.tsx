// import InfoUser from "./InfoUser";
import { Link } from "react-router-dom";
import Test from "../icons/Test";
import Logo from "../icons/Logo";
import Teach from "../icons/Teach";
import { useEffect } from "react";
import Video from "../icons/Video";
import LinkHeader from "./LinkHeader";
import Book from "../icons/Book";
// import Twich from "./icons/Twich";
export default function Header() {
  useEffect(() => {
    // const header = document.querySelector("header");
    // const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        // header?.classList.remove("mt-2");
        // nav?.classList.add("blur-3xl");
      } else {
        // header?.classList.add("mt-2");
        // nav?.classList.remove("blur-xl");
      }
    });
  }, []);
  return (
    <header className="bg-[#0c2337] flex fixed top-0 w-full z-50 ">
      <nav className="flex justify-between items-center gap-2 w-10/12 py-4 mx-auto px-4 rounded-xl">
        <Link to="/" className="hover:scale-95">
          <Logo color="#fff" height="56" />
        </Link>
        <ul className="flex gap-4 text-lg text-white">
          <LinkHeader title="Cursos" available={false}>
            <Video w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Parciales" available={true}>
            <Test w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Materias" available={true}>
            <Book w="24" h="24" />
          </LinkHeader>
          <LinkHeader title="Creadores" available={false}>
            <Teach w="24" h="24" />
          </LinkHeader>
          <li className="rounded-md hover:scale-105 transition shadow-sm hover:shadow-lg">
            <span className="flex justify-center items-center gap-4 px-4 py-2">
              {/* <a href="" className="flex items-center gap-2 ">
                <Twich height="25" />
                Iniciar Sesion
              </a> */}
              {/* <InfoUser
                avatar="https://avatars.githubusercontent.com/u/86240202?v=4&size=64"
                nombre="Jaiiirot"
              /> */}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
