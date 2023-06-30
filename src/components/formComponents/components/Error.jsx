import classNames from "classnames";

function Status({ type, children }) {
  const classes = classNames("px-5", "text-center text-xs", {
    "text-red-500": type === "error",
    "text-green-500": type === "success",
  });
  return (
    <p className={classes}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </p>
  );
}

export default Status;
