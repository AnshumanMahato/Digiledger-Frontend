import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import RenderedOption from "./RenderedOptions";

function SortOptions({ current, update }) {
  const options = [
    {
      label: (
        <>
          Amount <AiOutlineArrowUp />
        </>
      ),
      value: "amount",
    },
    {
      label: (
        <>
          Amount <AiOutlineArrowDown />
        </>
      ),
      value: "-amount",
    },
    {
      label: "Oldest",
      value: "timestamp",
    },
    {
      label: "Latest",
      value: "-timestamp",
    },
  ];

  return (
    <ul className="overflow-auto h-full">
      {<RenderedOption options={options} current={current} update={update} />}
    </ul>
  );
}

export default SortOptions;
