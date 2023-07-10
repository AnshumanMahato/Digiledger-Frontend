import { createContext, useRef, useState } from "react";
import useUserContext from "../hooks/useUserContext";
import useUtilityContext from "../hooks/useUtilityContext";

const TransactionQueryContext = createContext(null);

function TransactionQueryProvider({ children }) {
  const { currentUser } = useUserContext();
  const { startFetching } = useUtilityContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
    type: null,
  });

  const categories = useRef(currentUser.categories);
  const parties = useRef(currentUser.parties);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    startFetching();
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    startFetching();
  };

  const resetFilters = () =>
    updateFilters({
      sort: "-timestamp",
      category: null,
      party: null,
      startDate: null,
      endDate: null,
      type: null,
    });

  const updateCategories = (newCategories) =>
    (categories.current = newCategories);
  const updateParties = (newParties) => (parties.current = newParties);

  const values = {
    filters,
    currentPage,
    categories,
    parties,
    updateCategories,
    updateParties,
    resetFilters,
    updateFilters,
    updatePage,
  };

  return (
    <TransactionQueryContext.Provider value={values}>
      {children}
    </TransactionQueryContext.Provider>
  );
}

export { TransactionQueryProvider };
export default TransactionQueryContext;
