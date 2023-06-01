function BalanceCard() {
  return (
    <div className=" min-w-[20rem] w-full max-w-fit relative h-min card">
      <div className="w-full p-6 relative rounded-3xl glass">
        <div className="flex flex-col mb-5">
          <span className="text-md mb-1">Balance</span>
          <span className=" text-4xl font-bold">$2000</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Expense</span>
            <span className="text-xl font-medium">$2</span>
          </div>
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Income</span>
            <span className="text-xl font-medium">$20,00,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
