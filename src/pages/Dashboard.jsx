import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import TransactionTable from "../components/TransactionTable";
import LinkButton from "../components/LinkButton";

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
      <Section className="flex flex-col items-center">
        <SectionHeader>May 2023</SectionHeader>
        <BalanceCard />
      </Section>
      <Section className="flex flex-col items-center">
        <SectionHeader className="text-2xl">Recent Transactions</SectionHeader>
        <TransactionTable transactions={transactions} />
      </Section>
      <Section className="flex justify-evenly items-center">
        <LinkButton to="/transactions">Transactions</LinkButton>
      </Section>
    </main>
  );
}

export default Dashboard;
