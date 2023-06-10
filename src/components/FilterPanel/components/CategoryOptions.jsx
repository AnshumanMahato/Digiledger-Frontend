import RenderedOption from "./RenderedOptions";

function CategoryOptions({ current, update, options }) {
  options = options.map((option) => ({ label: option, value: option }));

  return (
    <ul className="overflow-auto h-full">
      {<RenderedOption options={options} current={current} update={update} />}
    </ul>
  );
}

export default CategoryOptions;
