import React, { useEffect, useRef } from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import { getTransactions } from "../services/transactionServices";
import NoTransactions from "./NoTransactions";
import useTransactionQuery from "../hooks/useTransactionQuery";
import useUtilityContext from "../hooks/useUtilityContext";
import Loading from "./Loading";

function TransactionsPanel() {
  const { isFetching, setErrorStatus, startFetching, stopFetching } =
    useUtilityContext();

  const { currentPage, filters, updatePage } = useTransactionQuery();

  const transactions = useRef([]);
  const totalPages = useRef(null);

  useEffect(() => {
    (async () => {
      const { data, err } = await getTransactions({
        ...filters,
        page: currentPage,
      });

      if (err) {
        setErrorStatus(err);
        transactions.current = [];
        totalPages.current = null;
      } else {
        transactions.current = data.docs;
        totalPages.current = data.totalPages;
      }
      stopFetching();
    })();

    return () => startFetching();
  }, [currentPage, filters, startFetching, stopFetching, setErrorStatus]);

  return (
    <>
      {isFetching && <Loading />}

      {!isFetching && !totalPages.current && <NoTransactions />}

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
