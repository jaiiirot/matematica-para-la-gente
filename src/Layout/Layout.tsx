import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ActionCoffee from "../components/ActionCoffee";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col gap-4 mt-32">
        <Outlet />
      </main>
      <Footer />
      <ActionCoffee />
    </>
  );
}
