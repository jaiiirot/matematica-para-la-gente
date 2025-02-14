import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
// import Particles from "../components/Particles";
// import ActionCoffee from "../components/ActionCoffee";

export default function Layout() {
  return (
    <>
      <div id="body" className="absolute -z-10 top-0 size-full"></div>
      <Header />
      <main className="relative flex flex-col gap-4">
        <Outlet />
      </main>
      <Footer />
      {/* <ActionCoffee /> */}
    </>
  );
}
