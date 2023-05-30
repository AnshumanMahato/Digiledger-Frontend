import Header from "./components/Header";
import GoalsCard from "./components/GoalsCard";
import BalanceCard from "./components/BalanceCard";
import ListComponent from "./components/ListComponent";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";

function App() {
  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col items-center pt-10 px-[10%]">
      <Header />
      <main className="flex flex-col justify-between items-center w-full">
        <Section className="flex flex-col items-center">
          <SectionHeader>May 2023</SectionHeader>
          <BalanceCard />
        </Section>
        <Section>
          <SectionHeader className="text-2xl">
            Recent Transactions
          </SectionHeader>
          <ListComponent />
        </Section>
      </main>
    </div>
  );
}

export default App;
