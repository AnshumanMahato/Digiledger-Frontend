import { Link, useLocation } from "react-router-dom";

import Button from "./utils/Button";
import useUserContext from "../hooks/useUserContext";
import User from "./User";

function Header() {
  const { currentUser } = useUserContext();
  const { pathname } = useLocation();
  return (
    <header className="flex justify-between items-center w-full mb-10">
      <div className="logo ">
        <h1 className="text-3xl font-bold">
          <Link to="/">Digiledger</Link>
        </h1>
      </div>

      {pathname !== "/signin" && pathname !== "/signup" ? (
        !currentUser ? (
          <Button className="rounded-md" to="/signin" small>
            Sign In
          </Button>
        ) : (
          <User />
        )
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
