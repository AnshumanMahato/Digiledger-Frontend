import classNames from "classnames";
import Table from "./utils/Table";
import useUtilityContext from "../hooks/useUtilityContext";

function AnalyticsTable({ type, data }) {
  const { formatCurrency } = useUtilityContext();
  const config = [
    {
      label: "Name",
      render: (el) => (
        <p className="text-sm sm:text-base lg:text-xl text-white font-medium">
          {el.category || el.party}
        </p>
      ),
    },
    {
      label: "Amount",
      render: (el) => {
        const classes = classNames(
          "flex justify-end items-center text-sm sm:text-base lg:text-xl whitespace-nowrap font-medium",
          {
            "text-red-400": type === "expense",
            "text-green-400": type === "income",
          }
        );

        const amount = formatCurrency(el.amount);

        return (
          <div className={classes}>
            {type === "income" && <p>{`+${amount}`}</p>}
            {type === "expense" && <p>{`-${amount}`}</p>}
          </div>
        );
      },
    },
  ];

  const keyFn = (el) => el.category || el.party;

  return <Table data={data} config={config} keyFn={keyFn} />;
}

export default AnalyticsTable;
