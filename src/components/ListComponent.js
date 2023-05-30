import React, { useState } from "react";
import HorizontalCard from "./HorizontalCard";

const ListComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Example data for the cards
  const cardData = [
    {
      id: 1,
      name: "John Doe",
      date: "May 30, 2023",
      time: "10:00 AM",
      amount: "$100",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "May 31, 2023",
      time: "11:00 AM",
      amount: "$150",
    },
    {
      id: 3,
      name: "David Johnson",
      date: "June 1, 2023",
      time: "9:30 AM",
      amount: "$200",
    },
    // Add more card data here if needed
  ];

  const cardsPerPage = 3; // Number of cards to display per page
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto">
      <div className="my-4">
        {currentCards.map((card) => (
          <HorizontalCard
            key={card.id}
            name={card.name}
            date={card.date}
            time={card.time}
            amount={card.amount}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l"
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          Previous
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
      </div>
    </div>
  );
};

export default ListComponent;
