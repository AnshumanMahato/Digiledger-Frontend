function Pagination({ currentPage, totalPages, updatePage }) {
  const handleClickPrev = () => {
    updatePage(currentPage - 1);
  };

  const handleClickNext = () => {
    updatePage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-l"
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
    </div>
  );
}

export default Pagination;
