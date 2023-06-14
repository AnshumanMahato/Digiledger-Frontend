import { createContext, useState } from "react";

const TransactionQueryContext = createContext(null);

function TransactionQueryProvider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });

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

  const values = {
    filters,
    currentPage,
    isFetching,
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
