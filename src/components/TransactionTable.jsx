import { useState } from "react";
import Table from "./utils/Table";
import classNames from "classnames";
import Modal from "./Modal";
import TransactionViewForm from "./formComponents/TransactionViewForm";

function TransactionTable({ transactions, onClick }) {
  const [activeTransaction, setActiveTransaction] = useState(null);

  const showTransaction = (transaction) => setActiveTransaction(transaction);

  const config = [
    {
      label: "Transaction detail",
      render: (transaction) => {
        const date = new Date(transaction.timestamp * 1);
        return (
          <div className="">
            <p className="text-md font-medium whitespace-nowrap">
              {transaction.party}
            </p>
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
      label: "Income",
      render: (transaction) => {
        const classes = classNames(
          "flex justify-end items-center font-medium",
          {
            "sm:invisible": transaction.type === "expense",
          }
        );
        return (
          <div className={classes}>
            {transaction.type === "income" && (
              <p className="text-lg text-green-400">{`+$${transaction.amount}`}</p>
            )}
            {transaction.type === "expense" && (
              <p className="text-lg text-red-400">{`-$${transaction.amount}`}</p>
            )}
          </div>
        );
      },
    },
    {
      label: "Expense",
      render: (transaction) => {
        const classes = classNames(
          "hidden sm:flex justify-end items-center font-medium",
          {
            "sm:invisible": transaction.type === "income",
          }
        );
        return (
          <div className={classes}>
            {transaction.type === "income" && (
              <p className="text-lg text-green-400">{`+$${transaction.amount}`}</p>
            )}
            {transaction.type === "expense" && (
              <p className="text-lg text-red-400">{`-$${transaction.amount}`}</p>
            )}
          </div>
        );
      },
    },
  ];

  const keyFn = (transaction) => transaction._id;

  return (
    <>
      <Table
        data={transactions}
        config={config}
        keyFn={keyFn}
        onClick={onClick || showTransaction}
      />
      {activeTransaction && (
        <Modal onClose={() => setActiveTransaction(null)}>
          <TransactionViewForm
            onClose={() => setActiveTransaction(null)}
            transaction={activeTransaction}
          />
        </Modal>
      )}
    </>
  );
}

export default TransactionTable;
