import Section from "../components/Section";
import TransactionsPanel from "../components/TransactionsPanel";
import SectionHeader from "../components/SectionHeader";

function Transactions() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <Section className="flex flex-col justify-evenly items-center">
        <SectionHeader className="mb-5">Transactions</SectionHeader>
        <TransactionsPanel />
      </Section>
    </main>
  );
}

export default Transactions;
