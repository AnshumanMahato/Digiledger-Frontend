import Header from "./components/Header";
import GoalsCard from "./components/GoalsCard";
import BalanceCard from "./components/BalanceCard";

function App() {
  return (
    <div className="min-h-screen w-screen text-white bg-accent flex flex-col items-center pt-10 px-5">
      <Header />
      <main className="flex flex-col justify-between items-center w-full">
        <BalanceCard />
        <GoalsCard />
      </main>
    </div>
  );
}

export default App;
