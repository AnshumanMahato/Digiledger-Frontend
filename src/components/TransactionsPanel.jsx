import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import TransactionTable from "./TransactionTable";
import Button from "./Button";
function TransactionsPanel() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const totalPages = 1;
  const transactions = [
    {
      date: "1669668738",
      party: "Alta Blaszczynski",
      amount: 166498.95,
      type: "expense",
      description: "Maecenas tincidunt lacus at velit.",
    },
    {
      date: "1655167165",
      party: "Rickard Shalliker",
      amount: 24645.35,
      type: "income",
      description: "Mauris sit amet eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <div></div>
      </div>
      <TransactionTable transactions={transactions} />
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="bg-blue-500 text-white font-bold py-2 px-4">
          {currentPage}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <Button warning>Text</Button>
      </div>
    </div>
  );
}

export default TransactionsPanel;
