import { useEffect, useRef, useState } from "react";
import pfp from "../assets/pfp_f_1.jpg";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

function User() {
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
    "relative rounded-full transistion-all duration-100",
    {
      "outline outline-4 outline-primary outline-offset-2": active,
    }
  );

  const options = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Transactions", to: "/transactions" },
    { label: "Analytics", to: "/analytics" },
    { label: "Logout", to: "/logout" },
  ];

  const renderedOptions = options.map((option) => {
    const classes = ({ isActive }) => {
      return classNames("inline-block", "p-4", {
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
    <div className={classes} onClick={handleClick}>
      <img src={pfp} alt="user-profile" className="rounded-full h-14 w-14" />
      <nav
        ref={refEl}
        className={`absolute top-[120%] left-[-50%] z-10 transition-opacity transform translate-x-[-60%] ${
          !active ? "invisible opacity-0" : ""
        }`}
      >
        <ul className=" bg-white text-accent">{renderedOptions}</ul>
      </nav>
    </div>
  );
}

export default User;
