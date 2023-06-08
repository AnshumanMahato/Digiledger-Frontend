import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { initLogin } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";

function Layout() {
  const { currentUser, updateCurrentUser } = useUserContext();

  useEffect(() => {
    (async () => {
      if (!currentUser) {
        try {
          const {
            data: { user },
          } = await initLogin();
          console.log(currentUser, user);
          if (user) {
            updateCurrentUser(user);
          }
        } catch (e) {}
      }
    })();
  });

  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col justify-between items-center pt-10 px-[10%] font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
