import classNames from "classnames";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Actions from "./components/Actions";
import { useState } from "react";
import FilterOptions from "./components/FilterOptions";

function FilterPanel({ showFilters, onClose }) {
  const [option, setOption] = useState("sort");

  const handleSidebarClick = (option) => setOption(option);

  const filterOptions = [
    {
      label: "Sort By",
      option: "sort",
    },
    {
      label: "Category",
      option: "category",
    },
    {
      label: "Party",
      option: "party",
    },
  ];

  const classes = classNames(
    "bg-accent fixed w-full h-full top-0 left-0 transform transition-transform duration-300 grid grid-cols-[1fr_2fr] grid-rows-[1fr_10fr_1fr]",
    { "translate-x-[100%]": !showFilters }
  );
  return (
    <div className={classes}>
      <Header onClick={onClose} />
      <Sidebar
        filterOptions={filterOptions}
        onClick={handleSidebarClick}
        option={option}
      />
      <FilterOptions option={option} />
      <Actions />
    </div>
  );
}

export default FilterPanel;
