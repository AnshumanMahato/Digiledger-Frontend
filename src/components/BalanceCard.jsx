import useUserContext from "../hooks/useUserContext";
import formatCurrency from "../utils/formatCurrency";

function BalanceCard({ income, expense }) {
  const { currentUser } = useUserContext();
  const balance = income - expense;
  return (
    <div className=" min-w-[20rem] w-full max-w-fit relative h-min card">
      <div className="w-full p-6 relative rounded-3xl glass">
        <div className="flex flex-col mb-5">
          <span className="text-md mb-1">Balance</span>
          <span className=" text-3xl font-bold">
            {formatCurrency(
              balance,
              currentUser.currency,
              currentUser.valueSystem
            )}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Expense</span>
            <span className="text-lg font-medium">
              {formatCurrency(
                expense,
                currentUser.currency,
                currentUser.valueSystem
              )}
            </span>
          </div>
          <div className="flex flex-col w-2/5">
            <span className="text-md mb-1">Income</span>
            <span className="text-lg font-medium">
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
