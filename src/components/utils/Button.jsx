import classnames from "classnames";
import { Link } from "react-router-dom";
function Button({
  children,
  className,
  rounded,
  small,
  plain,
  success,
  warning,
  danger,
  to,
  ...rest
}) {
  const classes = classnames(
    className,
    "flex items-center font-medium transition-all",
    {
      "rounded-full": rounded,
      border: !plain,
      "border-white bg-white/5 bg-blur-[10px] hover:text-primary hover:border-primary active:text-primary active:border-primary":
        !success && !warning && !danger && !plain,
      "px-3 py-1.5 text-sm": small,
      "px-4 py-2 text-md": !small,
      "hover:text-primary active:text-primary": plain,
      "border-red-900 bg-gradient-to-r from-red-400 to-red-600": danger,
      "border-green-900 bg-gradient-to-r from-green-400 to-green-600": success,
      "border-amber-900 bg-gradient-to-r from-amber-400 to-amber-600": warning,
    }
  );
  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ success, warning, danger }) => {
    const count = Number(!!success + !!warning + !!danger);
    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
  },
};

export default Button;
