import { createContext, useRef, useState } from "react";

const TransactionContext = createContext(null);

function TransactionProvider({ children }) {
  const [synchronized, setSynchronized] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });

  const transactions = useRef([]);
  const totalPages = useRef(null);

  const updateSyncState = (state) => setSynchronized(state);
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
    setIsLoading(true);
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    setIsLoading(true);
  };

  const values = {
    transactions,
    totalPages,
    synchronized,
    filters,
    currentPage,
    updateSyncState,
    updateFilters,
    updatePage,
  };

  return (
    <TransactionContext.Provider value={values}>
      {children}
    </TransactionContext.Provider>
  );
}
