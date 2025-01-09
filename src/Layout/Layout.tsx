import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main  className="flex flex-col items-center gap-4">
        <Outlet />
      </main>
    </>
  );
}
