import classNames from "classnames";

function Table({ data, config, keyFn, active, onClick: handleClick }) {
  const renderedRows = data.map((el) => {
    const cellClasses = classNames("py-4 first:pl-4 last:pr-4");
    const renderedCells = config.map((attr) => (
      <td className={cellClasses} key={attr.label}>
        {attr.render(el)}
      </td>
    ));

    return (
      <tr
        className="transaction"
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
