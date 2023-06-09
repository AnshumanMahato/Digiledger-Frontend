import React, { useEffect, useRef, useState } from "react";
import { BsFilter } from "react-icons/bs";
import TransactionTable from "./TransactionTable";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";
import Button from "./utils/Button";
import { getTransactions } from "../services/transactionServices";

function TransactionsPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    sort: "-timestamp",
    category: null,
    party: null,
    startDate: null,
    endDate: null,
  });
  let data = useRef();
  useEffect(() => {
    (async () => {
      data.current = await getTransactions({ ...filters, page: currentPage });
    })();
  }, [currentPage, filters]);

  const updateFilters = (newFilters) => setFilters(newFilters);
  const updatePage = (newPage) => setCurrentPage(newPage);

  const handleFilterPanel = () => {
    setShowFilters((current) => !current);
  };

  const transactions = [
    {
      timestamp: "1669668738",
      party: "Alta Blaszczynski",
      amount: 166498.95,
      type: "expense",
      description: "Maecenas tincidunt lacus at velit.",
    },
    {
      timestamp: "1655167165",
      party: "Rickard Shalliker",
      amount: 24645.35,
      type: "income",
      description: "Mauris sit amet eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      timestamp: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
  ];

  return (
    <div className="container mx-auto">
      {console.log(data.current)}
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
      <TransactionTable transactions={transactions} />
      <Pagination />
      {
        <FilterPanel
          showFilters={showFilters}
          filters={filters}
          updateFilters={updateFilters}
          onClose={handleFilterPanel}
        />
      }
    </div>
  );
}

export default TransactionsPanel;
