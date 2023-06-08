import { useEffect } from "react";
import { logoutRequest } from "../services/authServices";
import useUserContext from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const { updateCurrentUser } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        await logoutRequest();
        updateCurrentUser(null);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return;
}

export default Logout;
