import classNames from "classnames";

function Sidebar({
  classnames,
  filterOptions,
  option,
  onClick: handleOptionClick,
}) {
  const renderedListItems = filterOptions.map((filter) => {
    const classes = classNames(
      "py-4 xs:py-6 md:p-8",
      "text-sm xs:text-base md:text-xl lg:text-2xl",
      "border border-accent-dark/75 cursor-pointer",
      {
        "bg-accent-dark/50": option === filter.option,
      }
    );

    return (
      <li
        className={classes}
        onClick={() => handleOptionClick(filter.option)}
        key={filter.option}
      >
        {filter.label}
      </li>
    );
  });

  return (
    <div className="col-span-1 row-span-2 border-r-[2px] border-accent-dark/75">
      <ul className="flex flex-col justify-start text-center">
        {renderedListItems}
      </ul>
    </div>
  );
}

export default Sidebar;
