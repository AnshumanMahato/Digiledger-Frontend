import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <div className="logo ">
        <h1 className="text-slate-100 font-sans text-[25px]">DIGILEDGER</h1>
      </div>
      <FaBars className="text-slate-100 text-[32px]" />
    </header>
  );
}

export default Header;
