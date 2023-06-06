import Button from "./utils/Button";
import useUserContext from "../hooks/useUserContext";
import User from "./User";

function Header() {
  const { user } = useUserContext();
  return (
    <header className="flex justify-between items-center w-full mb-10">
      <div className="logo ">
        <h1 className="text-3xl font-bold">Digiledger</h1>
      </div>

      {!user ? (
        <Button className="rounded-md" to="/signin" small>
          Sign In
        </Button>
      ) : (
        <User />
      )}
    </header>
  );
}

export default Header;
