// import InfoUser from "./InfoUser";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo";
import { useEffect } from "react";
// import Twich from "./icons/Twich";
export default function Header() {
  useEffect(() => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY < 50) {
        header?.classList.add("mt-2");   
      } else {
        header?.classList.remove("mt-2");
      }
    });
  }, []);
  return (
    <header className="flex fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center gap-2 w-10/12 py-2 mx-auto px-4 bg-white rounded-xl h-16 shadow-sm">
        <Link to="/" className="hover:scale-95" >
          <Logo color="#0c2337" height="40" />
        </Link>
        <ul className="flex gap-4 text-sm">
          <li className=" rounded-md hover:scale-105 transition shadow-sm hover:shadow-lg">
            <Link to="/cursos" className="block px-4 py-2 font-medium">
              Cursos
            </Link>
          </li>
          <li className=" rounded-md hover:scale-105 transition shadow-sm hover:shadow-lg">
            <Link to="/Parciales" className="block px-4 py-2 font-medium">
              Parciales
            </Link>
          </li>
          <li className=" rounded-md hover:scale-105 transition shadow-sm hover:shadow-lg">
            <Link to="/canal" className="block px-4 py-2 font-medium">
              Creadores
            </Link>
          </li>
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
