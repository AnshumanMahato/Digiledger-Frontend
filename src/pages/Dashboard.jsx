import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/utils/SectionHeader";
import Section from "../components/utils/Section";
import TransactionTable from "../components/TransactionTable";
import { Link } from "react-router-dom";

function Dashboard() {
  const transactions = [
    {
      date: "1669668738",
      party: "Alta Blaszczynski",
      amount: 166498.95,
      type: "expense",
      description: "Maecenas tincidunt lacus at velit.",
    },
    {
      date: "1655167165",
      party: "Rickard Shalliker",
      amount: 24645.35,
      type: "income",
      description: "Mauris sit amet eros.",
    },
    {
      date: "1683793316",
      party: "Pascale Lorking",
      amount: 70445.19,
      type: "expense",
      description:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
  ];

  return (
    <main className="flex flex-col justify-between items-center w-full">
      <Section className="flex flex-col items-center mb-8">
        <SectionHeader className="relative z-10 mb-8">May 2023</SectionHeader>
        <BalanceCard />
      </Section>
      <Section className="flex flex-col items-center">
        <div className="container flex justify-between items-center mb-2">
          <SectionHeader>Transactions</SectionHeader>
          <Link to="/transactions" className=" whitespace-nowrap">
            See All
          </Link>
        </div>
        <TransactionTable transactions={transactions} />
      </Section>
    </main>
  );
}

export default Dashboard;
