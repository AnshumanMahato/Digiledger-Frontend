import { useReducer, useState, useEffect } from "react";
import classNames from "classnames";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Actions from "./components/Actions";
import SortOptions from "./components/SortOptions";
import CategoryOptions from "./components/CategoryOptions";
import PartyOptions from "./components/PartyOptions";
import useTransactionQuery from "../../../hooks/useTransactionQuery";

const SET_PREV_FILTERS = -1;
const RESET = 0;
const SET_SORT_FIELD = 1;
const SET_CATEGORY_FIELD = 2;
const SET_PARTY_FIELD = 3;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PREV_FILTERS:
      return { ...action.prevFilters };
    case RESET:
      return {
        sort: "-timestamp",
        category: null,
        party: null,
        startDate: null,
        endDate: null,
      };
    case SET_SORT_FIELD:
      return { ...state, sort: action.value };
    case SET_CATEGORY_FIELD:
      return { ...state, category: action.value };
    case SET_PARTY_FIELD:
      return { ...state, party: action.value };
    default:
      return { ...state };
  }
};

function FilterPanel({ showFilters, onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const { categories, parties, filters, updateFilters, resetFilters } =
    useTransactionQuery();

  const [option, setOption] = useState("sort");
  const [selectedFilters, dispatch] = useReducer(reducer, { ...filters });

  const updateSortField = (value) => dispatch({ type: SET_SORT_FIELD, value });
  const updateCategoryField = (value) =>
    dispatch({ type: SET_CATEGORY_FIELD, value });
  const updatePartyField = (value) =>
    dispatch({ type: SET_PARTY_FIELD, value });

  const handleSidebarClick = (option) => setOption(option);
  const handleClose = () => {
    dispatch({
      type: SET_PREV_FILTERS,
      prevFilters: filters,
    });
    setOption("sort");
    onClose();
  };
  const applyFilters = () => {
    updateFilters({ ...selectedFilters });
    onClose();
  };
  const clearFilters = () => {
    dispatch({ type: RESET });
    resetFilters();
    onClose();
  };

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
    "bg-accent fixed w-full h-screen top-0 left-0",
    "transform transition-transform duration-300",
    "grid grid-cols-[1fr_2fr] grid-rows-[10vh_80vh_10vh]",
    { "translate-x-[100%]": !showFilters }
  );
  return (
    <div className={classes}>
      <Header onClick={handleClose} />
      <Sidebar
        filterOptions={filterOptions}
        onClick={handleSidebarClick}
        option={option}
      />
      <div className="row-start-2 row-end-3 col-start-2">
        {option === "sort" && (
          <SortOptions
            current={selectedFilters.sort}
            update={updateSortField}
          />
        )}

        {option === "category" && (
          <CategoryOptions
            current={selectedFilters.category}
            update={updateCategoryField}
            options={categories.current}
          />
        )}

        {option === "party" && (
          <PartyOptions
            current={selectedFilters.party}
            update={updatePartyField}
            options={parties.current}
          />
        )}
      </div>
      <Actions applyFilters={applyFilters} clearFilters={clearFilters} />
    </div>
  );
}

export default FilterPanel;
