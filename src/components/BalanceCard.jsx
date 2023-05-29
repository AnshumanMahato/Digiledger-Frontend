function BalanceCard() {
  return (
    <>
      <h2 className=" text-3xl relative z-10 font-bold mb-8 w-full">
        Current Month
      </h2>
      <div
        className="container relative h-min 
      before:content-[''] before:absolute before:bg-gradient-to-r before:from-primary before:to-secondary 
      before:top-0 before:left-0 before:h-[90%] before:w-[85%] before:rounded-2xl
      before:transform before:origin-top-left before:-rotate-[8deg]"
      >
        <div className="w-full p-8 bg-white/5 relative rounded-2xl backdrop-blur-md shadow-md">
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
