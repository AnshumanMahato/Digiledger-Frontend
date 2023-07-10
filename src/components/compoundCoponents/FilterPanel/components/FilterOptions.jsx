import CategoryOptions from "./CategoryOptions";
import PartyOptions from "./PartyOptions";
import SortOptions from "./SortOptions";

function FilterOptions({ option }) {
  return (
    <div>
      {option === "sort" && <SortOptions />}
      {option === "category" && <CategoryOptions />}
      {option === "party" && <PartyOptions />}
    </div>
  );
}

export default FilterOptions;
