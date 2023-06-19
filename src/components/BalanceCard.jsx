function BalanceCard({ income, expense }) {
  const balance = income - expense;
  const balanceState = balance > 0 ? "+" : "-";
  return (
    <div className=" min-w-[20rem] w-full max-w-fit relative h-min card">
      <div className="w-full p-6 relative rounded-3xl glass">
        <div className="flex flex-col mb-5">
          <span className="text-md mb-1">Balance</span>
          <span className=" text-4xl font-bold">
            {balance !== 0 && balanceState} ₹{Math.abs(balance)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Expense</span>
            <span className="text-xl font-medium">-₹{expense}</span>
          </div>
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Income</span>
            <span className="text-xl font-medium">+₹{income}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
