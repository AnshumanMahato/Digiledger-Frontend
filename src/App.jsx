import Header from "./components/Header";
import GoalsCard from "./components/GoalsCard";
import BalanceCard from "./components/BalanceCard";

function App() {
  return (
    <div className="min-h-screen w-screen bg-slate-950 flex flex-col items-center p-10">
      <Header />
      <main className="flex flex-wrap justify-between text-red-400">
        <BalanceCard />
        <GoalsCard />
      </main>
    </div>
  );
}

export default App;
