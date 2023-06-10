import Button from "./utils/Button";

function Pagination({ currentPage, totalPages, updatePage }) {
  const handleClickPrev = () => {
    updatePage(currentPage - 1);
  };

  const handleClickNext = () => {
    updatePage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4">
      <Button
        className=" rounded-l-full"
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <span className="bg-blue-500 text-white font-bold py-2 px-4">
        {currentPage}
      </span>
      <Button
        className="rounded-r-full"
        onClick={handleClickNext}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
