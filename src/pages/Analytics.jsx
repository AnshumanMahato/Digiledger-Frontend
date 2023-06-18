import { useEffect, useReducer } from "react";
import Section from "../components/utils/Section";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";

const SET_CURRENT_MONTH = 1;
const SET_PREV_MONTH = 2;
const SET_PREV_3_MONTH = 3;
const SET_CUSTOM = 4;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH: {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      return {
        ...state,
        view: "current-month",
        startDate: start.getTime(),
        endDate: today.getTime(),
      };
    }
    case SET_PREV_MONTH: {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth(), 0);
      return {
        ...state,
        view: "current-month",
        startDate: start.getTime(),
        endDate: end.getTime(),
      };
    }
    case SET_PREV_3_MONTH: {
      const today = new Date();
      const start = new Date(
        today.getFullYear(),
        today.getMonth() - 3,
        today.getDate()
      );
      return {
        ...state,
        view: "current-month",
        startDate: start.getTime(),
        endDate: today.getTime(),
      };
    }
    case SET_CUSTOM: {
      const { start, end } = action.payload;
      return {
        ...state,
        view: "current-month",
        startDate: start.getTime(),
        endDate: end.getTime(),
      };
    }

    default:
      return { ...state };
  }
};

function Analytics() {
  const [state, dispatch] = useReducer(reducer, {
    startDate: Date.now(),
    endDate: Date.now(),
    view: "",
  });

  useEffect(() => {
    dispatch({ type: SET_CURRENT_MONTH });
  }, [dispatch]);

  return (
    <main className="flex flex-col items-center w-full flex-grow">
      <Section className="flex flex-wrap justify-evenly items-center gap-2">
        <Button small rounded active={state.view === "current-month"}>
          Current Month
        </Button>
        <Button small rounded active={state.view === "prev-month"}>
          Previous Month
        </Button>
        <Button small rounded active={state.view === "3-month"}>
          Past 3 Month
        </Button>
        <Button small rounded active={state.view === "custom"}>
          Custom Date
        </Button>
      </Section>
      <Section>
        <SectionHeader>Expenses</SectionHeader>
        <article>
          <h3>By Category</h3>
        </article>
        <article>
          <h3>By Party</h3>
        </article>
      </Section>
      <Section>
        <SectionHeader>Income</SectionHeader>
        <article>
          <h3>By Category</h3>
        </article>
        <article>
          <h3>By Party</h3>
        </article>
      </Section>
    </main>
  );
}

export default Analytics;
