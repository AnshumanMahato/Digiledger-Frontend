import classNames from "classnames";

function SectionHeader({ children, className }) {
  const classes = classNames(
    className,
    "text-xl xs:text-2xl",
    "font-bold",
    "w-full"
  );
  return <h2 className={classes}>{children}</h2>;
}

export default SectionHeader;
