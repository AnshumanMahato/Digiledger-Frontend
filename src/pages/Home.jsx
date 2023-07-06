import hero from "../assets/hero.svg";
import Button from "../components/utils/Button";
import useUserContext from "../hooks/useUserContext";

const LandingPage = () => {
  const { currentUser } = useUserContext();

  return (
    <>
      <div className="container mx-2">
        <div className="min-h-[70vh] flex flex-col xl:flex-row items-center justify-evenly py-14">
          <div className="w-full xl:w-2/3 border-b-4">
            <img src={hero} alt="woman-budgeting-hero" />
          </div>
          <div className="text-white text-center flex flex-col items-center justify-between my-10 px-5">
            <h1 className="text-4xl sm:text-6xl font-bold">Digiledger</h1>
            <p className="text-xl sm:text-2xl my-6 ">
              The smart and simple way to track your budget
            </p>
            {currentUser ? (
              <Button success rounded to="/dashboard">
                Go To Dashboard
              </Button>
            ) : (
              <Button success rounded to="/signup">
                Get started for free
              </Button>
            )}
          </div>
        </div>

        <div class="py-16 bg-gray-100">
          <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center">About Digiledger</h2>
            <p class="text-2xl text-center mt-4">
              Digiledger is a budget tracking app that helps you manage your
              money better.
            </p>
            <div class="flex items-center justify-center mt-8">
              <img
                src="https://images.unsplash.com/photo-1556745757-b9a8d0f5f9c6"
                alt="team"
                class="w-1/2 rounded-lg shadow-lg"
              />
              <div class="w-1/2 ml-8">
                <p class="text-xl">
                  We are a team of passionate developers and designers who love
                  creating useful and beautiful products. We believe that
                  budgeting should be easy and fun, not stressful and boring.
                  That's why we created Digiledger, a smart and simple app that
                  helps you track your income and expenses, visualize your
                  spending habits, and save more money.
                </p>
                <p class="text-xl mt-4">
                  Our mission is to help you achieve your financial goals and
                  live a happier life. Whether you want to pay off debt, save
                  for a vacation, or just have more control over your money,
                  Digiledger can help you get there.
                </p>
                <p class="text-xl mt-4">
                  We hope you enjoy using Digiledger as much as we enjoyed
                  making it. If you have any feedback or questions, please feel
                  free to contact us. We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-16 grid grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calculator-icon.png"
              alt="calculator"
              className="w-24 h-24 mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Easy to use</h3>
            <p className="text-xl mt-4">
              Just enter your income and expenses and let Digiledger do the rest
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/pie-chart-icon.png"
              alt="pie chart"
              className="w-24 h-24 mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Visualize your spending</h3>
            <p className="text-xl mt-4">
              See where your money goes with colorful charts and graphs
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/money-bag-icon.png"
              alt="money bag"
              className="w-24 h-24 mx-auto"
            />
            <h3 className="text-2xl font-bold mt-4">Save more money</h3>
            <p className="text-xl mt-4">
              Set goals and track your progress with Digiledger's smart tips
            </p>
          </div>
        </div>
        <div className="bg-blue-500 py-8">
          <p className="text-white text-center">
            &copy; Digiledger. All rights reserved.
          </p>
        </div>*/}
      </div>
    </>
  );
};

export default LandingPage;
