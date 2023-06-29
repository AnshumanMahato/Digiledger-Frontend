import { AiOutlineArrowLeft } from "react-icons/ai";
import SectionHeader from "../../utils/SectionHeader";
import Button from "../..//utils/Button";

function Header({ onClick }) {
  return (
    <div className="bg-accent-dark flex items-center col-span-full px-3">
      <Button plain onClick={onClick}>
        <AiOutlineArrowLeft className="text-xl xs:text-2xl" />
      </Button>
      <SectionHeader className="flex-grow text-center">Filter</SectionHeader>
    </div>
  );
}

export default Header;
