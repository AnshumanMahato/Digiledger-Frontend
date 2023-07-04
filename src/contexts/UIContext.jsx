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

  /* 
  These functions are being used as dependencies to useEffect hooks in many places. As change in 
  'status' will rerender the UIContext, normal functions would be redeclared causing the useEffect 
  to execute again. Thus creating an endless loop. So these are declared as references.
  */
  const resetStatus = useRef(() => {
    setStatus({ status: null, message: "" });
    clearTimeout(timeout.current);
  });
  const setErrorStatus = useRef((message) => {
    setStatus({ status: "error", message });
    timeout.current = setTimeout(() => {
      resetStatus.current();
    }, 1500);
  });
  const setSuccessStatus = useRef((message) => {
    setStatus({ status: "success", message });
    timeout.current = setTimeout(() => {
      resetStatus.current();
    }, 1500);
  });

  //Reset Status on path change
  useEffect(() => {
    resetStatus.current();
  }, [pathname]);

  const values = {
    avatars,
    status,
    setErrorStatus: setErrorStatus.current,
    setSuccessStatus: setSuccessStatus.current,
    resetStatus: resetStatus.current,
  };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
}

export { UIProvider };
export default UIContext;
