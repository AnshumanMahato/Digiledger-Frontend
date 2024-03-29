import BalanceCard from "../components/compoundCoponents/BalanceCard";
import SectionHeader from "../components/utils/SectionHeader";
import Section from "../components/layouts/Section";
import TransactionTable from "../components/tables/TransactionTable";
import { Link, useNavigate } from "react-router-dom";
import NoTransactions from "../components/utils/NoTransactions";
import { useEffect, useRef } from "react";
import { getStats, getTransactions } from "../services/transactionServices";
import useUtilityContext from "../hooks/useUtilityContext";
import Loading from "../components/utils/Loading";

function Dashboard() {
  const navigate = useNavigate();
  const { isFetching, setErrorStatus, startFetching, stopFetching } =
    useUtilityContext();

  const transactions = useRef([]),
    monthlydata = useRef({
      income: 0,
      expense: 0,
    });

  useEffect(() => {
    (async () => {
      const limit = 3,
        sort = "-timestamp";

      const today = new Date();
      const monthStart = new Date(today.getFullYear(), today.getMonth(), 1),
        monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

      const { data: transactionData, err: e1 } = await getTransactions({
        limit,
        sort,
      });

      const { data: stats, err: e2 } = await getStats(
        monthStart.getTime(),
        monthEnd.getTime()
      );

      if (e1 || e2) {
        setErrorStatus(e1 || e2);
      } else {
        transactions.current = transactionData.docs;
        monthlydata.current = stats.overall;
      }
      stopFetching();
    })();

    return () => startFetching();
  }, [startFetching, stopFetching, setErrorStatus]);

  const handleClick = () => {
    navigate("/transactions");
  };

  return (
    <>
      {isFetching && <Loading />}
      {!isFetching && (
        <main className="flex flex-col justify-evenly items-center w-full flex-grow xl:flex-row xl:items-stretch xl:px-[7%]">
          <Section className="flex flex-col items-center mb-8 xl:p-0">
            <SectionHeader className="relative z-1 mb-8 sm:mb-12 lg:mb-16 xl:mb-[minmax(4rem,auto)]">
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
              }).format(new Date())}
            </SectionHeader>
            <div className="w-full flex flex-grow justify-center items-center">
              <BalanceCard
                income={monthlydata.current.income || 0}
                expense={monthlydata.current.expense || 0}
              />
            </div>
          </Section>

          <Section className="flex flex-col items-center xl:p-0">
            <div className="w-full flex justify-between items-center mb-2 xl:mb-auto">
              <SectionHeader>Transactions</SectionHeader>
              <Link
                to="/transactions"
                className="whitespace-nowrap hover:text-primary active:text-primary transition-colors xs:text-lg"
              >
                See All
              </Link>
            </div>
            <div className="w-full xl:mb-auto">
              {transactions.current.length === 0 ? (
                <NoTransactions />
              ) : (
                <TransactionTable
                  transactions={transactions.current}
                  onClick={handleClick}
                />
              )}
            </div>
          </Section>
        </main>
      )}
    </>
  );
}

export default Dashboard;
