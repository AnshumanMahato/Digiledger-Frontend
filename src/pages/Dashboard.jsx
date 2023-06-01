import BalanceCard from "../components/BalanceCard";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import TransactionTable from "../components/TransactionTable";
import LinkButton from "../components/LinkButton";

function Dashboard() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <Section className="flex flex-col items-center">
        <SectionHeader>May 2023</SectionHeader>
        <BalanceCard />
      </Section>
      <Section className="flex flex-col items-center">
        <SectionHeader className="text-2xl">Recent Transactions</SectionHeader>
        <TransactionTable />
      </Section>
      <Section className="flex justify-evenly items-center">
        <LinkButton to="transactions">Transactions</LinkButton>
      </Section>
    </main>
  );
}

export default Dashboard;
