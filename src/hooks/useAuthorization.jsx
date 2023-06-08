import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "./useUserContext";

function useAuthorization() {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);
}

export default useAuthorization;
