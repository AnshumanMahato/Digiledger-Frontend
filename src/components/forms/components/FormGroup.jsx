import classNames from "classnames";

function FormGroup({ children, className }) {
  const classes = classNames(" mb-6 last:mb-0", className);
  return <div className={classes}>{children}</div>;
}

export default FormGroup;
