import classNames from "classnames";

function Section({ children, className }) {
  const classes = classNames("my-5", "px-[7%]", "container", className);
  return <section className={classes}>{children}</section>;
}

export default Section;
