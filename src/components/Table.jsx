import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedRows = data.map((el) => {
    const renderedCells = config.map((attr) => (
      <td className="py-4" key={attr.label}>
        {attr.render(el)}
      </td>
    ));

    return (
      <tr className="" key={keyFn(el)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="container border-separate px-4">
      <tbody className="my-4">{renderedRows}</tbody>
    </table>
  );
}

export default Table;
