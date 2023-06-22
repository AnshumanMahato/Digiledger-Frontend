import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

function Configure() {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.isConfigured) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);
  return <main>Configure</main>;
}

export default Configure;
