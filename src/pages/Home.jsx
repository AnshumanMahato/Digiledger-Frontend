import hero from "../assets/hero.svg";
import Button from "../components/utils/Button";
import useUserContext from "../hooks/useUserContext";
import screenshots from "../assets/screen@2x.png";
import Section from "../components/utils/Section";
import SectionHeader from "../components/utils/SectionHeader";
import { AiOutlineTransaction, AiTwotonePieChart } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import FeatureCard from "../components/FeatureCard";

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
          <p className="text-center lg:text-justify lg:text-xl">
            Digiledger is a budget tracking app that helps you manage your money
            better. We believe that budgeting should be easy and fun, not
            stressful and boring. That's why we created Digiledger, a smart and
            simple app that helps you track your income and expenses, visualize
            your spending habits, and save more money.
          </p>
        </div>
      </Section>

      <Section className="py-[7%] grid grid-cols-1 grid-rows-[min-content_repeat(3,1fr)] sm:grid-cols-3 sm:grid-rows-[min-content_1fr] gap-8">
        <SectionHeader className="sm:col-span-full text-center">
          Features
        </SectionHeader>
        <FeatureCard icon={<AiOutlineTransaction />} title="Easy to Use">
          Just enter your income and expenses and let Digiledger do the rest
        </FeatureCard>
        <FeatureCard
          icon={<AiTwotonePieChart />}
          title="Visualize your spending"
        >
          See where your money goes with colorful charts and graphs
        </FeatureCard>
        <FeatureCard icon={<GiReceiveMoney />} title="Save more money">
          Set goals and track your progress with Digiledger's Goals
          Tracker.(works in progress)
        </FeatureCard>
      </Section>
    </>
  );
};

export default LandingPage;
