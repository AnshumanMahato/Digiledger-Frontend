import classNames from "classnames";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Section from "../utils/Section";
import SectionHeader from "../utils/SectionHeader";
import Button from "../utils/Button";

function FilterPanel({ showFilters, onClose }) {
  const classes = classNames(
    "bg-accent fixed w-full h-full top-0 left-0 transform transition-transform duration-300",
    { "translate-x-[100%]": !showFilters }
  );
  return (
    <div className={classes}>
      <div className="bg-accent-dark flex items-center">
        <Button plain onClick={onClose}>
          <AiOutlineArrowLeft className="text-2xl " />
        </Button>
        <SectionHeader className="flex-grow text-center">Filter</SectionHeader>
      </div>
    </div>
  );
}

export default FilterPanel;
