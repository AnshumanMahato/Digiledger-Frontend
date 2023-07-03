import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const UIContext = createContext(null);

function UIProvider({ children }) {
  const { pathname } = useLocation();

  //Loading avatars from directory dynamically
  const images = require.context("../assets/", true);
  const imagePairs = images.keys().map((image) => {
    const key = image.split("/").pop();
    const value = images(image);

    return [key, value];
  });
  const avatars = new Map(imagePairs);

  //Status logging interface
  const timeout = useRef(null);
  const [status, setStatus] = useState({ status: null, message: "" });
  const resetStatus = () => {
    setStatus({ status: null, message: "" });
    clearTimeout(timeout.current);
  };
  const setErrorStatus = (message) => {
    setStatus({ status: "error", message });
    timeout.current = setTimeout(() => {
      resetStatus();
    }, 1500);
  };
  const setSuccessStatus = (message) => {
    setStatus({ status: "success", message });
    timeout.current = setTimeout(() => {
      resetStatus();
    }, 1500);
  };

  //Reset Status on path change
  useEffect(() => {
    resetStatus();
  }, [pathname]);

  const values = {
    avatars,
    status,
    setErrorStatus,
    setSuccessStatus,
    resetStatus,
  };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
}

export { UIProvider };
export default UIContext;
