import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import TransactionTable from "./components/TransactionTable";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col items-center pt-10 px-[10%]">
      <Header />
      <main className="flex flex-col justify-between items-center w-full">
        <Section className="flex flex-col items-center">
          <SectionHeader>May 2023</SectionHeader>
          <BalanceCard />
        </Section>
        <Section className="flex flex-col items-center">
          <SectionHeader className="text-2xl">
            Recent Transactions
          </SectionHeader>
          <TransactionTable />
        </Section>
        <Section className="flex justify-evenly items-center">
          <Button>Transactions</Button>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
