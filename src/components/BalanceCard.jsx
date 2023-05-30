function BalanceCard() {
  return (
    <>
      <h2 className=" text-3xl relative z-10 font-bold mb-8 w-full">
        Current Month
      </h2>
      <div className="container relative h-min card">
        <div className="w-full p-6 bg-white/5 relative rounded-3xl backdrop-blur-[10px] bal-card">
          <div className="flex flex-col mb-5">
            <span className="text-xl mb-1">Balance</span>
            <span className=" text-4xl font-bold">$2000</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-2/5">
              <span className="text-xl mb-1">Expense</span>
              <span className="text-2xl font-medium">$20,00,000</span>
            </div>
            <div className="flex flex-col w-2/5">
              <span className="text-xl mb-1">Income</span>
              <span className="text-2xl font-medium">$20,00,000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BalanceCard;
