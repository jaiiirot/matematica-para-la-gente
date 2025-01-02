// import InfoUser from "./InfoUser";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo";
import Twich from "./icons/Twich";
export default function Header() {
  return (
    <header className="flex">
      <nav className="flex justify-between items-center gap-2 w-10/12 py-2 mx-auto rounded-full shadow-sm px-4">
        <Link to="/" className="">
          <Logo color="#0c2337" height="64" />
        </Link>
        <ul className="flex gap-4 group ">
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
              <a href="" className="flex items-center gap-2 ">
                <Twich height="25" />
                Iniciar Sesion
              </a>
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
