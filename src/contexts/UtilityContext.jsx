import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const UtilityContext = createContext(null);

/*
Following variables are declared in the global context of this module
as these contains map iterations on an Array(Array.map()). This way the
iteration will happen only once at imports and not at rerenders of the 
provider making the code more performant.
*/

//Loading avatars from directory dynamically
const images = require.context("../assets/pfps");
const imagePairs = images.keys().map((image) => {
  const key = image.split("/").pop();
  const value = images(image);

  return [key, value];
});
const avatars = new Map(imagePairs);

function UtilityProvider({ children }) {
  const { pathname } = useLocation();
  const { currentUser } = useUserContext();
  const statusTimeout = useRef(null);
  const fetchTimeout = useRef(null);
  const [status, setStatus] = useState({ status: null, message: "" }); //Status Logging
  const [isFetching, setIsFetching] = useState(true); // Data Fetching
  const [isProcessing, setIsProcessing] = useState(null); //initate process for user requests(login,signup,updates...)

  //Format currency values with based on the user currency.
  const formatCurrency = (amount) =>
    new Intl.NumberFormat(currentUser.valueSystem, {
      style: "currency",
      currency: currentUser.currency,
      currencyDisplay: "narrowSymbol",
    }).format(amount);

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

  //Process initiators

  const startProcessing = useRef(() => setIsProcessing(true));
  const stopProcessing = useRef(() => setIsProcessing(false));

  //Reset Status on path change
  useEffect(() => {
    resetStatus.current();
    stopProcessing.current();
  }, [pathname]);

  const values = {
    avatars,
    status,
    isFetching,
    isProcessing,
    formatCurrency,
    setErrorStatus: setErrorStatus.current,
    setSuccessStatus: setSuccessStatus.current,
    startProcessing: startProcessing.current,
    stopProcessing: stopProcessing.current,
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
