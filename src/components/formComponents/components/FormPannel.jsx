import classNames from "classnames";

function FormPannel({ children, className, onSubmit: submit }) {
  const classes = classNames(
    "relative px-5 py-8 sm:px-8 sm:py-10 my-10 rounded-2xl",
    "border-2 border-white shadow-white/50 shadow-md",
    "bg-accent text-white font-poppins",
    className
  );

  return (
    <form onSubmit={submit} className={classes}>
      {children}
    </form>
  );
}

export default FormPannel;
