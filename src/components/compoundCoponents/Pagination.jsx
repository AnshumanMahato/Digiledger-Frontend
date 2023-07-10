import Button from "../utils/Button";

function Pagination({ currentPage, totalPages, updatePage }) {
  const handleClickPrev = () => {
    updatePage(currentPage - 1);
  };

  const handleClickNext = () => {
    updatePage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <Button
        className=" rounded-l-full"
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        Prev
      </Button>
      <span className="text-white font-bold mx-4 sm:text-lg lg:text-xl">
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
