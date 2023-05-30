import classNames from "classnames";

function Section({ children, className }) {
  const classes = classNames("my-5", "container", className);
  return <section className={classes}>{children}</section>;
}

export default Section;
