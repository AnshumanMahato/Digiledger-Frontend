import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/utils/SectionHeader";
import Section from "../components/utils/Section";
import TransactionTable from "../components/TransactionTable";
import { Link, useLoaderData } from "react-router-dom";
import useAuthorization from "../hooks/useAuthorization";
import NoTransactions from "../components/NoTransactions";

function Dashboard() {
  useAuthorization();
  const { transactions, monthlyStats } = useLoaderData();

  return (
    <main className="flex flex-col justify-evenly items-center w-full flex-grow">
      <Section className="flex flex-col items-center mb-8">
        <SectionHeader className="relative z-1 mb-8">
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
          }).format(new Date())}
        </SectionHeader>
        <BalanceCard
          income={monthlyStats.income || 0}
          expense={monthlyStats.expense || 0}
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

        {transactions.length === 0 ? (
          <NoTransactions />
        ) : (
          <TransactionTable transactions={transactions} />
        )}
      </Section>
    </main>
  );
}

export default Dashboard;
