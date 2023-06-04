import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserContext from "./useUserContext";

function useAuthorization() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
}

export default useAuthorization;
