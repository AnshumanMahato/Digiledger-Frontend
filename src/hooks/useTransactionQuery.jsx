import { useContext } from "react";
import TransactionQueryContext from "../contexts/TransactionContext";

const useTransactionQuery = () => useContext(TransactionQueryContext);

export default useTransactionQuery;
