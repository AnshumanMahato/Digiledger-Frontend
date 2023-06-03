import classNames from "classnames";

function RenderedOption({ options, current, update }) {
  return (
    <>
      {options.map((option) => {
        const classes = classNames(
          "flex",
          "items-center",
          "p-6",
          "text-lg",
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
