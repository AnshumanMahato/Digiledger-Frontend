import { NavLink } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import Button from "./utils/Button";

function Nav() {
  const { user } = useUserContext();

  return (
    <nav className="flex justify-between items-center mb-2 text-xs font-sm">
      <ul className="flex justify-between items-center">
        <li>About</li>
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Nav;
