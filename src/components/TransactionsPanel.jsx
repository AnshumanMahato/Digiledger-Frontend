import React, { useEffect, useRef } from "react";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import { getTransactions } from "../services/transactionServices";
import NoTransactions from "./NoTransactions";

function TransactionsPanel({
  currentPage,
  filters,
  updatePage,
  isLoading,
  onLoad,
}) {
  const transactions = useRef([]);
  const totalPages = useRef(null);

  useEffect(() => {
    (async () => {
      const data = await getTransactions({ ...filters, page: currentPage });
      transactions.current = data.docs;
      totalPages.current = data.totalPages;
      onLoad();
    })();
  }, [currentPage, filters, onLoad]);

  return (
    <>
      {!totalPages.current && <NoTransactions />}

      {!isLoading && totalPages.current !== 0 && (
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
