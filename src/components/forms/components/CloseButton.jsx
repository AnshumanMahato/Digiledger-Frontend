import { AiOutlineClose } from "react-icons/ai";

function CloseButton({ onClick: close }) {
  return (
    <span
      onClick={close}
      className="text-white text-xl font-bold absolute right-[5%] top-[5%] p-1 hover:text-red-400 cursor-pointer"
    >
      <AiOutlineClose />
    </span>
  );
}

export default CloseButton;
