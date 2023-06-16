import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/utils/SectionHeader";
import Section from "../components/utils/Section";
import TransactionTable from "../components/TransactionTable";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import NoTransactions from "../components/NoTransactions";

function Dashboard() {
  const navigate = useNavigate();
  const { transactions, overall } = useLoaderData();
  const handleClick = () => {
    navigate("/transactions");
  };

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
          income={overall.income || 0}
          expense={overall.expense || 0}
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
          <TransactionTable transactions={transactions} onClick={handleClick} />
        )}
      </Section>
    </main>
  );
}

export default Dashboard;
