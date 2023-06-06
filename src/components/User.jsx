import { useState } from "react";
import pfp from "../assets/pfp_f_1.jpg";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function User() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive((current) => !current);

  const classes = classNames(
    "relative rounded-full transistion-all duration-100",
    {
      "outline outline-4 outline-primary outline-offset-2": active,
    }
  );

  const options = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Transactions", to: "/transactions" },
  ];

  const renderedOptions = options.map((option) => {
    const classes = ({ isActive }) => {
      return classNames("inline-block", "p-4", {
        "text-primary": isActive,
      });
    };
    return (
      <li>
        <NavLink to={option.to} className={classes}>
          {option.label}
        </NavLink>
      </li>
    );
  });

  return (
    <div className={classes} onClick={handleClick}>
      <img src={pfp} alt="user-profile" className="rounded-full h-14 w-14" />
      <nav
        className={`absolute left-[-50%] z-10 transition-opacity ${
          !active ? "invisible opacity-0" : ""
        }`}
      >
        <ul className=" bg-white text-accent">{renderedOptions}</ul>
      </nav>
    </div>
  );
}

export default User;
