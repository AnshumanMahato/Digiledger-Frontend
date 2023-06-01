import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import NavButton from "./NavButton";

function Nav() {
  return (
    <nav className="container flex justify-between items-center mb-2 text-xs font-sm">
      <NavButton to="/dashboard">
        <AiOutlineArrowLeft className=" mr-2" />
        Dashboard
      </NavButton>
      <NavButton to="/transactions">
        Transactions
        <AiOutlineArrowRight className=" ml-2" />
      </NavButton>
    </nav>
  );
}

export default Nav;
