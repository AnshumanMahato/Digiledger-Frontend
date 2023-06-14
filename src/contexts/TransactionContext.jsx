import { createContext, useRef, useState } from "react";
import useUserContext from "../hooks/useUserContext";

const TransactionQueryContext = createContext(null);

function TransactionQueryProvider({ children }) {
  const { currentUser } = useUserContext();

  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });

  const categories = useRef(currentUser.categories);
  const parties = useRef(currentUser.parties);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setIsFetching(true);
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    setIsFetching(true);
  };

  const resetFilters = () =>
    updateFilters({
      sort: "-timestamp",
      category: null,
      party: null,
      startDate: null,
      endDate: null,
    });

  const stopFetching = () => setIsFetching(false);

  const updateCategories = (newCategories) =>
    (categories.current = newCategories);
  const updateParties = (newParties) => (parties.current = newParties);

  const values = {
    filters,
    currentPage,
    isFetching,
    categories,
    parties,
    updateCategories,
    updateParties,
    resetFilters,
    updateFilters,
    updatePage,
    stopFetching,
  };

  return (
    <TransactionQueryContext.Provider value={values}>
      {children}
    </TransactionQueryContext.Provider>
  );
}

export { TransactionQueryProvider };
export default TransactionQueryContext;
