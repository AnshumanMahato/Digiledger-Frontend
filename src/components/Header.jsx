import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center w-full mb-10">
      <div className="logo ">
        <h1 className="text-[25px]">DIGILEDGER</h1>
      </div>
      <FaBars className="text-[32px]" />
    </header>
  );
}

export default Header;
