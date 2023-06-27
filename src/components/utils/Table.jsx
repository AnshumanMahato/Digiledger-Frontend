import classNames from "classnames";

function Table({ data, config, keyFn, rowClass, onClick: handleClick }) {
  const renderedRows = data.map((el) => {
    const cellClasses = classNames(
      "py-4 sm:py-6 lg:py-8",
      "first:pl-4 sm:first:pl-6 lg:first:pl-8",
      "last:pr-4 sm:last:pr-6 lg:last:pr-8"
    );
    const renderedCells = config.map((attr) => (
      <td className={cellClasses} key={attr.label}>
        {attr.render(el)}
      </td>
    ));

    return (
      <tr
        className={rowClass || ""}
        key={keyFn(el)}
        onClick={() => handleClick?.(el)}
      >
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="container my-4 border-separate border-spacing-x-0 border-spacing-y-2">
      <tbody className="my-4">{renderedRows}</tbody>
    </table>
  );
}

export default Table;
