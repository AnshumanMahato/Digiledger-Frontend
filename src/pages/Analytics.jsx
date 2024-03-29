import { useEffect, useReducer, useRef, useState } from "react";
import Section from "../components/layouts/Section";
import SectionHeader from "../components/utils/SectionHeader";
import Button from "../components/utils/Button";
import Modal from "../components/layouts/Modal";
import DateRangeForm from "../components/forms/DateRangeForm";
import { getStats } from "../services/transactionServices";
import AnalyticsPreview from "../components/compoundCoponents/AnalyticsPreview";
import useUtilityContext from "../hooks/useUtilityContext";
import Loading from "../components/utils/Loading";

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
        view: "prev-month",
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
        view: "3-month",
        startDate: start.getTime(),
        endDate: today.getTime(),
      };
    }
    case SET_CUSTOM: {
      const { start, end } = action.payload;
      return {
        ...state,
        view: "custom",
        startDate: start.getTime(),
        endDate: end.getTime(),
      };
    }

    default:
      return { ...state };
  }
};

function Analytics() {
  const [showModal, setShowModal] = useState(false);
  const { isFetching, setErrorStatus, startFetching, stopFetching } =
    useUtilityContext();

  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  const [state, dispatch] = useReducer(reducer, {
    view: "current-month",
    startDate: start.getTime(),
    endDate: today.getTime(),
  });

  const categoryData = useRef({ income: [], expense: [] });
  const partyData = useRef({ income: [], expense: [] });
  const overall = useRef({ income: 0, expense: 0 });

  useEffect(() => {
    (async () => {
      const { data, err } = await getStats(state.startDate, state.endDate);
      if (err) {
        setErrorStatus(err);
      } else {
        categoryData.current = data.categoryBased;
        partyData.current = data.partyBased;
        overall.current = data.overall;
      }
      stopFetching();
    })();

    return () => startFetching();
  }, [state, startFetching, stopFetching, setErrorStatus]);

  return (
    <main className="flex flex-col items-center w-full flex-grow mb-5">
      <Section className="flex flex-wrap justify-evenly items-center gap-2">
        <Button
          small
          rounded
          active={state.view === "current-month"}
          onClick={() => {
            startFetching();
            dispatch({ type: SET_CURRENT_MONTH });
          }}
        >
          Current Month
        </Button>
        <Button
          small
          rounded
          active={state.view === "prev-month"}
          onClick={() => {
            startFetching();
            dispatch({ type: SET_PREV_MONTH });
          }}
        >
          Previous Month
        </Button>
        <Button
          small
          rounded
          active={state.view === "3-month"}
          onClick={() => {
            startFetching();
            dispatch({ type: SET_PREV_3_MONTH });
          }}
        >
          Past 3 Month
        </Button>
        <Button
          small
          rounded
          active={state.view === "custom"}
          onClick={() => setShowModal(true)}
        >
          Custom Date
        </Button>
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            className="flex flex-col justify-between"
          >
            <DateRangeForm
              onClose={() => setShowModal(false)}
              onSubmit={(start, end) => {
                startFetching();
                dispatch({
                  type: SET_CUSTOM,
                  payload: {
                    start,
                    end,
                  },
                });
              }}
            />
            ;
          </Modal>
        )}
      </Section>
      <Section>
        <p className="text-slate-400 text-center text-lg md:text-xl xl:text-2xl">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
          }).format(state.startDate)}{" "}
          -{" "}
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
          }).format(state.endDate)}
        </p>
      </Section>
      {isFetching && <Loading />}
      {!isFetching && (
        <>
          <Section>
            <SectionHeader className="mb-2">Expenses</SectionHeader>
            {overall.current.expense ? (
              <>
                <AnalyticsPreview
                  title="By Category"
                  type="expense"
                  data={categoryData.current.expense}
                />
                <AnalyticsPreview
                  title="By Party"
                  type="expense"
                  data={partyData.current.expense}
                />
              </>
            ) : (
              <p>No expense data for the given period</p>
            )}
          </Section>
          <Section>
            <SectionHeader className="mb-2">Income</SectionHeader>
            {overall.current.income ? (
              <>
                <AnalyticsPreview
                  title="By Category"
                  type="income"
                  data={categoryData.current.income}
                />
                <AnalyticsPreview
                  title="By Party"
                  type="income"
                  data={partyData.current.income}
                />
              </>
            ) : (
              <p>No income data for the given period</p>
            )}
          </Section>
        </>
      )}
    </main>
  );
}

export default Analytics;
