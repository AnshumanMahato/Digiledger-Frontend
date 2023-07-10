import classNames from "classnames";

function Status({ status, message }) {
  const classes = classNames(
    "fixed top-0 left-[50%] z-[9999]",
    "transform translate-x-[-50%]",
    "text-white text-center text-lg",
    "p-4 rounded-b-lg",
    {
      "bg-red-500": status === "error",
      "bg-green-500": status === "success",
      "bg-amber-400": status === "warn",
    }
  );

  return <div className={classes}>{message}</div>;
}

export default Status;
