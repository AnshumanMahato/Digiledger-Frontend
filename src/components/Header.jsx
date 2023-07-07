import { useLocation } from "react-router-dom";
import Button from "./utils/Button";
import useUserContext from "../hooks/useUserContext";
import User from "./User";
import useUtilityContext from "../hooks/useUtilityContext";

const getTitle = (path, username) => {
  switch (path) {
    case "/dashboard":
      return `Hey ${username?.split(" ")[0]}`;
    case "/transactions":
      return "Transaction Manager";
    case "/analytics":
      return "Analytics";
    case "/settings":
      return "Settings";
    default:
      return "Digiledger";
  }
};

function Header() {
  const { currentUser } = useUserContext();
  const { avatars } = useUtilityContext();
  const { pathname } = useLocation();
  return (
    <header className="flex justify-between items-center w-full mb-10 p-[7%] bg-accent-dark/50">
      <div className="logo w-[60%]">
        <span className="text-3xl sm:text-4xl font-bold">
          {getTitle(pathname, currentUser?.name)}
        </span>
      </div>

      {pathname !== "/signin" && pathname !== "/signup" ? (
        !currentUser ? (
          <Button className="rounded-md" to="/signin" small>
            Sign In
          </Button>
        ) : (
          <User pfp={avatars.get(currentUser.photo)} />
        )
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
