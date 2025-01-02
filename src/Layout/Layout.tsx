import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="w-10/12 m-auto">
        <Outlet />
      </main>
    </>
  );
}
