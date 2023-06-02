import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Root() {
  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col justify-between items-center pt-10 px-[10%] font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
