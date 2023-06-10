import React, { useEffect, useRef, useState } from "react";
import { BsFilter } from "react-icons/bs";
import TransactionTable from "./TransactionTable";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import Button from "./utils/Button";
import Loading from "./Loading";
import { getTransactions } from "../services/transactionServices";

function TransactionsPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });

  const transactions = useRef([]);
  const totalPages = useRef(null);

  useEffect(() => {
    (async () => {
      const { data } = await getTransactions({ ...filters, page: currentPage });
      transactions.current = data.docs;
      setIsLoading(false);
    })();
  }, [currentPage, filters]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setIsLoading(true);
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    setIsLoading(true);
  };

  const handleFilterPanel = () => {
    setShowFilters((current) => !current);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="flex-grow"></div>
        <Button
          className="border-2 rounded-md ml-5 flex items-center"
          onClick={handleFilterPanel}
        >
          <BsFilter />
          <span className="ml-2">Filter</span>
        </Button>
      </div>
      {!isLoading && <TransactionTable transactions={transactions.current} />}
      <Pagination />
      <FilterPanel
        showFilters={showFilters}
        filters={filters}
        updateFilters={updateFilters}
        onClose={handleFilterPanel}
      />
    </div>
  );
}

export default TransactionsPanel;
