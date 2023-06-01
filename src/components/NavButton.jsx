import { NavLink } from "react-router-dom";
import classNames from "classnames";

function NavButton({ children, to }) {
  const classes = (isActive) => {
    return classNames(
      "flex",
      "items-center",
      "py-2 px-4",
      "border",
      "border-primary glass",
      "rounded-full",
      "transition-shadow",
      "shadow-primary shadow-md hover:shadow-lg hover:shadow-primary",
      {
        invisible: isActive,
      }
    );
  };
  return (
    <NavLink to={to} className={({ isActive }) => classes(isActive)}>
      {children}
    </NavLink>
  );
}

export default NavButton;
