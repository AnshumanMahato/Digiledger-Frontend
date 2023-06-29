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
  active,
  ...rest
}) {
  const classes = classnames(
    className,
    "flex items-center justify-center font-medium transition-all",
    {
      "rounded-full": rounded,
      border: !plain,
      "border-white bg-white/5 bg-blur-[10px] hover:text-primary hover:border-primary":
        !success && !warning && !danger && !plain,
      "text-primary border-primary":
        !success && !warning && !danger && !plain && active,
      "p-1 xs:px-3 md:px-4 xs:py-1.5 md:py-2 text-sm md:text-base lg:text-md":
        small,
      "p-2 xs:px-4 md:px-5 xs:py-2 md:py-3 text-sm xs:text-base md:text-lg lg:text-xl":
        !small,
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
