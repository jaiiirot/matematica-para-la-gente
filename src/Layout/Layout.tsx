import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center gap-4 bg-[#0c2337] bg-[url(/bg.svg)] bg-cover bg-center bg-repeat">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
