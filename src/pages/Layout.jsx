import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { initLogin } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";

function Layout() {
  const { currentUser, updateCurrentUser } = useUserContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      } else if (!currentUser.isConfigured && pathname !== "/configure") {
        navigate("/configure", {
          replace: true,
        });
      }
      setIsLoaded(true);
    })();
  }, [currentUser, updateCurrentUser, pathname, navigate]);

  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col justify-between items-center pt-10 px-[7%] sm:pt-14 font-poppins">
      {isLoaded && (
        <>
          <Header />
          <Outlet context={{ isFetching, setIsFetching }} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
