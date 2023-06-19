import classNames from "classnames";
import Table from "./utils/Table";

function AnalyticsTable({ type, data }) {
  const config = [
    {
      label: "Name",
      render: (el) => (
        <p className="text-base text-white font-medium">
          {el.category || el.party}
        </p>
      ),
    },
    {
      label: "Amount",
      render: (el) => {
        const classes = classNames(
          "flex justify-end items-center text-lg font-medium",
          {
            "text-red-400": type === "expense",
            "text-green-400": type === "income",
          }
        );

        return (
          <div className={classes}>
            {type === "income" && <p>{`+₹${el.amount}`}</p>}
            {type === "expense" && <p>{`-₹${el.amount}`}</p>}
          </div>
        );
      },
    },
  ];

  const keyFn = (el) => el.category || el.party;

  return <Table data={data} config={config} keyFn={keyFn} />;
}

export default AnalyticsTable;
