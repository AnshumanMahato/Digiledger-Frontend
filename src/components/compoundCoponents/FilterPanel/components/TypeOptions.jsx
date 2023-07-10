import RenderedOption from "./RenderedOptions";

function TypeOptions({ current, update }) {
  const options = [
    {
      label: "Income",
      value: "income",
    },
    {
      label: "Expense",
      value: "expense",
    },
  ];

  return (
    <ul className="overflow-auto h-full">
      {<RenderedOption options={options} current={current} update={update} />}
    </ul>
  );
}

export default TypeOptions;
