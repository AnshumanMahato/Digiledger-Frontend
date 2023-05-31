import Table from "../components/Table";
import classNames from "classnames";

function TransactionTable() {
  const data = [
    {
      date: "1669668738",
      party: "Alta Blaszczynski",
      amount: 166498.95,
      type: "expense",
      description: "Maecenas tincidunt lacus at velit.",
    },
    {
      date: "1655167165",
      party: "Rickard Shalliker",
      amount: 24645.35,
      type: "income",
      description: "Mauris sit amet eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
  ];

  const config = [
    {
      label: "Transaction detail",
      render: (transaction) => {
        const date = new Date(transaction.date * 1);
        return (
          <div className="">
            <p className="text-lg font-bold">{transaction.party}</p>
            <p className="text-sm text-gray-500">{`${new Intl.DateTimeFormat(
              "en-US",
              {
                year: "numeric",
                month: "long",
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
          <p className="text-lg font-bold">{`$${transaction.amount}`}</p>
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
            <p className="text-lg font-bold">{`-$${transaction.amount}`}</p>
          </div>
        );
      },
    },
  ];

  const keyFn = (transaction) => transaction.party;

  return <Table data={data} config={config} keyFn={keyFn}></Table>;
}

export default TransactionTable;
