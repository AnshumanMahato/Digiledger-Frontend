import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

function Protected({ children }) {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

  return <>{currentUser && children}</>;
}

export default Protected;
