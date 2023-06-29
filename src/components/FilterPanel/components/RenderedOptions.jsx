import classNames from "classnames";

function RenderedOption({ options, current, update }) {
  return (
    <>
      {options.map((option) => {
        const classes = classNames(
          "flex",
          "items-center",
          "p-4 xs:p-6 md:p-8",
          "text-sm xs:text-base md:text-xl lg:text-2xl",
          "cursor-pointer",
          {
            "text-primary border border-y-primary": current === option.value,
          }
        );
        return (
          <li
            key={option.value}
            onClick={() => update(option.value)}
            className={classes}
          >
            {option.label}
          </li>
        );
      })}
    </>
  );
}

export default RenderedOption;
