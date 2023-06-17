import React, { useEffect, useRef } from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import { getTransactions } from "../services/transactionServices";
import NoTransactions from "./NoTransactions";
import useTransactionQuery from "../hooks/useTransactionQuery";
import { useOutletContext } from "react-router-dom";

function TransactionsPanel() {
  const { isFetching, setIsFetching } = useOutletContext();

  const { currentPage, filters, updatePage } = useTransactionQuery();

  const transactions = useRef([]);
  const totalPages = useRef(null);

  useEffect(() => {
    (async () => {
      const data = await getTransactions({ ...filters, page: currentPage });
      transactions.current = data.docs;
      totalPages.current = data.totalPages;
      setIsFetching(false);
    })();

    return () => setIsFetching(true);
  }, [currentPage, filters, setIsFetching]);

  return (
    <>
      {!totalPages.current && <NoTransactions />}

      {!isFetching && totalPages.current !== 0 && (
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
