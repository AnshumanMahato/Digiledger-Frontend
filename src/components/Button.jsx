import classnames from "classnames";
function Button({
  children,
  className,
  rounded,
  small,
  success,
  warning,
  danger,
  ...rest
}) {
  const classes = classnames(
    className,
    "flex items-center border font-medium transition-shadow",
    {
      "rounded-full": rounded,
      "border-white bg-white/5": !success && !warning && !danger,
      "px-3 py-1.5 text-sm": small,
      "px-5 py-3 text-xl": !small,
      "border-red-900 bg-gradient-to-r from-red-400 to-red-600": danger,
      "border-green-900 bg-gradient-to-r from-green-400 to-green-600": success,
      "border-amber-900 bg-gradient-to-r from-amber-400 to-amber-600": warning,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ success, warning, danger }) => {
    const count = Number(!!success + !!warning + !!danger);
    if (count < 1)
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
  },
};

export default Button;
