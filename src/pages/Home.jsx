import hero from "../assets/hero.svg";
import Button from "../components/utils/Button";
import useUserContext from "../hooks/useUserContext";
import screenshots from "../assets/screen@2x.png";
import Section from "../components/utils/Section";
import SectionHeader from "../components/utils/SectionHeader";

const LandingPage = () => {
  const { currentUser } = useUserContext();

  return (
    <>
      <Section className="min-h-[75vh] flex flex-col xl:flex-row items-center justify-evenly">
        <div className="w-full xl:w-2/3 border-b-4">
          <img src={hero} alt="woman-budgeting-hero" />
        </div>
        <div className="text-white text-center flex flex-col items-center justify-between my-auto px-5">
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
      </Section>

      <Section className="grid gap-6 grid-cols-1 grid-rows-[repeat(3,min-content)] lg:grid-rows-[repeat(2,min-content)] lg:grid-cols-2 justify-evenly bg-accent-dark/50 py-[7%]">
        <SectionHeader className="text-center col-span-full">
          About Digiledger
        </SectionHeader>
        <div className="flex items-center justify-center mt-8 ">
          <img
            src={screenshots}
            alt="team"
            className="w-4/5 lg:w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-4 lg:mt-0 lg:flex lg:justify-center lg:items-center xl:px-12">
          <p className="text-center lg:text-justify lg:text-lg">
            Digiledger is a budget tracking app that helps you manage your money
            better. We believe that budgeting should be easy and fun, not
            stressful and boring. That's why we created Digiledger, a smart and
            simple app that helps you track your income and expenses, visualize
            your spending habits, and save more money.
          </p>
        </div>
      </Section>

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
    </>
  );
};

export default LandingPage;
