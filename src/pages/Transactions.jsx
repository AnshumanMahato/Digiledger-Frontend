import Section from "../components/Section";
import LinkButton from "../components/LinkButton";
import ListComponent from "../components/TransactionsPanel";

function Transactions() {
  return (
    <main className="flex flex-col justify-between items-center w-full">
      <Section className="flex flex-col justify-evenly items-center">
        <ListComponent />
        <LinkButton to="/dashboard">Dashboard</LinkButton>
      </Section>
    </main>
  );
}

export default Transactions;
