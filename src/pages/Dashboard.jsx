import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/utils/SectionHeader";
import Section from "../components/utils/Section";
import TransactionTable from "../components/TransactionTable";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import NoTransactions from "../components/NoTransactions";
import { useEffect, useRef } from "react";
import {
  getCurrentMonthStats,
  getTransactions,
} from "../services/transactionServices";

function Dashboard() {
  const navigate = useNavigate();
  const { isFetching, setIsFetching } = useOutletContext();
  // const { transactions, overall } = useLoaderData();

  const transactions = useRef([]),
    monthlydata = useRef({
      income: 0,
      expense: 0,
    });

  useEffect(() => {
    (async () => {
      const limit = 5,
        sort = "-timestamp";
      const { docs } = await getTransactions({ limit, sort });
      const {
        data: { overall },
      } = await getCurrentMonthStats();
      transactions.current = docs;
      monthlydata.current = overall;
      setIsFetching(false);
    })();

    return () => setIsFetching(true);
  }, [setIsFetching]);

  const handleClick = () => {
    navigate("/transactions");
  };

  return (
    !isFetching && (
      <main className="flex flex-col justify-evenly items-center w-full flex-grow">
        <Section className="flex flex-col items-center mb-8">
          <SectionHeader className="relative z-1 mb-8">
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              year: "numeric",
            }).format(new Date())}
          </SectionHeader>
          <BalanceCard
            income={monthlydata.current.income || 0}
            expense={monthlydata.current.expense || 0}
          />
        </Section>

        <Section className="flex flex-col items-center">
          <div className="container flex justify-between items-center mb-2">
            <SectionHeader>Transactions</SectionHeader>
            <Link
              to="/transactions"
              className=" whitespace-nowrap hover:text-primary active:text-primary transition-colors"
            >
              See All
            </Link>
          </div>

          {transactions.current.length === 0 ? (
            <NoTransactions />
          ) : (
            <TransactionTable
              transactions={transactions.current}
              onClick={handleClick}
            />
          )}
        </Section>
      </main>
    )
  );
}

export default Dashboard;
