import { NavLink } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import classNames from "classnames";

function Nav() {
  const classes = ({ isActive, isPending }) => {
    console.log(isActive, isPending);
    return classNames("flex", "items-center", {
      invisible: isActive,
    });
  };
  return (
    <nav className="container flex justify-between items-center mb-2 text-md font-medium">
      <NavLink to="/dashboard" className={classes}>
        <AiOutlineArrowLeft className=" mr-2" />
        Dashboard
      </NavLink>
      <NavLink to="/transactions" className={classes}>
        Transactions
        <AiOutlineArrowRight className=" ml-2" />
      </NavLink>
    </nav>
  );
}

export default Nav;
