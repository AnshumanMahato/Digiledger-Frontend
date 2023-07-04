import React, { useEffect, useRef } from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import { getTransactions } from "../services/transactionServices";
import NoTransactions from "./NoTransactions";
import useTransactionQuery from "../hooks/useTransactionQuery";
import { useOutletContext } from "react-router-dom";
import useUIContext from "../hooks/useUIContext";

function TransactionsPanel() {
  const { isFetching, setIsFetching } = useOutletContext();
  const { setErrorStatus } = useUIContext();

  const { currentPage, filters, updatePage } = useTransactionQuery();

  const transactions = useRef([]);
  const totalPages = useRef(null);

  useEffect(() => {
    (async () => {
      const { data, err } = await getTransactions({
        ...filters,
        page: currentPage,
      });
      console.log(data, err);
      if (err) {
        setErrorStatus(err);
        transactions.current = [];
        totalPages.current = null;
      }
      if (data) {
        transactions.current = data.docs;
        totalPages.current = data.totalPages;
      }
      setIsFetching(false);
    })();

    return () => setIsFetching(true);
  }, [currentPage, filters, setIsFetching, setErrorStatus]);

  return (
    <>
      {!totalPages.current && <NoTransactions />}

      {!isFetching && !!totalPages.current && (
        <>
          <TransactionTable transactions={transactions.current} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages.current}
            updatePage={updatePage}
          />
        </>
      )}
    </>
  );
}

export default TransactionsPanel;
