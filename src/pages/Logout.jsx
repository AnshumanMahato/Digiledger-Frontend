import { useEffect } from "react";
import { logoutRequest } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import useUtilityContext from "../hooks/useUtilityContext";

function Logout() {
  const navigate = useNavigate();
  const { updateCurrentUser } = useUserContext();
  const { setErrorStatus } = useUtilityContext();

  useEffect(() => {
    (async () => {
      const { err } = await logoutRequest();
      if (err) {
        setErrorStatus(err);
        navigate("/dashboard", {
          replace: true,
        });
      } else {
        updateCurrentUser(null);
        navigate("/");
      }
    })();
  }, [updateCurrentUser, setErrorStatus, navigate]);
  return;
}

export default Logout;
