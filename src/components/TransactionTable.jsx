import Table from "./Table";
import classNames from "classnames";

function TransactionTable({ transactions }) {
  console.log(transactions);
  const config = [
    {
      label: "Transaction detail",
      render: (transaction) => {
        const date = new Date(transaction.date * 1);
        return (
          <div className=" whitespace-nowrap">
            <p className="text-md font-medium">{transaction.party}</p>
            <p className="text-sm text-slate-400">{`${new Intl.DateTimeFormat(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            ).format(date)}`}</p>
          </div>
        );
      },
    },
    {
      label: "Amount",
      render: (transaction) => (
        <div className="flex justify-end items-center ml-10">
          <p className="text-lg">{`$${transaction.amount}`}</p>
        </div>
      ),
    },
    {
      label: "Amount",
      render: (transaction) => {
        const classes = classNames(
          "hidden sm:flex justify-end items-center ml-10",
          {
            invisible: transaction.type === "income",
          }
        );
        return (
          <div className={classes}>
            <p className="text-lg">{`-$${transaction.amount}`}</p>
          </div>
        );
      },
    },
  ];

  const keyFn = (transaction) => transaction.party;

  return <Table data={transactions} config={config} keyFn={keyFn}></Table>;
}

export default TransactionTable;
