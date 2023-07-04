import useUserContext from "../hooks/useUserContext";
import formatCurrency from "../utils/formatCurrency";

function BalanceCard({ income, expense }) {
  const { currentUser } = useUserContext();
  const balance = income - expense;
  return (
    <div className="w-full max-w-[18rem] xs:max-w-[22rem] lg:max-w-[27rem] relative h-min card xl:mb-[minmax(4rem,auto)]">
      <div className="w-full py-5 px-4 xs:py-7 xs:px-5 lg:py-10 lg:px-7 relative rounded-3xl glass">
        <div className="flex flex-col mb-5 xs:mb-7 lg:mb-12">
          <span className="text-base xs:text-lg lg:text-xl mb-1">Balance</span>
          <span className="text-2xl xs:text-3xl lg:text-4xl font-bold">
            {formatCurrency(
              balance,
              currentUser.currency,
              currentUser.valueSystem
            )}
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col w-2/5 mr-10 lg:mr-14">
            <span className="text-base xs:text-lg lg:text-xl mb-1">
              Expense
            </span>
            <span className="text-base xs:text-xl lg:text-2xl font-medium">
              {formatCurrency(
                expense,
                currentUser.currency,
                currentUser.valueSystem
              )}
            </span>
          </div>
          <div className="flex flex-col w-2/5">
            <span className="text-base xs:text-lg lg:text-xl mb-1">Income</span>
            <span className="text-base xs:text-xl lg:text-2xl font-medium">
              {formatCurrency(
                income,
                currentUser.currency,
                currentUser.valueSystem
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
