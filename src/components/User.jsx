import { useEffect, useRef, useState } from "react";
import pfpDefault from "../assets/default.jpg";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
function User({ pfp }) {
  const [active, setActive] = useState(false);

  const refEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!refEl.current) return;

      if (!refEl.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const handleClick = () => setActive((current) => !current);

  const classes = classNames(
    "relative rounded-full transistion-all duration-100 cursor-pointer",
    {
      "outline outline-4 outline-primary outline-offset-2": active,
    }
  );

  const options = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Transactions", to: "/transactions" },
    { label: "Analytics", to: "/analytics" },
    { label: "Settings", to: "/settings" },
    { label: "Logout", to: "/logout" },
  ];

  const renderedOptions = options.map((option) => {
    const classes = ({ isActive }) => {
      return classNames("inline-block", "p-4 sm:p-6", "sm:text-lg", {
        "text-primary": isActive,
      });
    };
    return (
      <li key={option.label}>
        <NavLink to={option.to} className={classes}>
          {option.label}
        </NavLink>
      </li>
    );
  });

  return (
    <div ref={refEl} className={classes} onClick={handleClick}>
      <img
        src={pfp || pfpDefault}
        alt="user-profile"
        className="rounded-full h-14 w-14 sm:h-20 sm:w-20"
      />
      <nav
        className={`absolute top-[120%] right-0 z-10 transition-opacity transform ${
          !active ? "invisible opacity-0" : ""
        }`}
      >
        <ul className=" bg-white text-accent">{renderedOptions}</ul>
      </nav>
    </div>
  );
}

export default User;
