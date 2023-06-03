import Button from "../../utils/Button";

function Actions({ applyFilters, clearFilters }) {
  return (
    <div className="col-start-2 row-start-3 flex justify-evenly items-center p-3">
      <Button success onClick={applyFilters}>
        Apply
      </Button>
      <Button danger onClick={clearFilters}>
        Clear
      </Button>
    </div>
  );
}

export default Actions;
