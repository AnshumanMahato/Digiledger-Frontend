import Button from "./utils/Button";
import pfp from "../assets/pfp_f_1.jpg";
import useUserContext from "../hooks/useUserContext";
import { NavLink } from "react-router-dom";

function Header() {
  const { user } = useUserContext();
  return (
    <header className="flex justify-between items-center w-full mb-10">
      <div className="logo ">
        <h1 className="text-3xl font-bold">Digiledger</h1>
      </div>

      {!user ? (
        <Button className="rounded-md " small>
          Sign In
        </Button>
      ) : (
        <div className="relative h-14 w-14 rounded-full hover:outline hover:outline-4 hover:outline-primary hover:outline-offset-2 transistion-all duration-100">
          <img src={pfp} alt="user-profile" className="rounded-full" />
          <nav className=" absolute -left-[50%] hidden z-10">
            <ul className="flex flex-col">
              <li>
                <NavLink>Profile</NavLink>
              </li>
              <li>
                <NavLink>Profile</NavLink>
              </li>
              <li>
                <NavLink>Profile</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
