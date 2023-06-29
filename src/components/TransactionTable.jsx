import { useState } from "react";
import Table from "./utils/Table";
import classNames from "classnames";
import Modal from "./Modal";
import TransactionViewForm from "./formComponents/TransactionViewForm";
import useUserContext from "../hooks/useUserContext";
import formatCurrency from "../utils/formatCurrency";

function TransactionTable({ transactions, onClick }) {
  const { currentUser } = useUserContext();
  const [activeTransaction, setActiveTransaction] = useState(null);

  const showTransaction = (transaction) => setActiveTransaction(transaction);

  const config = [
    {
      label: "Transaction detail",
      render: (transaction) => {
        const date = new Date(transaction.timestamp * 1);
        return (
          <div className=" mr-3">
            <p className="text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap">
              {transaction.party}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400">{`${new Intl.DateTimeFormat(
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
          "flex justify-end items-center font-medium text-base sm:text-lg lg:text-xl whitespace-nowrap sm:mr-3",
          {
            "sm:invisible": transaction.type === "expense",
          }
        );

        const amount = formatCurrency(
          transaction.amount,
          currentUser.currency,
          currentUser.valueSystem
        );

        return (
          <div className={classes}>
            {transaction.type === "income" && (
              <p className=" text-green-400">{`+${amount}`}</p>
            )}
            {transaction.type === "expense" && (
              <p className=" text-red-400">{`-${amount}`}</p>
            )}
          </div>
        );
      },
    },
    {
      label: "Expense",
      render: (transaction) => {
        const classes = classNames(
          "hidden sm:flex justify-end items-center text-base sm:text-lg lg:text-xl font-medium whitespace-nowrap",
          {
            "sm:invisible": transaction.type === "income",
          }
        );

        const amount = formatCurrency(
          transaction.amount,
          currentUser.currency,
          currentUser.valueSystem
        );

        return (
          <div className={classes}>
            {transaction.type === "income" && (
              <p className="text-lg text-green-400">{`+${amount}`}</p>
            )}
            {transaction.type === "expense" && (
              <p className="text-lg text-red-400">{`-${amount}`}</p>
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
        rowClass="transaction"
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
