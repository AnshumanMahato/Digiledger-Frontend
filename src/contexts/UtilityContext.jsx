import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const UtilityContext = createContext(null);

function UtilityProvider({ children }) {
  const { pathname } = useLocation();
  const statusTimeout = useRef(null);
  const fetchTimeout = useRef(null);
  const [status, setStatus] = useState({ status: null, message: "" }); //Status Logging
  const [isFetching, setIsFetching] = useState(true); // Data Fetching

  //Loading avatars from directory dynamically
  const images = require.context("../assets/", true);
  const imagePairs = images.keys().map((image) => {
    const key = image.split("/").pop();
    const value = images(image);

    return [key, value];
  });
  const avatars = new Map(imagePairs);

  /* 
  These functions are being used as dependencies to useEffect hooks in many places. As change in 
  'status' will rerender the UtilityContext, normal functions would be redeclared causing the useEffect 
  to execute again. Thus creating an endless loop. So these are declared as references.
  */

  //Status logging interface
  const resetStatus = useRef(() => {
    setStatus({ status: null, message: "" });
    clearTimeout(statusTimeout.current);
  });
  const setErrorStatus = useRef((message) => {
    setStatus({ status: "error", message });
    statusTimeout.current = setTimeout(() => {
      resetStatus.current();
    }, 1500);
  });
  const setSuccessStatus = useRef((message) => {
    setStatus({ status: "success", message });
    statusTimeout.current = setTimeout(() => {
      resetStatus.current();
    }, 1500);
  });

  //Data Fetching Interface
  const startFetching = useRef(() => {
    clearTimeout(fetchTimeout.current);
    setIsFetching(true);
  });

  const stopFetching = useRef(() => {
    fetchTimeout.current = setTimeout(() => setIsFetching(false), 2000);
  });

  //Reset Status on path change
  useEffect(() => {
    resetStatus.current();
  }, [pathname]);

  const values = {
    avatars,
    status,
    isFetching,
    setErrorStatus: setErrorStatus.current,
    setSuccessStatus: setSuccessStatus.current,
    resetStatus: resetStatus.current,
    startFetching: startFetching.current,
    stopFetching: stopFetching.current,
  };
  return (
    <UtilityContext.Provider value={values}>{children}</UtilityContext.Provider>
  );
}

export { UtilityProvider };
export default UtilityContext;
