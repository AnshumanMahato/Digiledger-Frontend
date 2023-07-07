import classNames from "classnames";

function Section({ children, className }) {
  const classes = classNames("my-5", "px-[7%]", "w-full", className);
  return <section className={classes}>{children}</section>;
}

export default Section;
